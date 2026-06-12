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
const SHARED_SECTIONS = ["trophies", "ingame", "reports", "stickers", "arena", "flavors", "patissier", "warrior"];

/* ---------- persistent state ---------- */
const KEY = "bbs_progress_v1";
const MELD_KEY = "bbs_meld_tracker_v1";
const CHAR_KEY = MELD_KEY + "_char"; // shared with the melding calculator

function blankStore() {
  const s = { shared: {}, missions: { done: {}, rank: {} } };
  SHARED_SECTIONS.forEach(k => { s.shared[k] = {}; });
  CHARS.forEach(c => { s[c] = {}; PER_CHAR_SECTIONS.forEach(k => { s[c][k] = {}; }); });
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
      CHARS.forEach(c => PER_CHAR_SECTIONS.forEach(k => { if (o[c] && o[c][k]) s[c][k] = o[c][k]; }));
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
/* Auto-unlocked commands for a character: melded in the calculator,
   rewarded by an Unversed mission at max rank, or dropped by a treasure
   chest that's been checked off. */
function commandAuto(char) {
  const m = new Map();
  meldOwned(char).forEach(n => m.set(n, "meld"));
  BBS_DATA.missions.forEach((ms, i) => {
    const r = missionRewardFor(ms, char);
    if (r && STORE.missions.rank[i + "-" + char] && !m.has(r)) m.set(r, "mission");
  });
  const cmdNames = new Set(BBS_DATA.perChar[char].commands.map(c => c.name));
  BBS_DATA.perChar[char].treasures.forEach((tr, i) => {
    if (STORE[char].treasures[i] && cmdNames.has(tr.name) && !m.has(tr.name)) m.set(tr.name, "treasure");
  });
  return m;
}
function autoBadge(src) {
  return {
    meld: { label: t('bt-badge-meld'), tip: t('bt-badge-meld-tip') },
    mission: { label: t('bt-badge-mission'), tip: t('bt-badge-mission-tip') },
    treasure: { label: t('bt-badge-treasure'), tip: t('bt-badge-treasure-tip') },
    recipe: { label: t('bt-badge-recipe'), tip: t('bt-badge-recipe-tip') }
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
  if (sec !== "commands") return [countMap(STORE[char][sec], items.length), items.length];
  const auto = commandAuto(char);
  let d = 0;
  items.forEach((it, i) => { if (STORE[char].commands[i] || auto.has(it.name)) d++; });
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
function missionsRankAny() {
  let d = 0;
  BBS_DATA.missions.forEach((m, i) => { if (CHARS.some(c => STORE.missions.rank[i + "-" + c])) d++; });
  return [d, BBS_DATA.missions.length];
}
function arenaByStars(n) {
  let d = 0, y = 0;
  BBS_DATA.arena.forEach((it, i) => { if (starCount(it.rank) === n) { y++; if (STORE.shared.arena[i]) d++; } });
  return [d, y];
}
function overallChar(char) {
  let d = 0, y = 0;
  PER_CHAR_SECTIONS.forEach(sec => { const [a, b] = charCount(char, sec); d += a; y += b; });
  ["warrior", "patissier", "stickers"].forEach(k => {
    const [a, b] = groupCount(k, CHAR_LABEL[char]); d += a; y += b;
  });
  const [md] = missionsCount(char, STORE.missions.done); d += md; y += BBS_DATA.missions.length;
  return [d, y];
}

/* Trophies whose progress can be computed from tracked sections. */
const TROPHY_AUTO = {
  "Savage Slayer": () => missionsRankAny(),
  "Profiler": () => sharedCount("reports"),
  "Collector": () => sharedCount("stickers"),
  "Pâtissier": () => sharedCount("patissier"),
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
   groupIcons (prefix group headers with their command-type icon). */
function toggleGroup(items, store, g, opts) {
  const idx = [];
  items.forEach((it, i) => { if (it.g === g && (!opts.itemFilter || opts.itemFilter(it))) idx.push(i); });
  const allDone = idx.every(i => store[i] || (opts.auto && opts.auto(items[i])));
  idx.forEach(i => {
    if (allDone) delete store[i];
    else if (!store[i] && !(opts.auto && opts.auto(items[i]))) store[i] = true;
  });
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
    const auto = opts.auto ? opts.auto(it) : null;
    const done = !!store[i] || !!auto;
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
      gtd.appendChild(el("span", null, (opts.groupIcons ? groupIconImg(g) : "") + esc(g)));
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
    if (auto && !store[i]) {
      chk.disabled = true;
      chk.title = autoBadge(auto).tip;
    } else {
      chk.addEventListener("change", () => toggle(store, i));
    }
    td.appendChild(chk);
    tr.appendChild(td);
    cols.forEach(c => {
      let html = c.name ? `<span class="itemname">${esc(c.get(it))}</span>` : esc(c.get(it));
      if (c.name && auto) {
        const b = autoBadge(auto);
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
const TAB_IDS = ["trophies", "commands", "unversed", "records", "characters", "treasures", "reports", "finish", "icecream", "arena"];
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

/* ---------- per-tab renderers ---------- */
function renderTrophies(p) {
  // dashboard: what is missing, per character and shared
  const d = p.dash; d.innerHTML = "";
  d.appendChild(el("div", "grp-title", t('bt-dash-title')));
  const tbl = el("table", "dash-table");
  tbl.innerHTML = `<thead><tr><th>${t('bt-dash-section')}</th><th>Terra</th><th>Ventus</th><th>Aqua</th></tr></thead>`;
  const tb = el("tbody");
  const rows = [
    [t('tabbtn-commands'), c => charCount(c, "commands")],
    [t('tabbtn-records'), c => charCount(c, "records")],
    [t('tabbtn-characters'), c => charCount(c, "characters")],
    [t('bt-journal-title'), c => charCount(c, "unversed")],
    [t('tabbtn-treasures'), c => charCount(c, "treasures")],
    [t('bt-dash-stickers'), c => groupCount("stickers", CHAR_LABEL[c])],
    [t('tabbtn-finish'), c => groupCount("warrior", CHAR_LABEL[c])],
    [t('bt-recipes-title'), c => groupCount("patissier", CHAR_LABEL[c])],
    [t('bt-dash-missions-done'), c => missionsCount(c, STORE.missions.done)],
    [t('bt-dash-missions-rank'), c => missionsCount(c, STORE.missions.rank)]
  ];
  rows.forEach(([label, get]) => {
    const tds = CHARS.map(c => { const [x, y] = get(c); return `<td>${bar(x, y)}</td>`; }).join("");
    tb.appendChild(el("tr", null, `<td>${label}</td>${tds}`));
  });
  tbl.appendChild(tb);
  d.appendChild(tbl);

  const tbl2 = el("table", "dash-table");
  tbl2.innerHTML = `<thead><tr><th>${t('bt-dash-shared')}</th><th></th></tr></thead>`;
  const tb2 = el("tbody");
  [["tabbtn-trophies", "trophies"], ["bt-ingame-title", "ingame"], ["tabbtn-reports", "reports"],
   ["tabbtn-arena", "arena"], ["bt-ingredients-title", "flavors"]]
    .forEach(([k, sec]) => {
      const [x, y] = sharedCount(sec);
      tb2.appendChild(el("tr", null, `<td>${t(k)}</td><td>${bar(x, y)}</td>`));
    });
  const [sx, sy] = missionsRankAny();
  tb2.appendChild(el("tr", null, `<td>${t('bt-dash-savage')}</td><td>${bar(sx, sy)}</td>`));
  tbl2.appendChild(tb2);
  d.appendChild(tbl2);

  const box = p.results;
  box.appendChild(el("div", "grp-title", t('bt-trophies-title')));
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

  box.appendChild(el("div", "sub-title", t('bt-ingame-title')));
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
  box.appendChild(el("div", "grp-title", fmt('bt-commands-for', CHAR_LABEL[activeChar])));
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

  box.appendChild(el("div", "grp-title", t('bt-missions-title')));
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
    [`<span class="itemname">${esc(m.name)}</span>`, esc(m.world), esc(m.area), esc(m.req), reward]
      .forEach(html => tr.appendChild(el("td", null, html)));
    tb.appendChild(tr);
  });
  tbl.appendChild(tb);
  box.appendChild(tbl);
  const [sx, sy] = missionsRankAny();
  box.appendChild(el("p", "legend", fmt('bt-legend-missions', sx, sy)));

  box.appendChild(el("div", "sub-title", fmt('bt-journal-for', label)));
  checklist(box, viewItems(char + "-unversed", BBS_DATA.perChar[char].unversed), STORE[char].unversed, [
    { th: t('bt-th-enemy'), get: it => it.name, name: true },
    { th: t('bt-th-location'), get: it => it.loc || "" }
  ], p.state);

  const [jx, jy] = charCount(char, "unversed");
  const [mx] = missionsCount(char, STORE.missions.done);
  setCount(p, jx + mx, jy + BBS_DATA.missions.length);
}

function perCharListRenderer(sec, titleKey, cols) {
  return function (p) {
    const box = p.results;
    box.appendChild(el("div", "grp-title", fmt(titleKey, CHAR_LABEL[activeChar])));
    checklist(box, viewItems(activeChar + "-" + sec, BBS_DATA.perChar[activeChar][sec]), STORE[activeChar][sec], cols(), p.state);
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
  box.appendChild(el("div", "grp-title", fmt('bt-treasures-for', label)));
  checklist(box, viewItems(activeChar + "-treasures", BBS_DATA.perChar[activeChar].treasures), STORE[activeChar].treasures, [
    { th: t('bt-th-reward'), get: it => it.name, name: true },
    { th: t('bt-th-area'), get: it => it.area || "" },
    { th: t('bt-th-where'), get: it => it.how || "" }
  ], p.state);
  box.appendChild(el("p", "legend", t('bt-legend-treasures')));

  box.appendChild(el("div", "sub-title", fmt('bt-stickers-for', label)));
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
  box.appendChild(el("div", "grp-title", fmt('bt-finish-for', CHAR_LABEL[activeChar])));
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
  box.appendChild(el("div", "grp-title", fmt('bt-recipes-for', CHAR_LABEL[activeChar])));
  checklist(box, viewItems("patissier", BBS_DATA.patissier), STORE.shared.patissier, [
    { th: t('bt-th-icecream'), get: it => it.name, name: true },
    { th: t('bt-th-style'), get: it => it.style || "" },
    { th: t('bt-th-ingredients'), get: it => [it.i1, it.i2, it.i3, it.i4].filter(Boolean).join(", ") }
  ], p.state, { groupFilter: CHAR_LABEL[activeChar] });

  // Checking an ice-cream recipe crosses off the ingredients it uses; each
  // ingredient also shows how many this character needs (from the recipes).
  const ingMap = recipeIngredients();
  const ingAuto = it => (ingMap[it.name] || []).some(e => STORE.shared.patissier[e.pIdx]) ? "recipe" : null;
  const neededQty = name => { const e = (ingMap[name] || []).find(x => x.char === CHAR_LABEL[activeChar]); return e ? e.qty : 0; };

  box.appendChild(el("div", "sub-title", fmt('bt-ingredients-for', CHAR_LABEL[activeChar])));
  // Ingredients the character can't obtain (no location) are hidden for them.
  const locKey = { terra: "locT", ventus: "locV", aqua: "locA" }[activeChar];
  const eligible = it => !!it[locKey];
  checklist(box, viewItems("flavors", BBS_DATA.flavors), STORE.shared.flavors, [
    { th: t('bt-th-ingredient'), get: it => it.name, name: true },
    { th: t('bt-th-needed'), get: it => { const n = neededQty(it.name); return n ? "×" + n : ""; }, cls: "needcell" },
    { th: t('bt-th-icecream'), get: it => it.icecream || "" },
    { th: fmt('bt-th-location-for', CHAR_LABEL[activeChar]), get: it => it[locKey] || "" }
  ], p.state, { itemFilter: eligible, auto: ingAuto });

  const [rx, ry] = groupCount("patissier", CHAR_LABEL[activeChar]);
  let fx = 0, fy = 0;
  BBS_DATA.flavors.forEach((it, i) => { if (eligible(it)) { fy++; if (STORE.shared.flavors[i] || ingAuto(it)) fx++; } });
  setCount(p, rx + fx, ry + fy);
}

function renderArena(p) {
  const box = p.results;
  checklist(box, viewItems("arena", BBS_DATA.arena), STORE.shared.arena, [
    { th: t('bt-th-stage'), get: it => it.name, name: true },
    { th: t('bt-th-rank'), get: it => it.rank },
    { th: t('bt-th-unlock'), get: it => it.how || "" },
    { th: t('bt-th-bonus'), get: it => it.bonus || "" }
  ], p.state);
  box.querySelectorAll("tbody tr").forEach(tr => {
    if (tr.children.length >= 3) tr.children[2].innerHTML = stars(tr.children[2].textContent.trim());
  });
  const [x, y] = sharedCount("arena");
  setCount(p, x, y);
}

const RENDERERS = {
  trophies: renderTrophies, commands: renderCommands, unversed: renderUnversed,
  records: renderRecords, characters: renderCharacters, treasures: renderTreasures,
  reports: renderReports, finish: renderFinish,
  icecream: renderIcecream, arena: renderArena
};

/* ---------- tabs / charbar / render loop ---------- */
let activeTab = "trophies";
document.querySelectorAll(".kh .tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".kh .tab").forEach(x => x.classList.remove("active"));
    tab.classList.add("active");
    activeTab = tab.dataset.tab;
    TAB_IDS.forEach(id => {
      document.getElementById("tab-" + id).style.display = (id === activeTab) ? "block" : "none";
    });
    render();
  };
});

function syncCharButtons() {
  document.querySelectorAll(".charbtn").forEach(b => b.classList.toggle("on", b.dataset.c === activeChar));
}
document.querySelectorAll(".charbtn").forEach(btn => {
  btn.onclick = () => { setActiveChar(btn.dataset.c); syncCharButtons(); render(); };
});

function render() {
  const p = PANEL[activeTab];
  p.results.innerHTML = "";
  if (p.dash) p.dash.innerHTML = "";
  RENDERERS[activeTab](p);
  const [x, y] = overallChar(activeChar);
  document.getElementById("overallNote").textContent = fmt('bt-overall', CHAR_LABEL[activeChar], x, y, y ? Math.round(100 * x / y) : 0);
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
