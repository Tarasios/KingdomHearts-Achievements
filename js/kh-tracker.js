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
/* Counter sections store a number per item (0..max); 0 is removed so the
   store stays sparse. */
function setItemCount(store, index, value, max) {
  value = Math.min(Math.max(value, 0), max);
  if (value <= 0) delete store[index]; else store[index] = value;
  saveStore(); render();
}
/* Cross-section cascade: a checked item may auto-grant other collectibles —
   e.g. a Link Portal grants the rare Nightmare it contains and the recipe /
   dream pieces it drops. The item lists targets in
   `gives: [{sec, name, check?}]`; they are SET (never unset) when the source
   item is turned on, so they remain independently editable afterwards. */
function applyGives(item) {
  (item.gives || []).forEach(target => {
    const targetSec = findSec(target.sec);
    if (!targetSec) return;
    let storeId = target.sec, list;
    if (targetSec.variants) { storeId = target.sec + "-" + activeChar; list = targetSec.variants[activeChar] || []; }
    else list = targetSec.items || [];
    const ti = list.findIndex(x => x.name === target.name);
    if (ti < 0) return;
    const targetStore = sectionStore(storeId);
    if (target.check && targetSec.checks) {
      const ci = targetSec.checks.findIndex(c => c.k === target.check);
      if (ci >= 0) targetStore[checkKey(ti, target.check, ci)] = true;
    } else targetStore[ti] = true;
  });
}
function toggleWithGives(store, key, item) {
  const turningOn = !store[key];
  if (store[key]) delete store[key]; else store[key] = true;
  if (turningOn) applyGives(item);
  saveStore(); render();
}

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

/* A section's checks need not all apply to every item: an item opts a check
   OUT by setting that check's key to false in the DATA (e.g. a Spirit-only
   Dream Eater carries nightmare:false, rare:false). Absent or true means the
   check applies, so check-sections whose items don't carry the flags behave
   exactly as before. */
function checkApplies(item, check) { return item[check.k] !== false; }
/* Counter sections (section.counter) track 0..max copies per item instead of
   a single checkbox; the store holds a number. A legacy `true` (an item
   completed before the section became a counter) counts as fully maxed. */
function itemMax(item) { const max = +item.max; return max > 0 ? max : 1; }
function counterValue(store, index, item) {
  const raw = store[index];
  if (raw === true) return itemMax(item);
  return Math.min(Math.max(+raw || 0, 0), itemMax(item));
}

/* Count one list (a resolved section view). Handles counter sections (each
   item contributes its max), multi-check sections (every applicable check
   counts) and cross-section auto-completion. */
function entryCount(view) {
  const section = view.section, store = STORE[view.storeId] || {}, checks = section && section.checks, charId = view.charId || null;
  let done = 0, total = 0;
  (view.items || []).forEach((item, index) => {
    if (!itemVisible(item, charId)) return;
    if (section && section.counter) { total += itemMax(item); done += counterValue(store, index, item); }
    else if (checks) checks.forEach((check, checkIndex) => { if (!checkApplies(item, check)) return; total++; if (store[checkKey(index, check.k, checkIndex)]) done++; });
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
  const checkObj = checkIndex >= 0 ? section.checks[checkIndex] : null;
  const itemDone = (item, index) => {
    if (ref.check !== undefined) return checkIndex >= 0 && checkApplies(item, checkObj) && !!store[checkKey(index, ref.check, checkIndex)];
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
    if (ref.check !== undefined && checkObj && !checkApplies(item, checkObj)) return;   // skip items that lack this form
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
  // Opt-in: render each item.g group as its own collapsible block (e.g. DDD
  // Treasures by world, Commands by category) so a long section can be folded
  // a group at a time instead of all-or-nothing. Rows are tagged with the
  // group key and shown/hidden in place; state lives in panelState.open.
  const collapse = !!section.groupCollapse;
  const filtering = !!query;
  const openState = panelState.open || (panelState.open = {});
  const grpKey = name => "grp:" + view.storeId + ":" + name;
  const grpIsOpen = key => filtering ? true : (key in openState ? openState[key] : true);
  const rowDone = (item, index) => section.counter ? counterValue(store, index, item) >= itemMax(item)
        : checks ? checks.every((check, ci) => !checkApplies(item, check) || store[checkKey(index, check.k, ci)])
        : (!!store[index] || !!autoSource(section, item));
  const groupStats = {};
  if (collapse) view.items.forEach((item, index) => {
    if (!itemVisible(item, activeChar)) return;
    const gname = item.g || item.name;
    const st = groupStats[gname] || (groupStats[gname] = { done: 0, total: 0 });
    st.total++; if (rowDone(item, index)) st.done++;
  });
  let curGrpKey = null, curGrpOpen = true;
  view.items.forEach((item, index) => {
    if (!itemVisible(item, activeChar)) return;
    const auto = (checks || section.counter) ? null : autoSource(section, item);
    const done = section.counter ? counterValue(store, index, item) >= itemMax(item)
               : checks ? checks.every((check, checkIndex) => !checkApplies(item, check) || store[checkKey(index, check.k, checkIndex)])
               : (!!store[index] || !!auto);
    if (panelState.hide && done) return;
    const langData = langRow(view.storeId, index);
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
      const toggleAllBtn = el("button", "grpbtn", translate('gt-toggle-all'));
      toggleAllBtn.onclick = (ev) => { ev.stopPropagation(); toggleGroup(view.items, store, groupName, section); };
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
      const note = groupNote(view.storeId, section.id, groupName);
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
      const max = itemMax(item), current = counterValue(store, index, item);
      const cell = el("td", "chkcell");
      if (max <= 1) {
        // A single-copy ability is just a checkbox, like any other row.
        const checkbox = el("input", "chk");
        checkbox.type = "checkbox"; checkbox.checked = current >= 1;
        checkbox.addEventListener("change", () => setItemCount(store, index, current >= 1 ? 0 : 1, max));
        cell.appendChild(checkbox);
      } else {
        // Multi-copy abilities track partial progress (e.g. 2 / 5).
        const stepper = el("span", "stepper");
        const decBtn = el("button", "stepbtn", "−");
        decBtn.onclick = () => setItemCount(store, index, current - 1, max);
        const valEl = el("span", "stepval", `<b>${current}</b> <span class="mx">/ ${max}</span>`);
        const incBtn = el("button", "stepbtn", "+");
        incBtn.onclick = () => setItemCount(store, index, current + 1, max);
        stepper.appendChild(decBtn); stepper.appendChild(valEl); stepper.appendChild(incBtn);
        cell.appendChild(stepper);
      }
      row.appendChild(cell);
    } else if (checks) {
      checks.forEach((check, checkIndex) => {
        if (!checkApplies(item, check)) { row.appendChild(el("td", "chkcell na", "—")); return; }
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
      else if (item.gives) checkbox.addEventListener("change", () => toggleWithGives(store, index, item));
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
    if (collapse && item.g) { row.dataset.grp = curGrpKey; if (!curGrpOpen) row.style.display = "none"; }
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
function aliasWorld(world) {
  // Normalise whitespace (some data uses non-breaking spaces) then apply any
  // configured world-name fixups.
  world = String(world || "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
  const alias = (game.worldSummary && game.worldSummary.alias) || {};
  return alias[world] || world;
}
function worldOf(sectionCfg, view, item, index) {
  const key = sectionCfg.key || "g";
  let world = (key === "g") ? item.g : (item[key] != null ? item[key] : cellText(view.storeId, index, key, item));
  world = String(world || "");
  // Optional: world is the part before a delimiter (e.g. "World - area").
  if (sectionCfg.split && world.indexOf(sectionCfg.split) >= 0) world = world.slice(0, world.indexOf(sectionCfg.split));
  return aliasWorld(world);
}
function worldEntryTable(entries) {
  const table = el("table", "wtable"), tbody = el("tbody");
  entries.forEach(entry => {
    const row = el("tr", entry.done ? "donerow" : null);
    const cell = el("td", "chkcell"), checkbox = el("input", "chk");
    checkbox.type = "checkbox"; checkbox.checked = entry.done;
    if (entry.auto) { checkbox.disabled = true; checkbox.title = format('gt-auto-tip', entry.auto); }
    else if (entry.gives) checkbox.addEventListener("change", () => toggleWithGives(entry.store, entry.key, entry.gives));
    else checkbox.addEventListener("change", () => toggleCheck(entry.store, entry.key));
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
    const section = findSec(sectionCfg.id), view = resolveSection(section);
    const nameCol = section.cols.find(col => col.name) || section.cols[0];
    const whereKeys = sectionCfg.where || section.cols.filter(col => col !== nameCol).map(col => col.k);
    const title = sectionCfg.title ? translate(sectionCfg.title) : translate('sec-' + section.id);
    const checkIndex = (sectionCfg.check && section.checks) ? section.checks.findIndex(c => c.k === sectionCfg.check) : -1;
    const store = sectionStore(view.storeId);
    const byWorld = new Map();
    view.items.forEach((item, index) => {
      if (!itemVisible(item, activeChar)) return;
      if (sectionCfg.group && item.g !== sectionCfg.group) return;
      let key = index, done, auto = null, gives = null;
      if (checkIndex >= 0) {
        const chk = section.checks[checkIndex];
        if (!checkApplies(item, chk)) return;
        key = checkKey(index, chk.k, checkIndex);
        done = !!store[key];
      } else {
        auto = autoSource(section, item);
        done = !!store[index] || !!auto;
        if (item.gives) gives = item;
      }
      const cell = k => cellText(view.storeId, index, k, item) || "";
      const name = sectionCfg.label ? sectionCfg.label.replace(/\{(\w+)\}/g, (m, k) => cell(k)).trim() : cell(nameCol.k);
      const worlds = sectionCfg.worldsKey
        ? (Array.isArray(item[sectionCfg.worldsKey]) ? item[sectionCfg.worldsKey].map(aliasWorld) : [])
        : [worldOf(sectionCfg, view, item, index)];
      worlds.forEach(world => {
        if (!world) return;
        if (!byWorld.has(world)) byWorld.set(world, []);
        byWorld.get(world).push({ store, key, done, auto, gives, name,
          where: whereKeys.map(cell).filter(Boolean).join(" · "), swatch: swatchOf(sectionCfg, cell) });
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
  // Each section is a collapsible <details>; its open/closed state is
  // remembered per tab (panel.state.open). A search query force-opens every
  // section so matches are never hidden inside a collapsed one.
  if (!panel.state.open) panel.state.open = {};
  const openState = panel.state.open;
  const filtering = !!panel.state.q;
  let panelDone = 0, panelTotal = 0;
  tab.sections.forEach((section, sectionIndex) => {
    const view = resolveSection(section);
    const title = view.charLabel ? format('gt-section-for', translate('sec-' + section.id), view.charLabel) : translate('sec-' + section.id);
    const [secDone, secTotal] = entryCount({ section, storeId: view.storeId, items: view.items, charId: activeChar });
    panelDone += secDone; panelTotal += secTotal;

    const sectionKey = "sec:" + section.id;
    const details = el("details", "secgroup");
    details.open = filtering ? true : ((sectionKey in openState) ? openState[sectionKey] : true);   // expanded by default
    const summary = el("summary", sectionIndex === 0 ? "secsum secsum-main" : "secsum",
      `<span class="secsum-title">${fmtText(title)}</span> ${chip(secDone, secTotal)}`);
    // Record collapse state synchronously on click (the toggle event is async,
    // which would let a re-render's programmatic open clobber a fresh collapse).
    summary.addEventListener("click", () => { if (!filtering) openState[sectionKey] = !((sectionKey in openState) ? openState[sectionKey] : true); });
    details.appendChild(summary);
    // Optional explanatory note under a section title (lang key note-<id>);
    // newlines become separate lines.
    const note = translate('note-' + section.id);
    if (note && note !== 'note-' + section.id) {
      const noteEl = el("p", "hint");
      note.split("\n").forEach((line, lineIndex) => { if (lineIndex) noteEl.appendChild(el("br")); noteEl.appendChild(document.createTextNode(line)); });
      details.appendChild(noteEl);
    }
    checklist(details, section, view, panel.state);
    panel.results.appendChild(details);
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
