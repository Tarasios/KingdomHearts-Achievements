/* =====================================================================
   Generic KH game completion tracker engine.

   Drives every game except Birth by Sleep (which has its own engine in
   js/kh-bbs-tracker.js). One page = one game data module that defines the
   global TRACKER_GAME; this file reads that config and renders the tabs,
   checklists, dashboard and optional "Worlds" summary, persisting ticks
   to localStorage.

   Depends on: js/kh-common.js (KH.*), js/i18n.js (i18n) and a game data
   module (see js/kh-com-tracker-data.js for the shape):
     TRACKER_GAME = { id, storeKey, charKey, chars, trophyAuto, tabs: [...] }
   Tab:     { id, sections, char? } — char-tagged tabs only appear for
            that character (switching characters falls back to tab 1)
   Section: { id, cols:[{k, name?, rarity?}], items:[...] } — shared list
            { ..., char: "sora" }            — belongs to one character
            { ..., variants: {sora: [...], riku: [...]} } — per character
   Items in a shared section may carry c: "sora"/"riku" — they share the
   section's progress store but only show for that character.

   UI text comes from the page's lang JSON: tabbtn-<tab>, sec-<section>,
   th-<section>-<col>, plus the shared gt-* keys. Item display text lives
   under the lang "items" map (see langRow/cellText below).
   Progress is keyed by item index per section, in localStorage.

   Where to look:
     persistent state ....... loadStore / saveStore / sectionStore / toggleCheck
     counting ............... entryCount / overallCount / trophyProgress
     checklist table ........ checklist / toggleGroup
     page skeleton .......... buildPage / selectTab
     Worlds summary ......... renderWorlds (opt-in via game.worldSummary)
     toasts ................. currentMilestones / checkMilestones
   ===================================================================== */

document.addEventListener('DOMContentLoaded', async function () {
await i18n.init();

const { el, esc, fmtText, chip, bar, toast } = KH;

const game = TRACKER_GAME;
const translate = (key) => i18n.getMessage(key);
const format = (key, ...args) => i18n.format(key, ...args);

const CHARS = game.chars || [];
const CHAR_LABEL = {};
CHARS.forEach(character => { CHAR_LABEL[character.id] = character.label; });

/* ---------- persistent state ---------- */
function loadStore() {
  try { const raw = localStorage.getItem(game.storeKey); return raw ? JSON.parse(raw) : {}; }
  catch (e) { return {}; }
}
let STORE = loadStore();
function saveStore() { try { localStorage.setItem(game.storeKey, JSON.stringify(STORE)); } catch (e) { /* private browsing */ } }
function sectionStore(storeId) { if (!STORE[storeId]) STORE[storeId] = {}; return STORE[storeId]; }
function toggleCheck(store, key) { if (store[key]) delete store[key]; else store[key] = true; saveStore(); render(); }

let activeChar = (function () {
  if (!CHARS.length) return null;
  try { const saved = localStorage.getItem(game.charKey); return CHARS.some(c => c.id === saved) ? saved : CHARS[0].id; }
  catch (e) { return CHARS[0].id; }
})();
function setActiveChar(charId) { activeChar = charId; try { localStorage.setItem(game.charKey, charId); } catch (e) { /* ignore */ } }

/* ---------- item display text from the lang file ----------
   All user-facing item text (names, "where to find it", "how to obtain
   it", …) lives in the page's lang JSON under an "items" map:
       "items": { "<storeId>": [ { "name": "…", "where": "…" }, … ] }
   keyed by section store id then item index (matching the data order).
   The data module keeps only the structural bits + the item name as a
   stable id (used for trophy/auto-unlock matching). cellText prefers the
   lang text and falls back to the data value, so a game whose text has
   not been moved out yet keeps working unchanged. */
function langRow(storeId, index) {
  const items = (typeof i18n !== "undefined" && i18n.messages && i18n.messages.items) || null;
  const rows = items && items[storeId];
  return (rows && rows[index]) || null;
}
function cellText(storeId, index, key, item) {
  const row = langRow(storeId, index);
  return (row && Object.prototype.hasOwnProperty.call(row, key)) ? row[key] : item[key];
}
/* Per-group note shown under a group header: lang "gnote-<storeId>" (per
   character) or "gnote-<section>" maps a group name -> note text (rendered
   through fmtText, so it may carry a link). E.g. KH1 Trinity unlocks, or the
   COM Map Card drop-table link. */
function groupNote(storeId, sectionId, groupName) {
  const messages = (typeof i18n !== "undefined" && i18n.messages) || {};
  const byStore = messages['gnote-' + storeId];
  if (byStore && typeof byStore === "object" && byStore[groupName]) return byStore[groupName];
  const bySection = messages['gnote-' + sectionId];
  return (bySection && typeof bySection === "object" && bySection[groupName]) || "";
}

/* Item-level character filter: items tagged c only count/show for that
   character. With no char filter (dashboard totals) everything counts. */
function itemVisible(item, charId) { return !item.c || !charId || item.c === charId; }

/* Game tabs, plus a synthetic "Worlds" summary tab when the game declares
   a game.worldSummary config (see renderWorlds). Inserted second so it sits
   next to the trophies/dashboard tab. Real sections still come from
   game.tabs only (allLists/overallCount/findSec), so the summary adds no
   new stores. */
function gameTabs() {
  if (!game.worldSummary) return game.tabs;
  const tabs = game.tabs.slice();
  tabs.splice(1, 0, { id: "worlds", sections: [], worldSummary: true });
  return tabs;
}
/* Tabs tagged with a char only exist for that character. */
function visibleTabs() { return gameTabs().filter(tab => !tab.char || tab.char === activeChar); }
function ensureActiveTab() {
  if (!visibleTabs().some(tab => tab.id === activeTab)) activeTab = visibleTabs()[0].id;
}

/* Resolve a section into the view for the active character: its store id,
   item list and (where relevant) character label. */
function resolveSection(section) {
  if (section.variants) {
    const charId = activeChar;
    return { storeId: section.id + "-" + charId, items: section.variants[charId] || [], charLabel: CHAR_LABEL[charId] };
  }
  if (section.char) return { storeId: section.id, items: section.items, charLabel: CHAR_LABEL[section.char] };
  return { storeId: section.id, items: section.items, charLabel: null };
}
/* Every trackable list (all variants), for the dashboard. Shared
   sections with c-tagged items get one row per character. */
function allLists() {
  const lists = [];
  game.tabs.forEach(tab => tab.sections.forEach(section => {
    if (section.variants) {
      CHARS.forEach(character => lists.push({
        label: format('gt-section-for', translate('sec-' + section.id), character.label),
        storeId: section.id + "-" + character.id, items: section.variants[character.id] || [], section
      }));
    } else if (CHARS.length && (section.items || []).some(item => item.c)) {
      CHARS.forEach(character => lists.push({
        label: format('gt-section-for', translate('sec-' + section.id), character.label),
        storeId: section.id, items: section.items, charId: character.id, section
      }));
    } else {
      lists.push({
        label: section.char ? format('gt-section-for', translate('sec-' + section.id), CHAR_LABEL[section.char]) : translate('sec-' + section.id),
        storeId: section.id, items: section.items, section
      });
    }
  }));
  return lists;
}
/* Site total: every store counted once, unfiltered (c-tagged items are
   each completable by exactly one character). */
function overallCount() {
  let done = 0, total = 0;
  game.tabs.forEach(tab => tab.sections.forEach(section => {
    if (section.variants) {
      CHARS.forEach(character => {
        const [secDone, secTotal] = entryCount({ section, storeId: section.id + "-" + character.id, items: section.variants[character.id] || [] });
        done += secDone; total += secTotal;
      });
    } else {
      const [secDone, secTotal] = entryCount({ section, storeId: section.id, items: section.items });
      done += secDone; total += secTotal;
    }
  }));
  return [done, total];
}
function findList(storeId) {
  for (const tab of game.tabs) for (const section of tab.sections) {
    if (section.variants) {
      for (const character of CHARS) if (section.id + "-" + character.id === storeId) return section.variants[character.id] || [];
    } else if (section.id === storeId) return section.items;
  }
  return null;
}
function findSec(sectionId) {
  for (const tab of game.tabs) for (const section of tab.sections) if (section.id === sectionId) return section;
  return null;
}

/* ---------- multi-checkbox + cross-section auto ----------
   A section may declare `checks: [{k, th}, ...]`: each item then has one
   checkbox per check instead of a single one. The first check keeps the
   bare item index as its store key (backward-compatible "done"); extra
   checks are keyed `<i>::<k>`.
   `game.autoChecks: [{from, check, to, map, toKey?}]` auto-completes items
   in the `to` section: when the `from` section's mission (a map key) has
   its `check` set (primary checkbox if omitted), the mapped item (the
   value, matched on `toKey`/name) counts as done and locks. */
function checkKey(index, checkId, checkIndex) { return checkIndex === 0 ? String(index) : index + "::" + checkId; }
function isChecked(store, index, section, checkIndex) {
  const checks = section && section.checks;
  return checks ? !!store[checkKey(index, checks[checkIndex].k, checkIndex)] : !!store[index];
}
/* Source mission whose S-rank (etc.) auto-completed this item, or null. */
function autoSource(section, item) {
  if (!game.autoChecks) return null;
  for (const rule of game.autoChecks) {
    if (rule.to !== section.id) continue;
    const sourceSec = findSec(rule.from), sourceStore = STORE[rule.from] || {};
    if (!sourceSec) continue;
    for (const mission in rule.map) {
      if (rule.map[mission] !== item[rule.toKey || "name"]) continue;
      const checkIndex = rule.check ? sourceSec.checks.findIndex(c => c.k === rule.check) : 0;
      if (checkIndex < 0) continue;
      // Any source row with this name being checked counts (a minigame can
      // have several challenge rows; clearing any of them completes it).
      for (let sourceIndex = 0; sourceIndex < (sourceSec.items || []).length; sourceIndex++) {
        if (sourceSec.items[sourceIndex].name === mission && isChecked(sourceStore, sourceIndex, sourceSec, checkIndex)) return mission;
      }
    }
  }
  return null;
}
function autoDone(section, item) { return !!autoSource(section, item); }

/* Count one list (a resolved section view). Handles multi-check
   sections (every check counts) and cross-section auto-completion. */
function entryCount(view) {
  const section = view.section, store = STORE[view.storeId] || {}, checks = section && section.checks, charId = view.charId || null;
  let done = 0, total = 0;
  (view.items || []).forEach((item, index) => {
    if (!itemVisible(item, charId)) return;
    if (checks) checks.forEach((check, checkIndex) => { total++; if (store[checkKey(index, check.k, checkIndex)]) done++; });
    else { total++; if (store[index] || autoDone(section, item)) done++; }
  });
  return [done, total];
}
/* Progress for a trophy: a whole section (string storeId), an array of those
   (summed — e.g. a whole multi-section tab), or a subset
   { section, nameEndsWith?, match?:{field,value}, check?, perGroup? } — a
   name-filtered slice, a field-matched slice (field read via the lang text),
   a single check dimension across every item, or (perGroup) one unit per item
   group, done when any item in the group has the check. */
function trophyProgress(ref) {
  if (Array.isArray(ref)) {   // sum several sections (e.g. the whole Synthesis tab)
    let done = 0, total = 0;
    ref.forEach(part => { const progress = trophyProgress(part); if (progress) { done += progress[0]; total += progress[1]; } });
    return [done, total];
  }
  if (typeof ref === "string") {
    const items = findList(ref);
    return items ? entryCount({ section: findSec(ref), storeId: ref, items }) : null;
  }
  const section = findSec(ref.section);
  if (!section) return null;
  const store = STORE[ref.section] || {};
  const checkIndex = (ref.check !== undefined && section.checks) ? section.checks.findIndex(c => c.k === ref.check) : -1;
  const itemDone = (item, index) => {
    if (ref.check !== undefined) return checkIndex >= 0 && !!store[checkKey(index, ref.check, checkIndex)];
    return !!store[index] || autoDone(section, item);
  };
  if (ref.perGroup) {
    const groupsDone = new Map();   // group -> any item done
    section.items.forEach((item, index) => {
      const groupName = item.g || item.name;
      groupsDone.set(groupName, groupsDone.get(groupName) || itemDone(item, index));
    });
    let done = 0;
    groupsDone.forEach(isDone => { if (isDone) done++; });
    return [done, groupsDone.size];
  }
  let done = 0, total = 0;
  section.items.forEach((item, index) => {
    if (ref.nameEndsWith && !String(item.name).endsWith(ref.nameEndsWith)) return;
    if (ref.match && String(cellText(ref.section, index, ref.match.field, item) || "").indexOf(ref.match.value) < 0) return;
    if (ref.check !== undefined && checkIndex < 0) return;
    total++; if (itemDone(item, index)) done++;
  });
  return [done, total];
}

/* ---------- checklist table ---------- */
function toggleGroup(items, store, groupName, section) {
  const indexes = [];
  items.forEach((item, index) => { if (item.g === groupName && itemVisible(item, activeChar)) indexes.push(index); });
  // toggle-all acts on the primary check (idx 0)
  const allDone = indexes.every(index => store[index]);
  indexes.forEach(index => { if (allDone) delete store[index]; else store[index] = true; });
  saveStore();
  render();
}
function checklist(container, section, view, panelState) {
  const store = sectionStore(view.storeId);
  const cols = section.cols;
  const checks = section.checks;
  const leadCount = checks ? checks.length : 1;
  const colHeaders = cols.map(col => `<th>${translate('th-' + section.id + '-' + col.k)}</th>`).join("");
  const checkHeaders = checks ? checks.map(check => `<th class="chkhead">${translate(check.th)}</th>`).join("") : "<th></th>";
  const table = el("table");
  table.innerHTML = `<thead><tr>${checkHeaders}${colHeaders}${section.trophies && game.trophyAuto ? `<th>${translate('gt-th-progress')}</th>` : ""}</tr></thead>`;
  const tbody = el("tbody");
  let shownCount = 0;
  const query = panelState.q.toLowerCase();
  let lastGroup = null;
  view.items.forEach((item, index) => {
    if (!itemVisible(item, activeChar)) return;
    const auto = checks ? null : autoSource(section, item);
    const done = checks ? checks.every((check, checkIndex) => store[checkKey(index, check.k, checkIndex)])
                        : (!!store[index] || !!auto);
    if (panelState.hide && done) return;
    const langData = langRow(view.storeId, index);
    const haystack = (Object.values(item).join(" ") + (langData ? " " + Object.values(langData).join(" ") : "")).toLowerCase();
    if (query && !haystack.includes(query)) return;
    if (item.g && item.g !== lastGroup) {
      lastGroup = item.g;
      const groupName = item.g;
      const groupRow = el("tr");
      const groupCell = el("td", "grp-title");
      groupCell.colSpan = cols.length + leadCount + 1;
      groupCell.style.borderBottom = "1px solid var(--line)";
      groupCell.appendChild(el("span", null, fmtText(groupName)));
      const toggleAllBtn = el("button", "grpbtn", translate('gt-toggle-all'));
      toggleAllBtn.onclick = () => toggleGroup(view.items, store, groupName, section);
      groupCell.appendChild(toggleAllBtn);
      groupRow.appendChild(groupCell);
      tbody.appendChild(groupRow);
      const note = groupNote(view.storeId, section.id, groupName);
      if (note) {
        const noteRow = el("tr"), noteCell = el("td", "gnote");
        noteCell.colSpan = cols.length + leadCount + 1;
        noteCell.style.borderBottom = "1px solid var(--line)";
        noteCell.innerHTML = fmtText(note);
        noteRow.appendChild(noteCell);
        tbody.appendChild(noteRow);
      }
    }
    const row = el("tr", done ? "donerow" : null);
    if (checks) {
      checks.forEach((check, checkIndex) => {
        const key = checkKey(index, check.k, checkIndex);
        const cell = el("td", "chkcell");
        const checkbox = el("input", "chk");
        checkbox.type = "checkbox"; checkbox.checked = !!store[key];
        checkbox.addEventListener("change", () => toggleCheck(store, key));
        cell.appendChild(checkbox);
        row.appendChild(cell);
      });
    } else {
      const cell = el("td", "chkcell");
      const checkbox = el("input", "chk");
      checkbox.type = "checkbox"; checkbox.checked = done;
      if (auto && !store[index]) { checkbox.disabled = true; checkbox.title = format('gt-auto-tip', auto); }
      else checkbox.addEventListener("change", () => toggleCheck(store, index));
      cell.appendChild(checkbox);
      row.appendChild(cell);
    }
    cols.forEach(col => {
      const value = cellText(view.storeId, index, col.k, item) || "";
      let html;
      if (col.rarity && value) html = `<span class="rarity ${esc(value.toLowerCase())}">${esc(value)}</span>`;
      else if (col.name) html = `<span class="itemname">${fmtText(value)}</span>${auto ? ` <span class="srcbadge" title="${format('gt-auto-tip', auto)}">${translate('gt-auto-badge')}</span>` : ""}`;
      else html = fmtText(value);   // enables {{icon}} / [[text|tip]] / [text](url) in any column
      row.appendChild(el("td", null, html));
    });
    if (section.trophies && game.trophyAuto) {
      const ref = game.trophyAuto[item.name];
      let html = "";
      if (ref) { const progress = trophyProgress(ref); if (progress) html = chip(progress[0], progress[1]); }
      row.appendChild(el("td", null, html));
    }
    tbody.appendChild(row);
    shownCount++;
  });
  table.appendChild(tbody);
  if (shownCount) container.appendChild(table);
  else container.appendChild(el("div", "empty", translate('gt-nothing')));
}

/* ---------- page skeleton ---------- */
const PANEL = {};
let activeTab = game.tabs[0].id;

/* Switch to a tab by id (used by the tab buttons and the dashboard links). */
function selectTab(tabId) {
  if (!gameTabs().some(tab => tab.id === tabId)) return;
  activeTab = tabId;
  document.querySelectorAll("#tabs .tab").forEach(btn => btn.classList.toggle("active", btn.dataset.tab === tabId));
  gameTabs().forEach(tab => { const panel = document.getElementById("tab-" + tab.id); if (panel) panel.style.display = tab.id === tabId ? "block" : "none"; });
  render();
}
function tabOfSection(sectionId) {
  for (const tab of game.tabs) if (tab.sections.some(section => section.id === sectionId)) return tab.id;
  return null;
}

function buildPage() {
  // character bar
  const charbar = document.getElementById("charbar");
  charbar.querySelectorAll(".charbtn").forEach(btn => btn.remove());
  const playingAs = document.getElementById("playing-as");
  if (CHARS.length) {
    playingAs.style.display = "";
    const anchor = document.getElementById("overallNote");
    CHARS.forEach(character => {
      const btn = el("button", "charbtn");
      btn.dataset.c = character.id;
      btn.innerHTML = `<span class="dot"></span>${esc(character.label)}`;
      btn.onclick = () => { setActiveChar(character.id); buildPage(); render(); };
      charbar.insertBefore(btn, anchor);
    });
  } else {
    playingAs.style.display = "none";
  }
  syncCharButtons();

  // tabs (char-tagged tabs only exist for that character)
  ensureActiveTab();
  const tabsBox = document.getElementById("tabs");
  tabsBox.innerHTML = "";
  visibleTabs().forEach(tab => {
    const btn = el("button", "tab" + (tab.id === activeTab ? " active" : ""), translate('tabbtn-' + tab.id));
    btn.dataset.tab = tab.id;
    btn.onclick = () => selectTab(tab.id);
    tabsBox.appendChild(btn);
  });

  // panels + toolbars
  const main = document.getElementById("panels");
  main.innerHTML = "";
  gameTabs().forEach(tab => {
    const panel = el("section", "card");
    panel.id = "tab-" + tab.id;
    if (tab.id !== activeTab) panel.style.display = "none";
    const panelState = (PANEL[tab.id] && PANEL[tab.id].state) || { q: "", hide: false };
    const hasTrophies = tab.sections.some(section => section.trophies);
    const dash = hasTrophies ? el("div", "dash") : null;
    if (dash) panel.appendChild(dash);
    const toolbar = el("div", "toolbar");
    const filterInput = el("input");
    filterInput.type = "text"; filterInput.placeholder = translate('gt-filter'); filterInput.style.maxWidth = "240px"; filterInput.value = panelState.q;
    filterInput.addEventListener("input", () => { panelState.q = filterInput.value.trim(); render(); });
    const hideLabel = el("label", "hidelbl");
    const hideToggle = el("input", "chk");
    hideToggle.type = "checkbox"; hideToggle.checked = panelState.hide;
    hideToggle.addEventListener("change", () => { panelState.hide = hideToggle.checked; render(); });
    hideLabel.appendChild(hideToggle);
    hideLabel.appendChild(document.createTextNode(" " + translate('gt-hide-done')));
    const countBadge = el("span", "countbadge");
    const progressBar = el("span", "dashbar");
    progressBar.appendChild(el("i"));
    toolbar.appendChild(filterInput); toolbar.appendChild(hideLabel); toolbar.appendChild(countBadge); toolbar.appendChild(progressBar);
    if (hasTrophies) {
      const resetBtn = el("button", "clearbtn", translate('gt-reset'));
      resetBtn.onclick = () => {
        if (confirm(translate('gt-reset-confirm'))) { STORE = {}; saveStore(); render(); }
      };
      toolbar.appendChild(resetBtn);
    }
    panel.appendChild(toolbar);
    const results = el("div", "results");
    panel.appendChild(results);
    main.appendChild(panel);
    PANEL[tab.id] = { state: panelState, results, count: countBadge, bar: progressBar, dash };
  });
}

function syncCharButtons() {
  document.querySelectorAll(".charbtn").forEach(btn => btn.classList.toggle("on", btn.dataset.c === activeChar));
  // Drive the per-character accent scheme (e.g. Sora blue, Riku purple).
  if (activeChar) document.documentElement.setAttribute("data-char", activeChar);
  else document.documentElement.removeAttribute("data-char");
}
function setCount(panel, done, total) {
  panel.count.textContent = format('gt-count', done, total);
  panel.bar.className = "dashbar" + (done >= total && total > 0 ? " full" : "");
  panel.bar.firstChild.style.width = (total ? Math.round(100 * done / total) : 0) + "%";
}

/* ---------- completion toasts ---------- */
let prevMilestones = null;
/* Completed milestones (key -> toast): each auto-trophy whose tracked
   requirements are met, each fully-finished list, and the site total.
   Compared between renders so only newly-completed ones toast; seeded on
   first render so nothing fires on load or when navigating. */
function currentMilestones() {
  const milestones = new Map();
  if (game.trophyAuto) Object.keys(game.trophyAuto).forEach(name => {
    const progress = trophyProgress(game.trophyAuto[name]);
    if (progress && progress[1] > 0 && progress[0] >= progress[1]) milestones.set("trophy::" + name, { text: format('gt-toast-trophy', name), icon: "🏆" });
  });
  allLists().forEach(({ label, storeId, items, charId, section }) => {
    const [done, total] = entryCount({ section, storeId, items, charId });
    if (total > 0 && done >= total) milestones.set("list::" + storeId + "::" + (charId || ""), { text: format('gt-toast-section', label), icon: "✅" });
  });
  const [overallDone, overallTotal] = overallCount();
  if (overallTotal > 0 && overallDone >= overallTotal) milestones.set("overall", { text: translate('gt-toast-overall'), icon: "🎉" });
  return milestones;
}
function checkMilestones() {
  const current = currentMilestones();
  if (prevMilestones) current.forEach((milestone, key) => { if (!prevMilestones.has(key)) toast(milestone.text, milestone.icon); });
  prevMilestones = new Set(current.keys());
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
function worldOf(sectionCfg, view, item, index) {
  const key = sectionCfg.key || "g";
  let world = (key === "g") ? item.g : (item[key] != null ? item[key] : cellText(view.storeId, index, key, item));
  world = String(world || "");
  // Optional: world is the part before a delimiter (e.g. "World - area").
  if (sectionCfg.split && world.indexOf(sectionCfg.split) >= 0) world = world.slice(0, world.indexOf(sectionCfg.split));
  // Normalise whitespace — some data uses non-breaking spaces in group names.
  world = String(world || "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
  const alias = game.worldSummary.alias || {};
  return alias[world] || world;
}
function worldEntryTable(entries) {
  const table = el("table", "wtable"), tbody = el("tbody");
  entries.forEach(entry => {
    const row = el("tr", entry.done ? "donerow" : null);
    const cell = el("td", "chkcell"), checkbox = el("input", "chk");
    checkbox.type = "checkbox"; checkbox.checked = entry.done;
    if (entry.auto) { checkbox.disabled = true; checkbox.title = format('gt-auto-tip', entry.auto); }
    else checkbox.addEventListener("change", () => toggleCheck(entry.store, entry.index));
    cell.appendChild(checkbox); row.appendChild(cell);
    let nameHtml = "";
    if (entry.swatch) nameHtml += `<span class="wswatch" style="background:${entry.swatch.c}"${entry.swatch.t ? ` title="${esc(entry.swatch.t)}" tabindex="0"` : ""}></span>`;
    nameHtml += `<span class="itemname">${fmtText(entry.name)}</span>`;
    if (entry.auto) nameHtml += ` <span class="srcbadge" title="${format('gt-auto-tip', entry.auto)}">${translate('gt-auto-badge')}</span>`;
    row.appendChild(el("td", null, nameHtml));
    row.appendChild(el("td", null, fmtText(entry.where)));
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  return table;
}
function renderWorlds(panel) {
  const cfg = game.worldSummary, container = panel.results;
  if (!panel.state.open) panel.state.open = {};
  const openState = panel.state.open;
  container.appendChild(el("div", "grp-title", fmtText(translate('gt-worlds-title'))));
  const query = panel.state.q.toLowerCase();
  // Only a search query force-opens sections (to reveal matches); "hide
  // completed" must keep the user's collapse state.
  const filtering = !!query;
  const sectionViews = cfg.sections.map(entry => {
    const sectionCfg = (typeof entry === "string") ? { id: entry } : entry;
    const section = findSec(sectionCfg.id), view = resolveSection(section);
    const nameCol = section.cols.find(col => col.name) || section.cols[0];
    const whereKeys = sectionCfg.where || section.cols.filter(col => col !== nameCol).map(col => col.k);
    return { sectionCfg, section, view, store: sectionStore(view.storeId), title: translate('sec-' + section.id), nameCol, whereKeys };
  });
  // A hex colour from the section's swatch map, validated (it builds inline style).
  const swatchOf = (sectionCfg, cell) => {
    if (!sectionCfg.swatch) return null;
    const value = cell(sectionCfg.swatch.field), color = sectionCfg.swatch.colors[value];
    if (!color || !/^#[0-9a-fA-F]{3,8}$/.test(color)) return null;
    return { c: color, t: (sectionCfg.swatch.titles && sectionCfg.swatch.titles[value]) || "" };
  };
  let totalDone = 0, totalAll = 0;
  cfg.worlds.forEach((world, worldIndex) => {
    const slug = "w" + worldIndex;
    const typeGroups = [];
    sectionViews.forEach(sectionView => {
      const entries = [];
      sectionView.view.items.forEach((item, index) => {
        if (!itemVisible(item, activeChar)) return;
        if (worldOf(sectionView.sectionCfg, sectionView.view, item, index) !== world) return;
        const auto = autoSource(sectionView.section, item);
        const cell = key => cellText(sectionView.view.storeId, index, key, item) || "";
        const name = sectionView.sectionCfg.label
          ? sectionView.sectionCfg.label.replace(/\{(\w+)\}/g, (m, key) => cell(key)).trim()
          : cell(sectionView.nameCol.k);
        entries.push({ store: sectionView.store, index, done: !!sectionView.store[index] || !!auto, auto, name,
          where: sectionView.whereKeys.map(cell).filter(Boolean).join(" · "), swatch: swatchOf(sectionView.sectionCfg, cell) });
      });
      if (entries.length) typeGroups.push({ title: sectionView.title, entries });
    });
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
      + (complete ? ` <span class="wbadge">${translate('gt-world-complete')}</span>` : ""));
    // Record collapse state synchronously on click (the toggle event is async,
    // which lets a re-render's programmatic open clobber a just-made collapse).
    worldSummary.addEventListener("click", () => { if (!filtering) openState[worldKey] = !((worldKey in openState) ? openState[worldKey] : false); });
    worldDetails.appendChild(worldSummary);
    shownGroups.forEach(group => {
      const groupDone = group.entries.filter(entry => entry.done).length, typeKey = "t:" + slug + ":" + group.title;
      const typeDetails = el("details", "tgroup");
      typeDetails.open = filtering ? true : ((typeKey in openState) ? openState[typeKey] : true);   // type groups open by default
      const typeSummary = el("summary", "tsum", esc(group.title) + ` <span class="wcount">${groupDone} / ${group.entries.length}</span>`);
      typeSummary.addEventListener("click", () => { if (!filtering) openState[typeKey] = !((typeKey in openState) ? openState[typeKey] : true); });
      typeDetails.appendChild(typeSummary);
      typeDetails.appendChild(worldEntryTable(group.entries));
      worldDetails.appendChild(typeDetails);
    });
    container.appendChild(worldDetails);
  });
  if (!totalAll) container.appendChild(el("div", "empty", translate('gt-nothing')));
  setCount(panel, totalDone, totalAll);
}

/* ---------- render ---------- */
function render() {
  const tab = gameTabs().find(tab => tab.id === activeTab);
  const panel = PANEL[activeTab];
  panel.results.innerHTML = "";
  if (tab.worldSummary) {
    renderWorlds(panel);
    const [overallDone, overallTotal] = overallCount();
    document.getElementById("overallNote").textContent = format('gt-overall', overallDone, overallTotal, overallTotal ? Math.round(100 * overallDone / overallTotal) : 0);
    checkMilestones();
    return;
  }
  if (panel.dash) {
    panel.dash.innerHTML = "";
    panel.dash.appendChild(el("div", "grp-title", fmtText(translate('gt-dash-title'))));
    const table = el("table", "dash-table");
    table.innerHTML = `<thead><tr><th>${translate('gt-dash-section')}</th><th>${translate('gt-dash-progress')}</th></tr></thead>`;
    const tbody = el("tbody");
    allLists().forEach(({ label, storeId, items, charId, section }) => {
      const [done, total] = entryCount({ section, storeId, items, charId });
      const row = el("tr"), labelCell = el("td");
      const tabId = tabOfSection(section.id);
      if (tabId) {
        const link = el("a", "dashlink", esc(label));
        link.href = "#";
        link.onclick = event => { event.preventDefault(); selectTab(tabId); };
        labelCell.appendChild(link);
      } else { labelCell.textContent = label; }
      row.appendChild(labelCell);
      row.appendChild(el("td", null, bar(done, total)));
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    panel.dash.appendChild(table);
  }
  let panelDone = 0, panelTotal = 0;
  tab.sections.forEach((section, sectionIndex) => {
    const view = resolveSection(section);
    const title = view.charLabel ? format('gt-section-for', translate('sec-' + section.id), view.charLabel) : translate('sec-' + section.id);
    panel.results.appendChild(el("div", sectionIndex === 0 ? "grp-title" : "sub-title", fmtText(title)));
    // Optional explanatory note under a section title (lang key note-<id>);
    // newlines become separate lines.
    const note = translate('note-' + section.id);
    if (note && note !== 'note-' + section.id) {
      const noteEl = el("p", "hint");
      note.split("\n").forEach((line, lineIndex) => { if (lineIndex) noteEl.appendChild(el("br")); noteEl.appendChild(document.createTextNode(line)); });
      panel.results.appendChild(noteEl);
    }
    checklist(panel.results, section, view, panel.state);
    const [secDone, secTotal] = entryCount({ section, storeId: view.storeId, items: view.items, charId: activeChar });
    panelDone += secDone; panelTotal += secTotal;
  });
  setCount(panel, panelDone, panelTotal);

  const [overallDone, overallTotal] = overallCount();
  document.getElementById("overallNote").textContent = format('gt-overall', overallDone, overallTotal, overallTotal ? Math.round(100 * overallDone / overallTotal) : 0);
  checkMilestones();
}

buildPage();
render();

document.addEventListener('i18n:updated', () => { buildPage(); render(); });
window.addEventListener("storage", (event) => {
  if (event.key === game.storeKey) { STORE = loadStore(); render(); }
  if (game.charKey && event.key === game.charKey && CHARS.some(c => c.id === event.newValue)) {
    activeChar = event.newValue; buildPage(); render();
  }
});

});
