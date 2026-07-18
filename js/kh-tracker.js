/* =====================================================================
   Generic KH game completion tracker engine.

   Drives every game except Birth by Sleep (which has its own engine in
   js/kh-bbs-tracker.js). One page = one game data module that defines the
   global TRACKER_GAME; GenericTrackerPage (a KH.Page) reads that config
   and renders the tabs, checklists, dashboard and optional "Worlds"
   summary, persisting ticks to localStorage.

   Depends on: js/kh-common.js (KH.*), js/kh-store.js, js/kh-counting.js,
   js/kh-page.js, js/kh-widgets.js, js/i18n.js (i18n) and a game data
   module (see js/kh-com-tracker-data.js for the shape):
     TRACKER_GAME = { id, storeKey, charKey, chars, trophyAuto, tabs: [...] }
   Tab:     { id, sections, char? } — char-tagged tabs only appear for
            that character (switching characters falls back to tab 1)
   Section: { id, cols:[{k, name?, rarity?}], items:[...] } — shared list
            { ..., char: "sora" }            — belongs to one character
            { ..., variants: {sora: [...], riku: [...]} } — per character
   Items in a shared section may carry c: "sora"/"riku" — they share the
   section's progress store but only show for that character.

   Collapsing (two independent, easy-to-flip knobs on a Section):
     collapsible: false   — drop the whole-section fold (the big header).
                            Use it where folding the section just folds the
                            whole tab; its inner groups still collapse. Default
                            true.
     groupCollapse: true  — force each item.g group (world/category) to fold;
                  | false — never fold groups. Omit it for the default, which
                            auto-enables folding when a section has 2+ groups.

   UI text comes from the page's lang JSON: tabbtn-<tab>, sec-<section>,
   th-<section>-<col>, plus the shared gt-* keys. Item display text lives
   under the lang "items" map (see langRow/cellText below).
   Progress is keyed by item index per section, in localStorage.

   Where to look (methods on GenericTrackerPage):
     persistent state ....... PROGRESS / VIEW / charPref (js/kh-store.js)
     counting ............... counter (KH.GameCounter) + delegate methods
     checklist table ........ checklist / toggleGroup / journalGrid
     page skeleton .......... buildPage / selectTab
     Worlds summary ......... renderWorlds (opt-in via game.worldSummary)
     toasts ................. currentMilestones / toaster
   ===================================================================== */
(function () {
const { el, esc, fmtText, chip, bar } = KH;

class GenericTrackerPage extends KH.Page {
  constructor() {
    super();
    this.game = TRACKER_GAME;
    this.CHARS = this.game.chars || [];
    this.CHAR_LABEL = {};
    this.CHARS.forEach(character => { this.CHAR_LABEL[character.id] = character.label; });

    /* Persistent state (classes in js/kh-store.js). PROGRESS owns
       loading/saving/semantics; STORE is a direct handle on its data that
       the render code reads/mutates (re-pointed after reset/reload). */
    this.PROGRESS = new KH.TrackerStore(this.game.storeKey);
    this.STORE = this.PROGRESS.data;
    this.VIEW = new KH.ViewStore(KH.KEYS.view(this.game.storeKey));
    this.charPref = this.CHARS.length ? new KH.CharPref(this.game.charKey, this.CHARS.map(c => c.id), this.CHARS[0].id) : null;
    this.activeChar = this.charPref ? this.charPref.id : null;

    /* Counting (single source: KH.GameCounter, js/kh-counting.js). The
       counter reads the live STORE through a closure (so reset/reload
       re-point automatically) and resolves trophy `match` text through
       the lang file; the landing page binds the same class to a snapshot
       instead (js/kh-summary.js). */
    this.counter = new KH.GameCounter(this.game, () => this.STORE,
      { textOf: (storeId, index, key, item) => this.cellText(storeId, index, key, item) });

    this.popover = new KH.Popover();
    this.toaster = new KH.MilestoneToaster(() => this.currentMilestones());
    this.PANEL = {};
    this.activeTab = this.game.tabs[0].id;
  }

  main() { this.buildPage(); this.render(); }
  onLanguageChange() { this.buildPage(); this.render(); }
  onStorage(event) {
    if (event.key === this.game.storeKey) { this.PROGRESS.reload(); this.STORE = this.PROGRESS.data; this.render(); }
    if (this.game.charKey && event.key === this.game.charKey && this.CHARS.some(c => c.id === event.newValue)) {
      this.activeChar = event.newValue; this.buildPage(); this.render();
    }
  }

  /* ---------- persistence shorthands ---------- */
  sectionStore(storeId) { return this.PROGRESS.section(storeId); }
  toggleCheck(store, key) { this.PROGRESS.toggle(store, key); this.render(); }
  /* Counter sections store a number per item (0..max); 0 is removed so the
     store stays sparse (see KH.TrackerStore.setCount). */
  setItemCount(store, index, value, max) { this.PROGRESS.setCount(store, index, value, max); this.render(); }
  tabJournalOn(tabId) { return this.VIEW.journalOn(tabId); }
  setTabJournal(tabId, on) { this.VIEW.setJournal(tabId, on); }
  setActiveChar(charId) { this.activeChar = charId; if (this.charPref) this.charPref.set(charId); }

  /* Cross-section cascade: a checked item may auto-grant other collectibles —
     e.g. a Link Portal grants the rare Nightmare it contains and the recipe /
     dream pieces it drops. The item lists targets in
     `gives: [{sec, name, check?}]`; they are SET (never unset) when the source
     item is turned on, so they remain independently editable afterwards. */
  applyGives(item) {
    (item.gives || []).forEach(target => {
      const targetSec = this.findSec(target.sec);
      if (!targetSec) return;
      let storeId = target.sec, list;
      if (targetSec.variants) { storeId = target.sec + "-" + this.activeChar; list = targetSec.variants[this.activeChar] || []; }
      else list = targetSec.items || [];
      const ti = list.findIndex(x => x.name === target.name);
      if (ti < 0) return;
      const targetStore = this.sectionStore(storeId);
      if (target.check && targetSec.checks) {
        const ci = targetSec.checks.findIndex(c => c.k === target.check);
        if (ci >= 0) targetStore[this.checkKey(ti, target.check, ci)] = true;
      } else targetStore[ti] = true;
    });
  }
  toggleWithGives(store, key, item) {
    const turningOn = !store[key];
    if (store[key]) delete store[key]; else store[key] = true;
    if (turningOn) this.applyGives(item);
    this.PROGRESS.save();
    this.render();
  }

  /* "Story completed" (opt-in via worldSummary.story): each world in the
     Worlds summary gets a per-character checkbox that, when ticked, SETS
     every collectible whose source text carries a
     "Story progression (<world>…)" tag for the active character — same
     set-only semantics as `gives`, so the items stay editable afterwards.
     The tick itself persists under the synthetic "storydone" store section
     (key "<world>::<char>"), which no completion count reads. */
  storyItemsFor(world) {
    const targets = [];
    const clean = s => String(s || "").replace(/ /g, " ").replace(/\s+/g, " ").trim().toLowerCase();
    const worldLc = clean(world);
    const charLabels = this.CHARS.map(c => c.label);
    const activeLabel = this.CHAR_LABEL[this.activeChar] || null;
    this.game.tabs.forEach(tab => tab.sections.forEach(section => {
      // Only plain single-checkbox lists can be story-granted.
      if (section.trophies || section.checks || section.counter) return;
      const view = this.resolveSection(section);
      view.items.forEach((item, index) => {
        if (!this.itemVisible(item, this.activeChar)) return;
        const row = this.langRow(view.storeId, index);
        const text = Object.values(item).join(" ") + (row ? " " + Object.values(row).join(" ") : "");
        const m = /story progress\w*\s*\(([^)]*)\)/i.exec(text);
        if (!m) return;
        const inside = clean(m[1]);
        if (!inside.startsWith(worldLc)) return;
        // "(World, Sora)"-style tags belong to that character alone.
        const named = charLabels.filter(label => inside.includes(label.toLowerCase()));
        if (named.length && activeLabel && !named.includes(activeLabel)) return;
        targets.push({ storeId: view.storeId, index });
      });
    }));
    return targets;
  }
  toggleStoryComplete(world) {
    const store = this.sectionStore("storydone");
    const key = world + (this.activeChar ? "::" + this.activeChar : "");
    if (store[key]) delete store[key];
    else {
      store[key] = true;
      this.storyItemsFor(world).forEach(target => { this.sectionStore(target.storeId)[target.index] = true; });
    }
    this.PROGRESS.save();
    this.render();
  }
  storyDone(world) {
    const key = world + (this.activeChar ? "::" + this.activeChar : "");
    return !!this.sectionStore("storydone")[key];
  }

  /* ---------- counting delegates (KH.GameCounter) ---------- */
  findSec(sectionId) { return this.counter.findSec(sectionId); }
  findList(storeId) { return this.counter.findList(storeId); }
  checkKey(index, checkId, checkIndex) { return this.counter.checkKey(index, checkId, checkIndex); }
  checkApplies(item, check) { return this.counter.checkApplies(item, check); }
  itemMax(item) { return this.counter.itemMax(item); }
  counterValue(store, index, item) { return this.counter.counterValue(store, index, item); }
  itemVisible(item, charId) { return this.counter.itemVisible(item, charId); }
  autoSource(section, item) { return this.counter.autoSource(section, item); }
  entryCount(view) { return this.counter.entryCount(view); }
  overallCount() { return this.counter.overallCount(); }
  trophyProgress(ref) { return this.counter.trophyProgress(ref); }

  /* ---------- item display text from the lang file ----------
     All user-facing item text (names, "where to find it", "how to obtain
     it", …) lives in the page's lang JSON under an "items" map:
         "items": { "<storeId>": [ { "name": "…", "where": "…" }, … ] }
     keyed by section store id then item index (matching the data order).
     The data module keeps only the structural bits + the item name as a
     stable id (used for trophy/auto-unlock matching). cellText prefers the
     lang text and falls back to the data value, so a game whose text has
     not been moved out yet keeps working unchanged. */
  langRow(storeId, index) {
    const items = (typeof i18n !== "undefined" && i18n.messages && i18n.messages.items) || null;
    const rows = items && items[storeId];
    return (rows && rows[index]) || null;
  }
  cellText(storeId, index, key, item) {
    const row = this.langRow(storeId, index);
    return (row && Object.prototype.hasOwnProperty.call(row, key)) ? row[key] : item[key];
  }
  /* Per-group note shown under a group header: lang "gnote-<storeId>" (per
     character) or "gnote-<section>" maps a group name -> note text (rendered
     through fmtText, so it may carry a link). E.g. KH1 Trinity unlocks, or the
     COM Map Card drop-table link. */
  groupNote(storeId, sectionId, groupName) {
    const messages = (typeof i18n !== "undefined" && i18n.messages) || {};
    const byStore = messages['gnote-' + storeId];
    if (byStore && typeof byStore === "object" && byStore[groupName]) return byStore[groupName];
    const bySection = messages['gnote-' + sectionId];
    return (bySection && typeof bySection === "object" && bySection[groupName]) || "";
  }

  /* Game tabs, plus a synthetic "Worlds" summary tab when the game declares
     a game.worldSummary config (see renderWorlds). Inserted second so it sits
     next to the trophies/dashboard tab. Real sections still come from
     game.tabs only (allLists/overallCount/findSec), so the summary adds no
     new stores. */
  gameTabs() {
    if (!this.game.worldSummary) return this.game.tabs;
    const tabs = this.game.tabs.slice();
    tabs.splice(1, 0, { id: "worlds", sections: [], worldSummary: true });
    return tabs;
  }
  /* Tabs tagged with a char only exist for that character. */
  visibleTabs() { return this.gameTabs().filter(tab => !tab.char || tab.char === this.activeChar); }
  ensureActiveTab() {
    if (!this.visibleTabs().some(tab => tab.id === this.activeTab)) this.activeTab = this.visibleTabs()[0].id;
  }

  /* Resolve a section into the view for the active character: its store id,
     item list and (where relevant) character label. */
  resolveSection(section) {
    if (section.variants) {
      const charId = this.activeChar;
      return { storeId: section.id + "-" + charId, items: section.variants[charId] || [], charLabel: this.CHAR_LABEL[charId] };
    }
    if (section.char) return { storeId: section.id, items: section.items, charLabel: this.CHAR_LABEL[section.char] };
    return { storeId: section.id, items: section.items, charLabel: null };
  }
  /* Every trackable list (all variants), for the dashboard. Shared
     sections with c-tagged items get one row per character. */
  allLists() {
    const lists = [];
    this.game.tabs.forEach(tab => tab.sections.forEach(section => {
      if (section.variants) {
        this.CHARS.forEach(character => lists.push({
          label: this.format('gt-section-for', this.translate('sec-' + section.id), character.label),
          storeId: section.id + "-" + character.id, items: section.variants[character.id] || [], section
        }));
      } else if (this.CHARS.length && (section.items || []).some(item => item.c)) {
        this.CHARS.forEach(character => lists.push({
          label: this.format('gt-section-for', this.translate('sec-' + section.id), character.label),
          storeId: section.id, items: section.items, charId: character.id, section
        }));
      } else {
        lists.push({
          label: section.char ? this.format('gt-section-for', this.translate('sec-' + section.id), this.CHAR_LABEL[section.char]) : this.translate('sec-' + section.id),
          storeId: section.id, items: section.items, section
        });
      }
    }));
    return lists;
  }

  /* ---------- checklist table ---------- */
  toggleGroup(items, store, groupName) {
    const indexes = [];
    items.forEach((item, index) => { if (item.g === groupName && this.itemVisible(item, this.activeChar)) indexes.push(index); });
    // toggle-all acts on the primary check (idx 0)
    const allDone = indexes.every(index => store[index]);
    indexes.forEach(index => { if (allDone) delete store[index]; else store[index] = true; });
    this.PROGRESS.save();
    this.render();
  }
  /* In-game "journal" view: an ordered grid of treasure tiles (perRow wide),
     grouped by world, rendered by the shared KH.widgets.journalGrid.
     Owned tiles show a chest, unowned a "?"; hovering either shows the
     reward + where to find it (from the lang-aware section columns).
     Clicking toggles owned. The grid keeps the data order so a tile's
     position matches the in-game journal. */
  journalGrid(container, section, view, panelState) {
    const store = this.sectionStore(view.storeId);
    const cfg = section.journal || {};
    // Owned-icon mode (e.g. KH2 Puzzles): owned tiles show a single fixed image
    // (cfg.icon = { dir, file, fill }); unowned tiles fall back to the default
    // "missing" treasure tile. Without it, both states use the chest tiles.
    const ic = cfg.icon || null;
    const nameCol = section.cols.find(col => col.name) || section.cols[0];
    const secCols = section.cols.filter(col => !col.name);   // shown in the hover popover
    const rewardOf = (item, index) => this.cellText(view.storeId, index, nameCol.k, item) || item.name;
    KH.widgets.journalGrid(container, {
      items: view.items,
      perRow: cfg.perRow || 8,
      query: panelState.q || "",
      hideDone: !!panelState.hide,
      skip: item => !this.itemVisible(item, this.activeChar),
      groupOf: item => item.g || "",
      owned: (item, index) => !!store[index] || !!this.autoSource(section, item),
      readonly: (item, index) => {
        const auto = this.autoSource(section, item);
        return (auto && !store[index]) ? this.format('gt-auto-tip', auto) : null;
      },
      toggle: (item, index) => {
        if (item.gives) this.toggleWithGives(store, index, item);
        else this.toggleCheck(store, index);
      },
      ownedTile: ic ? (() => ({ src: "../images/" + ic.dir + "/" + ic.file + ".png", classes: ["jt-icon"], fill: ic.fill })) : null,
      ariaLabel: (item, index) => rewardOf(item, index),
      tip: (item, owned, index) => {
        let tip = `<b>${esc(rewardOf(item, index))}</b>`;
        secCols.forEach((col, ci) => {
          const txt = this.cellText(view.storeId, index, col.k, item) || "";
          if (!txt) return;
          tip += `<span class="${ci === 0 ? "kh-pop-area" : "kh-pop-where"}">${esc(txt)}</span>`;
        });
        return tip;
      },
      haystack: (item, index) => {
        let hay = rewardOf(item, index);
        secCols.forEach(col => {
          const txt = this.cellText(view.storeId, index, col.k, item) || "";
          if (txt) hay += " " + txt;
        });
        return hay;
      }
    }, this.popover);
  }

  checklist(container, section, view, panelState) {
    const store = this.sectionStore(view.storeId);
    const cols = section.cols;
    const checks = section.checks;
    const leadCount = checks ? checks.length : 1;
    const colHeaders = cols.map(col => `<th>${this.translate('th-' + section.id + '-' + col.k)}</th>`).join("");
    const checkHeaders = checks ? checks.map(check => `<th class="chkhead">${this.translate(check.th)}</th>`).join("") : "<th></th>";
    const table = el("table");
    table.innerHTML = `<thead><tr>${checkHeaders}${colHeaders}${section.trophies && this.game.trophyAuto ? `<th>${this.translate('gt-th-progress')}</th>` : ""}</tr></thead>`;
    const tbody = el("tbody");
    let shownCount = 0;
    const query = panelState.q.toLowerCase();
    let lastGroup = null;
    // Render each item.g group as its own collapsible block (caret + count) so a
    // long section folds a world/category at a time instead of all-or-nothing.
    // Automatic whenever a section has 2+ groups; force with groupCollapse:true
    // or disable with groupCollapse:false. Groups start expanded, so nothing is
    // hidden by default — this only adds the ability to fold each one.
    const distinctGroups = new Set();
    view.items.forEach(it => { if (it.g && this.itemVisible(it, this.activeChar)) distinctGroups.add(it.g); });
    const collapse = section.groupCollapse === false ? false
                   : (section.groupCollapse === true || distinctGroups.size >= 2);
    const filtering = !!query;
    const openState = panelState.open || (panelState.open = {});
    const grpKey = name => "grp:" + view.storeId + ":" + name;
    const grpIsOpen = key => filtering ? true : (key in openState ? openState[key] : true);
    const rowDone = (item, index) => section.counter ? this.counterValue(store, index, item) >= this.itemMax(item)
          : checks ? checks.every((check, ci) => !this.checkApplies(item, check) || store[this.checkKey(index, check.k, ci)])
          : (!!store[index] || !!this.autoSource(section, item));
    const groupStats = {};
    if (collapse) view.items.forEach((item, index) => {
      if (!this.itemVisible(item, this.activeChar)) return;
      const gname = item.g || item.name;
      const st = groupStats[gname] || (groupStats[gname] = { done: 0, total: 0 });
      st.total++; if (rowDone(item, index)) st.done++;
    });
    let curGrpKey = null, curGrpOpen = true;
    view.items.forEach((item, index) => {
      if (!this.itemVisible(item, this.activeChar)) return;
      const auto = (checks || section.counter) ? null : this.autoSource(section, item);
      const done = rowDone(item, index);
      if (panelState.hide && done) return;
      const langData = this.langRow(view.storeId, index);
      const haystack = (Object.values(item).join(" ") + (langData ? " " + Object.values(langData).join(" ") : "")).toLowerCase();
      if (query && !haystack.includes(query)) return;
      if (item.g && item.g !== lastGroup) {
        lastGroup = item.g;
        const groupName = item.g;
        const groupRow = el("tr");
        const groupCell = el("td", collapse ? "grp-title grp-collapsible" : "grp-title");
        groupCell.colSpan = cols.length + leadCount + 1;
        groupCell.style.borderBottom = "1px solid var(--line)";
        let caret = null;
        if (collapse) {
          curGrpKey = grpKey(groupName); curGrpOpen = grpIsOpen(curGrpKey);
          caret = el("span", "grp-caret", curGrpOpen ? "▾" : "▸");
          groupCell.appendChild(caret);
        }
        groupCell.appendChild(el("span", null, fmtText(groupName)));
        if (collapse) {
          const st = groupStats[groupName] || { done: 0, total: 0 };
          groupCell.appendChild(el("span", "grp-count", `${st.done} / ${st.total}`));
        }
        const toggleAllBtn = el("button", "grpbtn", this.translate('gt-toggle-all'));
        toggleAllBtn.onclick = (ev) => { ev.stopPropagation(); this.toggleGroup(view.items, store, groupName); };
        groupCell.appendChild(toggleAllBtn);
        if (collapse) {
          const key = curGrpKey;
          groupCell.addEventListener("click", () => {
            const open = !(key in openState ? openState[key] : true);
            openState[key] = open;
            if (caret) caret.textContent = open ? "▾" : "▸";
            Array.from(tbody.children).forEach(r => { if (r.dataset.grp === key) r.style.display = open ? "" : "none"; });
          });
        }
        groupRow.appendChild(groupCell);
        tbody.appendChild(groupRow);
        const note = this.groupNote(view.storeId, section.id, groupName);
        if (note) {
          const noteRow = el("tr"), noteCell = el("td", "gnote");
          noteCell.colSpan = cols.length + leadCount + 1;
          noteCell.style.borderBottom = "1px solid var(--line)";
          noteCell.innerHTML = fmtText(note);
          noteRow.appendChild(noteCell);
          if (collapse) { noteRow.dataset.grp = curGrpKey; if (!curGrpOpen) noteRow.style.display = "none"; }
          tbody.appendChild(noteRow);
        }
      }
      const row = el("tr", done ? "donerow" : null);
      if (section.counter) {
        const max = this.itemMax(item), current = this.counterValue(store, index, item);
        const cell = el("td", "chkcell");
        if (max <= 1) {
          // A single-copy ability is just a checkbox, like any other row.
          const checkbox = el("input", "chk");
          checkbox.type = "checkbox"; checkbox.checked = current >= 1;
          checkbox.addEventListener("change", () => this.setItemCount(store, index, current >= 1 ? 0 : 1, max));
          cell.appendChild(checkbox);
        } else {
          // Multi-copy abilities track partial progress (e.g. 2 / 5).
          const stepper = el("span", "stepper");
          const decBtn = el("button", "stepbtn", "−");
          decBtn.onclick = () => this.setItemCount(store, index, current - 1, max);
          const valEl = el("span", "stepval", `<b>${current}</b> <span class="mx">/ ${max}</span>`);
          const incBtn = el("button", "stepbtn", "+");
          incBtn.onclick = () => this.setItemCount(store, index, current + 1, max);
          stepper.appendChild(decBtn); stepper.appendChild(valEl); stepper.appendChild(incBtn);
          cell.appendChild(stepper);
        }
        row.appendChild(cell);
      } else if (checks) {
        checks.forEach((check, checkIndex) => {
          if (!this.checkApplies(item, check)) { row.appendChild(el("td", "chkcell na", "—")); return; }
          const key = this.checkKey(index, check.k, checkIndex);
          const cell = el("td", "chkcell");
          const checkbox = el("input", "chk");
          checkbox.type = "checkbox"; checkbox.checked = !!store[key];
          checkbox.addEventListener("change", () => this.toggleCheck(store, key));
          cell.appendChild(checkbox);
          row.appendChild(cell);
        });
      } else {
        const cell = el("td", "chkcell");
        const checkbox = el("input", "chk");
        checkbox.type = "checkbox"; checkbox.checked = done;
        if (auto && !store[index]) { checkbox.disabled = true; checkbox.title = this.format('gt-auto-tip', auto); }
        else if (item.gives) checkbox.addEventListener("change", () => this.toggleWithGives(store, index, item));
        else checkbox.addEventListener("change", () => this.toggleCheck(store, index));
        cell.appendChild(checkbox);
        row.appendChild(cell);
      }
      cols.forEach(col => {
        const value = this.cellText(view.storeId, index, col.k, item) || "";
        let html;
        if (col.rarity && value) html = `<span class="rarity ${esc(value.toLowerCase())}">${esc(value)}</span>`;
        else if (col.name) html = `<span class="itemname">${fmtText(value)}</span>${auto ? ` <span class="srcbadge" title="${this.format('gt-auto-tip', auto)}">${this.translate('gt-auto-badge')}</span>` : ""}`;
        else html = fmtText(value);   // enables {{icon}} / [[text|tip]] / [text](url) in any column
        row.appendChild(el("td", null, html));
      });
      if (section.trophies && this.game.trophyAuto) {
        const ref = this.game.trophyAuto[item.name];
        let html = "";
        if (ref) { const progress = this.trophyProgress(ref); if (progress) html = chip(progress[0], progress[1]); }
        row.appendChild(el("td", null, html));
      }
      if (collapse && item.g) { row.dataset.grp = curGrpKey; if (!curGrpOpen) row.style.display = "none"; }
      tbody.appendChild(row);
      shownCount++;
    });
    table.appendChild(tbody);
    if (shownCount) container.appendChild(table);
    else container.appendChild(el("div", "empty", this.translate('gt-nothing')));
  }

  /* ---------- page skeleton ---------- */
  /* Switch to a tab by id (used by the tab buttons and the dashboard links). */
  selectTab(tabId) {
    if (!this.gameTabs().some(tab => tab.id === tabId)) return;
    this.activeTab = tabId;
    document.querySelectorAll("#tabs .tab").forEach(btn => btn.classList.toggle("active", btn.dataset.tab === tabId));
    this.gameTabs().forEach(tab => { const panel = document.getElementById("tab-" + tab.id); if (panel) panel.style.display = tab.id === tabId ? "block" : "none"; });
    this.render();
  }
  tabOfSection(sectionId) {
    for (const tab of this.game.tabs) if (tab.sections.some(section => section.id === sectionId)) return tab.id;
    return null;
  }

  buildPage() {
    // character bar
    const charbar = document.getElementById("charbar");
    charbar.querySelectorAll(".charbtn").forEach(btn => btn.remove());
    const playingAs = document.getElementById("playing-as");
    if (this.CHARS.length) {
      playingAs.style.display = "";
      const anchor = document.getElementById("overallNote");
      this.CHARS.forEach(character => {
        const btn = el("button", "charbtn");
        btn.dataset.c = character.id;
        btn.innerHTML = `<span class="dot"></span>${esc(character.label)}`;
        btn.onclick = () => { this.setActiveChar(character.id); this.buildPage(); this.render(); };
        charbar.insertBefore(btn, anchor);
      });
    } else {
      playingAs.style.display = "none";
    }
    KH.widgets.syncCharButtons(this.activeChar);

    // tabs (char-tagged tabs only exist for that character)
    this.ensureActiveTab();
    const tabsBox = document.getElementById("tabs");
    tabsBox.innerHTML = "";
    this.visibleTabs().forEach(tab => {
      const btn = el("button", "tab" + (tab.id === this.activeTab ? " active" : ""), this.translate('tabbtn-' + tab.id));
      btn.dataset.tab = tab.id;
      btn.onclick = () => this.selectTab(tab.id);
      tabsBox.appendChild(btn);
    });

    // panels + toolbars
    const main = document.getElementById("panels");
    main.innerHTML = "";
    this.gameTabs().forEach(tab => {
      const panel = el("section", "card");
      panel.id = "tab-" + tab.id;
      if (tab.id !== this.activeTab) panel.style.display = "none";
      const panelState = (this.PANEL[tab.id] && this.PANEL[tab.id].state) || { q: "", hide: false };
      const hasTrophies = tab.sections.some(section => section.trophies);
      const dash = hasTrophies ? el("div", "dash") : null;
      if (dash) panel.appendChild(dash);
      const tools = KH.widgets.toolbar({
        state: panelState,
        labels: { filter: this.translate('gt-filter'), hideDone: this.translate('gt-hide-done') },
        onChange: () => this.render(),
        reset: hasTrophies ? {
          label: this.translate('gt-reset'),
          confirm: this.translate('gt-reset-confirm'),
          onReset: () => { this.PROGRESS.reset(); this.STORE = this.PROGRESS.data; this.render(); }
        } : null
      });
      // View toggle (Checklist | Journal) for tabs with a journal-capable section.
      if (tab.sections.some(section => section.journal)) {
        tools.toolbar.appendChild(KH.widgets.viewToggle({
          on: this.tabJournalOn(tab.id),
          labels: { checklist: this.translate('gt-view-checklist'), journal: this.translate('gt-view-journal') },
          onChange: on => { this.setTabJournal(tab.id, on); this.render(); }
        }));
      }
      panel.appendChild(tools.toolbar);
      const results = el("div", "results");
      panel.appendChild(results);
      main.appendChild(panel);
      this.PANEL[tab.id] = { state: panelState, results, count: tools.count, bar: tools.bar, dash };
    });
  }

  setCount(panel, done, total) {
    KH.widgets.setCount(panel, done, total, this.format('gt-count', done, total));
  }

  /* Completed milestones (key -> toast): each auto-trophy whose tracked
     requirements are met, each fully-finished list, and the site total.
     KH.MilestoneToaster diffs these between renders, seeding silently on
     the first render so nothing fires on load. */
  currentMilestones() {
    const milestones = new Map();
    if (this.game.trophyAuto) Object.keys(this.game.trophyAuto).forEach(name => {
      const progress = this.trophyProgress(this.game.trophyAuto[name]);
      if (progress && progress[1] > 0 && progress[0] >= progress[1]) milestones.set("trophy::" + name, { text: this.format('gt-toast-trophy', name), icon: "🏆" });
    });
    this.allLists().forEach(({ label, storeId, items, charId, section }) => {
      const [done, total] = this.entryCount({ section, storeId, items, charId });
      if (total > 0 && done >= total) milestones.set("list::" + storeId + "::" + (charId || ""), { text: this.format('gt-toast-section', label), icon: "✅" });
    });
    const [overallDone, overallTotal] = this.overallCount();
    if (overallTotal > 0 && overallDone >= overallTotal) milestones.set("overall", { text: this.translate('gt-toast-overall'), icon: "🎉" });
    return milestones;
  }

  /* ---------- Worlds summary (opt-in via game.worldSummary) ----------
     A reusable, data-driven "collectibles by world" view: for the active
     character it pulls items from the configured sections, buckets them by
     world, and shows them as live checkboxes bound to the SAME store as
     their home tab (so ticking one here ticks it there and vice-versa).
     Config (in the game data, sibling of `tabs`):
       worldSummary: {
         worlds: ["World A", ...],          // ordered
         sections: ["treasures", ...],      // or { id, key } — world key
         alias: { "Raw": "Canonical" }      // optional world-name fixups
       }
     World for an item defaults to its group (it.g); `key` reads another
     item/lang field instead. Reuses the BBS world CSS (.wgroup/.wsum/…). */
  aliasWorld(world) {
    // Normalise whitespace (some data uses non-breaking spaces) then apply any
    // configured world-name fixups.
    world = String(world || "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
    const alias = (this.game.worldSummary && this.game.worldSummary.alias) || {};
    return alias[world] || world;
  }
  worldOf(sectionCfg, view, item, index) {
    const key = sectionCfg.key || "g";
    let world = (key === "g") ? item.g : (item[key] != null ? item[key] : this.cellText(view.storeId, index, key, item));
    world = String(world || "");
    // Optional: world is the part before a delimiter (e.g. "World - area").
    if (sectionCfg.split && world.indexOf(sectionCfg.split) >= 0) world = world.slice(0, world.indexOf(sectionCfg.split));
    return this.aliasWorld(world);
  }
  renderWorlds(panel) {
    const cfg = this.game.worldSummary, container = panel.results;
    if (!panel.state.open) panel.state.open = {};
    const openState = panel.state.open;
    container.appendChild(el("div", "grp-title", fmtText(this.translate('gt-worlds-title'))));
    const query = panel.state.q.toLowerCase();
    // Only a search query force-opens sections (to reveal matches); "hide
    // completed" must keep the user's collapse state.
    const filtering = !!query;
    // A hex colour from the section's swatch map, validated (it builds inline style).
    const swatchOf = (sectionCfg, cell) => {
      if (!sectionCfg.swatch) return null;
      const value = cell(sectionCfg.swatch.field), color = sectionCfg.swatch.colors[value];
      if (!color || !/^#[0-9a-fA-F]{3,8}$/.test(color)) return null;
      return { c: color, t: (sectionCfg.swatch.titles && sectionCfg.swatch.titles[value]) || "" };
    };
    // Build each configured source into a world -> entries map. A source config
    // may: filter to one item group (sectionCfg.group), give the type-header its
    // own label (sectionCfg.title), bind to a specific check column
    // (sectionCfg.check) instead of the primary checkbox, and place an item in
    // several worlds at once (sectionCfg.worldsKey — an array field on the item,
    // e.g. a Dream Eater that is a Nightmare in two worlds bound to its
    // Nightmare checkbox).
    const sectionViews = cfg.sections.map(entry => {
      const sectionCfg = (typeof entry === "string") ? { id: entry } : entry;
      const section = this.findSec(sectionCfg.id), view = this.resolveSection(section);
      const nameCol = section.cols.find(col => col.name) || section.cols[0];
      const whereKeys = sectionCfg.where || section.cols.filter(col => col !== nameCol).map(col => col.k);
      const title = sectionCfg.title ? this.translate(sectionCfg.title) : this.translate('sec-' + section.id);
      const checkIndex = (sectionCfg.check && section.checks) ? section.checks.findIndex(c => c.k === sectionCfg.check) : -1;
      const store = this.sectionStore(view.storeId);
      const byWorld = new Map();
      view.items.forEach((item, index) => {
        if (!this.itemVisible(item, this.activeChar)) return;
        if (sectionCfg.group && item.g !== sectionCfg.group) return;
        let key = index, done, auto = null, gives = null;
        if (checkIndex >= 0) {
          const chk = section.checks[checkIndex];
          if (!this.checkApplies(item, chk)) return;
          key = this.checkKey(index, chk.k, checkIndex);
          done = !!store[key];
        } else {
          auto = this.autoSource(section, item);
          done = !!store[index] || !!auto;
          if (item.gives) gives = item;
        }
        const cell = k => this.cellText(view.storeId, index, k, item) || "";
        const name = sectionCfg.label ? sectionCfg.label.replace(/\{(\w+)\}/g, (m, k) => cell(k)).trim() : cell(nameCol.k);
        const worlds = sectionCfg.worldsKey
          ? (Array.isArray(item[sectionCfg.worldsKey]) ? item[sectionCfg.worldsKey].map(w => this.aliasWorld(w)) : [])
          : [this.worldOf(sectionCfg, view, item, index)];
        worlds.forEach(world => {
          if (!world) return;
          if (!byWorld.has(world)) byWorld.set(world, []);
          byWorld.get(world).push({
            done, name,
            where: whereKeys.map(cell).filter(Boolean).join(" · "),
            swatch: swatchOf(sectionCfg, cell),
            auto: auto ? { tip: this.format('gt-auto-tip', auto), label: this.translate('gt-auto-badge') } : null,
            onToggle: gives ? () => this.toggleWithGives(store, key, gives) : () => this.toggleCheck(store, key)
          });
        });
      });
      return { title, byWorld };
    });
    let totalDone = 0, totalAll = 0;
    cfg.worlds.forEach((world, worldIndex) => {
      const slug = "w" + worldIndex;
      const typeGroups = [];
      sectionViews.forEach(sv => { const entries = sv.byWorld.get(world); if (entries && entries.length) typeGroups.push({ title: sv.title, entries }); });
      let worldDone = 0, worldTotal = 0;
      typeGroups.forEach(group => group.entries.forEach(entry => { worldTotal++; if (entry.done) worldDone++; }));
      if (!worldTotal) return;
      totalDone += worldDone; totalAll += worldTotal;
      let shownGroups = typeGroups.map(group => ({
        title: group.title,
        entries: group.entries.filter(entry => (!query || (entry.name + " " + entry.where).toLowerCase().includes(query)) && (!panel.state.hide || !entry.done))
      })).filter(group => group.entries.length);
      if (!shownGroups.length) return;
      const complete = worldDone === worldTotal, worldKey = "w:" + slug;
      const worldDetails = el("details", "wgroup");
      worldDetails.open = filtering ? true : ((worldKey in openState) ? openState[worldKey] : false);   // worlds collapsed by default
      const worldSummary = el("summary", "wsum" + (complete ? " wdone" : ""),
        fmtText(world) + ` <span class="wcount">${worldDone} / ${worldTotal}</span>`
        + (complete ? ` <span class="wbadge">${this.translate('gt-world-complete')}</span>` : ""));
      // Record collapse state synchronously on click (the toggle event is async,
      // which lets a re-render's programmatic open clobber a just-made collapse).
      worldSummary.addEventListener("click", () => { if (!filtering) openState[worldKey] = !((worldKey in openState) ? openState[worldKey] : false); });
      worldDetails.appendChild(worldSummary);
      if (cfg.story) {
        const storyLabel = el("label", "wstory");
        const storyCheck = el("input", "chk");
        storyCheck.type = "checkbox";
        storyCheck.checked = this.storyDone(world);
        storyCheck.addEventListener("change", () => this.toggleStoryComplete(world));
        storyLabel.appendChild(storyCheck);
        storyLabel.appendChild(document.createTextNode(" " + this.translate('gt-story-complete')));
        worldDetails.appendChild(storyLabel);
      }
      shownGroups.forEach(group => {
        const groupDone = group.entries.filter(entry => entry.done).length, typeKey = "t:" + slug + ":" + group.title;
        const typeDetails = el("details", "tgroup");
        typeDetails.open = filtering ? true : ((typeKey in openState) ? openState[typeKey] : true);   // type groups open by default
        const typeSummary = el("summary", "tsum", esc(group.title) + ` <span class="wcount">${groupDone} / ${group.entries.length}</span>`);
        typeSummary.addEventListener("click", () => { if (!filtering) openState[typeKey] = !((typeKey in openState) ? openState[typeKey] : true); });
        typeDetails.appendChild(typeSummary);
        typeDetails.appendChild(KH.widgets.entryTable(group.entries));
        worldDetails.appendChild(typeDetails);
      });
      container.appendChild(worldDetails);
    });
    if (!totalAll) container.appendChild(el("div", "empty", this.translate('gt-nothing')));
    this.setCount(panel, totalDone, totalAll);
  }

  /* ---------- render ---------- */
  render() {
    const tab = this.gameTabs().find(tab => tab.id === this.activeTab);
    const panel = this.PANEL[this.activeTab];
    panel.results.innerHTML = "";
    if (tab.worldSummary) {
      this.renderWorlds(panel);
      this.renderOverallNote();
      this.toaster.check();
      return;
    }
    if (panel.dash) {
      panel.dash.innerHTML = "";
      panel.dash.appendChild(el("div", "grp-title", fmtText(this.translate('gt-dash-title'))));
      const table = el("table", "dash-table");
      table.innerHTML = `<thead><tr><th>${this.translate('gt-dash-section')}</th><th>${this.translate('gt-dash-progress')}</th></tr></thead>`;
      const tbody = el("tbody");
      this.allLists().forEach(({ label, storeId, items, charId, section }) => {
        const [done, total] = this.entryCount({ section, storeId, items, charId });
        const row = el("tr"), labelCell = el("td");
        const tabId = this.tabOfSection(section.id);
        if (tabId) {
          const link = el("a", "dashlink", esc(label));
          link.href = "#";
          link.onclick = event => { event.preventDefault(); this.selectTab(tabId); };
          labelCell.appendChild(link);
        } else { labelCell.textContent = label; }
        row.appendChild(labelCell);
        row.appendChild(el("td", null, bar(done, total)));
        tbody.appendChild(row);
      });
      table.appendChild(tbody);
      panel.dash.appendChild(table);
    }
    // Each section is a collapsible <details>; its open/closed state is
    // remembered per tab (panel.state.open). A search query force-opens every
    // section so matches are never hidden inside a collapsed one.
    if (!panel.state.open) panel.state.open = {};
    const openState = panel.state.open;
    const filtering = !!panel.state.q;
    let panelDone = 0, panelTotal = 0;
    tab.sections.forEach((section, sectionIndex) => {
      const view = this.resolveSection(section);
      const title = view.charLabel ? this.format('gt-section-for', this.translate('sec-' + section.id), view.charLabel) : this.translate('sec-' + section.id);
      const [secDone, secTotal] = this.entryCount({ section, storeId: view.storeId, items: view.items, charId: this.activeChar });
      panelDone += secDone; panelTotal += secTotal;

      // A section folds as a whole by default. Set `collapsible: false` to drop
      // that outer fold (e.g. a tab with one section, where folding it just folds
      // the whole tab) — its inner world/category groups still collapse on their
      // own. See groupCollapse for the inner level.
      const sectionKey = "sec:" + section.id;
      const headHtml = `<span class="secsum-title">${fmtText(title)}</span> ${chip(secDone, secTotal)}`;
      let box;
      if (section.collapsible === false) {
        box = el("div", "secblock");
        box.appendChild(el("div", sectionIndex === 0 ? "sechead sechead-main" : "sechead", headHtml));
      } else {
        box = el("details", "secgroup");
        box.open = filtering ? true : ((sectionKey in openState) ? openState[sectionKey] : true);   // expanded by default
        const summary = el("summary", sectionIndex === 0 ? "secsum secsum-main" : "secsum", headHtml);
        // Record collapse state synchronously on click (the toggle event is async,
        // which would let a re-render's programmatic open clobber a fresh collapse).
        summary.addEventListener("click", () => { if (!filtering) openState[sectionKey] = !((sectionKey in openState) ? openState[sectionKey] : true); });
        box.appendChild(summary);
      }
      // Optional explanatory note under a section title (lang key note-<id>);
      // newlines become separate lines.
      const note = this.translate('note-' + section.id);
      if (note && note !== 'note-' + section.id) {
        const noteEl = el("p", "hint");
        note.split("\n").forEach((line, lineIndex) => { if (lineIndex) noteEl.appendChild(el("br")); noteEl.appendChild(document.createTextNode(line)); });
        box.appendChild(noteEl);
      }
      if (section.journal && this.tabJournalOn(tab.id)) this.journalGrid(box, section, view, panel.state);
      else this.checklist(box, section, view, panel.state);
      panel.results.appendChild(box);
    });
    this.setCount(panel, panelDone, panelTotal);
    this.renderOverallNote();
    this.toaster.check();
  }
  renderOverallNote() {
    const [overallDone, overallTotal] = this.overallCount();
    document.getElementById("overallNote").textContent = this.format('gt-overall', overallDone, overallTotal, overallTotal ? Math.round(100 * overallDone / overallTotal) : 0);
  }
}

KH.Page.boot(GenericTrackerPage);
})();
