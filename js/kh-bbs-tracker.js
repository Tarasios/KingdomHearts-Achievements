/* =====================================================================
   KH Birth by Sleep — Achievement / completion tracker
   Depends on: js/i18n.js (i18n), js/kh-bbs-tracker-data.js (BBS_DATA).
   Game terms stay in English in every language; UI chrome uses i18n.

   Progress is saved in localStorage under bbs_progress_v1, keyed by
   item index within each section. The active character is shared with
   the melding calculator (bbs_meld_tracker_v1_char), and commands the
   user owns in the melding calculator are shown as unlocked here.
   ===================================================================== */

document.addEventListener('DOMContentLoaded', async function () {
await i18n.init();

const t = (key) => i18n.getMessage(key);
const fmt = (key, ...args) => i18n.format(key, ...args);

const CHARS = ["terra", "ventus", "aqua"];
const CHAR_LABEL = { terra: "Terra", ventus: "Ventus", aqua: "Aqua" };
const PER_CHAR_SECTIONS = ["records", "characters", "unversed", "commands", "treasures"];
const SHARED_SECTIONS = ["trophies", "ingame", "reports", "stickers", "patissier", "warrior"];
// Ingredients are tracked per character (each collects them in their own
// playthrough); the flavor data list is shared but the store is per-char.

/* ---------- persistent state ---------- */
const KEY = "bbs_progress_v1";
const MELD_KEY = "bbs_meld_tracker_v1";
const CHAR_KEY = MELD_KEY + "_char"; // shared with the melding calculator

function blankStore() {
  const s = { shared: {}, missions: { done: {}, rank: {} } };
  SHARED_SECTIONS.forEach(k => { s.shared[k] = {}; });
  CHARS.forEach(c => { s[c] = {}; PER_CHAR_SECTIONS.forEach(k => { s[c][k] = {}; }); s[c].flavors = {}; s[c].arena = {}; });
  return s;
}
function loadStore() {
  const s = blankStore();
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const o = JSON.parse(raw);
      SHARED_SECTIONS.forEach(k => { if (o.shared && o.shared[k]) s.shared[k] = o.shared[k]; });
      if (o.missions) { s.missions.done = o.missions.done || {}; s.missions.rank = o.missions.rank || {}; }
      CHARS.forEach(c => {
        PER_CHAR_SECTIONS.forEach(k => { if (o[c] && o[c][k]) s[c][k] = o[c][k]; });
        if (o[c] && o[c].flavors) s[c].flavors = o[c].flavors;
        // arena used to be a single shared section; migrate old progress to
        // every character so it isn't lost now that it's per-character.
        if (o[c] && o[c].arena) s[c].arena = o[c].arena;
        else if (o.shared && o.shared.arena) s[c].arena = Object.assign({}, o.shared.arena);
      });
    }
  } catch (e) { /* fresh store */ }
  return s;
}
let STORE = loadStore();
function saveStore() { try { localStorage.setItem(KEY, JSON.stringify(STORE)); } catch (e) { /* private browsing */ } }

let activeChar = (function () {
  try { const c = localStorage.getItem(CHAR_KEY); return CHARS.includes(c) ? c : "terra"; }
  catch (e) { return "terra"; }
})();
function setActiveChar(c) { activeChar = c; try { localStorage.setItem(CHAR_KEY, c); } catch (e) { /* ignore */ } }

function toggle(map, id) { if (map[id]) delete map[id]; else map[id] = true; saveStore(); render(); }

/* Commands owned in the melding calculator (per character). */
function meldOwned(char) {
  try {
    const raw = localStorage.getItem(MELD_KEY);
    if (!raw) return new Set();
    const o = JSON.parse(raw);
    return new Set((o[char] && o[char].owned) || []);
  } catch (e) { return new Set(); }
}
/* Mission reward command for a character (reward is one name for all
   three characters, or an object keyed by character). */
function missionRewardFor(m, char) {
  if (!m.reward) return null;
  return typeof m.reward === "string" ? m.reward : (m.reward[char] || null);
}
/* Unversed missions that count once fought — every other mission needs its
   max rank (high score) to count as complete. */
const MISSION_NO_RANK = new Set(["Flame Box", "Jellyshade", "Gluttonous Goo", "Element Cluster"]);
function missionNeedsRank(m) { return !MISSION_NO_RANK.has(m.name); }
/* A mission's location for one character. Some areas are stored as a single
   string covering all three (e.g. "Ballroom (T/A) Wardrobe Room (V)"); pick
   the segment whose initials include this character's. */
function missionArea(m, char) {
  const init = { terra: "T", ventus: "V", aqua: "A" }[char];
  const s = m.area || "";
  if (s.indexOf("(") < 0) return s;
  const re = /([^()]+?)\s*\(([^)]*)\)/g; let mm;
  while ((mm = re.exec(s))) {
    if (mm[2].split("/").map(x => x.trim()).indexOf(init) >= 0) return mm[1].trim();
  }
  return s;
}
/* Aqua's Realm of Darkness chests need a special save and aren't required
   for any achievement — kept on the Treasures tab but excluded from every
   completion total and from auto-unlocking commands (e.g. Transcendence). */
function isRealmOfDarkness(g) { return String(g || "").indexOf("Realm of Darkness") === 0; }

/* Auto-unlocked commands for a character: melded in the calculator,
   rewarded by an Unversed mission at max rank, dropped by a checked-off
   treasure chest, made as an ice-cream recipe, or earned as a Finish
   command (both share the command's name). */
function commandAuto(char) {
  const m = new Map();
  const label = CHAR_LABEL[char];
  meldOwned(char).forEach(n => m.set(n, "meld"));
  BBS_DATA.missions.forEach((ms, i) => {
    const r = missionRewardFor(ms, char);
    if (r && STORE.missions.rank[i + "-" + char] && !m.has(r)) m.set(r, "mission");
  });
  const cmdNames = new Set(BBS_DATA.perChar[char].commands.map(c => c.name));
  BBS_DATA.perChar[char].treasures.forEach((tr, i) => {
    if (isRealmOfDarkness(tr.g)) return;
    if (STORE[char].treasures[i] && cmdNames.has(tr.name) && !m.has(tr.name)) m.set(tr.name, "treasure");
  });
  BBS_DATA.patissier.forEach((r, i) => {
    if (r.g === label && STORE.shared.patissier[i] && cmdNames.has(r.name) && !m.has(r.name)) m.set(r.name, "icecream");
  });
  BBS_DATA.warrior.forEach((w, i) => {
    if (w.g === label && STORE.shared.warrior[i] && cmdNames.has(w.name) && !m.has(w.name)) m.set(w.name, "finish");
  });
  return m;
}

/* ---------- other cross-off cascades (all keyed by item name) ----------
   Indexes + state probes shared by the auto functions below. */
const ARENA_IDX = {}; BBS_DATA.arena.forEach((a, i) => { ARENA_IDX[a.name] = i; });
const MISSION_IDX = {}; BBS_DATA.missions.forEach((m, i) => { MISSION_IDX[m.name] = i; });
const HAW_CHARS = new Set(["Winnie the Pooh", "Tigger", "Rabbit"]);
function arenaDone(stage, char) { const i = ARENA_IDX[stage]; return i != null && !!STORE[char].arena[i]; }
function missionDoneByName(name, char) { const i = MISSION_IDX[name]; return i != null && !!STORE.missions.done[i + "-" + char]; }
function recordDoneBy(char, pred) {
  const merged = viewItems(char + "-records", BBS_DATA.perChar[char].records);
  for (let i = 0; i < merged.length; i++) if (pred(merged[i]) && STORE[char].records[i]) return true;
  return false;
}

/* Unversed journal: filled by clearing its Unversed mission (done is
   enough — max rank isn't needed) or any of its Mirage Arena stages. */
function unversedAutoFn(char) {
  return it => {
    if (missionDoneByName(it.name, char)) return "uvmission";
    const loc = it.loc || "";
    if (loc.indexOf("Mirage Arena") >= 0) {
      const stages = (loc.match(/"([^"]+)"/g) || []).map(s => s.slice(1, -1));
      if (stages.some(s => arenaDone(s, char))) return "arena";
    }
    return null;
  };
}
/* Records: the per-Unversed mission records cross off with their mission
   (done); the Arena Mode records cross off with their arena stage. */
function recordsAutoFn(char) {
  return it => {
    if (it.g === "Unversed Missions" && missionDoneByName(it.cat, char)) return "uvmission";
    if (it.cat === "Arena Mode") {
      for (let k = 0; k < BBS_DATA.arena.length; k++) {
        const nm = BBS_DATA.arena[k].name;
        if ((it.entry || "").indexOf(nm) >= 0 && arenaDone(nm, char)) return "arena";
      }
    }
    return null;
  };
}
/* Character journal: the Hundred Acre Wood trio fills when the Hunny Pot
   command board is done; Monstro fills when "Monster of the Sea" is cleared. */
function charactersAutoFn(char) {
  return it => {
    if (HAW_CHARS.has(it.name) && recordDoneBy(char, r => r.entry === "Hunny Pot Board")) return "board";
    if (it.name === "Monstro" && arenaDone("Monster of the Sea", char)) return "arena";
    return null;
  };
}
function commandAutoFn(char) { const m = commandAuto(char); return it => m.get(it.name) || null; }

/* Records that mirror another tab's single checkbox are *linked* (two-way)
   rather than read-only auto: ticking the record ticks its arena stage /
   Unversed mission, and vice-versa. */
function recordsLinkFn(char) {
  return it => {
    if (it.g === "Unversed Missions") {
      const mi = MISSION_IDX[it.cat];
      if (mi != null) return { store: STORE.missions.done, key: mi + "-" + char, src: "uvmission" };
    }
    if (it.cat === "Arena Mode") {
      for (let k = 0; k < BBS_DATA.arena.length; k++) {
        const nm = BBS_DATA.arena[k].name;
        if ((it.entry || "").indexOf(nm) >= 0) return { store: STORE[char].arena, key: ARENA_IDX[nm], src: "arena" };
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

function autoBadge(src) {
  return {
    meld: { label: t('bt-badge-meld'), tip: t('bt-badge-meld-tip') },
    mission: { label: t('bt-badge-mission'), tip: t('bt-badge-mission-tip') },
    treasure: { label: t('bt-badge-treasure'), tip: t('bt-badge-treasure-tip') },
    recipe: { label: t('bt-badge-recipe'), tip: t('bt-badge-recipe-tip') },
    icecream: { label: t('bt-badge-icecream'), tip: t('bt-badge-icecream-tip') },
    finish: { label: t('bt-badge-finish'), tip: t('bt-badge-finish-tip') },
    uvmission: { label: t('bt-badge-uvmission'), tip: t('bt-badge-uvmission-tip') },
    arena: { label: t('bt-badge-arena'), tip: t('bt-badge-arena-tip') },
    board: { label: t('bt-badge-board'), tip: t('bt-badge-board-tip') }
  }[src];
}

/* Ice-cream recipe ingredients. Each recipe slot (i1..i4) carries a
   baked-in quantity, e.g. "Crystal Sugar x3". Returns a map of ingredient
   name -> the recipes that use it [{ pIdx, qty, char }] across all three
   characters; obtaining an ingredient is shared, so any character's
   completed recipe counts it as obtained. */
function recipeIngredients() {
  const map = {};
  BBS_DATA.patissier.forEach((r, pIdx) => {
    ["i1", "i2", "i3", "i4"].forEach(k => {
      const s = r[k];
      if (!s) return;
      const m = String(s).match(/^(.*?)\s*x\s*(\d+)\s*$/i);
      const name = (m ? m[1] : s).trim();
      const qty = m ? parseInt(m[2], 10) : 1;
      (map[name] = map[name] || []).push({ pIdx, qty, char: r.g });
    });
  });
  return map;
}

/* ---------- helpers ---------- */
function el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
/* Inline markup for any lang string (everything else escaped):
     {{name}}     -> small inline icon  images/icons/name.png
     [[text|tip]] -> <span title="tip"> (hover for more info)
   Lets an icon or tooltip be added to any header/name by editing the lang
   file only. (Duplicated in js/kh-tracker.js — keep in sync.) */
const ICON_BASE = "../images/icons/";
function fmtText(s) {
  s = String(s == null ? "" : s);
  // {{icon}} | [[text|tooltip]] | [text](url)
  const re = /\{\{\s*([\w-]+)\s*\}\}|\[\[([^\]|]+)\|([^\]]+)\]\]|\[([^\]|]+)\]\(([^)\s]+)\)/g;
  let out = "", last = 0, m;
  while ((m = re.exec(s))) {
    out += esc(s.slice(last, m.index));
    if (m[1] != null) out += `<img class="hdricon" src="${ICON_BASE}${m[1]}.png" alt="">`;
    else if (m[2] != null) out += `<span class="hasinfo" title="${esc(m[3].trim())}" tabindex="0">${esc(m[2].trim())}</span>`;
    else { const u = m[5].trim(), safe = /^(https?:\/\/|\/|#)/.test(u) ? u : "#"; out += `<a href="${esc(safe)}" target="_blank" rel="noopener noreferrer">${esc(m[4].trim())}</a>`; }
    last = re.lastIndex;
  }
  return out + esc(s.slice(last));
}
function chip(x, y) { return `<span class="prgchip${x >= y && y > 0 ? " full" : ""}">${x} / ${y}</span>`; }
function bar(x, y) {
  const pct = y ? Math.round(100 * x / y) : 0;
  return `<span class="dashnum">${x} / ${y}</span><span class="dashbar${x >= y && y > 0 ? " full" : ""}"><i style="width:${pct}%"></i></span>`;
}
function stars(rank) { return `<span class="stars">${esc(rank)}</span>`; }
function starCount(rank) { return (rank.match(/★/g) || []).length; }

/* Item display text lives in the lang file under "items": { "<storeId>":
   [ { … } ] } (shared sections keyed by name, per-character sections by
   "<char>-<section>"). viewItems merges a section's raw BBS_DATA items
   with that lang text (lang wins) so the column getters below read
   editable text, while the progress/auto-unlock logic keeps using the raw
   BBS_DATA (names, ranks, rewards, flavor locations stay there as ids).
   Falls back to the raw items if no lang block exists. */
function viewItems(storeId, list) {
  const map = (typeof i18n !== "undefined" && i18n.messages && i18n.messages.items) || null;
  const rows = map && map[storeId];
  return rows ? list.map((it, i) => Object.assign({}, it, rows[i] || {})) : list;
}

/* ---------- progress math ---------- */
function countMap(map, n) { let d = 0; for (let i = 0; i < n; i++) if (map[i]) d++; return d; }
function sharedCount(key) { return [countMap(STORE.shared[key], BBS_DATA[key].length), BBS_DATA[key].length]; }
function charCount(char, sec) {
  const items = BBS_DATA.perChar[char][sec];
  if (sec === "treasures") {   // exclude Aqua's Realm of Darkness chests
    let d = 0, y = 0;
    items.forEach((it, i) => { if (isRealmOfDarkness(it.g)) return; y++; if (STORE[char].treasures[i]) d++; });
    return [d, y];
  }
  const af = SECTION_AUTO[sec] ? SECTION_AUTO[sec](char) : null;
  const lf = SECTION_LINK[sec] ? SECTION_LINK[sec](char) : null;
  if (!af && !lf) return [countMap(STORE[char][sec], items.length), items.length];
  const merged = viewItems(char + "-" + sec, items);
  let d = 0;
  merged.forEach((it, i) => {
    const lk = lf && lf(it);
    if (lk) { if (lk.store[lk.key]) d++; }
    else if (STORE[char][sec][i] || (af && af(it))) d++;
  });
  return [d, items.length];
}
function groupCount(key, label) {
  let d = 0, y = 0;
  BBS_DATA[key].forEach((it, i) => { if (it.g === label) { y++; if (STORE.shared[key][i]) d++; } });
  return [d, y];
}
function missionsCount(char, map) {
  let d = 0;
  BBS_DATA.missions.forEach((m, i) => { if (map[i + "-" + char]) d++; });
  return [d, BBS_DATA.missions.length];
}
/* Savage Slayer needs ONE character to max-rank every Unversed mission, so
   progress is the best single character's max-ranked count (not any-character
   per mission). */
function bestCharMissionsRank() {
  let best = 0;
  CHARS.forEach(c => {
    let d = 0;
    BBS_DATA.missions.forEach((m, i) => { if (STORE.missions.rank[i + "-" + c]) d++; });
    if (d > best) best = d;
  });
  return [best, BBS_DATA.missions.length];
}
/* Best single character's progress through a per-character group (e.g.
   Pâtissier needs one character to make all of their ice-cream recipes). */
function bestCharGroup(key) {
  let best = null;
  CHARS.forEach(c => {
    const r = groupCount(key, CHAR_LABEL[c]);
    if (!best || r[0] > best[0]) best = r;
  });
  return best || [0, 0];
}
/* Arena stages cleared by a character (the store is per-character now). */
function arenaCount(char) { return [countMap(STORE[char].arena, BBS_DATA.arena.length), BBS_DATA.arena.length]; }
/* Arena trophies are global — a stage counts once any character clears it. */
function arenaByStars(n) {
  let d = 0, y = 0;
  BBS_DATA.arena.forEach((it, i) => { if (starCount(it.rank) === n) { y++; if (CHARS.some(c => STORE[c].arena[i])) d++; } });
  return [d, y];
}
/* Ingredients a character actually needs (used by one of *their* recipes —
   not merely collectible in their playthrough), done when collected or
   auto-credited by one of that character's completed recipes. */
function flavorsEligible(char) {
  const label = CHAR_LABEL[char];
  const ingMap = recipeIngredients();
  const store = STORE[char].flavors;
  let d = 0, y = 0;
  BBS_DATA.flavors.forEach((it, i) => {
    const recs = (ingMap[it.name] || []).filter(e => e.char === label);
    if (!recs.length) return;
    y++;
    if (store[i] || recs.some(e => STORE.shared.patissier[e.pIdx])) d++;
  });
  return [d, y];
}
function overallChar(char) {
  let d = 0, y = 0;
  PER_CHAR_SECTIONS.forEach(sec => { const [a, b] = charCount(char, sec); d += a; y += b; });
  ["warrior", "patissier", "stickers"].forEach(k => {
    const [a, b] = groupCount(k, CHAR_LABEL[char]); d += a; y += b;
  });
  const [fa, fb] = flavorsEligible(char); d += fa; y += fb;
  const [aa, ab] = arenaCount(char); d += aa; y += ab;
  const [md] = missionsCount(char, STORE.missions.done); d += md; y += BBS_DATA.missions.length;
  return [d, y];
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
function groupIconImg(g) {
  const ic = GROUP_ICON[g];
  return ic ? `<img class="cmdicon" src="../images/commands/cmd-${ic}.png" alt="">` : "";
}

/* ---------- generic checklist table ---------- */
/* cols: [{th, get(it), cls?, name?:true}] — first col is the checkbox.
   opts: groupFilter (only show items of this group, headers hidden),
   itemFilter(it) (hide ineligible items), auto(it) -> source or null,
   link(it) -> {store,key,src} binds the row to another tab's store so it
   reads/writes there (two-way sync, editable), groupIcons (prefix group
   headers with their command-type icon). */
function toggleGroup(items, store, g, opts) {
  const targets = [];
  items.forEach((it, i) => {
    if (it.g !== g || (opts.itemFilter && !opts.itemFilter(it))) return;
    const link = opts.link ? opts.link(it) : null;
    if (link) { targets.push({ store: link.store, key: link.key }); return; }
    if (opts.auto && opts.auto(it) && !store[i]) return;   // read-only auto row
    targets.push({ store, key: i });
  });
  const allDone = targets.every(tg => tg.store[tg.key]);
  targets.forEach(tg => { if (allDone) delete tg.store[tg.key]; else tg.store[tg.key] = true; });
  saveStore();
  render();
}
function checklist(box, items, store, cols, state, opts) {
  opts = opts || {};
  const tbl = el("table");
  tbl.innerHTML = `<thead><tr><th></th>${cols.map(c => `<th>${c.th}</th>`).join("")}</tr></thead>`;
  const tb = el("tbody");
  let shown = 0;
  const q = state.q.toLowerCase();
  let lastGroup = null;
  items.forEach((it, i) => {
    if (opts.groupFilter && it.g !== opts.groupFilter) return;
    if (opts.itemFilter && !opts.itemFilter(it)) return;
    const link = opts.link ? opts.link(it) : null;
    const auto = (!link && opts.auto) ? opts.auto(it) : null;
    const done = link ? !!link.store[link.key] : (!!store[i] || !!auto);
    const badgeSrc = link ? link.src : auto;
    if (state.hide && done) return;
    const hay = (Object.values(it).join(" ") + " " + (it.g || "")).toLowerCase();
    if (q && !hay.includes(q)) return;
    if (!opts.groupFilter && it.g && it.g !== lastGroup) {
      lastGroup = it.g;
      const g = it.g;
      const gtr = el("tr");
      const gtd = el("td", "grp-title");
      gtd.colSpan = cols.length + 1;
      gtd.style.borderBottom = "1px solid var(--line)";
      gtd.appendChild(el("span", null, (opts.groupIcons ? groupIconImg(g) : "") + fmtText(g)));
      const gbtn = el("button", "grpbtn", t('bt-toggle-all'));
      gbtn.onclick = () => toggleGroup(items, store, g, opts);
      gtd.appendChild(gbtn);
      gtr.appendChild(gtd);
      tb.appendChild(gtr);
    }
    const tr = el("tr", done ? "donerow" : null);
    const td = el("td", "chkcell");
    const chk = el("input", "chk");
    chk.type = "checkbox";
    chk.checked = done;
    if (link) {
      chk.addEventListener("change", () => toggle(link.store, link.key));
    } else if (auto && !store[i]) {
      chk.disabled = true;
      chk.title = autoBadge(auto).tip;
    } else {
      chk.addEventListener("change", () => toggle(store, i));
    }
    td.appendChild(chk);
    tr.appendChild(td);
    cols.forEach(c => {
      let html = c.name ? `<span class="itemname">${fmtText(c.get(it))}</span>` : esc(c.get(it));
      if (c.name && badgeSrc) {
        const b = autoBadge(badgeSrc);
        html += ` <span class="srcbadge" title="${b.tip}">${b.label}</span>`;
      }
      tr.appendChild(el("td", c.cls || null, html));
    });
    tb.appendChild(tr);
    shown++;
  });
  tbl.appendChild(tb);
  if (shown) box.appendChild(tbl);
  else box.appendChild(el("div", "empty", t('bt-nothing')));
}

/* ---------- panel skeletons ---------- */
const TAB_IDS = ["trophies", "worlds", "commands", "unversed", "records", "characters", "treasures", "reports", "finish", "icecream", "arena"];
const PANEL = {};   // id -> {state:{q,hide}, results, count, bar, dash}

function setCount(p, x, y) {
  p.count.textContent = fmt('bt-count', x, y);
  p.bar.className = "dashbar" + (x >= y && y > 0 ? " full" : "");
  p.bar.firstChild.style.width = (y ? Math.round(100 * x / y) : 0) + "%";
}

function buildPanels() {
  TAB_IDS.forEach(id => {
    const panel = document.getElementById("tab-" + id);
    panel.innerHTML = "";
    const state = (PANEL[id] && PANEL[id].state) || { q: "", hide: false };
    const tbar = el("div", "toolbar");
    const flt = el("input");
    flt.type = "text"; flt.placeholder = t('bt-filter'); flt.style.maxWidth = "240px"; flt.value = state.q;
    flt.addEventListener("input", () => { state.q = flt.value.trim(); render(); });
    const lbl = el("label", "hidelbl");
    const hide = el("input", "chk");
    hide.type = "checkbox"; hide.checked = state.hide;
    hide.addEventListener("change", () => { state.hide = hide.checked; render(); });
    lbl.appendChild(hide);
    lbl.appendChild(document.createTextNode(" " + t('bt-hide-done')));
    const count = el("span", "countbadge");
    const barEl = el("span", "dashbar");
    barEl.appendChild(el("i"));
    tbar.appendChild(flt); tbar.appendChild(lbl); tbar.appendChild(count); tbar.appendChild(barEl);
    if (id === "trophies") {
      const reset = el("button", "clearbtn", t('bt-reset'));
      reset.onclick = () => {
        if (confirm(t('bt-reset-confirm'))) { STORE = blankStore(); saveStore(); render(); }
      };
      tbar.appendChild(reset);
    }
    const dash = id === "trophies" ? el("div", "dash") : null;
    if (dash) panel.appendChild(dash);
    panel.appendChild(tbar);
    const results = el("div", "results");
    panel.appendChild(results);
    PANEL[id] = { state, results, count, bar: barEl, dash };
  });
}

/* A dashboard label cell that links to its tab. */
function dashLabelCell(label, tabId) {
  const td = el("td");
  if (tabId && TAB_IDS.indexOf(tabId) >= 0) {
    const a = el("a", "dashlink");
    a.href = "#"; a.innerHTML = fmtText(label);
    a.onclick = e => { e.preventDefault(); bbsSelectTab(tabId); };
    td.appendChild(a);
  } else { td.innerHTML = fmtText(label); }
  return td;
}

/* ---------- per-tab renderers ---------- */
function renderTrophies(p) {
  // dashboard: what is missing, per character and shared
  const d = p.dash; d.innerHTML = "";
  d.appendChild(el("div", "grp-title", fmtText(t('bt-dash-title'))));
  const tbl = el("table", "dash-table");
  tbl.innerHTML = `<thead><tr><th>${t('bt-dash-section')}</th><th class="c-terra">Terra</th><th class="c-ventus">Ventus</th><th class="c-aqua">Aqua</th></tr></thead>`;
  const tb = el("tbody");
  const rows = [
    [t('tabbtn-commands'), c => charCount(c, "commands"), "commands"],
    [t('tabbtn-records'), c => charCount(c, "records"), "records"],
    [t('tabbtn-characters'), c => charCount(c, "characters"), "characters"],
    [t('bt-journal-title'), c => charCount(c, "unversed"), "unversed"],
    [t('tabbtn-treasures'), c => charCount(c, "treasures"), "treasures"],
    [t('bt-dash-stickers'), c => groupCount("stickers", CHAR_LABEL[c]), "treasures"],
    [t('tabbtn-finish'), c => groupCount("warrior", CHAR_LABEL[c]), "finish"],
    [t('bt-recipes-title'), c => groupCount("patissier", CHAR_LABEL[c]), "icecream"],
    [t('bt-ingredients-title'), c => flavorsEligible(c), "icecream"],
    [t('tabbtn-arena'), c => arenaCount(c), "arena"],
    [t('bt-dash-missions-done'), c => missionsCount(c, STORE.missions.done), "unversed"],
    [t('bt-dash-missions-rank'), c => missionsCount(c, STORE.missions.rank), "unversed"]
  ];
  rows.forEach(([label, get, tabId]) => {
    const tr = el("tr");
    tr.appendChild(dashLabelCell(label, tabId));
    CHARS.forEach(c => { const [x, y] = get(c); tr.appendChild(el("td", "c-" + c, bar(x, y))); });
    tb.appendChild(tr);
  });
  tbl.appendChild(tb);
  d.appendChild(tbl);

  const tbl2 = el("table", "dash-table");
  tbl2.innerHTML = `<thead><tr><th>${t('bt-dash-shared')}</th><th></th></tr></thead>`;
  const tb2 = el("tbody");
  [["tabbtn-trophies", "trophies", "trophies"], ["bt-ingame-title", "ingame", "trophies"], ["tabbtn-reports", "reports", "reports"]]
    .forEach(([k, sec, tabId]) => {
      const [x, y] = sharedCount(sec);
      const tr = el("tr");
      tr.appendChild(dashLabelCell(t(k), tabId));
      tr.appendChild(el("td", null, bar(x, y)));
      tb2.appendChild(tr);
    });
  const [sx, sy] = bestCharMissionsRank();
  const str = el("tr");
  str.appendChild(dashLabelCell(t('bt-dash-savage'), "unversed"));
  str.appendChild(el("td", null, bar(sx, sy)));
  tb2.appendChild(str);
  tbl2.appendChild(tb2);
  d.appendChild(tbl2);

  const box = p.results;
  box.appendChild(el("div", "grp-title", fmtText(t('bt-trophies-title'))));
  checklist(box, viewItems("trophies", BBS_DATA.trophies), STORE.shared.trophies, [
    { th: t('bt-th-rarity'), get: it => it.rarity, cls: "raritycell" },
    { th: t('bt-th-trophy'), get: it => it.name, name: true },
    { th: t('bt-th-desc'), get: it => it.desc },
    { th: t('bt-th-progress'), get: () => "" }
  ], p.state);
  // decorate rarity + progress cells (post-pass keeps checklist generic)
  box.querySelectorAll("tbody tr").forEach(tr => {
    const cells = tr.children;
    if (cells.length < 5) return;
    const rarity = cells[1].textContent.trim();
    if (rarity) cells[1].innerHTML = `<span class="rarity ${rarity.toLowerCase()}">${esc(rarity)}</span>`;
    const name = cells[2].textContent.trim();
    if (TROPHY_AUTO[name]) { const [x, y] = TROPHY_AUTO[name](); cells[4].innerHTML = chip(x, y); }
  });

  box.appendChild(el("div", "sub-title", fmtText(t('bt-ingame-title'))));
  box.appendChild(el("p", "hint", t('bt-ingame-hint')));
  checklist(box, viewItems("ingame", BBS_DATA.ingame), STORE.shared.ingame, [
    { th: t('bt-th-trophy'), get: it => it.name, name: true },
    { th: t('bt-th-condition'), get: it => it.how },
    { th: t('bt-th-reward'), get: it => it.reward }
  ], p.state);

  const [a, b] = sharedCount("trophies"), [c2, d2] = sharedCount("ingame");
  setCount(p, a + c2, b + d2);
}

function renderCommands(p) {
  const box = p.results;
  const items = viewItems(activeChar + "-commands", BBS_DATA.perChar[activeChar].commands);
  const auto = commandAuto(activeChar);
  box.appendChild(el("div", "grp-title", fmtText(fmt('bt-commands-for', CHAR_LABEL[activeChar]))));
  checklist(box, items, STORE[activeChar].commands, [
    { th: t('bt-th-command'), get: it => it.name, name: true },
    { th: t('bt-th-obtain'), get: it => it.how || "" }
  ], p.state, { auto: it => auto.get(it.name) || null, groupIcons: true });
  box.appendChild(el("p", "legend", t('bt-legend-commands')));
  const [x, y] = charCount(activeChar, "commands");
  setCount(p, x, y);
}

function renderUnversed(p) {
  const box = p.results;
  const char = activeChar, label = CHAR_LABEL[char];

  box.appendChild(el("div", "grp-title", fmtText(t('bt-missions-title'))));
  box.appendChild(el("p", "hint", fmt('bt-missions-hint', label)));
  const tbl = el("table");
  tbl.innerHTML = `<thead><tr><th>${fmt('bt-th-done', label)}</th><th>${fmt('bt-th-maxrank', label)}</th><th>${t('bt-th-unversed')}</th><th>${t('bt-th-world')}</th><th>${t('bt-th-area')}</th><th>${t('bt-th-requirement')}</th><th>${t('bt-th-reward')}</th></tr></thead>`;
  const tb = el("tbody");
  const q = p.state.q.toLowerCase();
  viewItems("missions", BBS_DATA.missions).forEach((m, i) => {
    const kd = i + "-" + char, kr = i + "-" + char;
    const r = missionRewardFor(m, char);
    const done = !!STORE.missions.done[kd], rank = !!STORE.missions.rank[kr];
    const complete = done && (!r || rank);
    if (p.state.hide && complete) return;
    const hay = (m.name + " " + m.world + " " + m.area + " " + m.req + " " + (r || "")).toLowerCase();
    if (q && !hay.includes(q)) return;
    const tr = el("tr", complete ? "donerow" : null);
    [["done", done], ["rank", rank]].forEach(([which, val]) => {
      const td = el("td", "chkcell");
      const chk = el("input", "chk");
      chk.type = "checkbox"; chk.checked = val;
      chk.addEventListener("change", () => toggle(STORE.missions[which], which === "done" ? kd : kr));
      td.appendChild(chk);
      tr.appendChild(td);
    });
    const reward = r ? `<span class="rewardbadge" title="${t('bt-reward-tip')}">${esc(r)}</span>` : '<span class="crystal-tag">—</span>';
    [`<span class="itemname">${esc(m.name)}</span>`, esc(m.world), esc(missionArea(m, char)), esc(m.req), reward]
      .forEach(html => tr.appendChild(el("td", null, html)));
    tb.appendChild(tr);
  });
  tbl.appendChild(tb);
  box.appendChild(tbl);
  const [sx, sy] = bestCharMissionsRank();
  box.appendChild(el("p", "legend", fmt('bt-legend-missions', sx, sy)));

  box.appendChild(el("div", "sub-title", fmtText(fmt('bt-journal-for', label))));
  checklist(box, viewItems(char + "-unversed", BBS_DATA.perChar[char].unversed), STORE[char].unversed, [
    { th: t('bt-th-enemy'), get: it => it.name, name: true },
    { th: t('bt-th-location'), get: it => it.loc || "" }
  ], p.state, { auto: unversedAutoFn(char) });

  const [jx, jy] = charCount(char, "unversed");
  const [mx] = missionsCount(char, STORE.missions.done);
  setCount(p, jx + mx, jy + BBS_DATA.missions.length);
}

function perCharListRenderer(sec, titleKey, cols) {
  return function (p) {
    const box = p.results;
    box.appendChild(el("div", "grp-title", fmtText(fmt(titleKey, CHAR_LABEL[activeChar]))));
    const opts = {};
    if (SECTION_AUTO[sec]) opts.auto = SECTION_AUTO[sec](activeChar);
    if (SECTION_LINK[sec]) opts.link = SECTION_LINK[sec](activeChar);
    checklist(box, viewItems(activeChar + "-" + sec, BBS_DATA.perChar[activeChar][sec]), STORE[activeChar][sec], cols(), p.state, opts);
    if (sec === "records") box.appendChild(el("p", "legend", t('bt-legend-records')));
    const [x, y] = charCount(activeChar, sec);
    setCount(p, x, y);
  };
}

const renderRecords = perCharListRenderer("records", 'bt-records-for', () => [
  { th: t('bt-th-category'), get: it => it.cat, name: true },
  { th: t('bt-th-world'), get: it => it.world || "" },
  { th: t('bt-th-entry'), get: it => it.entry || "" }
]);
const renderCharacters = perCharListRenderer("characters", 'bt-characters-for', () => [
  { th: t('bt-th-character'), get: it => it.name, name: true },
  { th: t('bt-th-unlock'), get: it => it.how || "" }
]);
/* Treasures + that character's stickers in one tab. Checking a treasure
   whose reward is a command marks the command unlocked (see commandAuto). */
function renderTreasures(p) {
  const box = p.results;
  const label = CHAR_LABEL[activeChar];
  box.appendChild(el("div", "grp-title", fmtText(fmt('bt-treasures-for', label))));
  checklist(box, viewItems(activeChar + "-treasures", BBS_DATA.perChar[activeChar].treasures), STORE[activeChar].treasures, [
    { th: t('bt-th-reward'), get: it => it.name, name: true },
    { th: t('bt-th-area'), get: it => it.area || "" },
    { th: t('bt-th-where'), get: it => it.how || "" }
  ], p.state);
  box.appendChild(el("p", "legend", t('bt-legend-treasures')));

  box.appendChild(el("div", "sub-title", fmtText(fmt('bt-stickers-for', label))));
  checklist(box, viewItems("stickers", BBS_DATA.stickers), STORE.shared.stickers, [
    { th: t('bt-th-sticker'), get: it => it.name, name: true },
    { th: t('bt-th-world'), get: it => it.world || "" },
    { th: t('bt-th-area'), get: it => it.area || "" },
    { th: t('bt-th-obtain'), get: it => it.how || "" }
  ], p.state, { groupFilter: label });

  const [tx, ty] = charCount(activeChar, "treasures");
  const [sx, sy] = groupCount("stickers", label);
  setCount(p, tx + sx, ty + sy);
}

function renderReports(p) {
  checklist(p.results, viewItems("reports", BBS_DATA.reports), STORE.shared.reports, [
    { th: t('bt-th-report'), get: it => it.name, name: true },
    { th: t('bt-th-obtain'), get: it => it.how || "" }
  ], p.state);
  const [x, y] = sharedCount("reports");
  setCount(p, x, y);
}

function renderFinish(p) {
  const box = p.results;
  box.appendChild(el("div", "grp-title", fmtText(fmt('bt-finish-for', CHAR_LABEL[activeChar]))));
  checklist(box, viewItems("warrior", BBS_DATA.warrior), STORE.shared.warrior, [
    { th: t('bt-th-finish'), get: it => it.name, name: true },
    { th: t('bt-th-equipped'), get: it => it.equip || "" },
    { th: t('bt-th-unlock'), get: it => it.how || "" }
  ], p.state, { groupFilter: CHAR_LABEL[activeChar] });
  const [x, y] = groupCount("warrior", CHAR_LABEL[activeChar]);
  setCount(p, x, y);
}

function renderIcecream(p) {
  const box = p.results;
  box.appendChild(el("div", "grp-title", fmtText(fmt('bt-recipes-for', CHAR_LABEL[activeChar]))));
  checklist(box, viewItems("patissier", BBS_DATA.patissier), STORE.shared.patissier, [
    { th: t('bt-th-icecream'), get: it => it.name, name: true },
    { th: t('bt-th-style'), get: it => it.style || "" },
    { th: t('bt-th-ingredients'), get: it => [it.i1, it.i2, it.i3, it.i4].filter(Boolean).join(", ") }
  ], p.state, { groupFilter: CHAR_LABEL[activeChar] });

  // Checking an ice-cream recipe crosses off the ingredients it uses — but
  // only for the character whose recipe it is (the tab is per-character).
  // Each ingredient also shows how many this character needs.
  const ingMap = recipeIngredients();
  const ingAuto = it => (ingMap[it.name] || []).some(e => e.char === CHAR_LABEL[activeChar] && STORE.shared.patissier[e.pIdx]) ? "recipe" : null;
  const neededQty = name => { const e = (ingMap[name] || []).find(x => x.char === CHAR_LABEL[activeChar]); return e ? e.qty : 0; };

  box.appendChild(el("div", "sub-title", fmtText(fmt('bt-ingredients-for', CHAR_LABEL[activeChar]))));
  // Ingredients the character can't obtain (no location) are hidden. They are
  // grouped by spawn spot in world order, so each location note is shown once
  // (ingredients that spawn together are listed together).
  const char = activeChar;
  const locKey = { terra: "locT", ventus: "locV", aqua: "locA" }[char];
  const q = p.state.q.toLowerCase();
  const groups = new Map();   // "world|area" -> { world, area, note, items:[] }
  viewItems("flavors", BBS_DATA.flavors).forEach((it, i) => {
    if (neededQty(it.name) <= 0 || !it[locKey]) return;   // only this character's needed ingredients
    if (q && it.name.toLowerCase().indexOf(q) < 0) return;
    const auto = !!ingAuto(it);
    const done = !!STORE[char].flavors[i] || auto;
    if (p.state.hide && done) return;
    const need = neededQty(it.name);
    parseLocs(it[locKey]).forEach(loc => {
      const key = loc.world + "|" + loc.area;
      if (!groups.has(key)) groups.set(key, { world: loc.world, area: loc.area, note: loc.note, items: [] });
      groups.get(key).items.push({ i: i, name: it.name, need: need, done: done, auto: auto });
    });
  });
  Array.from(groups.values())
    .sort((a, b) => worldIndex(a.world) - worldIndex(b.world) || a.area.localeCompare(b.area))
    .forEach(g => {
      box.appendChild(el("div", "trk-cat", fmtText(g.area + " (" + g.world + ")")));
      if (g.note) box.appendChild(el("p", "hint", fmtText(g.note)));
      const tbl = el("table"), tb = el("tbody");
      g.items.forEach(item => {
        const tr = el("tr", item.done ? "donerow" : null);
        const td = el("td", "chkcell"), chk = el("input", "chk");
        chk.type = "checkbox"; chk.checked = item.done;
        if (item.auto) { chk.disabled = true; chk.title = autoBadge("recipe").tip; }
        else chk.addEventListener("change", () => toggle(STORE[char].flavors, item.i));
        td.appendChild(chk); tr.appendChild(td);
        tr.appendChild(el("td", null, `<span class="itemname">${fmtText(item.name)}</span>`));
        tr.appendChild(el("td", "needcell", item.need ? "×" + item.need : ""));
        tb.appendChild(tr);
      });
      tbl.appendChild(tb); box.appendChild(tbl);
    });

  const [rx, ry] = groupCount("patissier", CHAR_LABEL[activeChar]);
  const [fx, fy] = flavorsEligible(activeChar);
  setCount(p, rx + fx, ry + fy);
}

function renderArena(p) {
  const box = p.results;
  box.appendChild(el("div", "grp-title", fmtText(fmt('bt-arena-for', CHAR_LABEL[activeChar]))));
  checklist(box, viewItems("arena", BBS_DATA.arena), STORE[activeChar].arena, [
    { th: t('bt-th-stage'), get: it => it.name, name: true },
    { th: t('bt-th-rank'), get: it => it.rank },
    { th: t('bt-th-unlock'), get: it => it.how || "" },
    { th: t('bt-th-bonus'), get: it => it.bonus || "" }
  ], p.state);
  box.querySelectorAll("tbody tr").forEach(tr => {
    if (tr.children.length >= 3) tr.children[2].innerHTML = stars(tr.children[2].textContent.trim());
  });
  const [x, y] = arenaCount(activeChar);
  setCount(p, x, y);
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
function normWorld(w) {
  if (!w) return w;
  w = String(w).replace(/^The /, "");
  if (w.indexOf("Realm of Darkness") === 0) return "Realm of Darkness";
  return w;
}
function worldIndex(w) {
  w = normWorld(w);
  for (let k = 0; k < WORLDS.length; k++) if (WORLDS[k][0] === w) return k;
  return 99;
}
/* Parse an enriched ingredient location string
   ("Area (World) — Note  |  Area2 (World2) — Note2") into parts. */
function parseLocs(s) {
  if (!s) return [];
  return String(s).split("  |  ").map(part => {
    const m = part.match(/^(.*?)\s*\(([^)]+)\)(?:\s*—\s*([\s\S]*))?$/);
    return m ? { area: m[1].trim(), world: m[2].trim(), note: (m[3] || "").trim() }
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
  const out = [];
  // Unversed missions. The clear ("done") row carries the per-character
  // location; missions that need their high score also get a Max Rank row
  // carrying the required score.
  viewItems("missions", BBS_DATA.missions).forEach((m, i) => {
    if (normWorld(m.world) !== world) return;
    const k = i + "-" + char;
    out.push({ type: t('bt-wtype-mission'), name: m.name, where: missionArea(m, char),
      done: !!STORE.missions.done[k], toggle: () => toggle(STORE.missions.done, k) });
    if (missionNeedsRank(m)) {
      out.push({ type: t('bt-wtype-mission'), name: m.name,
        where: t('bt-world-maxrank') + (m.req ? ": " + m.req : ""),
        done: !!STORE.missions.rank[k], toggle: () => toggle(STORE.missions.rank, k) });
    }
  });
  // Treasures (per character; world is the data group). Realm of Darkness
  // chests are excluded — they don't count toward completion.
  viewItems(char + "-treasures", BBS_DATA.perChar[char].treasures).forEach((it, i) => {
    if (isRealmOfDarkness(BBS_DATA.perChar[char].treasures[i].g)) return;
    if (normWorld(BBS_DATA.perChar[char].treasures[i].g) !== world) return;
    out.push({ type: t('bt-wtype-treasure'), name: it.name, where: it.area || "",
      done: !!STORE[char].treasures[i], toggle: () => toggle(STORE[char].treasures, i) });
  });
  // Stickers (this character's, grouped by data group = character)
  viewItems("stickers", BBS_DATA.stickers).forEach((it, i) => {
    if (BBS_DATA.stickers[i].g !== label || normWorld(it.world) !== world) return;
    out.push({ type: t('bt-wtype-sticker'), name: it.name, where: it.area || "",
      done: !!STORE.shared.stickers[i], toggle: () => toggle(STORE.shared.stickers, i) });
  });
  // Ingredients (eligible for this character; bucketed by the world in
  // their location). Show how many this character needs + the spot.
  const ingMap = recipeIngredients();
  viewItems("flavors", BBS_DATA.flavors).forEach((it, i) => {
    const ne = (ingMap[it.name] || []).find(e => e.char === label);
    if (!ne || !it[locKey]) return;   // only ingredients this character's recipes need
    const loc = parseLocs(it[locKey]).find(l => normWorld(l.world) === world);
    if (!loc) return;
    const auto = (ingMap[it.name] || []).some(e => e.char === label && STORE.shared.patissier[e.pIdx]);
    const where = "×" + ne.qty + (loc.area ? " · " + loc.area : "");
    out.push({ type: t('bt-wtype-ingredient'), name: it.name, where: where,
      done: !!STORE[char].flavors[i] || auto, auto: auto ? "recipe" : null,
      toggle: () => toggle(STORE[char].flavors, i) });
  });
  // Records — reflect the same auto-cross-offs as the Records tab (e.g. an
  // Unversed mission cleared fills its record), so the views stay in sync.
  const recAuto = recordsAutoFn(char);
  viewItems(char + "-records", BBS_DATA.perChar[char].records).forEach((it, i) => {
    if (normWorld(it.world) !== world) return;
    if (it.g === "Unversed Missions") return;   // shown as the mission entry above
    const a = recAuto(it);
    out.push({ type: t('bt-wtype-record'), name: it.cat, where: it.entry || "",
      done: !!STORE[char].records[i] || !!a, auto: a || null,
      toggle: () => toggle(STORE[char].records, i) });
  });
  // Secret bosses
  const chAuto = charactersAutoFn(char);
  SECRET_BOSSES.forEach(sb => {
    if (sb.world !== world) return;
    const idx = BBS_DATA.perChar[char].characters.findIndex(x => x.name === sb.name);
    if (idx < 0) return;
    const a = chAuto(BBS_DATA.perChar[char].characters[idx]);
    out.push({ type: t('bt-wtype-boss'), name: sb.name, where: t(sb.noteKey),
      done: !!STORE[char].characters[idx] || !!a, auto: a || null,
      toggle: () => toggle(STORE[char].characters, idx) });
  });
  return out;
}

function entryTable(list) {
  const tbl = el("table", "wtable");
  const tb = el("tbody");
  list.forEach(e => {
    const tr = el("tr", e.done ? "donerow" : null);
    const td = el("td", "chkcell");
    const chk = el("input", "chk");
    chk.type = "checkbox"; chk.checked = e.done;
    if (e.auto) { chk.disabled = true; chk.title = autoBadge(e.auto).tip; }
    else chk.addEventListener("change", e.toggle);
    td.appendChild(chk); tr.appendChild(td);
    let nameHtml = `<span class="itemname">${fmtText(e.name)}</span>`;
    if (e.auto) { const b = autoBadge(e.auto); nameHtml += ` <span class="srcbadge" title="${b.tip}">${b.label}</span>`; }
    tr.appendChild(el("td", null, nameHtml));
    tr.appendChild(el("td", null, fmtText(e.where)));
    tb.appendChild(tr);
  });
  tbl.appendChild(tb);
  return tbl;
}
function renderWorlds(p) {
  const box = p.results;
  if (!p.state.open) p.state.open = {};
  const open = p.state.open;   // persists collapse state across re-renders
  box.appendChild(el("div", "grp-title", fmtText(fmt('bt-worlds-for', CHAR_LABEL[activeChar]))));
  box.appendChild(el("p", "hint", t('bt-worlds-hint')));
  const q = p.state.q.toLowerCase();
  // Only a search query force-opens sections (to reveal matches); "hide
  // completed" must keep the user's collapse state.
  const filtering = !!q;
  let dx = 0, dy = 0;
  WORLDS.forEach(([world, slug]) => {
    const all = worldEntries(world, activeChar);
    if (!all.length) return;
    const wdone = all.filter(e => e.done).length;
    dy += all.length; dx += wdone;
    let entries = all;
    if (q) entries = entries.filter(e => (e.type + " " + e.name + " " + e.where).toLowerCase().includes(q));
    if (p.state.hide) entries = entries.filter(e => !e.done);
    if (!entries.length) return;

    const wkey = "w:" + slug;
    const complete = wdone === all.length;
    const wdet = el("details", "wgroup");
    wdet.open = filtering ? true : ((wkey in open) ? open[wkey] : false);   // worlds collapsed by default
    const wsum = el("summary", "wsum" + (complete ? " wdone" : ""),
      fmtText(t('bt-world-' + slug)) + ` <span class="wcount">${wdone} / ${all.length}</span>`
      + (complete ? ` <span class="wbadge">${t('bt-world-complete')}</span>` : ""));
    // Record collapse state synchronously on click — the toggle event is async,
    // so a re-render's programmatic open could otherwise clobber a fresh collapse.
    wsum.addEventListener("click", () => { if (!filtering) open[wkey] = !((wkey in open) ? open[wkey] : false); });
    wdet.appendChild(wsum);

    const order = [], byType = {};
    entries.forEach(e => { if (!byType[e.type]) { byType[e.type] = []; order.push(e.type); } byType[e.type].push(e); });
    order.forEach(type => {
      const list = byType[type];
      const tdone = list.filter(e => e.done).length;
      const tkey = "t:" + slug + ":" + type;
      const tdet = el("details", "tgroup");
      tdet.open = filtering ? true : ((tkey in open) ? open[tkey] : true);   // type groups open by default
      const tsum = el("summary", "tsum", esc(type) + ` <span class="wcount">${tdone} / ${list.length}</span>`);
      tsum.addEventListener("click", () => { if (!filtering) open[tkey] = !((tkey in open) ? open[tkey] : true); });
      tdet.appendChild(tsum);
      tdet.appendChild(entryTable(list));
      wdet.appendChild(tdet);
    });
    box.appendChild(wdet);
  });
  if (!dy) box.appendChild(el("div", "empty", t('bt-nothing')));
  setCount(p, dx, dy);
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
  document.querySelectorAll(".kh .tab").forEach(x => x.classList.toggle("active", x.dataset.tab === id));
  TAB_IDS.forEach(t2 => { document.getElementById("tab-" + t2).style.display = (t2 === id) ? "block" : "none"; });
  render();
}
document.querySelectorAll(".kh .tab").forEach(tab => {
  tab.onclick = () => {
    bbsSelectTab(tab.dataset.tab);
  };
});

function syncCharButtons() {
  document.querySelectorAll(".charbtn").forEach(b => b.classList.toggle("on", b.dataset.c === activeChar));
  // Drive the per-character accent scheme (Terra red, Ventus green, Aqua blue).
  document.documentElement.setAttribute("data-char", activeChar);
}
document.querySelectorAll(".charbtn").forEach(btn => {
  btn.onclick = () => { setActiveChar(btn.dataset.c); syncCharButtons(); render(); };
});

/* ---------- completion toasts ---------- */
let prevMilestones = null;
function toast(text, icon) {
  let host = document.getElementById("kh-toasts");
  if (!host) { host = el("div"); host.id = "kh-toasts"; document.body.appendChild(host); }
  const tn = el("div", "kh-toast");
  tn.innerHTML = `<span class="kh-toast-ic">${icon || "✅"}</span><span>${esc(text)}</span>`;
  host.appendChild(tn);
  requestAnimationFrame(() => tn.classList.add("show"));
  setTimeout(() => { tn.classList.add("hide"); setTimeout(() => tn.remove(), 450); }, 4600);
}
/* The set of "complete" milestones across every character: trophies whose
   tracked requirements are all met, each fully-finished tab, and each
   character's overall total. Compared between renders to toast new ones. */
function computeMilestones() {
  const m = new Set();
  Object.keys(TROPHY_AUTO).forEach(name => { const [x, y] = TROPHY_AUTO[name](); if (y > 0 && x >= y) m.add("trophy::" + name); });
  const sd = (id, x, y) => { if (y > 0 && x >= y) m.add("tab::" + id); };
  { const [a, b] = sharedCount("trophies"), [c, d] = sharedCount("ingame"); sd("trophies", a + c, b + d); }
  { const [x, y] = sharedCount("reports"); sd("reports", x, y); }
  CHARS.forEach(ch => {
    const lab = CHAR_LABEL[ch];
    const cd = (id, x, y) => { if (y > 0 && x >= y) m.add("tab::" + id + "::" + ch); };
    ["commands", "records", "characters"].forEach(s => { const [x, y] = charCount(ch, s); cd(s, x, y); });
    { const [x, y] = arenaCount(ch); cd("arena", x, y); }
    { const [jx, jy] = charCount(ch, "unversed"); const [md] = missionsCount(ch, STORE.missions.done); cd("unversed", jx + md, jy + BBS_DATA.missions.length); }
    { const [tx, ty] = charCount(ch, "treasures"); const [sx, sy] = groupCount("stickers", lab); cd("treasures", tx + sx, ty + sy); }
    { const [x, y] = groupCount("warrior", lab); cd("finish", x, y); }
    { const [rx, ry] = groupCount("patissier", lab); const [fx, fy] = flavorsEligible(ch); cd("icecream", rx + fx, ry + fy); }
    { const [ox, oy] = overallChar(ch); if (oy > 0 && ox >= oy) m.add("overall::" + ch); }
  });
  return m;
}
function milestoneToast(k) {
  const p = k.split("::");
  if (p[0] === "trophy") return toast(fmt('bt-toast-trophy', p[1]), "🏆");
  if (p[0] === "overall") return toast(fmt('bt-toast-overall', CHAR_LABEL[p[1]]), "🎉");
  const label = t('tabbtn-' + p[1]);
  return toast(p[2] ? fmt('bt-toast-tab-char', label, CHAR_LABEL[p[2]]) : fmt('bt-toast-tab', label), "✅");
}
function checkMilestones() {
  const cur = computeMilestones();
  if (prevMilestones) cur.forEach(k => { if (!prevMilestones.has(k)) milestoneToast(k); });
  prevMilestones = cur;   // first run seeds without toasting
}

function render() {
  const p = PANEL[activeTab];
  p.results.innerHTML = "";
  if (p.dash) p.dash.innerHTML = "";
  RENDERERS[activeTab](p);
  const [x, y] = overallChar(activeChar);
  document.getElementById("overallNote").textContent = fmt('bt-overall', CHAR_LABEL[activeChar], x, y, y ? Math.round(100 * x / y) : 0);
  checkMilestones();
}

buildPanels();
syncCharButtons();
render();

document.addEventListener('i18n:updated', () => { buildPanels(); render(); });

/* Live-sync when the melding calculator (or another tab) changes storage. */
window.addEventListener("storage", (e) => {
  if (e.key === KEY) STORE = loadStore();
  if (e.key === CHAR_KEY && CHARS.includes(e.newValue)) { activeChar = e.newValue; syncCharButtons(); }
  if (e.key === KEY || e.key === MELD_KEY || e.key === CHAR_KEY) render();
});

});
