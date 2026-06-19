/* =====================================================================
   KH Birth by Sleep — Achievement / completion tracker (bespoke engine;
   every other game uses the generic js/kh-tracker.js).

   Depends on: js/kh-common.js (KH.*), js/i18n.js (i18n),
   js/kh-bbs-tracker-data.js (BBS_DATA).
   Game terms stay in English in every language; UI chrome uses i18n.

   Progress is saved in localStorage under bbs_progress_v1, keyed by item
   index within each section. The active character is shared with the
   melding calculator (bbs_meld_tracker_v1_char), and commands the user
   owns in the melding calculator are shown as unlocked here.

   Where to look (top → bottom):
     persistent state ......... blankStore / loadStore / saveStore
     command auto-unlocks ..... commandAuto (meld / mission / treasure / …)
     other cross-off cascades . unversedAutoFn / recordsAutoFn / charactersAutoFn
                                + recordsLinkFn (two-way linked rows)
     progress math ............ countMap / charCount / groupCount / *Count
     checklist table .......... checklist / toggleGroup
     per-tab renderers ........ render<Tab> + RENDERERS map
     Worlds summary ........... worldEntries / renderWorlds
     toasts / totals cache .... computeMilestones / cacheBbsTotal
   ===================================================================== */

document.addEventListener('DOMContentLoaded', async function () {
await i18n.init();

const { el, esc, fmtText, chip, bar, toast } = KH;
const translate = (key) => i18n.getMessage(key);
const format = (key, ...args) => i18n.format(key, ...args);

const CHARS = KH.BBS_CHARS;
const CHAR_LABEL = KH.BBS_CHAR_LABEL;
const PER_CHAR_SECTIONS = ["records", "characters", "unversed", "commands", "treasures"];
const SHARED_SECTIONS = ["trophies", "ingame", "reports", "stickers", "patissier", "warrior"];
// Ingredients are tracked per character (each collects them in their own
// playthrough); the flavor data list is shared but the store is per-char.

/* ---------- persistent state ---------- */
const PROGRESS_KEY = "bbs_progress_v1";
const MELD_KEY = "bbs_meld_tracker_v1";
const CHAR_KEY = MELD_KEY + "_char"; // shared with the melding calculator

function blankStore() {
  const store = { shared: {}, missions: { done: {}, rank: {} } };
  SHARED_SECTIONS.forEach(section => { store.shared[section] = {}; });
  CHARS.forEach(char => { store[char] = {}; PER_CHAR_SECTIONS.forEach(section => { store[char][section] = {}; }); store[char].flavors = {}; store[char].arena = {}; });
  return store;
}
function loadStore() {
  const store = blankStore();
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      SHARED_SECTIONS.forEach(section => { if (saved.shared && saved.shared[section]) store.shared[section] = saved.shared[section]; });
      if (saved.missions) { store.missions.done = saved.missions.done || {}; store.missions.rank = saved.missions.rank || {}; }
      CHARS.forEach(char => {
        PER_CHAR_SECTIONS.forEach(section => { if (saved[char] && saved[char][section]) store[char][section] = saved[char][section]; });
        if (saved[char] && saved[char].flavors) store[char].flavors = saved[char].flavors;
        // arena used to be a single shared section; migrate old progress to
        // every character so it isn't lost now that it's per-character.
        if (saved[char] && saved[char].arena) store[char].arena = saved[char].arena;
        else if (saved.shared && saved.shared.arena) store[char].arena = Object.assign({}, saved.shared.arena);
      });
    }
  } catch (e) { /* fresh store */ }
  return store;
}
let STORE = loadStore();
function saveStore() { try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(STORE)); } catch (e) { /* private browsing */ } }

let activeChar = (function () {
  try { const saved = localStorage.getItem(CHAR_KEY); return CHARS.includes(saved) ? saved : "terra"; }
  catch (e) { return "terra"; }
})();
function setActiveChar(char) { activeChar = char; try { localStorage.setItem(CHAR_KEY, char); } catch (e) { /* ignore */ } }

function toggleCheck(store, key) { if (store[key]) delete store[key]; else store[key] = true; saveStore(); render(); }

/* Commands owned in the melding calculator (per character). */
function meldOwned(char) {
  try {
    const raw = localStorage.getItem(MELD_KEY);
    if (!raw) return new Set();
    const saved = JSON.parse(raw);
    return new Set((saved[char] && saved[char].owned) || []);
  } catch (e) { return new Set(); }
}
/* Mission reward command for a character (reward is one name for all
   three characters, or an object keyed by character). */
function missionRewardFor(mission, char) {
  if (!mission.reward) return null;
  return typeof mission.reward === "string" ? mission.reward : (mission.reward[char] || null);
}
/* Unversed missions that count once fought — every other mission needs its
   max rank (high score) to count as complete. */
const MISSION_NO_RANK = new Set(["Flame Box", "Jellyshade", "Gluttonous Goo", "Element Cluster"]);
function missionNeedsRank(mission) { return !MISSION_NO_RANK.has(mission.name); }
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
/* Aqua's Realm of Darkness chests need a special save and aren't required
   for any achievement — kept on the Treasures tab but excluded from every
   completion total and from auto-unlocking commands (e.g. Transcendence). */
function isRealmOfDarkness(groupName) { return String(groupName || "").indexOf("Realm of Darkness") === 0; }

/* Auto-unlocked commands for a character: melded in the calculator,
   rewarded by an Unversed mission at max rank, dropped by a checked-off
   treasure chest, made as an ice-cream recipe, or earned as a Finish
   command (both share the command's name). */
function commandAuto(char) {
  const unlocked = new Map();
  const label = CHAR_LABEL[char];
  meldOwned(char).forEach(name => unlocked.set(name, "meld"));
  BBS_DATA.missions.forEach((mission, index) => {
    const reward = missionRewardFor(mission, char);
    if (reward && STORE.missions.rank[index + "-" + char] && !unlocked.has(reward)) unlocked.set(reward, "mission");
  });
  const cmdNames = new Set(BBS_DATA.perChar[char].commands.map(cmd => cmd.name));
  BBS_DATA.perChar[char].treasures.forEach((treasure, index) => {
    if (isRealmOfDarkness(treasure.g)) return;
    if (STORE[char].treasures[index] && cmdNames.has(treasure.name) && !unlocked.has(treasure.name)) unlocked.set(treasure.name, "treasure");
  });
  BBS_DATA.patissier.forEach((recipe, index) => {
    if (recipe.g === label && STORE.shared.patissier[index] && cmdNames.has(recipe.name) && !unlocked.has(recipe.name)) unlocked.set(recipe.name, "icecream");
  });
  BBS_DATA.warrior.forEach((finish, index) => {
    if (finish.g === label && STORE.shared.warrior[index] && cmdNames.has(finish.name) && !unlocked.has(finish.name)) unlocked.set(finish.name, "finish");
  });
  return unlocked;
}

/* ---------- other cross-off cascades (all keyed by item name) ----------
   Indexes + state probes shared by the auto functions below. */
const ARENA_IDX = {}; BBS_DATA.arena.forEach((stage, index) => { ARENA_IDX[stage.name] = index; });
const MISSION_IDX = {}; BBS_DATA.missions.forEach((mission, index) => { MISSION_IDX[mission.name] = index; });
const HAW_CHARS = new Set(["Winnie the Pooh", "Tigger", "Rabbit"]);
function arenaDone(stage, char) { const index = ARENA_IDX[stage]; return index != null && !!STORE[char].arena[index]; }
function missionDoneByName(name, char) { const index = MISSION_IDX[name]; return index != null && !!STORE.missions.done[index + "-" + char]; }
function recordDoneBy(char, predicate) {
  const records = viewItems(char + "-records", BBS_DATA.perChar[char].records);
  for (let index = 0; index < records.length; index++) if (predicate(records[index]) && STORE[char].records[index]) return true;
  return false;
}

/* Unversed journal: filled by clearing its Unversed mission (done is
   enough — max rank isn't needed) or any of its Mirage Arena stages. */
function unversedAutoFn(char) {
  return item => {
    if (missionDoneByName(item.name, char)) return "uvmission";
    const location = item.loc || "";
    if (location.indexOf("Mirage Arena") >= 0) {
      const stages = (location.match(/"([^"]+)"/g) || []).map(s => s.slice(1, -1));
      if (stages.some(stage => arenaDone(stage, char))) return "arena";
    }
    return null;
  };
}
/* Records: the per-Unversed mission records cross off with their mission
   (done); the Arena Mode records cross off with their arena stage. */
function recordsAutoFn(char) {
  return item => {
    if (item.g === "Unversed Missions" && missionDoneByName(item.cat, char)) return "uvmission";
    if (item.cat === "Arena Mode") {
      for (let index = 0; index < BBS_DATA.arena.length; index++) {
        const stageName = BBS_DATA.arena[index].name;
        if ((item.entry || "").indexOf(stageName) >= 0 && arenaDone(stageName, char)) return "arena";
      }
    }
    return null;
  };
}
/* Character journal: the Hundred Acre Wood trio fills when the Hunny Pot
   command board is done; Monstro fills when "Monster of the Sea" is cleared. */
function charactersAutoFn(char) {
  return item => {
    if (HAW_CHARS.has(item.name) && recordDoneBy(char, record => record.entry === "Hunny Pot Board")) return "board";
    if (item.name === "Monstro" && arenaDone("Monster of the Sea", char)) return "arena";
    return null;
  };
}
function commandAutoFn(char) { const unlocked = commandAuto(char); return item => unlocked.get(item.name) || null; }

/* Records that mirror another tab's single checkbox are *linked* (two-way)
   rather than read-only auto: ticking the record ticks its arena stage /
   Unversed mission, and vice-versa. */
function recordsLinkFn(char) {
  return item => {
    if (item.g === "Unversed Missions") {
      const missionIndex = MISSION_IDX[item.cat];
      if (missionIndex != null) return { store: STORE.missions.done, key: missionIndex + "-" + char, src: "uvmission" };
    }
    if (item.cat === "Arena Mode") {
      for (let index = 0; index < BBS_DATA.arena.length; index++) {
        const stageName = BBS_DATA.arena[index].name;
        if ((item.entry || "").indexOf(stageName) >= 0) return { store: STORE[char].arena, key: ARENA_IDX[stageName], src: "arena" };
      }
    }
    return null;
  };
}

/* Sections whose completion is auto-credited (read-only) from other tabs… */
const SECTION_AUTO = {
  commands: commandAutoFn, characters: charactersAutoFn, unversed: unversedAutoFn
};
/* …and sections whose rows are two-way linked to another tab's store. */
const SECTION_LINK = { records: recordsLinkFn };

function autoBadge(source) {
  return {
    meld: { label: translate('bt-badge-meld'), tip: translate('bt-badge-meld-tip') },
    mission: { label: translate('bt-badge-mission'), tip: translate('bt-badge-mission-tip') },
    treasure: { label: translate('bt-badge-treasure'), tip: translate('bt-badge-treasure-tip') },
    recipe: { label: translate('bt-badge-recipe'), tip: translate('bt-badge-recipe-tip') },
    icecream: { label: translate('bt-badge-icecream'), tip: translate('bt-badge-icecream-tip') },
    finish: { label: translate('bt-badge-finish'), tip: translate('bt-badge-finish-tip') },
    uvmission: { label: translate('bt-badge-uvmission'), tip: translate('bt-badge-uvmission-tip') },
    arena: { label: translate('bt-badge-arena'), tip: translate('bt-badge-arena-tip') },
    board: { label: translate('bt-badge-board'), tip: translate('bt-badge-board-tip') }
  }[source];
}

/* Ice-cream recipe ingredients. Each recipe slot (i1..i4) carries a
   baked-in quantity, e.g. "Crystal Sugar x3". Returns a map of ingredient
   name -> the recipes that use it [{ pIdx, qty, char }] across all three
   characters; obtaining an ingredient is shared, so any character's
   completed recipe counts it as obtained. */
function recipeIngredients() {
  const ingredients = {};
  BBS_DATA.patissier.forEach((recipe, recipeIndex) => {
    ["i1", "i2", "i3", "i4"].forEach(slot => {
      const text = recipe[slot];
      if (!text) return;
      const match = String(text).match(/^(.*?)\s*x\s*(\d+)\s*$/i);
      const name = (match ? match[1] : text).trim();
      const qty = match ? parseInt(match[2], 10) : 1;
      (ingredients[name] = ingredients[name] || []).push({ pIdx: recipeIndex, qty, char: recipe.g });
    });
  });
  return ingredients;
}

/* ---------- helpers ---------- */
function stars(rank) { return `<span class="stars">${esc(rank)}</span>`; }
function starCount(rank) { return (rank.match(/★/g) || []).length; }

/* Item display text lives in the lang file under "items": { "<storeId>":
   [ { … } ] } (shared sections keyed by name, per-character sections by
   "<char>-<section>"). viewItems merges a section's raw BBS_DATA items
   with that lang text (lang wins) so the column getters below read
   editable text, while the progress/auto-unlock logic keeps using the raw
   BBS_DATA (names, ranks, rewards, flavor locations stay there as ids).
   Falls back to the raw items if no lang block exists. */
function viewItems(storeId, items) {
  const langItems = (typeof i18n !== "undefined" && i18n.messages && i18n.messages.items) || null;
  const rows = langItems && langItems[storeId];
  return rows ? items.map((item, index) => Object.assign({}, item, rows[index] || {})) : items;
}

/* ---------- progress math ---------- */
function countMap(map, length) { let done = 0; for (let index = 0; index < length; index++) if (map[index]) done++; return done; }
function sharedCount(section) { return [countMap(STORE.shared[section], BBS_DATA[section].length), BBS_DATA[section].length]; }
function charCount(char, section) {
  const items = BBS_DATA.perChar[char][section];
  if (section === "treasures") {   // exclude Aqua's Realm of Darkness chests
    let done = 0, total = 0;
    items.forEach((item, index) => { if (isRealmOfDarkness(item.g)) return; total++; if (STORE[char].treasures[index]) done++; });
    return [done, total];
  }
  const autoFn = SECTION_AUTO[section] ? SECTION_AUTO[section](char) : null;
  const linkFn = SECTION_LINK[section] ? SECTION_LINK[section](char) : null;
  if (!autoFn && !linkFn) return [countMap(STORE[char][section], items.length), items.length];
  const merged = viewItems(char + "-" + section, items);
  let done = 0;
  merged.forEach((item, index) => {
    const link = linkFn && linkFn(item);
    if (link) { if (link.store[link.key]) done++; }
    else if (STORE[char][section][index] || (autoFn && autoFn(item))) done++;
  });
  return [done, items.length];
}
function groupCount(section, label) {
  let done = 0, total = 0;
  BBS_DATA[section].forEach((item, index) => { if (item.g === label) { total++; if (STORE.shared[section][index]) done++; } });
  return [done, total];
}
function missionsCount(char, map) {
  let done = 0;
  BBS_DATA.missions.forEach((mission, index) => { if (map[index + "-" + char]) done++; });
  return [done, BBS_DATA.missions.length];
}
/* Savage Slayer needs ONE character to max-rank every Unversed mission, so
   progress is the best single character's max-ranked count (not any-character
   per mission). */
function bestCharMissionsRank() {
  let best = 0;
  CHARS.forEach(char => {
    let done = 0;
    BBS_DATA.missions.forEach((mission, index) => { if (STORE.missions.rank[index + "-" + char]) done++; });
    if (done > best) best = done;
  });
  return [best, BBS_DATA.missions.length];
}
/* Best single character's progress through a per-character group (e.g.
   Pâtissier needs one character to make all of their ice-cream recipes). */
function bestCharGroup(section) {
  let best = null;
  CHARS.forEach(char => {
    const count = groupCount(section, CHAR_LABEL[char]);
    if (!best || count[0] > best[0]) best = count;
  });
  return best || [0, 0];
}
/* Arena stages cleared by a character (the store is per-character now). */
function arenaCount(char) { return [countMap(STORE[char].arena, BBS_DATA.arena.length), BBS_DATA.arena.length]; }
/* Arena trophies are global — a stage counts once any character clears it. */
function arenaByStars(starsNeeded) {
  let done = 0, total = 0;
  BBS_DATA.arena.forEach((stage, index) => { if (starCount(stage.rank) === starsNeeded) { total++; if (CHARS.some(char => STORE[char].arena[index])) done++; } });
  return [done, total];
}
/* Ingredients a character actually needs (used by one of *their* recipes —
   not merely collectible in their playthrough), done when collected or
   auto-credited by one of that character's completed recipes. */
function flavorsEligible(char) {
  const label = CHAR_LABEL[char];
  const ingredients = recipeIngredients();
  const store = STORE[char].flavors;
  let done = 0, total = 0;
  BBS_DATA.flavors.forEach((flavor, index) => {
    const recipes = (ingredients[flavor.name] || []).filter(use => use.char === label);
    if (!recipes.length) return;
    total++;
    if (store[index] || recipes.some(use => STORE.shared.patissier[use.pIdx])) done++;
  });
  return [done, total];
}
function overallChar(char) {
  let done = 0, total = 0;
  PER_CHAR_SECTIONS.forEach(section => { const [secDone, secTotal] = charCount(char, section); done += secDone; total += secTotal; });
  ["warrior", "patissier", "stickers"].forEach(section => {
    const [groupDone, groupTotal] = groupCount(section, CHAR_LABEL[char]); done += groupDone; total += groupTotal;
  });
  const [flavorDone, flavorTotal] = flavorsEligible(char); done += flavorDone; total += flavorTotal;
  const [arenaDoneCount, arenaTotal] = arenaCount(char); done += arenaDoneCount; total += arenaTotal;
  const [missionDone] = missionsCount(char, STORE.missions.done); done += missionDone; total += BBS_DATA.missions.length;
  return [done, total];
}

/* Trophies whose progress can be computed from tracked sections. */
const TROPHY_AUTO = {
  "Savage Slayer": () => bestCharMissionsRank(),
  "Profiler": () => sharedCount("reports"),
  "Collector": () => sharedCount("stickers"),
  "Pâtissier": () => bestCharGroup("patissier"),
  "The Warrior: Terra": () => groupCount("warrior", "Terra"),
  "The Warrior: Ventus": () => groupCount("warrior", "Ventus"),
  "The Warrior: Aqua": () => groupCount("warrior", "Aqua"),
  "Pawn of the Arena": () => arenaByStars(1),
  "Knight of the Arena": () => arenaByStars(2),
  "Queen of the Arena": () => arenaByStars(3),
  "King of the Arena": () => arenaByStars(4)
};

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

/* ---------- generic checklist table ---------- */
/* cols: [{th, get(it), cls?, name?:true}] — first col is the checkbox.
   opts: groupFilter (only show items of this group, headers hidden),
   itemFilter(it) (hide ineligible items), auto(it) -> source or null,
   link(it) -> {store,key,src} binds the row to another tab's store so it
   reads/writes there (two-way sync, editable), groupIcons (prefix group
   headers with their command-type icon). */
function toggleGroup(items, store, groupName, opts) {
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
  saveStore();
  render();
}
function checklist(container, items, store, cols, panelState, opts) {
  opts = opts || {};
  const table = el("table");
  table.innerHTML = `<thead><tr><th></th>${cols.map(col => `<th>${col.th}</th>`).join("")}</tr></thead>`;
  const tbody = el("tbody");
  let shownCount = 0;
  const query = panelState.q.toLowerCase();
  let lastGroup = null;
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
      const groupCell = el("td", "grp-title");
      groupCell.colSpan = cols.length + 1;
      groupCell.style.borderBottom = "1px solid var(--line)";
      groupCell.appendChild(el("span", null, (opts.groupIcons ? groupIconImg(groupName) : "") + fmtText(groupName)));
      const toggleAllBtn = el("button", "grpbtn", translate('bt-toggle-all'));
      toggleAllBtn.onclick = () => toggleGroup(items, store, groupName, opts);
      groupCell.appendChild(toggleAllBtn);
      groupRow.appendChild(groupCell);
      tbody.appendChild(groupRow);
    }
    const row = el("tr", done ? "donerow" : null);
    const checkCell = el("td", "chkcell");
    const checkbox = el("input", "chk");
    checkbox.type = "checkbox";
    checkbox.checked = done;
    if (link) {
      checkbox.addEventListener("change", () => toggleCheck(link.store, link.key));
    } else if (auto && !store[index]) {
      checkbox.disabled = true;
      checkbox.title = autoBadge(auto).tip;
    } else {
      checkbox.addEventListener("change", () => toggleCheck(store, index));
    }
    checkCell.appendChild(checkbox);
    row.appendChild(checkCell);
    cols.forEach(col => {
      let html = col.name ? `<span class="itemname">${fmtText(col.get(item))}</span>` : esc(col.get(item));
      if (col.name && badgeSource) {
        const badge = autoBadge(badgeSource);
        html += ` <span class="srcbadge" title="${badge.tip}">${badge.label}</span>`;
      }
      row.appendChild(el("td", col.cls || null, html));
    });
    tbody.appendChild(row);
    shownCount++;
  });
  table.appendChild(tbody);
  if (shownCount) container.appendChild(table);
  else container.appendChild(el("div", "empty", translate('bt-nothing')));
}

/* ---------- panel skeletons ---------- */
const TAB_IDS = ["trophies", "worlds", "commands", "unversed", "records", "characters", "treasures", "reports", "finish", "icecream", "arena"];
const PANEL = {};   // id -> {state:{q,hide}, results, count, bar, dash}

function setCount(panel, done, total) {
  panel.count.textContent = format('bt-count', done, total);
  panel.bar.className = "dashbar" + (done >= total && total > 0 ? " full" : "");
  panel.bar.firstChild.style.width = (total ? Math.round(100 * done / total) : 0) + "%";
}

function buildPanels() {
  TAB_IDS.forEach(id => {
    const panel = document.getElementById("tab-" + id);
    panel.innerHTML = "";
    const panelState = (PANEL[id] && PANEL[id].state) || { q: "", hide: false };
    const toolbar = el("div", "toolbar");
    const filterInput = el("input");
    filterInput.type = "text"; filterInput.placeholder = translate('bt-filter'); filterInput.style.maxWidth = "240px"; filterInput.value = panelState.q;
    filterInput.addEventListener("input", () => { panelState.q = filterInput.value.trim(); render(); });
    const hideLabel = el("label", "hidelbl");
    const hideToggle = el("input", "chk");
    hideToggle.type = "checkbox"; hideToggle.checked = panelState.hide;
    hideToggle.addEventListener("change", () => { panelState.hide = hideToggle.checked; render(); });
    hideLabel.appendChild(hideToggle);
    hideLabel.appendChild(document.createTextNode(" " + translate('bt-hide-done')));
    const countBadge = el("span", "countbadge");
    const progressBar = el("span", "dashbar");
    progressBar.appendChild(el("i"));
    toolbar.appendChild(filterInput); toolbar.appendChild(hideLabel); toolbar.appendChild(countBadge); toolbar.appendChild(progressBar);
    if (id === "trophies") {
      const resetBtn = el("button", "clearbtn", translate('bt-reset'));
      resetBtn.onclick = () => {
        if (confirm(translate('bt-reset-confirm'))) { STORE = blankStore(); saveStore(); render(); }
      };
      toolbar.appendChild(resetBtn);
    }
    const dash = id === "trophies" ? el("div", "dash") : null;
    if (dash) panel.appendChild(dash);
    panel.appendChild(toolbar);
    const results = el("div", "results");
    panel.appendChild(results);
    PANEL[id] = { state: panelState, results, count: countBadge, bar: progressBar, dash };
  });
}

/* A dashboard label cell that links to its tab. */
function dashLabelCell(label, tabId) {
  const cell = el("td");
  if (tabId && TAB_IDS.indexOf(tabId) >= 0) {
    const link = el("a", "dashlink");
    link.href = "#"; link.innerHTML = fmtText(label);
    link.onclick = event => { event.preventDefault(); bbsSelectTab(tabId); };
    cell.appendChild(link);
  } else { cell.innerHTML = fmtText(label); }
  return cell;
}

/* ---------- per-tab renderers ---------- */
function renderTrophies(panel) {
  // dashboard: what is missing, per character and shared
  const dash = panel.dash; dash.innerHTML = "";
  dash.appendChild(el("div", "grp-title", fmtText(translate('bt-dash-title'))));
  const charTable = el("table", "dash-table");
  charTable.innerHTML = `<thead><tr><th>${translate('bt-dash-section')}</th><th class="c-terra">Terra</th><th class="c-ventus">Ventus</th><th class="c-aqua">Aqua</th></tr></thead>`;
  const charBody = el("tbody");
  const charRows = [
    [translate('tabbtn-commands'), char => charCount(char, "commands"), "commands"],
    [translate('tabbtn-records'), char => charCount(char, "records"), "records"],
    [translate('tabbtn-characters'), char => charCount(char, "characters"), "characters"],
    [translate('bt-journal-title'), char => charCount(char, "unversed"), "unversed"],
    [translate('tabbtn-treasures'), char => charCount(char, "treasures"), "treasures"],
    [translate('bt-dash-stickers'), char => groupCount("stickers", CHAR_LABEL[char]), "treasures"],
    [translate('tabbtn-finish'), char => groupCount("warrior", CHAR_LABEL[char]), "finish"],
    [translate('bt-recipes-title'), char => groupCount("patissier", CHAR_LABEL[char]), "icecream"],
    [translate('bt-ingredients-title'), char => flavorsEligible(char), "icecream"],
    [translate('tabbtn-arena'), char => arenaCount(char), "arena"],
    [translate('bt-dash-missions-done'), char => missionsCount(char, STORE.missions.done), "unversed"],
    [translate('bt-dash-missions-rank'), char => missionsCount(char, STORE.missions.rank), "unversed"]
  ];
  charRows.forEach(([label, get, tabId]) => {
    const row = el("tr");
    row.appendChild(dashLabelCell(label, tabId));
    CHARS.forEach(char => { const [done, total] = get(char); row.appendChild(el("td", "c-" + char, bar(done, total))); });
    charBody.appendChild(row);
  });
  charTable.appendChild(charBody);
  dash.appendChild(charTable);

  const sharedTable = el("table", "dash-table");
  sharedTable.innerHTML = `<thead><tr><th>${translate('bt-dash-shared')}</th><th></th></tr></thead>`;
  const sharedBody = el("tbody");
  [["tabbtn-trophies", "trophies", "trophies"], ["bt-ingame-title", "ingame", "trophies"], ["tabbtn-reports", "reports", "reports"]]
    .forEach(([labelKey, section, tabId]) => {
      const [done, total] = sharedCount(section);
      const row = el("tr");
      row.appendChild(dashLabelCell(translate(labelKey), tabId));
      row.appendChild(el("td", null, bar(done, total)));
      sharedBody.appendChild(row);
    });
  const [savageDone, savageTotal] = bestCharMissionsRank();
  const savageRow = el("tr");
  savageRow.appendChild(dashLabelCell(translate('bt-dash-savage'), "unversed"));
  savageRow.appendChild(el("td", null, bar(savageDone, savageTotal)));
  sharedBody.appendChild(savageRow);
  sharedTable.appendChild(sharedBody);
  dash.appendChild(sharedTable);

  const container = panel.results;
  container.appendChild(el("div", "grp-title", fmtText(translate('bt-trophies-title'))));
  checklist(container, viewItems("trophies", BBS_DATA.trophies), STORE.shared.trophies, [
    { th: translate('bt-th-rarity'), get: item => item.rarity, cls: "raritycell" },
    { th: translate('bt-th-trophy'), get: item => item.name, name: true },
    { th: translate('bt-th-desc'), get: item => item.desc },
    { th: translate('bt-th-progress'), get: () => "" }
  ], panel.state);
  // decorate rarity + progress cells (post-pass keeps checklist generic)
  container.querySelectorAll("tbody tr").forEach(row => {
    const cells = row.children;
    if (cells.length < 5) return;
    const rarity = cells[1].textContent.trim();
    if (rarity) cells[1].innerHTML = `<span class="rarity ${rarity.toLowerCase()}">${esc(rarity)}</span>`;
    const name = cells[2].textContent.trim();
    if (TROPHY_AUTO[name]) { const [done, total] = TROPHY_AUTO[name](); cells[4].innerHTML = chip(done, total); }
  });

  container.appendChild(el("div", "sub-title", fmtText(translate('bt-ingame-title'))));
  container.appendChild(el("p", "hint", translate('bt-ingame-hint')));
  checklist(container, viewItems("ingame", BBS_DATA.ingame), STORE.shared.ingame, [
    { th: translate('bt-th-trophy'), get: item => item.name, name: true },
    { th: translate('bt-th-condition'), get: item => item.how },
    { th: translate('bt-th-reward'), get: item => item.reward }
  ], panel.state);

  const [trophyDone, trophyTotal] = sharedCount("trophies"), [ingameDone, ingameTotal] = sharedCount("ingame");
  setCount(panel, trophyDone + ingameDone, trophyTotal + ingameTotal);
}

function renderCommands(panel) {
  const container = panel.results;
  const items = viewItems(activeChar + "-commands", BBS_DATA.perChar[activeChar].commands);
  const auto = commandAuto(activeChar);
  container.appendChild(el("div", "grp-title", fmtText(format('bt-commands-for', CHAR_LABEL[activeChar]))));
  checklist(container, items, STORE[activeChar].commands, [
    { th: translate('bt-th-command'), get: item => item.name, name: true },
    { th: translate('bt-th-obtain'), get: item => item.how || "" }
  ], panel.state, { auto: item => auto.get(item.name) || null, groupIcons: true });
  container.appendChild(el("p", "legend", translate('bt-legend-commands')));
  const [done, total] = charCount(activeChar, "commands");
  setCount(panel, done, total);
}

function renderUnversed(panel) {
  const container = panel.results;
  const char = activeChar, label = CHAR_LABEL[char];

  container.appendChild(el("div", "grp-title", fmtText(translate('bt-missions-title'))));
  container.appendChild(el("p", "hint", format('bt-missions-hint', label)));
  const table = el("table");
  table.innerHTML = `<thead><tr><th>${format('bt-th-done', label)}</th><th>${format('bt-th-maxrank', label)}</th><th>${translate('bt-th-unversed')}</th><th>${translate('bt-th-world')}</th><th>${translate('bt-th-area')}</th><th>${translate('bt-th-requirement')}</th><th>${translate('bt-th-reward')}</th></tr></thead>`;
  const tbody = el("tbody");
  const query = panel.state.q.toLowerCase();
  viewItems("missions", BBS_DATA.missions).forEach((mission, index) => {
    const doneKey = index + "-" + char, rankKey = index + "-" + char;
    const reward = missionRewardFor(mission, char);
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
      checkbox.addEventListener("change", () => toggleCheck(STORE.missions[which], which === "done" ? doneKey : rankKey));
      cell.appendChild(checkbox);
      row.appendChild(cell);
    });
    const rewardHtml = reward ? `<span class="rewardbadge" title="${translate('bt-reward-tip')}">${esc(reward)}</span>` : '<span class="crystal-tag">—</span>';
    [`<span class="itemname">${esc(mission.name)}</span>`, esc(mission.world), esc(missionArea(mission, char)), esc(mission.req), rewardHtml]
      .forEach(html => row.appendChild(el("td", null, html)));
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  container.appendChild(table);
  const [savageDone, savageTotal] = bestCharMissionsRank();
  container.appendChild(el("p", "legend", format('bt-legend-missions', savageDone, savageTotal)));

  container.appendChild(el("div", "sub-title", fmtText(format('bt-journal-for', label))));
  checklist(container, viewItems(char + "-unversed", BBS_DATA.perChar[char].unversed), STORE[char].unversed, [
    { th: translate('bt-th-enemy'), get: item => item.name, name: true },
    { th: translate('bt-th-location'), get: item => item.loc || "" }
  ], panel.state, { auto: unversedAutoFn(char) });

  const [journalDone, journalTotal] = charCount(char, "unversed");
  const [missionDone] = missionsCount(char, STORE.missions.done);
  setCount(panel, journalDone + missionDone, journalTotal + BBS_DATA.missions.length);
}

function perCharListRenderer(section, titleKey, cols) {
  return function (panel) {
    const container = panel.results;
    container.appendChild(el("div", "grp-title", fmtText(format(titleKey, CHAR_LABEL[activeChar]))));
    const opts = {};
    if (SECTION_AUTO[section]) opts.auto = SECTION_AUTO[section](activeChar);
    if (SECTION_LINK[section]) opts.link = SECTION_LINK[section](activeChar);
    checklist(container, viewItems(activeChar + "-" + section, BBS_DATA.perChar[activeChar][section]), STORE[activeChar][section], cols(), panel.state, opts);
    if (section === "records") container.appendChild(el("p", "legend", translate('bt-legend-records')));
    const [done, total] = charCount(activeChar, section);
    setCount(panel, done, total);
  };
}

const renderRecords = perCharListRenderer("records", 'bt-records-for', () => [
  { th: translate('bt-th-category'), get: item => item.cat, name: true },
  { th: translate('bt-th-world'), get: item => item.world || "" },
  { th: translate('bt-th-entry'), get: item => item.entry || "" }
]);
const renderCharacters = perCharListRenderer("characters", 'bt-characters-for', () => [
  { th: translate('bt-th-character'), get: item => item.name, name: true },
  { th: translate('bt-th-unlock'), get: item => item.how || "" }
]);
/* Treasures + that character's stickers in one tab. Checking a treasure
   whose reward is a command marks the command unlocked (see commandAuto). */
function renderTreasures(panel) {
  const container = panel.results;
  const label = CHAR_LABEL[activeChar];
  container.appendChild(el("div", "grp-title", fmtText(format('bt-treasures-for', label))));
  checklist(container, viewItems(activeChar + "-treasures", BBS_DATA.perChar[activeChar].treasures), STORE[activeChar].treasures, [
    { th: translate('bt-th-reward'), get: item => item.name, name: true },
    { th: translate('bt-th-area'), get: item => item.area || "" },
    { th: translate('bt-th-where'), get: item => item.how || "" }
  ], panel.state);
  container.appendChild(el("p", "legend", translate('bt-legend-treasures')));

  container.appendChild(el("div", "sub-title", fmtText(format('bt-stickers-for', label))));
  checklist(container, viewItems("stickers", BBS_DATA.stickers), STORE.shared.stickers, [
    { th: translate('bt-th-sticker'), get: item => item.name, name: true },
    { th: translate('bt-th-world'), get: item => item.world || "" },
    { th: translate('bt-th-area'), get: item => item.area || "" },
    { th: translate('bt-th-obtain'), get: item => item.how || "" }
  ], panel.state, { groupFilter: label });

  const [treasureDone, treasureTotal] = charCount(activeChar, "treasures");
  const [stickerDone, stickerTotal] = groupCount("stickers", label);
  setCount(panel, treasureDone + stickerDone, treasureTotal + stickerTotal);
}

function renderReports(panel) {
  checklist(panel.results, viewItems("reports", BBS_DATA.reports), STORE.shared.reports, [
    { th: translate('bt-th-report'), get: item => item.name, name: true },
    { th: translate('bt-th-obtain'), get: item => item.how || "" }
  ], panel.state);
  const [done, total] = sharedCount("reports");
  setCount(panel, done, total);
}

function renderFinish(panel) {
  const container = panel.results;
  container.appendChild(el("div", "grp-title", fmtText(format('bt-finish-for', CHAR_LABEL[activeChar]))));
  checklist(container, viewItems("warrior", BBS_DATA.warrior), STORE.shared.warrior, [
    { th: translate('bt-th-finish'), get: item => item.name, name: true },
    { th: translate('bt-th-equipped'), get: item => item.equip || "" },
    { th: translate('bt-th-unlock'), get: item => item.how || "" }
  ], panel.state, { groupFilter: CHAR_LABEL[activeChar] });
  const [done, total] = groupCount("warrior", CHAR_LABEL[activeChar]);
  setCount(panel, done, total);
}

function renderIcecream(panel) {
  const container = panel.results;
  container.appendChild(el("div", "grp-title", fmtText(format('bt-recipes-for', CHAR_LABEL[activeChar]))));
  checklist(container, viewItems("patissier", BBS_DATA.patissier), STORE.shared.patissier, [
    { th: translate('bt-th-icecream'), get: item => item.name, name: true },
    { th: translate('bt-th-style'), get: item => item.style || "" },
    { th: translate('bt-th-ingredients'), get: item => [item.i1, item.i2, item.i3, item.i4].filter(Boolean).join(", ") }
  ], panel.state, { groupFilter: CHAR_LABEL[activeChar] });

  // Checking an ice-cream recipe crosses off the ingredients it uses — but
  // only for the character whose recipe it is (the tab is per-character).
  // Each ingredient also shows how many this character needs.
  const ingredients = recipeIngredients();
  const ingredientAuto = item => (ingredients[item.name] || []).some(use => use.char === CHAR_LABEL[activeChar] && STORE.shared.patissier[use.pIdx]) ? "recipe" : null;
  const neededQty = name => { const use = (ingredients[name] || []).find(u => u.char === CHAR_LABEL[activeChar]); return use ? use.qty : 0; };

  container.appendChild(el("div", "sub-title", fmtText(format('bt-ingredients-for', CHAR_LABEL[activeChar]))));
  // Ingredients the character can't obtain (no location) are hidden. They are
  // grouped by spawn spot in world order, so each location note is shown once
  // (ingredients that spawn together are listed together).
  const char = activeChar;
  const locKey = { terra: "locT", ventus: "locV", aqua: "locA" }[char];
  const query = panel.state.q.toLowerCase();
  const spots = new Map();   // "world|area" -> { world, area, note, items:[] }
  viewItems("flavors", BBS_DATA.flavors).forEach((item, index) => {
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
        if (ingredient.auto) { checkbox.disabled = true; checkbox.title = autoBadge("recipe").tip; }
        else checkbox.addEventListener("change", () => toggleCheck(STORE[char].flavors, ingredient.index));
        checkCell.appendChild(checkbox); row.appendChild(checkCell);
        row.appendChild(el("td", null, `<span class="itemname">${fmtText(ingredient.name)}</span>`));
        row.appendChild(el("td", "needcell", ingredient.need ? "×" + ingredient.need : ""));
        tbody.appendChild(row);
      });
      table.appendChild(tbody); container.appendChild(table);
    });

  const [recipeDone, recipeTotal] = groupCount("patissier", CHAR_LABEL[activeChar]);
  const [flavorDone, flavorTotal] = flavorsEligible(activeChar);
  setCount(panel, recipeDone + flavorDone, recipeTotal + flavorTotal);
}

function renderArena(panel) {
  const container = panel.results;
  container.appendChild(el("div", "grp-title", fmtText(format('bt-arena-for', CHAR_LABEL[activeChar]))));
  checklist(container, viewItems("arena", BBS_DATA.arena), STORE[activeChar].arena, [
    { th: translate('bt-th-stage'), get: item => item.name, name: true },
    { th: translate('bt-th-rank'), get: item => item.rank },
    { th: translate('bt-th-unlock'), get: item => item.how || "" },
    { th: translate('bt-th-bonus'), get: item => item.bonus || "" }
  ], panel.state);
  container.querySelectorAll("tbody tr").forEach(row => {
    if (row.children.length >= 3) row.children[2].innerHTML = stars(row.children[2].textContent.trim());
  });
  const [done, total] = arenaCount(activeChar);
  setCount(panel, done, total);
}

/* ---------- Worlds: every collectible grouped by world, for the active
   character, as live checkboxes bound to the same stores as their home
   tabs (so checking here checks there, and vice-versa). ---------- */
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

function worldEntries(world, char) {
  const label = CHAR_LABEL[char];
  const locKey = { terra: "locT", ventus: "locV", aqua: "locA" }[char];
  const entries = [];
  // Unversed missions. The clear ("done") row carries the per-character
  // location; missions that need their high score also get a Max Rank row
  // carrying the required score.
  viewItems("missions", BBS_DATA.missions).forEach((mission, index) => {
    if (normWorld(mission.world) !== world) return;
    const key = index + "-" + char;
    entries.push({ type: translate('bt-wtype-mission'), name: mission.name, where: missionArea(mission, char),
      done: !!STORE.missions.done[key], toggle: () => toggleCheck(STORE.missions.done, key) });
    if (missionNeedsRank(mission)) {
      entries.push({ type: translate('bt-wtype-mission'), name: mission.name,
        where: translate('bt-world-maxrank') + (mission.req ? ": " + mission.req : ""),
        done: !!STORE.missions.rank[key], toggle: () => toggleCheck(STORE.missions.rank, key) });
    }
  });
  // Treasures (per character; world is the data group). Realm of Darkness
  // chests are excluded — they don't count toward completion.
  viewItems(char + "-treasures", BBS_DATA.perChar[char].treasures).forEach((item, index) => {
    if (isRealmOfDarkness(BBS_DATA.perChar[char].treasures[index].g)) return;
    if (normWorld(BBS_DATA.perChar[char].treasures[index].g) !== world) return;
    entries.push({ type: translate('bt-wtype-treasure'), name: item.name, where: item.area || "",
      done: !!STORE[char].treasures[index], toggle: () => toggleCheck(STORE[char].treasures, index) });
  });
  // Stickers (this character's, grouped by data group = character)
  viewItems("stickers", BBS_DATA.stickers).forEach((item, index) => {
    if (BBS_DATA.stickers[index].g !== label || normWorld(item.world) !== world) return;
    entries.push({ type: translate('bt-wtype-sticker'), name: item.name, where: item.area || "",
      done: !!STORE.shared.stickers[index], toggle: () => toggleCheck(STORE.shared.stickers, index) });
  });
  // Ingredients (eligible for this character; bucketed by the world in
  // their location). Show how many this character needs + the spot.
  const ingredients = recipeIngredients();
  viewItems("flavors", BBS_DATA.flavors).forEach((item, index) => {
    const use = (ingredients[item.name] || []).find(u => u.char === label);
    if (!use || !item[locKey]) return;   // only ingredients this character's recipes need
    const location = parseLocs(item[locKey]).find(l => normWorld(l.world) === world);
    if (!location) return;
    const auto = (ingredients[item.name] || []).some(u => u.char === label && STORE.shared.patissier[u.pIdx]);
    const where = "×" + use.qty + (location.area ? " · " + location.area : "");
    entries.push({ type: translate('bt-wtype-ingredient'), name: item.name, where,
      done: !!STORE[char].flavors[index] || auto, auto: auto ? "recipe" : null,
      toggle: () => toggleCheck(STORE[char].flavors, index) });
  });
  // Records — reflect the same auto-cross-offs as the Records tab (e.g. an
  // Unversed mission cleared fills its record), so the views stay in sync.
  const recordAuto = recordsAutoFn(char);
  viewItems(char + "-records", BBS_DATA.perChar[char].records).forEach((item, index) => {
    if (normWorld(item.world) !== world) return;
    if (item.g === "Unversed Missions") return;   // shown as the mission entry above
    const auto = recordAuto(item);
    entries.push({ type: translate('bt-wtype-record'), name: item.cat, where: item.entry || "",
      done: !!STORE[char].records[index] || !!auto, auto: auto || null,
      toggle: () => toggleCheck(STORE[char].records, index) });
  });
  // Secret bosses
  const characterAuto = charactersAutoFn(char);
  SECRET_BOSSES.forEach(boss => {
    if (boss.world !== world) return;
    const index = BBS_DATA.perChar[char].characters.findIndex(c => c.name === boss.name);
    if (index < 0) return;
    const auto = characterAuto(BBS_DATA.perChar[char].characters[index]);
    entries.push({ type: translate('bt-wtype-boss'), name: boss.name, where: translate(boss.noteKey),
      done: !!STORE[char].characters[index] || !!auto, auto: auto || null,
      toggle: () => toggleCheck(STORE[char].characters, index) });
  });
  return entries;
}

function entryTable(entries) {
  const table = el("table", "wtable");
  const tbody = el("tbody");
  entries.forEach(entry => {
    const row = el("tr", entry.done ? "donerow" : null);
    const checkCell = el("td", "chkcell");
    const checkbox = el("input", "chk");
    checkbox.type = "checkbox"; checkbox.checked = entry.done;
    if (entry.auto) { checkbox.disabled = true; checkbox.title = autoBadge(entry.auto).tip; }
    else checkbox.addEventListener("change", entry.toggle);
    checkCell.appendChild(checkbox); row.appendChild(checkCell);
    let nameHtml = `<span class="itemname">${fmtText(entry.name)}</span>`;
    if (entry.auto) { const badge = autoBadge(entry.auto); nameHtml += ` <span class="srcbadge" title="${badge.tip}">${badge.label}</span>`; }
    row.appendChild(el("td", null, nameHtml));
    row.appendChild(el("td", null, fmtText(entry.where)));
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  return table;
}
function renderWorlds(panel) {
  const container = panel.results;
  if (!panel.state.open) panel.state.open = {};
  const openState = panel.state.open;   // persists collapse state across re-renders
  container.appendChild(el("div", "grp-title", fmtText(format('bt-worlds-for', CHAR_LABEL[activeChar]))));
  container.appendChild(el("p", "hint", translate('bt-worlds-hint')));
  const query = panel.state.q.toLowerCase();
  // Only a search query force-opens sections (to reveal matches); "hide
  // completed" must keep the user's collapse state.
  const filtering = !!query;
  let totalDone = 0, totalAll = 0;
  WORLDS.forEach(([world, slug]) => {
    const all = worldEntries(world, activeChar);
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
      fmtText(translate('bt-world-' + slug)) + ` <span class="wcount">${worldDone} / ${all.length}</span>`
      + (complete ? ` <span class="wbadge">${translate('bt-world-complete')}</span>` : ""));
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
      typeDetails.appendChild(entryTable(typeEntries));
      worldDetails.appendChild(typeDetails);
    });
    container.appendChild(worldDetails);
  });
  if (!totalAll) container.appendChild(el("div", "empty", translate('bt-nothing')));
  setCount(panel, totalDone, totalAll);
}

const RENDERERS = {
  trophies: renderTrophies, worlds: renderWorlds, commands: renderCommands, unversed: renderUnversed,
  records: renderRecords, characters: renderCharacters, treasures: renderTreasures,
  reports: renderReports, finish: renderFinish,
  icecream: renderIcecream, arena: renderArena
};

/* ---------- tabs / charbar / render loop ---------- */
let activeTab = "trophies";
function bbsSelectTab(id) {
  if (TAB_IDS.indexOf(id) < 0) return;
  activeTab = id;
  document.querySelectorAll(".kh .tab").forEach(tab => tab.classList.toggle("active", tab.dataset.tab === id));
  TAB_IDS.forEach(tabId => { document.getElementById("tab-" + tabId).style.display = (tabId === id) ? "block" : "none"; });
  render();
}
document.querySelectorAll(".kh .tab").forEach(tab => {
  tab.onclick = () => {
    bbsSelectTab(tab.dataset.tab);
  };
});

function syncCharButtons() {
  document.querySelectorAll(".charbtn").forEach(btn => btn.classList.toggle("on", btn.dataset.c === activeChar));
  // Drive the per-character accent scheme (Terra red, Ventus green, Aqua blue).
  document.documentElement.setAttribute("data-char", activeChar);
}
document.querySelectorAll(".charbtn").forEach(btn => {
  btn.onclick = () => { setActiveChar(btn.dataset.c); syncCharButtons(); render(); };
});

/* ---------- completion toasts ---------- */
let prevMilestones = null;
/* The set of "complete" milestones across every character: trophies whose
   tracked requirements are all met, each fully-finished tab, and each
   character's overall total. Compared between renders to toast new ones. */
function computeMilestones() {
  const milestones = new Set();
  Object.keys(TROPHY_AUTO).forEach(name => { const [done, total] = TROPHY_AUTO[name](); if (total > 0 && done >= total) milestones.add("trophy::" + name); });
  const addSharedTab = (id, done, total) => { if (total > 0 && done >= total) milestones.add("tab::" + id); };
  { const [trophyDone, trophyTotal] = sharedCount("trophies"), [ingameDone, ingameTotal] = sharedCount("ingame"); addSharedTab("trophies", trophyDone + ingameDone, trophyTotal + ingameTotal); }
  { const [done, total] = sharedCount("reports"); addSharedTab("reports", done, total); }
  CHARS.forEach(char => {
    const label = CHAR_LABEL[char];
    const addCharTab = (id, done, total) => { if (total > 0 && done >= total) milestones.add("tab::" + id + "::" + char); };
    ["commands", "records", "characters"].forEach(section => { const [done, total] = charCount(char, section); addCharTab(section, done, total); });
    { const [done, total] = arenaCount(char); addCharTab("arena", done, total); }
    { const [journalDone, journalTotal] = charCount(char, "unversed"); const [missionDone] = missionsCount(char, STORE.missions.done); addCharTab("unversed", journalDone + missionDone, journalTotal + BBS_DATA.missions.length); }
    { const [treasureDone, treasureTotal] = charCount(char, "treasures"); const [stickerDone, stickerTotal] = groupCount("stickers", label); addCharTab("treasures", treasureDone + stickerDone, treasureTotal + stickerTotal); }
    { const [done, total] = groupCount("warrior", label); addCharTab("finish", done, total); }
    { const [recipeDone, recipeTotal] = groupCount("patissier", label); const [flavorDone, flavorTotal] = flavorsEligible(char); addCharTab("icecream", recipeDone + flavorDone, recipeTotal + flavorTotal); }
    { const [overallDone, overallTotal] = overallChar(char); if (overallTotal > 0 && overallDone >= overallTotal) milestones.add("overall::" + char); }
  });
  return milestones;
}
function milestoneToast(key) {
  const parts = key.split("::");
  if (parts[0] === "trophy") return toast(format('bt-toast-trophy', parts[1]), "🏆");
  if (parts[0] === "overall") return toast(format('bt-toast-overall', CHAR_LABEL[parts[1]]), "🎉");
  const label = translate('tabbtn-' + parts[1]);
  return toast(parts[2] ? format('bt-toast-tab-char', label, CHAR_LABEL[parts[2]]) : format('bt-toast-tab', label), "✅");
}
function checkMilestones() {
  const current = computeMilestones();
  if (prevMilestones) current.forEach(key => { if (!prevMilestones.has(key)) milestoneToast(key); });
  prevMilestones = current;   // first run seeds without toasting
}

/* Cache the full 100% total (every character's sections — which already
   include the auto-cross-offs — plus the shared sections and Savage Slayer)
   so the landing page can show an accurate number without re-deriving all
   the auto logic. Only writes when the value changes. */
function cacheBbsTotal() {
  let done = 0, total = 0;
  CHARS.forEach(char => { const [charDone, charTotal] = overallChar(char); done += charDone; total += charTotal; });
  ["trophies", "ingame", "reports"].forEach(section => { const [secDone, secTotal] = sharedCount(section); done += secDone; total += secTotal; });
  const [savageDone, savageTotal] = bestCharMissionsRank(); done += savageDone; total += savageTotal;
  try {
    const value = JSON.stringify([done, total]);
    if (localStorage.getItem("bbs_totals_v1") !== value) localStorage.setItem("bbs_totals_v1", value);
  } catch (e) { /* private browsing */ }
}

function render() {
  const panel = PANEL[activeTab];
  panel.results.innerHTML = "";
  if (panel.dash) panel.dash.innerHTML = "";
  RENDERERS[activeTab](panel);
  const [done, total] = overallChar(activeChar);
  document.getElementById("overallNote").textContent = format('bt-overall', CHAR_LABEL[activeChar], done, total, total ? Math.round(100 * done / total) : 0);
  checkMilestones();
  cacheBbsTotal();
}

buildPanels();
syncCharButtons();
render();

document.addEventListener('i18n:updated', () => { buildPanels(); render(); });

/* Live-sync when the melding calculator (or another tab) changes storage. */
window.addEventListener("storage", (event) => {
  if (event.key === PROGRESS_KEY) STORE = loadStore();
  if (event.key === CHAR_KEY && CHARS.includes(event.newValue)) { activeChar = event.newValue; syncCharButtons(); }
  if (event.key === PROGRESS_KEY || event.key === MELD_KEY || event.key === CHAR_KEY) render();
});

});
