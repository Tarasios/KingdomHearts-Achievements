/* =====================================================================
   KH Birth by Sleep — Achievement / completion tracker (bespoke engine;
   every other game uses the generic js/kh-tracker.js). Birth by Sleep's
   data model (shared lists + three per-character section sets + missions
   with per-character clears/ranks) doesn't fit the TRACKER_GAME schema,
   so BbsTrackerPage has its own renderers.

   Depends on: js/kh-common.js (KH.*), js/kh-store.js, js/kh-counting.js,
   js/kh-page.js, js/kh-widgets.js, js/i18n.js (i18n),
   js/kh-bbs-tracker-data.js (BBS_DATA).
   Game terms stay in English in every language; UI chrome uses i18n.

   Progress is saved in localStorage under bbs_progress_v1, keyed by item
   index within each section. The active character is shared with the
   melding calculator (bbs_meld_tracker_v1_char), and commands the user
   owns in the melding calculator are shown as unlocked here.

   Where to look (methods on BbsTrackerPage, helpers above the class):
     persistent state ......... PROGRESS / VIEW / charPref (js/kh-store.js)
     counting + cascades ...... counter (KH.BbsCounter) + delegate aliases
     checklist table .......... checklist / toggleGroup / journalGrid
     per-tab renderers ........ render<Tab> + RENDERERS map
     Worlds summary ........... worldEntries / renderWorlds
     toasts / totals cache .... computeMilestones / cacheBbsTotal
   ===================================================================== */
(function () {
const { el, esc, fmtText, chip, bar } = KH;

/* ---------- pure helpers and fixed data (no page state) ---------- */

/* A mission's location for one character. Some areas are stored as a single
   string covering all three (e.g. "Ballroom (T/A) Wardrobe Room (V)"); pick
   the segment whose initials include this character's. */
function missionArea(mission, char) {
  const initial = { terra: "T", ventus: "V", aqua: "A" }[char];
  const areas = mission.area || "";
  if (areas.indexOf("(") < 0) return areas;
  const segment = /([^()]+?)\s*\(([^)]*)\)/g; let match;
  while ((match = segment.exec(areas))) {
    if (match[2].split("/").map(s => s.trim()).indexOf(initial) >= 0) return match[1].trim();
  }
  return areas;
}
function stars(rank) { return `<span class="stars">${esc(rank)}</span>`; }

/* Command-collection group header icons (images/commands/cmd-*.png).
   When the Finish / Dimension Link / Ability icons are added, drop the
   PNGs into images/commands/ and extend this map (e.g.
   "Miscellaneous - Finish Commands": "finish"). */
const GROUP_ICON = {
  "Battle Commands - Attacks": "attack",
  "Battle Commands - Magic": "magic",
  "Action Commands - Movement": "movement",
  "Action Commands - Defense": "defense",
  "Action Commands - Reprisals": "reprisal",
  "Shotlock Commands": "shotlock"
};
function groupIconImg(groupName) {
  const icon = GROUP_ICON[groupName];
  return icon ? `<img class="cmdicon" src="../images/commands/cmd-${icon}.png" alt="">` : "";
}

/* Command-journal tile per category: icon file (images/commands/cmd-<icon>.png)
   + the CSS class carrying its owned gradient. `fill` icons are full-bleed
   tiles (their art already includes a background); the rest are centred. */
const CMD_TILE = {
  "Battle Commands - Attacks": { icon: "attack", cls: "attack" },
  "Battle Commands - Magic": { icon: "magic", cls: "magic" },
  "Battle Commands - Items": { icon: "item", cls: "item" },
  "Battle Commands - Friendship": { icon: "friend", cls: "friend" },
  "Action Commands - Movement": { icon: "movement", cls: "movement" },
  "Action Commands - Defense": { icon: "defense", cls: "defense" },
  "Action Commands - Reprisals": { icon: "reprisal", cls: "reprisal" },
  "Shotlock Commands": { icon: "shotlock", cls: "shotlock" },
  "Miscellaneous - Dimension Links": { icon: "dlink", cls: "dlink" },
  "Miscellaneous - Abilities": { icon: "abilities", cls: "abilities", fill: true }
};
/* Finish Commands share one group but split by how they're earned:
   "See Finish Commands" → a single star (cmd-finish1) on black; Frozen Fortune
   → cmd-frozen; a Level-2 style (activated "while a Level-1 command style is
   active") → cmd-finish3; every other command style → cmd-finish2. */
function finishTile(item) {
  const how = String(item.how || "");
  if (item.name === "Frozen Fortune") return { icon: "frozen", cls: "frozen" };
  if (/See Finish Commands/i.test(how)) return { icon: "finish1", cls: "finish-black" };
  if (/while a Level-1 command style is active/i.test(how)) return { icon: "finish3", cls: "finish-black", fill: true };
  return { icon: "finish2", cls: "finish-black", fill: true };
}
function commandTile(item) {
  if (item.g === "Miscellaneous - Finish Commands") return finishTile(item);
  return CMD_TILE[item.g] || { icon: null, cls: "" };
}

/* Worlds in visit order (name + lang-key slug). */
const WORLDS = [
  ["Land of Departure", "land-of-departure"], ["Dwarf Woodlands", "dwarf-woodlands"],
  ["Enchanted Dominion", "enchanted-dominion"], ["Castle of Dreams", "castle-of-dreams"],
  ["Mysterious Tower", "mysterious-tower"], ["Radiant Garden", "radiant-garden"],
  ["Disney Town", "disney-town"], ["Olympus Coliseum", "olympus-coliseum"],
  ["Deep Space", "deep-space"], ["Never Land", "never-land"],
  ["Keyblade Graveyard", "keyblade-graveyard"], ["Realm of Darkness", "realm-of-darkness"],
  ["Mirage Arena", "mirage-arena"]
];
function normWorld(world) {
  if (!world) return world;
  world = String(world).replace(/^The /, "");
  if (world.indexOf("Realm of Darkness") === 0) return "Realm of Darkness";
  return world;
}
function worldIndex(world) {
  world = normWorld(world);
  for (let index = 0; index < WORLDS.length; index++) if (WORLDS[index][0] === world) return index;
  return 99;
}
/* Parse an enriched ingredient location string
   ("Area (World) — Note  |  Area2 (World2) — Note2") into parts. */
function parseLocs(text) {
  if (!text) return [];
  return String(text).split("  |  ").map(part => {
    const match = part.match(/^(.*?)\s*\(([^)]+)\)(?:\s*—\s*([\s\S]*))?$/);
    return match ? { area: match[1].trim(), world: match[2].trim(), note: (match[3] || "").trim() }
             : { area: part.trim(), world: "", note: "" };
  });
}
// Optional superbosses (entries live in the Characters journal).
const SECRET_BOSSES = [
  { name: "Vanitas Remnant", world: "Keyblade Graveyard", noteKey: "bt-boss-vanitas" },
  { name: "Unknown", world: "Land of Departure", noteKey: "bt-boss-unknown" }
];

const TAB_IDS = ["trophies", "worlds", "commands", "unversed", "records", "characters", "treasures", "reports", "finish", "icecream", "arena"];

class BbsTrackerPage extends KH.Page {
  constructor() {
    super();
    this.CHARS = KH.BBS_CHARS;
    this.CHAR_LABEL = KH.BBS_CHAR_LABEL;
    // Ingredients are tracked per character (each collects them in their
    // own playthrough); the flavor data list is shared, the store per-char.
    this.PER_CHAR_SECTIONS = KH.BbsStore.PER_CHAR_SECTIONS;
    this.SHARED_SECTIONS = KH.BbsStore.SHARED_SECTIONS;

    /* Persistent state (classes in js/kh-store.js). PROGRESS owns the
       nested BBS store shape, its load-merge and the old shared→
       per-character arena migration; STORE is a direct handle on its data
       that the render code reads/mutates (re-pointed after reset/reload). */
    this.PROGRESS = new KH.BbsStore(KH.KEYS.BBS_PROGRESS);
    this.STORE = this.PROGRESS.data;
    this.charPref = new KH.CharPref(KH.KEYS.MELD_CHAR, this.CHARS, "terra"); // shared with the melding calculator
    this.activeChar = this.charPref.id;
    this.VIEW = new KH.ViewStore(KH.KEYS.BBS_VIEW);

    /* Counting + cross-off cascades (single source: KH.BbsCounter,
       js/kh-counting.js). The counter reads the live STORE through a
       closure and overlays lang text via viewItems before the auto-unlock
       functions match on item fields; the landing page binds the same
       class to a migrated snapshot instead (js/kh-summary.js). */
    this.counter = new KH.BbsCounter(BBS_DATA, () => this.STORE,
      { mergeItems: (storeId, items) => this.viewItems(storeId, items) });

    this.popover = new KH.Popover();
    this.toaster = new KH.MilestoneToaster(() => {
      const milestones = new Map();
      this.computeMilestones().forEach(key => milestones.set(key, this.milestoneMessage(key)));
      return milestones;
    });

    /* Trophies whose progress can be computed from tracked sections. */
    this.TROPHY_AUTO = {
      "Savage Slayer": () => this.counter.bestCharMissionsRank(),
      "Profiler": () => this.counter.sharedCount("reports"),
      "Collector": () => this.counter.sharedCount("stickers"),
      "Pâtissier": () => this.counter.bestCharGroup("patissier"),
      "The Warrior: Terra": () => this.counter.groupCount("warrior", "Terra"),
      "The Warrior: Ventus": () => this.counter.groupCount("warrior", "Ventus"),
      "The Warrior: Aqua": () => this.counter.groupCount("warrior", "Aqua"),
      "Pawn of the Arena": () => this.counter.arenaByStars(1),
      "Knight of the Arena": () => this.counter.arenaByStars(2),
      "Queen of the Arena": () => this.counter.arenaByStars(3),
      "King of the Arena": () => this.counter.arenaByStars(4)
    };

    this.RENDERERS = {
      trophies: panel => this.renderTrophies(panel),
      worlds: panel => this.renderWorlds(panel),
      commands: panel => this.renderCommands(panel),
      unversed: panel => this.renderUnversed(panel),
      records: panel => this.renderPerCharList(panel, "records", 'bt-records-for', [
        { th: this.translate('bt-th-category'), get: item => item.cat, name: true },
        { th: this.translate('bt-th-world'), get: item => item.world || "" },
        { th: this.translate('bt-th-entry'), get: item => item.entry || "" }
      ]),
      characters: panel => this.renderPerCharList(panel, "characters", 'bt-characters-for', [
        { th: this.translate('bt-th-character'), get: item => item.name, name: true },
        { th: this.translate('bt-th-unlock'), get: item => item.how || "" }
      ]),
      treasures: panel => this.renderTreasures(panel),
      reports: panel => this.renderReports(panel),
      finish: panel => this.renderFinish(panel),
      icecream: panel => this.renderIcecream(panel),
      arena: panel => this.renderArena(panel)
    };

    this.PANEL = {};   // id -> {state:{q,hide}, results, count, bar, dash}
    this.activeTab = "trophies";
  }

  main() {
    this.buildPanels();
    // The tabs and char bar are static HTML on this page; wire them once.
    document.querySelectorAll(".kh .tab").forEach(tab => {
      tab.onclick = () => this.selectTab(tab.dataset.tab);
    });
    document.querySelectorAll(".charbtn").forEach(btn => {
      btn.onclick = () => { this.setActiveChar(btn.dataset.c); this.syncCharButtons(); this.render(); };
    });
    this.syncCharButtons();
    this.render();
  }
  onLanguageChange() { this.buildPanels(); this.render(); }
  /* Live-sync when the melding calculator (or another tab) changes storage. */
  onStorage(event) {
    if (event.key === KH.KEYS.BBS_PROGRESS) { this.PROGRESS.reload(); this.STORE = this.PROGRESS.data; }
    if (event.key === KH.KEYS.MELD_CHAR && this.CHARS.includes(event.newValue)) { this.activeChar = event.newValue; this.syncCharButtons(); }
    if (event.key === KH.KEYS.BBS_PROGRESS || event.key === KH.KEYS.MELD || event.key === KH.KEYS.MELD_CHAR) this.render();
  }

  /* ---------- state shorthands ---------- */
  setActiveChar(char) { this.activeChar = char; this.charPref.set(char); }
  tabJournalOn(tabId) { return this.VIEW.journalOn(tabId); }
  setTabJournal(tabId, on) { this.VIEW.setJournal(tabId, on); }
  toggleCheck(store, key) {
    if (store[key]) delete store[key]; else store[key] = true;
    this.PROGRESS.save();
    this.render();
  }
  syncCharButtons() { KH.widgets.syncCharButtons(this.activeChar); }

  autoBadge(source) {
    return {
      meld: { label: this.translate('bt-badge-meld'), tip: this.translate('bt-badge-meld-tip') },
      mission: { label: this.translate('bt-badge-mission'), tip: this.translate('bt-badge-mission-tip') },
      treasure: { label: this.translate('bt-badge-treasure'), tip: this.translate('bt-badge-treasure-tip') },
      recipe: { label: this.translate('bt-badge-recipe'), tip: this.translate('bt-badge-recipe-tip') },
      icecream: { label: this.translate('bt-badge-icecream'), tip: this.translate('bt-badge-icecream-tip') },
      finish: { label: this.translate('bt-badge-finish'), tip: this.translate('bt-badge-finish-tip') },
      uvmission: { label: this.translate('bt-badge-uvmission'), tip: this.translate('bt-badge-uvmission-tip') },
      arena: { label: this.translate('bt-badge-arena'), tip: this.translate('bt-badge-arena-tip') },
      board: { label: this.translate('bt-badge-board'), tip: this.translate('bt-badge-board-tip') },
      record: { label: this.translate('bt-badge-record'), tip: this.translate('bt-badge-record-tip') }
    }[source];
  }

  /* Item display text lives in the lang file under "items": { "<storeId>":
     [ { … } ] } (shared sections keyed by name, per-character sections by
     "<char>-<section>"). viewItems merges a section's raw BBS_DATA items
     with that lang text (lang wins) so the column getters read editable
     text, while the progress/auto-unlock logic keeps using the raw
     BBS_DATA (names, ranks, rewards, flavor locations stay there as ids).
     Falls back to the raw items if no lang block exists. */
  viewItems(storeId, items) {
    const langItems = (typeof i18n !== "undefined" && i18n.messages && i18n.messages.items) || null;
    const rows = langItems && langItems[storeId];
    return rows ? items.map((item, index) => Object.assign({}, item, rows[index] || {})) : items;
  }

  /* ---------- generic checklist table ---------- */
  /* cols: [{th, get(it), cls?, name?:true}] — first col is the checkbox.
     opts: groupFilter (only show items of this group, headers hidden),
     itemFilter(it) (hide ineligible items), auto(it) -> source or null,
     link(it) -> {store,key,src} binds the row to another tab's store so it
     reads/writes there (two-way sync, editable), groupIcons (prefix group
     headers with their command-type icon). */
  toggleGroup(items, store, groupName, opts) {
    const targets = [];
    items.forEach((item, index) => {
      if (item.g !== groupName || (opts.itemFilter && !opts.itemFilter(item))) return;
      const link = opts.link ? opts.link(item) : null;
      if (link) { targets.push({ store: link.store, key: link.key }); return; }
      if (opts.auto && opts.auto(item) && !store[index]) return;   // read-only auto row
      targets.push({ store, key: index });
    });
    const allDone = targets.every(target => target.store[target.key]);
    targets.forEach(target => { if (allDone) delete target.store[target.key]; else target.store[target.key] = true; });
    this.PROGRESS.save();
    this.render();
  }
  /* Is this item done (checked, linked-elsewhere, or auto-unlocked)? */
  rowDone(item, index, store, opts) {
    const link = opts.link ? opts.link(item) : null;
    if (link) return !!link.store[link.key];
    return !!store[index] || !!(opts.auto && opts.auto(item));
  }
  checklist(container, items, store, cols, panelState, opts) {
    opts = opts || {};
    const table = el("table");
    table.innerHTML = `<thead><tr><th></th>${cols.map(col => `<th>${col.th}</th>`).join("")}</tr></thead>`;
    const tbody = el("tbody");
    let shownCount = 0;
    const query = panelState.q.toLowerCase();
    const filtering = !!query;
    let lastGroup = null;
    // Opt-in: render each item.g group as its own collapsible block (caret +
    // count) so a long section folds a sub-category/world at a time. State lives
    // in panelState.open; groups start expanded so nothing is hidden by default.
    const collapse = !!opts.collapse && !opts.groupFilter;
    const openState = panelState.open || (panelState.open = {});
    const grpKey = name => "grp:" + name;
    const grpIsOpen = key => filtering ? true : (key in openState ? openState[key] : true);
    const groupStats = {};
    if (collapse) items.forEach((item, index) => {
      if (opts.itemFilter && !opts.itemFilter(item)) return;
      const gname = item.g || item.name;
      const st = groupStats[gname] || (groupStats[gname] = { done: 0, total: 0 });
      st.total++; if (this.rowDone(item, index, store, opts)) st.done++;
    });
    let curGrpKey = null, curGrpOpen = true;
    items.forEach((item, index) => {
      if (opts.groupFilter && item.g !== opts.groupFilter) return;
      if (opts.itemFilter && !opts.itemFilter(item)) return;
      const link = opts.link ? opts.link(item) : null;
      const auto = (!link && opts.auto) ? opts.auto(item) : null;
      const done = link ? !!link.store[link.key] : (!!store[index] || !!auto);
      const badgeSource = link ? link.src : auto;
      if (panelState.hide && done) return;
      const haystack = (Object.values(item).join(" ") + " " + (item.g || "")).toLowerCase();
      if (query && !haystack.includes(query)) return;
      if (!opts.groupFilter && item.g && item.g !== lastGroup) {
        lastGroup = item.g;
        const groupName = item.g;
        const groupRow = el("tr");
        const groupCell = el("td", collapse ? "grp-title grp-collapsible" : "grp-title");
        groupCell.colSpan = cols.length + 1;
        groupCell.style.borderBottom = "1px solid var(--line)";
        let caret = null;
        if (collapse) { curGrpKey = grpKey(groupName); curGrpOpen = grpIsOpen(curGrpKey); caret = el("span", "grp-caret", curGrpOpen ? "▾" : "▸"); groupCell.appendChild(caret); }
        groupCell.appendChild(el("span", null, (opts.groupIcons ? groupIconImg(groupName) : "") + fmtText(groupName)));
        if (collapse) { const st = groupStats[groupName] || { done: 0, total: 0 }; groupCell.appendChild(el("span", "grp-count", `${st.done} / ${st.total}`)); }
        const toggleAllBtn = el("button", "grpbtn", this.translate('bt-toggle-all'));
        toggleAllBtn.onclick = (ev) => { ev.stopPropagation(); this.toggleGroup(items, store, groupName, opts); };
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
      }
      const row = el("tr", done ? "donerow" : null);
      if (collapse && curGrpKey) { row.dataset.grp = curGrpKey; if (!curGrpOpen) row.style.display = "none"; }
      const checkCell = el("td", "chkcell");
      const checkbox = el("input", "chk");
      checkbox.type = "checkbox";
      checkbox.checked = done;
      if (link) {
        checkbox.addEventListener("change", () => this.toggleCheck(link.store, link.key));
      } else if (auto && !store[index]) {
        checkbox.disabled = true;
        checkbox.title = this.autoBadge(auto).tip;
      } else {
        checkbox.addEventListener("change", () => this.toggleCheck(store, index));
      }
      checkCell.appendChild(checkbox);
      row.appendChild(checkCell);
      cols.forEach(col => {
        let html = col.name ? `<span class="itemname">${fmtText(col.get(item))}</span>` : esc(col.get(item));
        if (col.name && badgeSource) {
          const badge = this.autoBadge(badgeSource);
          html += ` <span class="srcbadge" title="${badge.tip}">${badge.label}</span>`;
        }
        row.appendChild(el("td", col.cls || null, html));
      });
      tbody.appendChild(row);
      shownCount++;
    });
    table.appendChild(tbody);
    if (shownCount) container.appendChild(table);
    else container.appendChild(el("div", "empty", this.translate('bt-nothing')));
  }

  /* Journal (in-game grid) view — the shared KH.widgets.journalGrid,
     with this engine's { icon, cls, fill } tile shape (see CMD_TILE /
     commandTile above) adapted to the widget's { src, classes, fill }. */
  journalGrid(container, spec) {
    if (spec.ownedTile) {
      const toTile = spec.ownedTile;
      spec = Object.assign({}, spec, {
        ownedTile: item => {
          const t = toTile(item);
          if (!t) return null;
          return {
            src: t.icon ? "../images/commands/cmd-" + t.icon + ".png" : null,
            classes: t.cls ? ["cat-" + t.cls] : [],
            fill: t.fill
          };
        }
      });
    }
    KH.widgets.journalGrid(container, spec, this.popover);
  }

  /* The Checklist | Journal segmented control for a journal-capable tab. */
  viewToggle(container, tabId) {
    container.appendChild(KH.widgets.viewToggle({
      on: this.tabJournalOn(tabId),
      labels: { checklist: this.translate('bt-view-checklist'), journal: this.translate('bt-view-journal') },
      onChange: on => { this.setTabJournal(tabId, on); this.render(); }
    }));
  }

  /* ---------- panel skeletons ---------- */
  setCount(panel, done, total) {
    KH.widgets.setCount(panel, done, total, this.format('bt-count', done, total));
  }

  buildPanels() {
    TAB_IDS.forEach(id => {
      const panel = document.getElementById("tab-" + id);
      panel.innerHTML = "";
      const panelState = (this.PANEL[id] && this.PANEL[id].state) || { q: "", hide: false };
      const tools = KH.widgets.toolbar({
        state: panelState,
        labels: { filter: this.translate('bt-filter'), hideDone: this.translate('bt-hide-done') },
        onChange: () => this.render(),
        reset: id === "trophies" ? {
          label: this.translate('bt-reset'),
          confirm: this.translate('bt-reset-confirm'),
          onReset: () => { this.PROGRESS.reset(); this.STORE = this.PROGRESS.data; this.render(); }
        } : null
      });
      const dash = id === "trophies" ? el("div", "dash") : null;
      if (dash) panel.appendChild(dash);
      panel.appendChild(tools.toolbar);
      const results = el("div", "results");
      panel.appendChild(results);
      this.PANEL[id] = { state: panelState, results, count: tools.count, bar: tools.bar, dash };
    });
  }

  /* A dashboard label cell that links to its tab. */
  dashLabelCell(label, tabId) {
    const cell = el("td");
    if (tabId && TAB_IDS.indexOf(tabId) >= 0) {
      const link = el("a", "dashlink");
      link.href = "#"; link.innerHTML = fmtText(label);
      link.onclick = event => { event.preventDefault(); this.selectTab(tabId); };
      cell.appendChild(link);
    } else { cell.innerHTML = fmtText(label); }
    return cell;
  }

  /* ---------- per-tab renderers ---------- */
  renderTrophies(panel) {
    const counter = this.counter, STORE = this.STORE;
    // dashboard: what is missing, per character and shared
    const dash = panel.dash; dash.innerHTML = "";
    dash.appendChild(el("div", "grp-title", fmtText(this.translate('bt-dash-title'))));
    const charTable = el("table", "dash-table");
    charTable.innerHTML = `<thead><tr><th>${this.translate('bt-dash-section')}</th><th class="c-terra">Terra</th><th class="c-ventus">Ventus</th><th class="c-aqua">Aqua</th></tr></thead>`;
    const charBody = el("tbody");
    const charRows = [
      [this.translate('tabbtn-commands'), char => counter.charCount(char, "commands"), "commands"],
      [this.translate('tabbtn-records'), char => counter.charCount(char, "records"), "records"],
      [this.translate('tabbtn-characters'), char => counter.charCount(char, "characters"), "characters"],
      [this.translate('bt-journal-title'), char => counter.charCount(char, "unversed"), "unversed"],
      [this.translate('tabbtn-treasures'), char => counter.charCount(char, "treasures"), "treasures"],
      [this.translate('bt-dash-stickers'), char => counter.groupCount("stickers", this.CHAR_LABEL[char]), "treasures"],
      [this.translate('tabbtn-finish'), char => counter.groupCount("warrior", this.CHAR_LABEL[char]), "finish"],
      [this.translate('bt-recipes-title'), char => counter.groupCount("patissier", this.CHAR_LABEL[char]), "icecream"],
      [this.translate('bt-ingredients-title'), char => counter.flavorsEligible(char), "icecream"],
      [this.translate('tabbtn-arena'), char => counter.arenaCount(char), "arena"],
      [this.translate('bt-dash-missions-done'), char => counter.missionsCount(char, STORE.missions.done), "unversed"],
      [this.translate('bt-dash-missions-rank'), char => counter.missionsCount(char, STORE.missions.rank), "unversed"]
    ];
    charRows.forEach(([label, get, tabId]) => {
      const row = el("tr");
      row.appendChild(this.dashLabelCell(label, tabId));
      this.CHARS.forEach(char => { const [done, total] = get(char); row.appendChild(el("td", "c-" + char, bar(done, total))); });
      charBody.appendChild(row);
    });
    charTable.appendChild(charBody);
    dash.appendChild(charTable);

    const sharedTable = el("table", "dash-table");
    sharedTable.innerHTML = `<thead><tr><th>${this.translate('bt-dash-shared')}</th><th></th></tr></thead>`;
    const sharedBody = el("tbody");
    [["tabbtn-trophies", "trophies", "trophies"], ["bt-ingame-title", "ingame", "trophies"], ["tabbtn-reports", "reports", "reports"]]
      .forEach(([labelKey, section, tabId]) => {
        const [done, total] = counter.sharedCount(section);
        const row = el("tr");
        row.appendChild(this.dashLabelCell(this.translate(labelKey), tabId));
        row.appendChild(el("td", null, bar(done, total)));
        sharedBody.appendChild(row);
      });
    const [savageDone, savageTotal] = counter.bestCharMissionsRank();
    const savageRow = el("tr");
    savageRow.appendChild(this.dashLabelCell(this.translate('bt-dash-savage'), "unversed"));
    savageRow.appendChild(el("td", null, bar(savageDone, savageTotal)));
    sharedBody.appendChild(savageRow);
    sharedTable.appendChild(sharedBody);
    dash.appendChild(sharedTable);

    const container = panel.results;
    container.appendChild(el("div", "grp-title", fmtText(this.translate('bt-trophies-title'))));
    this.checklist(container, this.viewItems("trophies", BBS_DATA.trophies), STORE.shared.trophies, [
      { th: this.translate('bt-th-rarity'), get: item => item.rarity, cls: "raritycell" },
      { th: this.translate('bt-th-trophy'), get: item => item.name, name: true },
      { th: this.translate('bt-th-desc'), get: item => item.desc },
      { th: this.translate('bt-th-progress'), get: () => "" }
    ], panel.state);
    // decorate rarity + progress cells (post-pass keeps checklist generic)
    container.querySelectorAll("tbody tr").forEach(row => {
      const cells = row.children;
      if (cells.length < 5) return;
      const rarity = cells[1].textContent.trim();
      if (rarity) cells[1].innerHTML = `<span class="rarity ${rarity.toLowerCase()}">${esc(rarity)}</span>`;
      const name = cells[2].textContent.trim();
      if (this.TROPHY_AUTO[name]) { const [done, total] = this.TROPHY_AUTO[name](); cells[4].innerHTML = chip(done, total); }
    });

    container.appendChild(el("div", "sub-title", fmtText(this.translate('bt-ingame-title'))));
    container.appendChild(el("p", "hint", this.translate('bt-ingame-hint')));
    this.checklist(container, this.viewItems("ingame", BBS_DATA.ingame), STORE.shared.ingame, [
      { th: this.translate('bt-th-trophy'), get: item => item.name, name: true },
      { th: this.translate('bt-th-condition'), get: item => item.how },
      { th: this.translate('bt-th-reward'), get: item => item.reward }
    ], panel.state);

    const [trophyDone, trophyTotal] = counter.sharedCount("trophies"), [ingameDone, ingameTotal] = counter.sharedCount("ingame");
    this.setCount(panel, trophyDone + ingameDone, trophyTotal + ingameTotal);
  }

  renderCommands(panel) {
    const container = panel.results;
    const items = this.viewItems(this.activeChar + "-commands", BBS_DATA.perChar[this.activeChar].commands);
    const auto = this.counter.commandAuto(this.activeChar);
    const titleRow = el("div", "grp-title");
    titleRow.appendChild(el("span", null, fmtText(this.format('bt-commands-for', this.CHAR_LABEL[this.activeChar]))));
    this.viewToggle(titleRow, "commands");
    container.appendChild(titleRow);
    const store = this.STORE[this.activeChar].commands;
    if (this.tabJournalOn("commands")) {
      this.journalGrid(container, {
        items, store, perRow: 9, query: panel.state.q, tileExtra: "cmd",
        groupOf: item => item.g,
        owned: (item, index) => !!store[index] || !!auto.get(item.name),
        readonly: (item, index) => (!store[index] && auto.get(item.name)) ? this.autoBadge(auto.get(item.name)).tip : null,
        toggle: (item, index) => this.toggleCheck(store, index),
        ownedTile: commandTile,
        haystack: item => item.name + " " + (item.how || "") + " " + (item.g || ""),
        tip: (item) => `<b>${esc(item.name)}</b>` + (item.g ? `<span class="kh-pop-area">${esc(item.g)}</span>` : "") + (item.how ? `<span class="kh-pop-where">${esc(item.how)}</span>` : "")
      });
    } else {
      this.checklist(container, items, store, [
        { th: this.translate('bt-th-command'), get: item => item.name, name: true },
        { th: this.translate('bt-th-obtain'), get: item => item.how || "" }
      ], panel.state, { auto: item => auto.get(item.name) || null, groupIcons: true, collapse: true });
    }
    container.appendChild(el("p", "legend", this.translate('bt-legend-commands')));
    const [done, total] = this.counter.charCount(this.activeChar, "commands");
    this.setCount(panel, done, total);
  }

  renderUnversed(panel) {
    const container = panel.results;
    const char = this.activeChar, label = this.CHAR_LABEL[char], STORE = this.STORE;

    container.appendChild(el("div", "grp-title", fmtText(this.translate('bt-missions-title'))));
    container.appendChild(el("p", "hint", this.format('bt-missions-hint', label)));
    const table = el("table");
    table.innerHTML = `<thead><tr><th>${this.format('bt-th-done', label)}</th><th>${this.format('bt-th-maxrank', label)}</th><th>${this.translate('bt-th-unversed')}</th><th>${this.translate('bt-th-world')}</th><th>${this.translate('bt-th-area')}</th><th>${this.translate('bt-th-requirement')}</th><th>${this.translate('bt-th-reward')}</th></tr></thead>`;
    const tbody = el("tbody");
    const query = panel.state.q.toLowerCase();
    this.viewItems("missions", BBS_DATA.missions).forEach((mission, index) => {
      const doneKey = index + "-" + char, rankKey = index + "-" + char;
      const reward = this.counter.missionRewardFor(mission, char);
      const done = !!STORE.missions.done[doneKey], ranked = !!STORE.missions.rank[rankKey];
      const complete = done && (!reward || ranked);
      if (panel.state.hide && complete) return;
      const haystack = (mission.name + " " + mission.world + " " + mission.area + " " + mission.req + " " + (reward || "")).toLowerCase();
      if (query && !haystack.includes(query)) return;
      const row = el("tr", complete ? "donerow" : null);
      [["done", done], ["rank", ranked]].forEach(([which, checked]) => {
        const cell = el("td", "chkcell");
        const checkbox = el("input", "chk");
        checkbox.type = "checkbox"; checkbox.checked = checked;
        checkbox.addEventListener("change", () => this.toggleCheck(STORE.missions[which], which === "done" ? doneKey : rankKey));
        cell.appendChild(checkbox);
        row.appendChild(cell);
      });
      const rewardHtml = reward ? `<span class="rewardbadge" title="${this.translate('bt-reward-tip')}">${esc(reward)}</span>` : '<span class="crystal-tag">—</span>';
      [`<span class="itemname">${esc(mission.name)}</span>`, esc(mission.world), esc(missionArea(mission, char)), esc(mission.req), rewardHtml]
        .forEach(html => row.appendChild(el("td", null, html)));
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    container.appendChild(table);
    const [savageDone, savageTotal] = this.counter.bestCharMissionsRank();
    container.appendChild(el("p", "legend", this.format('bt-legend-missions', savageDone, savageTotal)));

    container.appendChild(el("div", "sub-title", fmtText(this.format('bt-journal-for', label))));
    this.checklist(container, this.viewItems(char + "-unversed", BBS_DATA.perChar[char].unversed), STORE[char].unversed, [
      { th: this.translate('bt-th-enemy'), get: item => item.name, name: true },
      { th: this.translate('bt-th-location'), get: item => item.loc || "" }
    ], panel.state, { auto: this.counter.unversedAutoFn(char) });

    const [journalDone, journalTotal] = this.counter.charCount(char, "unversed");
    const [missionDone] = this.counter.missionsCount(char, STORE.missions.done);
    this.setCount(panel, journalDone + missionDone, journalTotal + BBS_DATA.missions.length);
  }

  /* Records / Characters: a per-character list with optional auto or
     two-way linked rows (see KH.BbsCounter.autoFnFor / linkFnFor). */
  renderPerCharList(panel, section, titleKey, cols) {
    const container = panel.results;
    container.appendChild(el("div", "grp-title", fmtText(this.format(titleKey, this.CHAR_LABEL[this.activeChar]))));
    const opts = {};
    const autoFn = this.counter.autoFnFor(section, this.activeChar);
    const linkFn = this.counter.linkFnFor(section, this.activeChar);
    if (autoFn) opts.auto = autoFn;
    if (linkFn) opts.link = linkFn;
    this.checklist(container, this.viewItems(this.activeChar + "-" + section, BBS_DATA.perChar[this.activeChar][section]), this.STORE[this.activeChar][section], cols, panel.state, opts);
    if (section === "records") container.appendChild(el("p", "legend", this.translate('bt-legend-records')));
    const [done, total] = this.counter.charCount(this.activeChar, section);
    this.setCount(panel, done, total);
  }

  /* Treasures + that character's stickers in one tab. Checking a treasure
     whose reward is a command marks the command unlocked (see commandAuto). */
  renderTreasures(panel) {
    const container = panel.results;
    const label = this.CHAR_LABEL[this.activeChar];
    const treasures = this.viewItems(this.activeChar + "-treasures", BBS_DATA.perChar[this.activeChar].treasures);
    const tStore = this.STORE[this.activeChar].treasures;
    const titleRow = el("div", "grp-title");
    titleRow.appendChild(el("span", null, fmtText(this.format('bt-treasures-for', label))));
    this.viewToggle(titleRow, "treasures");
    container.appendChild(titleRow);
    if (this.tabJournalOn("treasures")) {
      this.journalGrid(container, {
        items: treasures, store: tStore, perRow: 9, query: panel.state.q,
        groupOf: item => item.g,
        owned: (item, index) => !!tStore[index],
        toggle: (item, index) => this.toggleCheck(tStore, index),
        haystack: item => item.name + " " + (item.area || "") + " " + (item.how || "") + " " + (item.g || ""),
        tip: (item) => `<b>${esc(item.name)}</b>` + (item.area ? `<span class="kh-pop-area">${esc(item.area)}</span>` : "") + (item.how ? `<span class="kh-pop-where">${esc(item.how)}</span>` : "")
      });
    } else {
      this.checklist(container, treasures, tStore, [
        { th: this.translate('bt-th-reward'), get: item => item.name, name: true },
        { th: this.translate('bt-th-area'), get: item => item.area || "" },
        { th: this.translate('bt-th-where'), get: item => item.how || "" }
      ], panel.state, { collapse: true });
    }
    container.appendChild(el("p", "legend", this.translate('bt-legend-treasures')));

    container.appendChild(el("div", "sub-title", fmtText(this.format('bt-stickers-for', label))));
    this.checklist(container, this.viewItems("stickers", BBS_DATA.stickers), this.STORE.shared.stickers, [
      { th: this.translate('bt-th-sticker'), get: item => item.name, name: true },
      { th: this.translate('bt-th-world'), get: item => item.world || "" },
      { th: this.translate('bt-th-area'), get: item => item.area || "" },
      { th: this.translate('bt-th-obtain'), get: item => item.how || "" }
    ], panel.state, { groupFilter: label });

    const [treasureDone, treasureTotal] = this.counter.charCount(this.activeChar, "treasures");
    const [stickerDone, stickerTotal] = this.counter.groupCount("stickers", label);
    this.setCount(panel, treasureDone + stickerDone, treasureTotal + stickerTotal);
  }

  renderReports(panel) {
    this.checklist(panel.results, this.viewItems("reports", BBS_DATA.reports), this.STORE.shared.reports, [
      { th: this.translate('bt-th-report'), get: item => item.name, name: true },
      { th: this.translate('bt-th-obtain'), get: item => item.how || "" }
    ], panel.state, { auto: this.counter.reportsAutoFn() });
    const [done, total] = this.counter.sharedCount("reports");
    this.setCount(panel, done, total);
  }

  renderFinish(panel) {
    const container = panel.results;
    container.appendChild(el("div", "grp-title", fmtText(this.format('bt-finish-for', this.CHAR_LABEL[this.activeChar]))));
    this.checklist(container, this.viewItems("warrior", BBS_DATA.warrior), this.STORE.shared.warrior, [
      { th: this.translate('bt-th-finish'), get: item => item.name, name: true },
      { th: this.translate('bt-th-equipped'), get: item => item.equip || "" },
      { th: this.translate('bt-th-unlock'), get: item => item.how || "" }
    ], panel.state, { groupFilter: this.CHAR_LABEL[this.activeChar] });
    const [done, total] = this.counter.groupCount("warrior", this.CHAR_LABEL[this.activeChar]);
    this.setCount(panel, done, total);
  }

  renderIcecream(panel) {
    const container = panel.results, STORE = this.STORE;
    const label = this.CHAR_LABEL[this.activeChar];
    container.appendChild(el("div", "grp-title", fmtText(this.format('bt-recipes-for', label))));
    this.checklist(container, this.viewItems("patissier", BBS_DATA.patissier), STORE.shared.patissier, [
      { th: this.translate('bt-th-icecream'), get: item => item.name, name: true },
      { th: this.translate('bt-th-style'), get: item => item.style || "" },
      { th: this.translate('bt-th-ingredients'), get: item => [item.i1, item.i2, item.i3, item.i4].filter(Boolean).join(", ") }
    ], panel.state, { groupFilter: label });

    // Checking an ice-cream recipe crosses off the ingredients it uses — but
    // only for the character whose recipe it is (the tab is per-character).
    // Each ingredient also shows how many this character needs.
    const ingredients = this.counter.recipeIngredients();
    const ingredientAuto = item => (ingredients[item.name] || []).some(use => use.char === label && STORE.shared.patissier[use.pIdx]) ? "recipe" : null;
    const neededQty = name => { const use = (ingredients[name] || []).find(u => u.char === label); return use ? use.qty : 0; };

    container.appendChild(el("div", "sub-title", fmtText(this.format('bt-ingredients-for', label))));
    // Ingredients the character can't obtain (no location) are hidden. They are
    // grouped by spawn spot in world order, so each location note is shown once
    // (ingredients that spawn together are listed together).
    const char = this.activeChar;
    const locKey = { terra: "locT", ventus: "locV", aqua: "locA" }[char];
    const query = panel.state.q.toLowerCase();
    const spots = new Map();   // "world|area" -> { world, area, note, items:[] }
    this.viewItems("flavors", BBS_DATA.flavors).forEach((item, index) => {
      if (neededQty(item.name) <= 0 || !item[locKey]) return;   // only this character's needed ingredients
      if (query && item.name.toLowerCase().indexOf(query) < 0) return;
      const auto = !!ingredientAuto(item);
      const done = !!STORE[char].flavors[index] || auto;
      if (panel.state.hide && done) return;
      const need = neededQty(item.name);
      parseLocs(item[locKey]).forEach(location => {
        const key = location.world + "|" + location.area;
        if (!spots.has(key)) spots.set(key, { world: location.world, area: location.area, note: location.note, items: [] });
        spots.get(key).items.push({ index, name: item.name, need, done, auto });
      });
    });
    Array.from(spots.values())
      .sort((a, b) => worldIndex(a.world) - worldIndex(b.world) || a.area.localeCompare(b.area))
      .forEach(spot => {
        container.appendChild(el("div", "trk-cat", fmtText(spot.area + " (" + spot.world + ")")));
        if (spot.note) container.appendChild(el("p", "hint", fmtText(spot.note)));
        const table = el("table"), tbody = el("tbody");
        spot.items.forEach(ingredient => {
          const row = el("tr", ingredient.done ? "donerow" : null);
          const checkCell = el("td", "chkcell"), checkbox = el("input", "chk");
          checkbox.type = "checkbox"; checkbox.checked = ingredient.done;
          if (ingredient.auto) { checkbox.disabled = true; checkbox.title = this.autoBadge("recipe").tip; }
          else checkbox.addEventListener("change", () => this.toggleCheck(STORE[char].flavors, ingredient.index));
          checkCell.appendChild(checkbox); row.appendChild(checkCell);
          row.appendChild(el("td", null, `<span class="itemname">${fmtText(ingredient.name)}</span>`));
          row.appendChild(el("td", "needcell", ingredient.need ? "×" + ingredient.need : ""));
          tbody.appendChild(row);
        });
        table.appendChild(tbody); container.appendChild(table);
      });

    const [recipeDone, recipeTotal] = this.counter.groupCount("patissier", label);
    const [flavorDone, flavorTotal] = this.counter.flavorsEligible(this.activeChar);
    this.setCount(panel, recipeDone + flavorDone, recipeTotal + flavorTotal);
  }

  renderArena(panel) {
    const container = panel.results;
    container.appendChild(el("div", "grp-title", fmtText(this.format('bt-arena-for', this.CHAR_LABEL[this.activeChar]))));
    this.checklist(container, this.viewItems("arena", BBS_DATA.arena), this.STORE[this.activeChar].arena, [
      { th: this.translate('bt-th-stage'), get: item => item.name, name: true },
      { th: this.translate('bt-th-rank'), get: item => item.rank },
      { th: this.translate('bt-th-unlock'), get: item => item.how || "" },
      { th: this.translate('bt-th-bonus'), get: item => item.bonus || "" }
    ], panel.state);
    container.querySelectorAll("tbody tr").forEach(row => {
      if (row.children.length >= 3) row.children[2].innerHTML = stars(row.children[2].textContent.trim());
    });
    const [done, total] = this.counter.arenaCount(this.activeChar);
    this.setCount(panel, done, total);
  }

  /* ---------- Worlds: every collectible grouped by world, for the active
     character, as live checkboxes bound to the same stores as their home
     tabs (so checking here checks there, and vice-versa). ---------- */
  worldEntries(world, char) {
    const STORE = this.STORE;
    const label = this.CHAR_LABEL[char];
    const locKey = { terra: "locT", ventus: "locV", aqua: "locA" }[char];
    const entries = [];
    // Unversed missions. The clear ("done") row carries the per-character
    // location; missions that need their high score also get a Max Rank row
    // carrying the required score.
    this.viewItems("missions", BBS_DATA.missions).forEach((mission, index) => {
      if (normWorld(mission.world) !== world) return;
      const key = index + "-" + char;
      entries.push({ type: this.translate('bt-wtype-mission'), name: mission.name, where: missionArea(mission, char),
        done: !!STORE.missions.done[key], toggle: () => this.toggleCheck(STORE.missions.done, key) });
      if (this.counter.missionNeedsRank(mission)) {
        entries.push({ type: this.translate('bt-wtype-mission'), name: mission.name,
          where: this.translate('bt-world-maxrank') + (mission.req ? ": " + mission.req : ""),
          done: !!STORE.missions.rank[key], toggle: () => this.toggleCheck(STORE.missions.rank, key) });
      }
    });
    // Treasures (per character; world is the data group). Realm of Darkness
    // chests are excluded — they don't count toward completion.
    this.viewItems(char + "-treasures", BBS_DATA.perChar[char].treasures).forEach((item, index) => {
      if (this.counter.isRealmOfDarkness(BBS_DATA.perChar[char].treasures[index].g)) return;
      if (normWorld(BBS_DATA.perChar[char].treasures[index].g) !== world) return;
      entries.push({ type: this.translate('bt-wtype-treasure'), name: item.name, where: item.area || "",
        done: !!STORE[char].treasures[index], toggle: () => this.toggleCheck(STORE[char].treasures, index) });
    });
    // Stickers (this character's, grouped by data group = character)
    this.viewItems("stickers", BBS_DATA.stickers).forEach((item, index) => {
      if (BBS_DATA.stickers[index].g !== label || normWorld(item.world) !== world) return;
      entries.push({ type: this.translate('bt-wtype-sticker'), name: item.name, where: item.area || "",
        done: !!STORE.shared.stickers[index], toggle: () => this.toggleCheck(STORE.shared.stickers, index) });
    });
    // Ingredients (eligible for this character; bucketed by the world in
    // their location). Show how many this character needs + the spot.
    const ingredients = this.counter.recipeIngredients();
    this.viewItems("flavors", BBS_DATA.flavors).forEach((item, index) => {
      const use = (ingredients[item.name] || []).find(u => u.char === label);
      if (!use || !item[locKey]) return;   // only ingredients this character's recipes need
      const location = parseLocs(item[locKey]).find(l => normWorld(l.world) === world);
      if (!location) return;
      const auto = (ingredients[item.name] || []).some(u => u.char === label && STORE.shared.patissier[u.pIdx]);
      const where = "×" + use.qty + (location.area ? " · " + location.area : "");
      entries.push({ type: this.translate('bt-wtype-ingredient'), name: item.name, where,
        done: !!STORE[char].flavors[index] || auto, auto: auto ? "recipe" : null,
        toggle: () => this.toggleCheck(STORE[char].flavors, index) });
    });
    // Records — reflect the same auto-cross-offs as the Records tab (e.g. an
    // Unversed mission cleared fills its record), so the views stay in sync.
    const recordAuto = this.counter.recordsAutoFn(char);
    this.viewItems(char + "-records", BBS_DATA.perChar[char].records).forEach((item, index) => {
      if (normWorld(item.world) !== world) return;
      if (item.g === "Unversed Missions") return;   // shown as the mission entry above
      const auto = recordAuto(item);
      entries.push({ type: this.translate('bt-wtype-record'), name: item.cat, where: item.entry || "",
        done: !!STORE[char].records[index] || !!auto, auto: auto || null,
        toggle: () => this.toggleCheck(STORE[char].records, index) });
    });
    // Secret bosses
    const characterAuto = this.counter.charactersAutoFn(char);
    SECRET_BOSSES.forEach(boss => {
      if (boss.world !== world) return;
      const index = BBS_DATA.perChar[char].characters.findIndex(c => c.name === boss.name);
      if (index < 0) return;
      const auto = characterAuto(BBS_DATA.perChar[char].characters[index]);
      entries.push({ type: this.translate('bt-wtype-boss'), name: boss.name, where: this.translate(boss.noteKey),
        done: !!STORE[char].characters[index] || !!auto, auto: auto || null,
        toggle: () => this.toggleCheck(STORE[char].characters, index) });
    });
    return entries;
  }

  /* Adapt a worldEntries() row to the shared KH.widgets.entryTable shape
     (auto source tag → resolved badge text; toggle → onToggle). */
  worldEntryRow(entry) {
    const badge = entry.auto ? this.autoBadge(entry.auto) : null;
    return {
      done: entry.done, name: entry.name, where: entry.where,
      auto: badge ? { tip: badge.tip, label: badge.label } : null,
      onToggle: entry.toggle
    };
  }
  renderWorlds(panel) {
    const container = panel.results;
    if (!panel.state.open) panel.state.open = {};
    const openState = panel.state.open;   // persists collapse state across re-renders
    container.appendChild(el("div", "grp-title", fmtText(this.format('bt-worlds-for', this.CHAR_LABEL[this.activeChar]))));
    container.appendChild(el("p", "hint", this.translate('bt-worlds-hint')));
    const query = panel.state.q.toLowerCase();
    // Only a search query force-opens sections (to reveal matches); "hide
    // completed" must keep the user's collapse state.
    const filtering = !!query;
    let totalDone = 0, totalAll = 0;
    WORLDS.forEach(([world, slug]) => {
      const all = this.worldEntries(world, this.activeChar);
      if (!all.length) return;
      const worldDone = all.filter(entry => entry.done).length;
      totalAll += all.length; totalDone += worldDone;
      let entries = all;
      if (query) entries = entries.filter(entry => (entry.type + " " + entry.name + " " + entry.where).toLowerCase().includes(query));
      if (panel.state.hide) entries = entries.filter(entry => !entry.done);
      if (!entries.length) return;

      const worldKey = "w:" + slug;
      const complete = worldDone === all.length;
      const worldDetails = el("details", "wgroup");
      worldDetails.open = filtering ? true : ((worldKey in openState) ? openState[worldKey] : false);   // worlds collapsed by default
      const worldSummary = el("summary", "wsum" + (complete ? " wdone" : ""),
        fmtText(this.translate('bt-world-' + slug)) + ` <span class="wcount">${worldDone} / ${all.length}</span>`
        + (complete ? ` <span class="wbadge">${this.translate('bt-world-complete')}</span>` : ""));
      // Record collapse state synchronously on click — the toggle event is async,
      // so a re-render's programmatic open could otherwise clobber a fresh collapse.
      worldSummary.addEventListener("click", () => { if (!filtering) openState[worldKey] = !((worldKey in openState) ? openState[worldKey] : false); });
      worldDetails.appendChild(worldSummary);

      const typeOrder = [], byType = {};
      entries.forEach(entry => { if (!byType[entry.type]) { byType[entry.type] = []; typeOrder.push(entry.type); } byType[entry.type].push(entry); });
      typeOrder.forEach(type => {
        const typeEntries = byType[type];
        const typeDone = typeEntries.filter(entry => entry.done).length;
        const typeKey = "t:" + slug + ":" + type;
        const typeDetails = el("details", "tgroup");
        typeDetails.open = filtering ? true : ((typeKey in openState) ? openState[typeKey] : true);   // type groups open by default
        const typeSummary = el("summary", "tsum", esc(type) + ` <span class="wcount">${typeDone} / ${typeEntries.length}</span>`);
        typeSummary.addEventListener("click", () => { if (!filtering) openState[typeKey] = !((typeKey in openState) ? openState[typeKey] : true); });
        typeDetails.appendChild(typeSummary);
        typeDetails.appendChild(KH.widgets.entryTable(typeEntries.map(entry => this.worldEntryRow(entry))));
        worldDetails.appendChild(typeDetails);
      });
      container.appendChild(worldDetails);
    });
    if (!totalAll) container.appendChild(el("div", "empty", this.translate('bt-nothing')));
    this.setCount(panel, totalDone, totalAll);
  }

  /* ---------- tabs / milestones / render loop ---------- */
  selectTab(id) {
    if (TAB_IDS.indexOf(id) < 0) return;
    this.activeTab = id;
    document.querySelectorAll(".kh .tab").forEach(tab => tab.classList.toggle("active", tab.dataset.tab === id));
    TAB_IDS.forEach(tabId => { document.getElementById("tab-" + tabId).style.display = (tabId === id) ? "block" : "none"; });
    this.render();
  }

  /* The set of "complete" milestones across every character: trophies whose
     tracked requirements are all met, each fully-finished tab, and each
     character's overall total. KH.MilestoneToaster diffs these between
     renders, seeding silently on the first render so nothing fires on load. */
  computeMilestones() {
    const counter = this.counter, STORE = this.STORE;
    const milestones = new Set();
    Object.keys(this.TROPHY_AUTO).forEach(name => { const [done, total] = this.TROPHY_AUTO[name](); if (total > 0 && done >= total) milestones.add("trophy::" + name); });
    const addSharedTab = (id, done, total) => { if (total > 0 && done >= total) milestones.add("tab::" + id); };
    { const [trophyDone, trophyTotal] = counter.sharedCount("trophies"), [ingameDone, ingameTotal] = counter.sharedCount("ingame"); addSharedTab("trophies", trophyDone + ingameDone, trophyTotal + ingameTotal); }
    { const [done, total] = counter.sharedCount("reports"); addSharedTab("reports", done, total); }
    this.CHARS.forEach(char => {
      const label = this.CHAR_LABEL[char];
      const addCharTab = (id, done, total) => { if (total > 0 && done >= total) milestones.add("tab::" + id + "::" + char); };
      ["commands", "records", "characters"].forEach(section => { const [done, total] = counter.charCount(char, section); addCharTab(section, done, total); });
      { const [done, total] = counter.arenaCount(char); addCharTab("arena", done, total); }
      { const [journalDone, journalTotal] = counter.charCount(char, "unversed"); const [missionDone] = counter.missionsCount(char, STORE.missions.done); addCharTab("unversed", journalDone + missionDone, journalTotal + BBS_DATA.missions.length); }
      { const [treasureDone, treasureTotal] = counter.charCount(char, "treasures"); const [stickerDone, stickerTotal] = counter.groupCount("stickers", label); addCharTab("treasures", treasureDone + stickerDone, treasureTotal + stickerTotal); }
      { const [done, total] = counter.groupCount("warrior", label); addCharTab("finish", done, total); }
      { const [recipeDone, recipeTotal] = counter.groupCount("patissier", label); const [flavorDone, flavorTotal] = counter.flavorsEligible(char); addCharTab("icecream", recipeDone + flavorDone, recipeTotal + flavorTotal); }
      { const [overallDone, overallTotal] = counter.overallChar(char); if (overallTotal > 0 && overallDone >= overallTotal) milestones.add("overall::" + char); }
    });
    return milestones;
  }
  milestoneMessage(key) {
    const parts = key.split("::");
    if (parts[0] === "trophy") return { text: this.format('bt-toast-trophy', parts[1]), icon: "🏆" };
    if (parts[0] === "overall") return { text: this.format('bt-toast-overall', this.CHAR_LABEL[parts[1]]), icon: "🎉" };
    const label = this.translate('tabbtn-' + parts[1]);
    return { text: parts[2] ? this.format('bt-toast-tab-char', label, this.CHAR_LABEL[parts[2]]) : this.format('bt-toast-tab', label), icon: "✅" };
  }

  /* Cache the full 100% total (counter.fullTotals() — every character's
     sections including the auto-cross-offs, plus the shared sections and
     Savage Slayer) so the landing page can show an accurate number without
     re-deriving the lang-aware auto logic. Only writes when it changes. */
  cacheBbsTotal() {
    const [done, total] = this.counter.fullTotals();
    try {
      const value = JSON.stringify([done, total]);
      if (localStorage.getItem(KH.KEYS.BBS_TOTALS) !== value) localStorage.setItem(KH.KEYS.BBS_TOTALS, value);
    } catch (e) { /* private browsing */ }
  }

  render() {
    const panel = this.PANEL[this.activeTab];
    panel.results.innerHTML = "";
    if (panel.dash) panel.dash.innerHTML = "";
    this.RENDERERS[this.activeTab](panel);
    const [done, total] = this.counter.overallChar(this.activeChar);
    document.getElementById("overallNote").textContent = this.format('bt-overall', this.CHAR_LABEL[this.activeChar], done, total, total ? Math.round(100 * done / total) : 0);
    this.toaster.check();
    this.cacheBbsTotal();
  }
}

KH.Page.boot(BbsTrackerPage);
})();
