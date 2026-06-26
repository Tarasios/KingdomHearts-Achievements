/* =====================================================================
   Kingdom Hearts Dream Drop Distance — Dream Guide

   A DDD sub-tool (sibling of the BBS Melding Calculator). Five tabs:
     Spirits ... gallery of the 54 Spirits; star to own, click for a detail
                 modal (stats, resistances, dispositions, full Ability Link
                 board with unlock conditions, and creation recipes).
     Creation . the creation calculator, two ways round (like BBS melding):
                  • By Materials — pick the Dream Pieces + amounts you'll
                    use and see the Spirit, rank, success % and stats.
                  • By Spirit — pick a Spirit + the rank you want and see
                    every recipe that reaches it (with the amounts needed,
                    and whether a Risky Winds Forecast is required).
     Abilities  search every Ability Link board at once — including the
                 permanent (Support) unlocks — to see which Spirits grant
                 each ability and under what condition.
     Materials  every crafting material's drop sources (Dream Eater worlds
                 on hover, Treasure chest locations with tracker cross-offs).
     Recipes .. a checklist of each Spirit's Recipe item (shared with the
                 DDD Achievement Tracker).

   Reuse, not duplication: Dream Eater→world data, the Treasure list and the
   Recipe-item checklist come from the DDD tracker (TRACKER_GAME) + its
   progress store (khddd_progress_v1). Material drops, synthesis recipes,
   Spirit stats, Ability Link boards, Deck Command bonuses and the creation
   formula constants come from js/kh-dream-guide-data.js (DREAM_GUIDE).

   Stores: khddd_progress_v1 (DDD tracker — treasures read; recipes r/w),
           khddd_guide_v1 (this tool's owned-Spirit set).
   Game terms stay English in every language; only UI chrome is translated.
   ===================================================================== */
document.addEventListener('DOMContentLoaded', async function () {
await i18n.init();

const { el, esc } = KH;
const translate = (key) => i18n.getMessage(key);
const format = (key, ...args) => i18n.format(key, ...args);

const DG = window.DREAM_GUIDE;
// Board layouts live in their own easily-edited file (js/kh-dream-guide-boards.js).
DG.boards = (window.DG_BOARDS && window.DG_BOARDS.boards) || DG.boards || {};
DG.boardStarts = (window.DG_BOARDS && window.DG_BOARDS.starts) || DG.boardStarts || {};
DG.boardLinks = (window.DG_BOARDS && window.DG_BOARDS.links) || DG.boardLinks || {};
const CREATE = DG.create;
const GAME = window.TRACKER_GAME;
const DDD_STORE_KEY = GAME.storeKey;
const GUIDE_KEY = "khddd_guide_v1";
const CHARS = (GAME.chars || []).map(c => c.id);
const CHAR_LABEL = {}; (GAME.chars || []).forEach(c => CHAR_LABEL[c.id] = c.label);
const SPIRIT_IMG = "../images/dreamdrop/spirits/";
const BOARD_IMG = "../images/dreamdrop/spiritboard/";
const RANKS = CREATE.ranks;                       // F,E,D,C,B,A,S (low→high)

/* ---------- reused tracker sections ---------- */
function findSec(id) {
  for (const tab of GAME.tabs) for (const sec of tab.sections) if (sec.id === id) return sec;
  return null;
}
const DREAMEATERS = (findSec("dreameaters") || {}).items || [];
const RECIPE_ITEMS = (findSec("recipes") || {}).items || [];
const TREASURE_SEC = findSec("treasures") || {};
const TREASURE_VARIANTS = TREASURE_SEC.variants || {};
const EATER_WORLDS = {};
DREAMEATERS.forEach(item => { EATER_WORLDS[item.name] = { nw: item.nw || [], rw: item.rw || [] }; });
const RECIPE_INDEX = new Map();
RECIPE_ITEMS.forEach((item, i) => { if (!RECIPE_INDEX.has(item.name)) RECIPE_INDEX.set(item.name, i); });

const SPIRIT_BY_NAME = {};
DG.spirits.forEach(s => { SPIRIT_BY_NAME[s.name] = s; });

/* ---------- stores ----------
   Spirit ownership is the DDD tracker's own "Dream Eaters" checklist, so the
   two stay in sync automatically (check a Spirit there → owned here, and back).
   The Dream Guide's own store (khddd_guide_v1) holds the things the tracker
   doesn't: a per-Spirit custom rank and which Ability Link board nodes /
   abilities you've unlocked. */
function loadDDD() { try { return JSON.parse(localStorage.getItem(DDD_STORE_KEY)) || {}; } catch (e) { return {}; } }
let DDD = loadDDD();
function saveDDD() { try { localStorage.setItem(DDD_STORE_KEY, JSON.stringify(DDD)); } catch (e) { /* private */ } }
function dddSection(id) { if (!DDD[id]) DDD[id] = {}; return DDD[id]; }

// Spirit name -> index in the tracker's Dream Eaters list (ownership store).
const DE_INDEX = new Map();
DREAMEATERS.forEach((it, i) => { if (!DE_INDEX.has(it.name)) DE_INDEX.set(it.name, i); });
function spiritOwned(name) { const i = DE_INDEX.get(name); return i != null && !!dddSection("dreameaters")[i]; }
function toggleSpirit(name) {
  const i = DE_INDEX.get(name); if (i == null) return;
  const store = dddSection("dreameaters");
  if (store[i]) delete store[i]; else store[i] = true;
  saveDDD(); renderSpirits(); renderAbilities(); if (modalSpirit === name) renderModal();
}

// Ability-checklist index in the tracker (Support / Spirit abilities only).
const ABIL_SEC = findSec("abilities");
const ABIL_TRACK_INDEX = new Map();
((ABIL_SEC && ABIL_SEC.items) || []).forEach((it, i) => { if (!ABIL_TRACK_INDEX.has(it.name)) ABIL_TRACK_INDEX.set(it.name, i); });

function loadGuide() { try { return JSON.parse(localStorage.getItem(GUIDE_KEY)) || {}; } catch (e) { return {}; } }
let GUIDE = loadGuide();
GUIDE.rank = GUIDE.rank || {};      // spirit -> custom rank
GUIDE.nodes = GUIDE.nodes || {};    // spirit -> { grid: true } unlocked board nodes
GUIDE.abilities = GUIDE.abilities || {};   // ability name -> true (unlocked at least once)
function saveGuide() { try { localStorage.setItem(GUIDE_KEY, JSON.stringify(GUIDE)); } catch (e) { /* private */ } }

function spiritRank(name) { return GUIDE.rank[name] || (SPIRIT_BY_NAME[name] && SPIRIT_BY_NAME[name].rank) || "C"; }
function setSpiritRank(name, rank) { GUIDE.rank[name] = rank; saveGuide(); }

// An ability is "unlocked" if marked here, or already checked on the tracker.
function abilityOwned(name) {
  if (GUIDE.abilities[name]) return true;
  const i = ABIL_TRACK_INDEX.get(name);
  return i != null && !!dddSection("abilities")[i];
}
function setAbilityOwned(name, on) {
  if (on) GUIDE.abilities[name] = true; else delete GUIDE.abilities[name];
  const i = ABIL_TRACK_INDEX.get(name);          // mirror onto the main checklist
  if (i != null) { const s = dddSection("abilities"); if (on) s[i] = true; else delete s[i]; saveDDD(); }
  saveGuide();
}
function nodeOwned(spirit, grid) { const m = GUIDE.nodes[spirit]; return !!(m && m[grid]); }
// Per-board topology (cached): node lookup, child links, keyhole + entry cells.
const BOARD_INFO = {};
const LINK_VEC = { N: [0, -1], S: [0, 1], E: [1, 0], W: [-1, 0] };
function boardInfo(spirit) {
  if (BOARD_INFO[spirit]) return BOARD_INFO[spirit];
  const board = (DG.boards || {})[spirit] || [];
  const links = (DG.boardLinks || {})[spirit] || {};
  const keyholes = new Set((DG.boardStarts || {})[spirit] || []);
  const nodeByCoord = {}, nodesAt = {};
  board.forEach(n => { if (!nodeByCoord[n.g]) nodeByCoord[n.g] = n; (nodesAt[n.g] = nodesAt[n.g] || []).push(n); });
  // A cell with two stacked nodes is a "changes after a Red Secret" cell:
  // node[0] is the first ability, node[1] the one it becomes once the Secret
  // (named in the condition, e.g. "…after Secret: Red at D-7") is unlocked.
  const isReal = c => !!nodeByCoord[c] || keyholes.has(c);
  // The pathing map (links) is undirected: build an adjacency set, taking a
  // link if either tile declares it, between two real cells (tiles/keyhole).
  const adj = {};
  const addAdj = (a, b) => { if (a !== b) { (adj[a] = adj[a] || new Set()).add(b); (adj[b] = adj[b] || new Set()).add(a); } };
  Object.entries(links).forEach(([coord, dirs]) => {
    const c = parseCoord(coord); if (!c) return;
    for (const d of (dirs || "")) { const v = LINK_VEC[d]; if (!v) continue; const nc = coordStr(c.col + v[0], c.row + v[1]); if (isReal(coord) && isReal(nc)) addAdj(coord, nc); }
  });
  // Distance from the single start drives progression (you grow outward).
  const start = [...keyholes][0];
  const distOf = {};
  if (start != null) { distOf[start] = 0; const q = [start]; while (q.length) { const u = q.shift(); for (const v of (adj[u] || [])) if (distOf[v] === undefined) { distOf[v] = distOf[u] + 1; q.push(v); } } }
  // Each tile's primary predecessor = its adjacent neighbour nearest the start.
  const childrenOf = {};
  board.forEach(n => {
    let best = null, bd = Infinity;
    for (const m of (adj[n.g] || [])) { const dd = distOf[m]; if (dd !== undefined && dd < bd) { bd = dd; best = m; } }
    n.frm = (distOf[n.g] > 0) ? best : null;
    if (n.frm) (childrenOf[n.frm] = childrenOf[n.frm] || []).push(n.g);
  });
  // Every undirected link, for drawing trails (includes board loops).
  const edges = [], seenE = new Set();
  for (const a of Object.keys(adj)) for (const b of adj[a]) { const k = a < b ? a + "|" + b : b + "|" + a; if (!seenE.has(k)) { seenE.add(k); edges.push([a, b]); } }
  const entryCoords = new Set(keyholes);
  return (BOARD_INFO[spirit] = { board, nodeByCoord, nodesAt, childrenOf, keyholes, entryCoords, adj, distOf, edges });
}
// Has the Red Secret that flips this two-stage cell been unlocked? The board's
// "Secret: Red" node is the real trigger (some condition strings name the wrong
// coord), so look that up first, then fall back to the coord in the condition.
function secretUnlockedForCell(spirit, variants) {
  const red = ((DG.boards || {})[spirit] || []).find(n => n.t === "Secret" && /red/i.test(n.n));
  if (red) return nodeOwned(spirit, red.g);
  for (const v of variants) { const m = /at ([A-Z]+-\d+)/.exec(v.cond || ""); if (m) return nodeOwned(spirit, m[1]); }
  return true;
}
// The ability currently active in a cell (stage 1 = first node, 2 = second).
function activeAbilityAt(spirit, grid) {
  const variants = boardInfo(spirit).nodesAt[grid] || [];
  if (!variants.length) return null;
  const val = (GUIDE.nodes[spirit] || {})[grid];
  if (!val) return null;
  return variants[(variants.length > 1 && val === 2) ? 1 : 0].n;
}
function coordUnlocked(spirit, coord) {
  const info = boardInfo(spirit);
  if (info.keyholes.has(coord)) return true;                 // keyhole: free/unlocked
  if (info.entryCoords.has(coord) && !info.nodeByCoord[coord]) return true;
  return nodeOwned(spirit, coord);                            // an ability node must be purchased
}
function nodeUnlockable(spirit, node) {
  const info = boardInfo(spirit);
  if (info.entryCoords.has(node.g) || !node.frm) return true;  // a start node is always available
  // Reachable once ANY neighbour nearer the start is unlocked (handles loops).
  const myd = info.distOf[node.g];
  for (const m of (info.adj[node.g] || [])) { if (info.distOf[m] !== undefined && info.distOf[m] < myd && coordUnlocked(spirit, m)) return true; }
  return false;
}
function markNodeAbility(node) { if (node && node.t !== "Quota" && node.t !== "Secret") setAbilityOwned(node.n, true); }
function toggleNode(spirit, node) {
  const info = boardInfo(spirit);
  const grid = node.g;
  const variants = info.nodesAt[grid] || [node];
  const twoStage = variants.length > 1;
  const m = GUIDE.nodes[spirit] || (GUIDE.nodes[spirit] = {});
  const cur = m[grid];
  if (!cur) {
    // first click → unlock the first ability (needs the path unlocked)
    if (!nodeUnlockable(spirit, variants[0])) return;
    m[grid] = 1; markNodeAbility(variants[0]);
  } else if (twoStage && cur !== 2 && secretUnlockedForCell(spirit, variants)) {
    // second click, once the Red Secret is unlocked → switch to the second ability
    m[grid] = 2; markNodeAbility(variants[1]);
  } else {
    // un-mark this cell and cascade-lock everything downstream of it
    const { childrenOf } = info;
    const stack = [grid];
    while (stack.length) { const g = stack.pop(); delete m[g]; (childrenOf[g] || []).forEach(c => { if (m[c]) stack.push(c); }); }
  }
  saveGuide();
  if (modalSpirit === spirit) renderModal();
  renderAbilities();   // Abilities-tab chip colours depend on which nodes are unlocked
}

/* ---------- treasure index (tracker lang gives the chest "area" text) ---------- */
let TREASURE_BY_MAT = {};
let trackerLang = null;
async function fetchTrackerLang() {
  const root = (document.body && document.body.getAttribute("data-root")) || "../";
  for (const lang of [i18n.getCurrentLanguage(), "en"]) {
    try { const r = await fetch(`${root}lang/messages/${lang}/kh-ddd-tracker.json`); if (r.ok) { trackerLang = await r.json(); return; } }
    catch (e) { /* next */ }
  }
  trackerLang = {};
}
function buildTreasureIndex() {
  TREASURE_BY_MAT = {};
  const items = (trackerLang && trackerLang.items) || {};
  CHARS.forEach(char => {
    const list = TREASURE_VARIANTS[char] || [];
    const langRows = items["treasures-" + char] || [];
    list.forEach((entry, idx) => {
      const key = entry.name;
      (TREASURE_BY_MAT[key] = TREASURE_BY_MAT[key] || []).push({
        char, world: entry.g || "", area: (langRows[idx] && langRows[idx].area) || "", idx
      });
    });
  });
}
function treasureCrossed(char, idx) { const s = DDD["treasures-" + char]; return !!(s && s[idx]); }

/* ---------- hover popover ---------- */
const pop = document.getElementById("dg-pop");
function showPop(target, html) {
  pop.innerHTML = html; pop.classList.add("open"); pop.setAttribute("aria-hidden", "false");
  const rect = target.getBoundingClientRect(), pw = pop.offsetWidth, ph = pop.offsetHeight, m = 8;
  let left = Math.max(m, Math.min(rect.left + rect.width / 2 - pw / 2, window.innerWidth - pw - m));
  let top = rect.top - ph - 10; if (top < m) top = rect.bottom + 10;
  pop.style.left = left + "px"; pop.style.top = top + "px";
}
function hidePop() { pop.classList.remove("open"); pop.setAttribute("aria-hidden", "true"); }
function wirePop(container) {
  container.querySelectorAll("[data-pop]").forEach(node => {
    const html = node.getAttribute("data-pop");
    node.addEventListener("mouseenter", () => showPop(node, html));
    node.addEventListener("mouseleave", hidePop);
    node.addEventListener("focus", () => showPop(node, html));
    node.addEventListener("blur", hidePop);
  });
}
window.addEventListener("scroll", hidePop, true);

/* ---------- shared rendering helpers ---------- */
function spiritFile(name) { return SPIRIT_IMG + name.replace(/ /g, "_") + ".png"; }

/* =====================================================================
   Creation formula + rank boosting (from the KH Wiki Spirit article)
   ===================================================================== */
function levelCorrection(level) { return level <= 50 ? 10 + level : 35 + level / 2; }
function rankIdx(r) { return RANKS.indexOf(r); }
// thresholds: how many of a Dream Piece (required = recipe amount) are needed
// for a +1/+2/+3/+4 rank boost. Reproduces the wiki's table exactly.
function boostThresholds(req) {
  return { t1: req <= 1 ? Infinity : Math.ceil(req * 1.5), t2: 2 * req, t3: 3 * req, t4: 5 * req };
}
function boostFor(req, used) {
  if (used < req) return 0;
  const t = boostThresholds(req);
  if (used >= t.t4) return 4; if (used >= t.t3) return 3; if (used >= t.t2) return 2; if (used >= t.t1) return 1;
  return 0;
}
function qtyForBoost(req, b) {
  const t = boostThresholds(req);
  return b <= 0 ? req : b === 1 ? t.t1 : b === 2 ? t.t2 : b === 3 ? t.t3 : t.t4;
}
function levelBonusForTotal(total) {
  for (const row of CREATE.levelBonusPerTotal) if (total >= row[0] && total <= row[1]) return row[2];
  const last = CREATE.levelBonusPerTotal[CREATE.levelBonusPerTotal.length - 1];
  return total > last[1] ? last[2] : 0;
}
// One stat's floored [min,max] + cap, given base, rank, level, forecast range.
function statRange(base, rank, level, bonusRange) {
  if (typeof base !== "number") return null;
  const rc = CREATE.rankCorr[rank], mrc = CREATE.maxRankCorr[rank], lc = levelCorrection(level);
  const lo = base * (rc + (rc - 1.1) / 10) * lc / 10 + bonusRange[0];
  const hi = base * (rc + (rc - 0.9) / 10) * lc / 10 + bonusRange[1];
  const cap = base * (mrc + (mrc - 0.9) / 10) * lc / 10;
  return { lo: Math.floor(lo), hi: Math.min(Math.floor(hi), Math.floor(cap)), cap: Math.floor(cap) };
}
function rangeText(r) { return !r ? "—" : r.lo === r.hi ? `${r.lo}` : `${r.lo}–${r.hi}`; }

// Build the four-stat block for a Spirit at a rank/level/forecast.
function statsTable(spirit, rank, level, forecast, cmd) {
  const fb = CREATE.forecastBonus[forecast] || {};
  const defs = [
    { key: "hp", label: translate("dg-c-hp"), base: spirit.hp, bonus: fb.hp || [0, 0] },
    { key: "str", label: translate("dg-c-str"), base: spirit.str, bonus: fb.str || [0, 0] },
    { key: "mag", label: translate("dg-c-mag"), base: spirit.mag, bonus: fb.mag || [0, 0] },
    { key: "def", label: translate("dg-c-def"), base: spirit.def, bonus: fb.def || [0, 0] },
  ];
  let rows = defs.map(d => {
    const cf = (cmd && cmd[d.key]) || 0;                       // sacrificed-command flat bonus
    const bonus = [d.bonus[0] + cf, d.bonus[1] + cf];
    const r = statRange(d.base, rank, level, bonus);
    const parts = [];
    if (d.bonus[0] || d.bonus[1]) parts.push(`+${d.bonus[0]}${d.bonus[1] !== d.bonus[0] ? "–" + d.bonus[1] : ""}`);
    if (cf) parts.push(`${esc(cmd.name)} +${cf}`);
    const note = r && parts.length ? ` <span class="dg-c-bonus">${parts.join(", ")}</span>` : "";
    return `<tr><td class="dg-c-statname">${esc(d.label)}</td>` +
      `<td>${typeof d.base === "number" ? d.base : esc(String(d.base))}</td>` +
      `<td class="dg-c-result">${rangeText(r)}${note}</td>` +
      `<td class="dg-c-cap">${r ? r.cap : "—"}</td></tr>`;
  }).join("");
  return `<table class="dg-c-stats"><thead><tr><th>${esc(translate("dg-c-th-stat"))}</th>` +
    `<th>${esc(translate("dg-c-th-base"))}</th><th>${esc(translate("dg-c-th-result"))}</th>` +
    `<th>${esc(translate("dg-c-th-cap"))}</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function rankPill(rank) { return `<span class="dg-rank-pill">${esc(rank)}</span>`; }
function matChip(mat, tier, qty, baseQty) {
  if (!mat) return "";
  const boosted = qty != null && baseQty != null && qty > baseQty;
  return `<span class="dg-ing">${esc(mat + (tier ? " " + tier : ""))}` +
    (qty != null ? ` <b class="${boosted ? "dg-ing-up" : ""}">×${qty}</b>` : "") + `</span>`;
}
function recipeTotal(r, q1, q2) {   // total Dream Pieces used across both materials
  return (q1 != null ? q1 : (r.q1 || 0)) + (q2 != null ? q2 : (r.q2 || 0));
}

/* =====================================================================
   TAB 1 — Spirits gallery + detail modal
   ===================================================================== */
const spiritsGrid = document.getElementById("dg-spirits-grid");
const spiritsCount = document.getElementById("dg-spirits-count");
const spiritsFilter = document.getElementById("dg-spirits-filter");
const spiritsOwnedOnly = document.getElementById("dg-spirits-ownedonly");

// The nine Rare Spirits get their own row/section.
const RARE_SPIRITS = new Set(["Meowjesty", "Sudo Neku", "Frootz Cat", "Ursa Circus", "Kab Kannon", "R & R Seal", "Catanuki", "Beatalike", "Tubguin Ace"]);

function spiritCard(spirit) {
  const has = spiritOwned(spirit.name);
  const card = el("div", "dg-spirit" + (has ? " owned" : ""));
  card.setAttribute("role", "button"); card.tabIndex = 0;
  card.innerHTML =
    `<button class="dg-star${has ? " on" : ""}" title="${esc(translate("dg-own-toggle"))}" aria-pressed="${has}">★</button>` +
    `<span class="dg-spirit-img"><img src="${esc(spiritFile(spirit.name))}" alt="" loading="lazy"></span>` +
    `<span class="dg-spirit-name">${esc(spirit.name)}</span>` +
    (spirit.attr ? `<span class="dg-spirit-attr">${esc(spirit.attr)}</span>` : "");
  card.querySelector(".dg-star").addEventListener("click", e => { e.stopPropagation(); toggleSpirit(spirit.name); });
  const open = () => openModal(spirit.name);
  card.addEventListener("click", open);
  card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  return card;
}

function renderSpirits() {
  const query = (spiritsFilter.value || "").trim().toLowerCase();
  const ownedOnly = spiritsOwnedOnly.checked;
  const owned = DG.spirits.filter(s => spiritOwned(s.name)).length;
  spiritsCount.innerHTML = format("dg-owned-count", owned, DG.spirits.length);
  spiritsGrid.innerHTML = "";

  const pass = s => (!query || s.name.toLowerCase().indexOf(query) >= 0) && (!ownedOnly || spiritOwned(s.name));
  const normal = DG.spirits.filter(s => !RARE_SPIRITS.has(s.name) && pass(s));
  const rare = DG.spirits.filter(s => RARE_SPIRITS.has(s.name) && pass(s));

  function section(titleKey, list) {
    if (!list.length) return;
    const head = el("h3", "grp-title"); head.textContent = translate(titleKey);
    spiritsGrid.appendChild(head);
    const grid = el("div", "dg-grid");
    list.forEach(s => grid.appendChild(spiritCard(s)));
    spiritsGrid.appendChild(grid);
  }
  section("dg-spirits-normal", normal);
  section("dg-spirits-rare", rare);
  if (!normal.length && !rare.length) spiritsGrid.innerHTML = `<p class="empty">${esc(translate("dg-empty"))}</p>`;
}

/* ---------- Ability Link board icon mapping ---------- */
function nodeIcon(node) {
  const t = node.t, n = node.n || "", req = (node.c || "").toLowerCase();
  if (t === "Secret") return /red/i.test(n) ? "Red_Secret.png" : "Green_Secret.png";
  if (t === "Quota") {
    if (req.startsWith("link")) return "Link_Door.png";
    if (req.startsWith("level")) return "Level_Door.png";
    return "Premium_Icon.png";
  }
  if (t === "Magic Command") return "Magic_Icon.png";
  if (t === "Attack Command") return "Attack_Icon.png";
  if (t === "Item Command") return "Item_Icon.png";
  if (/Command$/.test(t)) return "Ability_Icon.png";
  if (t === "Support Ability" || t === "Spirits Ability" || t === "Defense Ability") return "Perm_Ability_Icon.png";
  // Only the four "<stat> Boost" abilities use a dedicated stat icon; the
  // Hastes / Screens / Blocks etc. use the generic stat-ability icon.
  if (/^HP Boost$/i.test(n)) return "Health_Stat_Icon.png";
  if (/^Attack Boost$/i.test(n)) return "Attack_Stat_Icon.png";
  if (/^Magic Boost$/i.test(n)) return "Magic_Stat_Icon.png";
  if (/^Defense Boost$/i.test(n)) return "Defense_Stat_Icon.png";
  return "Ability_Icon.png";
}
function isPermanent(node) { return node.t === "Support Ability"; }

/* ---------- Ability Link board grid (columns = letters, rows = numbers) ---------- */
function parseCoord(g) {
  const m = /^([A-Z]+)\s*-\s*(\d+)$/.exec((g || "").trim());
  if (!m) return null;
  let col = 0; for (const ch of m[1]) col = col * 26 + (ch.charCodeAt(0) - 64);
  return { col, row: parseInt(m[2], 10) };
}
function colLabel(n) { let s = ""; while (n > 0) { s = String.fromCharCode(65 + (n - 1) % 26) + s; n = Math.floor((n - 1) / 26); } return s; }
function coordStr(col, row) { return colLabel(col) + "-" + row; }
// A node's condition may gate it behind a disposition ("…when in X disposition").
function dispoGate(cond) { const m = /when in (?:the )?([A-Za-z' -]+?) disposition/i.exec(cond || ""); return m ? m[1].trim() : null; }
// Hover text for one node: what it gives + cost, or a gate's requirement.
function nodeTipOne(n) {
  const gate = dispoGate(n.cond);
  if (n.t === "Quota")
    return `<b>${esc(translate("dg-tip-gate"))}</b><span class="dg-pop-src">${esc(translate("dg-tip-requires"))}: ${esc(n.c || "")}</span>` + (n.cond ? `<span class="dg-pop-cond">${esc(n.cond)}</span>` : "");
  if (n.t === "Secret")
    return `<b>${esc(n.n)}</b><span class="dg-pop-src">${esc(translate("dg-tip-secret"))}</span>` + (n.cond ? `<span class="dg-pop-cond">${esc(n.cond)}</span>` : "");
  const perm = isPermanent(n) ? ` <span class="dg-pop-perm">${esc(translate("dg-permanent"))}</span>` : "";
  let h = `<b>${esc(n.n)}</b>${perm}<span class="dg-pop-src">${esc(n.t)}${n.c ? " · " + esc(n.c) : ""}</span>`;
  if (gate) h += `<span class="dg-pop-gate">${esc(format("dg-tip-needs-dispo", gate))}</span>`;
  else if (n.cond) h += `<span class="dg-pop-cond">${esc(n.cond)}</span>`;
  return h;
}
function buildBoardGrid(spirit, board) {
  const info = boardInfo(spirit);
  const cells = {}; let maxCol = 1, maxRow = 1;
  board.forEach(node => {
    const c = parseCoord(node.g); if (!c) return;
    maxCol = Math.max(maxCol, c.col); maxRow = Math.max(maxRow, c.row);
    (cells[c.col + "," + c.row] = cells[c.col + "," + c.row] || []).push(node);
  });
  info.keyholes.forEach(s => { const c = parseCoord(s); if (c) { maxCol = Math.max(maxCol, c.col); maxRow = Math.max(maxRow, c.row); } });
  // Every link draws as two half-lines (one per cell, meeting in the gap). A
  // link is gated (drawn in a different colour) when its outer tile — the one
  // further from the start — sits behind a disposition gate.
  const OPP = { up: "down", down: "up", left: "right", right: "left" };
  const linkDirs = {};
  const addDir = (k, d, g) => { const mm = linkDirs[k] = linkDirs[k] || {}; if (!mm[d]) mm[d] = g; };
  info.edges.forEach(([a, b]) => {
    const ca = parseCoord(a), cb = parseCoord(b); if (!ca || !cb) return;
    const dc = cb.col - ca.col, dr = cb.row - ca.row;
    const dir = dc === 1 ? "right" : dc === -1 ? "left" : dr === 1 ? "down" : dr === -1 ? "up" : null;
    if (!dir) return;
    const outer = (info.distOf[a] >= info.distOf[b]) ? a : b;   // tile further from start
    const gated = !!dispoGate((info.nodeByCoord[outer] || {}).cond);
    addDir(ca.col + "," + ca.row, dir, gated); addDir(cb.col + "," + cb.row, OPP[dir], gated);
  });
  const trailsFor = key => Object.entries(linkDirs[key] || {}).map(([d, g]) => `<i class="dg-trail ${d}${g ? " gated" : ""}"></i>`).join("");
  let html = `<div class="dg-board-scroll"><div class="dg-grid-board" style="grid-template-columns:var(--dg-rh) repeat(${maxCol}, var(--dg-cell))">`;
  html += `<div class="dg-gcorner"></div>`;
  for (let col = 1; col <= maxCol; col++) html += `<div class="dg-gcol-h">${esc(colLabel(col))}</div>`;
  for (let row = 1; row <= maxRow; row++) {
    html += `<div class="dg-grow-h">${row}</div>`;
    for (let col = 1; col <= maxCol; col++) {
      const key = col + "," + row, nodes = cells[key];
      if (!nodes) {
        html += info.keyholes.has(coordStr(col, row))
          ? `<div class="dg-gcell start">${trailsFor(key)}<img src="${esc(BOARD_IMG)}Start_Icon.png" alt="Start"></div>`
          : `<div class="dg-gcell">${trailsFor(key)}</div>`;
        continue;
      }
      const primary = nodes[0], owned = nodeOwned(spirit, primary.g);
      const twoStage = nodes.length > 1;
      const stage = (GUIDE.nodes[spirit] || {})[primary.g];
      const display = twoStage && stage === 2 ? nodes[1] : primary;   // show the active variant
      const isEntry = info.entryCoords.has(primary.g);
      const state = owned ? "owned" : (nodeUnlockable(spirit, primary) ? "open" : "locked");
      const tip = nodes.map((n, i) => (twoStage && stage && ((stage === 2) === (i === 1)) ? '<span class="dg-pop-active">●</span> ' : "") + nodeTipOne(n)).join('<span class="dg-pop-hr"></span>') +
        (twoStage ? `<span class="dg-pop-change">${esc(translate("dg-secret-change"))}</span>` : "");
      html += `<div class="dg-gcell filled ${state}${isEntry ? " startnode" : ""}${twoStage ? " twostage" : ""}" tabindex="0" role="button" data-pop="${esc(tip)}" data-node="${esc(primary.g)}" aria-pressed="${owned}">` +
        trailsFor(key) + `<img src="${esc(BOARD_IMG + nodeIcon(display))}" alt="${esc(display.n)}">` +
        (twoStage ? `<span class="dg-gtwostage" aria-hidden="true">2</span>` : "") +
        `<span class="dg-gcheck" aria-hidden="true">✓</span></div>`;
    }
  }
  return html + `</div></div>`;
}
function boardLegend() {
  const items = [["Start_Icon.png", "dg-leg-start"], ["Ability_Icon.png", "dg-leg-stat"], ["Perm_Ability_Icon.png", "dg-permanent"],
    ["Attack_Icon.png", "dg-leg-cmd"], ["Link_Door.png", "dg-leg-gate"], ["Green_Secret.png", "dg-leg-secret"]];
  return `<div class="dg-board-legend">` + items.map(([ic, k]) =>
    `<span><img src="${esc(BOARD_IMG + ic)}" alt="">${esc(translate(k))}</span>`).join("") +
    `<span><i class="dg-leg-line gated"></i>${esc(translate("dg-leg-dispo"))}</span>` +
    `<span class="dg-board-legend-tip">${esc(translate("dg-board-click"))}</span></div>`;
}

/* ---------- modal ---------- */
const modal = document.getElementById("dg-modal");
const modalBody = document.getElementById("dg-modal-body");
let modalSpirit = null, modalRank = null, modalLevel = 50;
function openModal(name) { modalSpirit = name; modalRank = null; modalLevel = 50; renderModal(); modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); }
function closeModal() { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); modalSpirit = null; }
document.getElementById("dg-modal-close").addEventListener("click", closeModal);
document.getElementById("dg-modal-back").addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });

function dispoSwitch(sw) {
  const parts = (sw || "").split(";").map(s => s.trim()).filter(Boolean);
  return `<div class="dg-m-switch">` + parts.map(p => {
    const m = /^To\s+([^:]+):\s*(.+)$/.exec(p);
    return m ? `<div><span class="dg-sw-to">${esc(m[1].trim())}</span> ${esc(m[2].trim())}</div>` : `<div>${esc(p)}</div>`;
  }).join("") + `</div>`;
}
function updateModalStats(spirit) {
  const host = document.getElementById("dg-m-stats");
  if (host) host.innerHTML = statsTable(spirit, modalRank || spiritRank(spirit.name), modalLevel, "");
}
function renderModal() {
  const spirit = SPIRIT_BY_NAME[modalSpirit];
  if (!spirit) return;
  const has = spiritOwned(spirit.name);
  const rank = modalRank || spiritRank(spirit.name);

  // --- header ---
  let html = `<div class="dg-m-head">` +
    `<img class="dg-m-portrait" src="${esc(spiritFile(spirit.name))}" alt="">` +
    `<div class="dg-m-headinfo">` +
      `<div class="dg-m-title" id="dg-modal-title">${esc(spirit.name)}</div>` +
      `<div class="dg-m-meta">` +
        `<span><b>${esc(translate("dg-c-attr"))}</b> ${esc(spirit.attr || "—")}</span>` +
        `<span><b>${esc(translate("dg-c-style"))}</b> ${esc(spirit.style || "—")}</span>` +
        `<span><b>${esc(translate("dg-c-dp"))}</b> ${esc(spirit.dp || "—")}</span>` +
        `<span><b>${esc(translate("dg-c-exp"))}</b> ${typeof spirit.exp === "number" ? spirit.exp : esc(String(spirit.exp))}</span>` +
      `</div>` +
      `<button class="dg-m-own${has ? " on" : ""}" id="dg-m-own">★ ${esc(translate(has ? "dg-owned" : "dg-mark-owned"))}</button>` +
    `</div></div>`;

  // --- rank / level controls + computed stats ---
  const rankOpts = RANKS.slice().reverse().map(r => `<option value="${esc(r)}"${r === rank ? " selected" : ""}>${esc(r)}</option>`).join("");
  html += `<div class="dg-m-controls">` +
    `<label class="dg-ctx-field"><span>${esc(translate("dg-c-rank-out"))}</span><select id="dg-m-rank">${rankOpts}</select></label>` +
    `<label class="dg-ctx-field dg-ctx-narrow"><span>${esc(translate("dg-c-level-out"))}</span><input type="number" id="dg-m-level" min="1" max="99" value="${modalLevel}"></label>` +
    `<span class="dg-m-controls-note">${esc(translate(has ? "dg-your-spirit" : "dg-preview"))}</span></div>`;
  html += `<div id="dg-m-stats">${statsTable(spirit, rank, modalLevel, "")}</div>`;

  // --- resistances ---
  html += `<h3 class="grp-title">${esc(translate("dg-c-resist"))}</h3><div class="dg-c-res">`;
  [["fire", "Fire"], ["blz", "Blizzard"], ["thn", "Thunder"], ["wtr", "Water"], ["drk", "Dark"], ["lgt", "Light"]].forEach(([k, label]) => {
    const mult = spirit.res ? spirit.res[k] : null;
    const cls = typeof mult === "number" ? (mult > 1 ? " weak" : mult < 1 ? " strong" : "") : "";
    html += `<span class="dg-c-res-chip${cls}"><span class="dg-c-res-el">${esc(label)}</span><b>${typeof mult === "number" ? "×" + mult : "—"}</b></span>`;
  });
  html += `</div>`;

  // --- dispositions (with how-to-switch) ---
  if (spirit.disps && spirit.disps.length) {
    html += `<h3 class="grp-title">${esc(translate("dg-c-dispo-list"))}</h3><div class="dg-m-dispos">`;
    spirit.disps.forEach((d, i) => {
      html += `<div class="dg-m-dispo"><div class="dg-m-dispo-top"><span class="dg-c-dispo-no">${["I", "II", "III", "IV"][i]}</span>` +
        `<span class="dg-c-dispo-name">${esc(d.n)}</span></div>` +
        (d.b ? `<div class="dg-c-dispo-beh">${esc(d.b)}</div>` : "") +
        (d.sw ? `<details class="dg-m-switch-wrap"><summary>${esc(translate("dg-dispo-switch"))}</summary>${dispoSwitch(d.sw)}</details>` : "") +
        `</div>`;
    });
    html += `</div>`;
  }

  // --- ability link board ---
  const board = (DG.boards || {})[spirit.name] || [];
  if (board.length) {
    const coords = [...new Set(board.map(n => n.g))];   // two-stage cells share a coord
    const ownedNodes = coords.filter(g => nodeOwned(spirit.name, g)).length;
    html += `<h3 class="grp-title">${esc(translate("dg-board"))} <span class="dg-c-sub">— ${KH.chip(ownedNodes, coords.length)}</span></h3>`;
    html += buildBoardGrid(spirit.name, board) + boardLegend();
  }

  // --- recipes to create it ---
  const recs = DG.recipes.filter(r => r.sp === spirit.name);
  if (recs.length) {
    html += `<h3 class="grp-title">${esc(translate("dg-m-recipes"))}</h3><div class="dg-m-recipes">`;
    recs.forEach(r => {
      html += `<div class="dg-m-recipe">${rankPill(r.rank)} ` +
        matChip(r.m1, r.t1, r.q1) + ` <span class="dg-plus">+</span> ` + matChip(r.m2, r.t2, r.q2) +
        (r.pct != null ? ` <span class="dg-m-pct${r.pct < 100 ? " low" : ""}">${r.pct}%</span>` : "") +
        (r.off ? ` <span class="dg-off-badge">${esc(translate("dg-official"))}</span>` : "") +
        (r.rare ? ` <span class="dg-rare">→ ${esc(r.rare)}</span>` : "") + `</div>`;
    });
    html += `</div>`;
  }

  modalBody.innerHTML = html;
  // wire controls
  const ownBtn = document.getElementById("dg-m-own");
  if (ownBtn) ownBtn.addEventListener("click", () => toggleSpirit(spirit.name));
  const rankSel = document.getElementById("dg-m-rank");
  rankSel.addEventListener("change", () => { modalRank = rankSel.value; if (spiritOwned(spirit.name)) setSpiritRank(spirit.name, modalRank); updateModalStats(spirit); });
  const levelIn = document.getElementById("dg-m-level");
  levelIn.addEventListener("input", () => { modalLevel = Math.min(99, Math.max(1, parseInt(levelIn.value, 10) || 1)); updateModalStats(spirit); });
  modalBody.querySelectorAll(".dg-gcell.filled").forEach(cell => {
    const node = board.find(n => n.g === cell.getAttribute("data-node"));
    if (!node) return;
    cell.addEventListener("click", () => toggleNode(spirit.name, node));
    cell.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); toggleNode(spirit.name, node); } });
  });
  wirePop(modalBody);
}

/* =====================================================================
   TAB 2 — Creation calculator (two modes)
   ===================================================================== */
const C = {
  forecast: document.getElementById("dg-c-forecast"),
  level: document.getElementById("dg-c-level"),
  m1mat: document.getElementById("dg-c-m1-mat"), m1tier: document.getElementById("dg-c-m1-tier"),
  m2mat: document.getElementById("dg-c-m2-mat"), m2tier: document.getElementById("dg-c-m2-tier"),
  matOut: document.getElementById("dg-c-materials-out"),
  spirit: document.getElementById("dg-c-spirit"), rank: document.getElementById("dg-c-rank"),
  spiritOut: document.getElementById("dg-c-spirit-out"),
  command: document.getElementById("dg-c-command"),
};
let createMode = "materials";
function curCommand() { return C.command.value === "" ? null : DG.commands[+C.command.value]; }

// Short summary of a sacrificed command's bonus (stats + resistances + affinity).
function commandBonusLine(cmd) {
  if (!cmd) return "";
  const parts = [];
  [["hp", "HP"], ["str", translate("dg-c-str")], ["mag", translate("dg-c-mag")], ["def", translate("dg-c-def")]].forEach(([k, l]) => { if (cmd[k]) parts.push(`${esc(l)} +${cmd[k]}`); });
  [["fire", "Fire"], ["blz", "Blizzard"], ["thn", "Thunder"], ["wtr", "Water"], ["drk", "Dark"], ["lgt", "Light"]].forEach(([k, l]) => { if (cmd[k]) parts.push(`${esc(l)} res +${cmd[k]}%`); });
  if (cmd.aff) parts.push(`${esc(translate("dg-c-affinity"))} +${cmd.aff}`);
  return `<div class="dg-c-cmdline"><b>${esc(translate("dg-c-cmd-applied"))}: ${esc(cmd.name)}</b> — ${parts.join(", ") || "—"}</div>`;
}

/* =====================================================================
   TAB — Command sacrifice table (sortable / filterable)

   Every Deck Command that can be sacrificed when creating a Spirit, with
   the flat stat (+HP/Str/Mag/Def) and elemental-resistance (+%) bonuses it
   passes on, plus its max-affinity gain. Click a header to sort; filter by
   text or command type.
   ===================================================================== */
const cmdFilter = document.getElementById("dg-cmd-filter");
const cmdCatSel = document.getElementById("dg-cmd-cat");
const cmdTableHost = document.getElementById("dg-commands-table");
const cmdShown = document.getElementById("dg-cmd-shown");
let cmdSort = { k: "name", dir: 1 };

function cmdColumns() {
  return [
    { k: "name", lbl: translate("dg-cmd-th-name"), tip: translate("dg-cmd-th-name") },
    { k: "cat",  lbl: translate("dg-cmd-th-cat"),  tip: translate("dg-cmd-th-cat") },
    { k: "aff",  lbl: translate("dg-cmd-th-aff"),  tip: translate("dg-c-affinity"), num: true },
    { k: "hp",   lbl: "HP",  tip: translate("dg-c-hp"),  num: true },
    { k: "str",  lbl: "Str", tip: translate("dg-c-str"), num: true },
    { k: "mag",  lbl: "Mag", tip: translate("dg-c-mag"), num: true },
    { k: "def",  lbl: "Def", tip: translate("dg-c-def"), num: true },
    { k: "fire", lbl: "Fire", tip: "Fire",     num: true, pct: true },
    { k: "blz",  lbl: "Blz",  tip: "Blizzard", num: true, pct: true },
    { k: "thn",  lbl: "Thn",  tip: "Thunder",  num: true, pct: true },
    { k: "wtr",  lbl: "Wtr",  tip: "Water",    num: true, pct: true },
    { k: "drk",  lbl: "Drk",  tip: "Dark",     num: true, pct: true },
    { k: "lgt",  lbl: "Lgt",  tip: "Light",    num: true, pct: true }
  ];
}
function fillCmdCats() {
  const cats = [...new Set(DG.commands.map(c => c.cat))];
  const cur = cmdCatSel.value;
  cmdCatSel.innerHTML = `<option value="">${esc(translate("dg-cmd-cat-all"))}</option>` +
    cats.map(c => `<option value="${esc(c)}"${c === cur ? " selected" : ""}>${esc(c)}</option>`).join("");
}
function renderCommands() {
  const cols = cmdColumns();
  const q = (cmdFilter.value || "").toLowerCase().trim();
  const cat = cmdCatSel.value;
  const isNum = k => k !== "name" && k !== "cat";
  const rows = DG.commands
    .filter(c => (!cat || c.cat === cat) && (!q || (c.name + " " + c.cat).toLowerCase().includes(q)))
    .slice()
    .sort((a, b) => {
      const k = cmdSort.k;
      const d = isNum(k) ? (a[k] - b[k]) * cmdSort.dir : String(a[k]).localeCompare(String(b[k])) * cmdSort.dir;
      return d || a.name.localeCompare(b.name);
    });
  const head = cols.map(col => {
    const active = col.k === cmdSort.k, arrow = active ? (cmdSort.dir > 0 ? "▲" : "▼") : "";
    return `<th class="dg-cmd-th${col.num ? " num" : ""}${active ? " sorted" : ""}" data-k="${esc(col.k)}" data-pop="${esc(col.tip)}" tabindex="0" role="button" aria-label="${esc(col.tip)}">${esc(col.lbl)} <span class="dg-cmd-arrow">${arrow}</span></th>`;
  }).join("");
  const body = rows.map(c => "<tr>" + cols.map(col => {
    if (!col.num) return `<td class="${col.k === "name" ? "dg-cmd-name" : "dg-cmd-catcell"}">${esc(c[col.k])}</td>`;
    const v = c[col.k];
    return `<td class="num ${v ? "has" : "zero"}">${v ? "+" + v + (col.pct ? "%" : "") : "·"}</td>`;
  }).join("") + "</tr>").join("");
  cmdTableHost.innerHTML = rows.length
    ? `<table class="dg-cmd-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`
    : `<p class="empty">${esc(translate("dg-empty"))}</p>`;
  cmdShown.textContent = format("dg-cmd-count", rows.length, DG.commands.length);
  cmdTableHost.querySelectorAll(".dg-cmd-th").forEach(th => {
    const act = () => {
      const nk = th.dataset.k;
      if (cmdSort.k === nk) cmdSort.dir *= -1; else cmdSort = { k: nk, dir: isNum(nk) ? -1 : 1 };
      renderCommands();
    };
    th.addEventListener("click", act);
    th.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); act(); } });
  });
  wirePop(cmdTableHost);
}

function fillCreateControls() {
  C.forecast.innerHTML = CREATE.forecasts.map(f => `<option value="${esc(f)}">${esc(f)}</option>`).join("");
  // Deck Command picker (grouped by category), "none" first.
  const groups = {};
  DG.commands.forEach((c, i) => { (groups[c.cat] = groups[c.cat] || []).push(`<option value="${i}">${esc(c.name)}</option>`); });
  C.command.innerHTML = `<option value="">${esc(translate("dg-c-none"))}</option>` +
    Object.keys(groups).map(cat => `<optgroup label="${esc(cat)}">${groups[cat].join("")}</optgroup>`).join("");
  const anyMat = `<option value="">${esc(translate("dg-any"))}</option>`;
  const matOpts = anyMat + DG.materials.map(m => `<option value="${esc(m)}">${esc(m)}</option>`).join("");
  const anyTier = `<option value="">${esc(translate("dg-any"))}</option>`;
  const tierOpts = anyTier + DG.tiers.map(t => `<option value="${esc(t)}">${esc(t)}</option>`).join("");
  C.m1mat.innerHTML = matOpts; C.m2mat.innerHTML = matOpts;
  C.m1tier.innerHTML = tierOpts; C.m2tier.innerHTML = tierOpts;
  C.spirit.innerHTML = DG.spirits.map((s, i) => `<option value="${i}">${esc(s.name)}</option>`).join("");
  C.rank.innerHTML = `<option value="">${esc(translate("dg-any"))}</option>` +
    RANKS.slice().reverse().map(r => `<option value="${esc(r)}">${esc(r)}</option>`).join("");
  // default: one material in slot 1, "any" in slot 2 (the usual "what can X make?")
  C.m1mat.value = "Rampant"; C.m1tier.value = "Figment";
  C.m2mat.value = ""; C.m2tier.value = "";
}

function curLevel() { return Math.min(99, Math.max(1, parseInt(C.level.value, 10) || 1)); }
function curForecast() { return C.forecast.value || CREATE.forecasts[0]; }

// dispositions + forecast note block, shared by both modes
function forecastExtras(spirit, forecast) {
  const odds = CREATE.dispoOdds[forecast] || [0, 0, 0, 0];
  let html = `<div class="dg-c-dispos">`;
  (spirit.disps || []).forEach((d, i) => {
    const pct = odds[i] || 0;
    html += `<div class="dg-c-dispo${pct ? "" : " off"}"><div class="dg-c-dispo-head">` +
      `<span class="dg-c-dispo-no">${["I", "II", "III", "IV"][i]}</span>` +
      `<span class="dg-c-dispo-name">${esc(d.n)}</span><span class="dg-c-dispo-pct">${pct}%</span></div>` +
      `<div class="dg-c-dispo-bar"><i style="width:${pct}%"></i></div></div>`;
  });
  html += `</div>`;
  const fi = (CREATE.forecastInfo || {})[forecast];
  if (fi) html += `<div class="dg-c-forecast-note"><b>${esc(forecast)}.</b> ${esc(fi.desc || "")}` +
    (fi.effect && fi.effect !== "—" ? ` <span class="dg-c-forecast-eff">${esc(fi.effect)}</span>` : "") + `</div>`;
  return html;
}

/* ----- By Materials (forward) ----- */
function slotMatch(slot, mat, tier) { return (!slot.mat || slot.mat === mat) && (!slot.tier || slot.tier === tier); }
function recipeMatchSlots(r, s1, s2) {
  const a = { mat: r.m1, tier: r.t1, q: r.q1 }, b = { mat: r.m2, tier: r.t2, q: r.q2 };
  if (slotMatch(s1, a.mat, a.tier) && slotMatch(s2, b.mat, b.tier)) return [a, b];
  if (slotMatch(s1, b.mat, b.tier) && slotMatch(s2, a.mat, a.tier)) return [b, a];
  return null;
}
// The highest rank a recipe can reach: base + up to 4 from over-stuffing
// materials + 1 from Risky Winds. A few recipes cap lower in-game (a per-recipe
// quirk), given by r.cap.
function recipeMaxRank(r, isRisky) {
  let idx = rankIdx(r.rank) + 4 + (isRisky ? 1 : 0);
  idx = Math.min(idx, RANKS.length - 1);
  if (r.cap) idx = Math.min(idx, rankIdx(r.cap));
  return RANKS[idx];
}
// Apply a recipe's rank cap (if any) to a computed rank index.
function capRankIdx(r, idx) { return r.cap ? Math.min(idx, rankIdx(r.cap)) : idx; }
// Under Risky Winds the rarer (lower-odds) Spirit is +50% likely and the
// ordinary one -50%. Returns the listed Spirit's adjusted odds.
function riskyOdds(pct) {
  if (pct == null || pct >= 100) return pct;
  return pct < 50 ? pct + 50 : pct > 50 ? pct - 50 : pct;
}
function renderMaterialsMode() {
  const s1 = { mat: C.m1mat.value, tier: C.m1tier.value }, s2 = { mat: C.m2mat.value, tier: C.m2tier.value };
  const forecast = curForecast(), level = curLevel(), isRisky = forecast === "Risky Winds", cmd = curCommand();

  if (!s1.mat && !s2.mat) { C.matOut.innerHTML = `<p class="empty">${esc(translate("dg-c-pick-mat"))}</p>`; return; }

  // Every recipe that uses the chosen Dream Piece(s), shown at its listed (base)
  // rank. Quantities/boosting live in "By Spirit"; this view is for discovery.
  const results = DG.recipes.filter(r => !!recipeMatchSlots(r, s1, s2));
  if (!results.length) { C.matOut.innerHTML = `<p class="empty">${esc(translate("dg-c-no-recipe"))}</p>`; return; }
  results.sort((a, b) => rankIdx(b.rank) - rankIdx(a.rank) || a.sp.localeCompare(b.sp));

  let html = `<p class="hint" style="margin:0 0 6px">${esc(format("dg-c-found", results.length))}</p>`;
  results.forEach(r => {
    const spirit = SPIRIT_BY_NAME[r.sp];
    const finalRank = RANKS[capRankIdx(r, rankIdx(r.rank) + (isRisky ? 1 : 0))];   // base, +1 under Risky
    const pct = r.pct != null ? (isRisky ? riskyOdds(r.pct) : r.pct) : null;
    const total = recipeTotal(r);
    html += `<div class="dg-c-card">` +
      `<div class="dg-c-cardhead">` +
        `<img class="dg-c-cardimg" src="${esc(spiritFile(r.sp))}" alt="" loading="lazy">` +
        `<button class="dg-c-cardname" data-spirit="${esc(r.sp)}">${esc(r.sp)}</button>` +
        `<span class="dg-c-rankbig">${esc(translate("dg-c-rank-out"))} ${esc(finalRank)}` +
          (isRisky && finalRank !== r.rank ? ` <span class="dg-c-up">(${esc(r.rank)} +Risky)</span>` : "") +
          (rankIdx(recipeMaxRank(r, isRisky)) > rankIdx(finalRank) ? ` <span class="dg-c-boostnote">${esc(format("dg-c-upto", recipeMaxRank(r, isRisky)))}</span>` : "") + `</span>` +
        (pct != null ? `<span class="dg-c-pct${pct < 100 ? " low" : ""}">${pct}%</span>` : "") +
      `</div>` +
      `<div class="dg-c-cardrecipe">` + matChip(r.m1, r.t1, r.q1) +
        ` <span class="dg-plus">+</span> ` + matChip(r.m2, r.t2, r.q2) +
        ` <span class="dg-c-total">${esc(format("dg-c-total", total, levelBonusForTotal(total)))}</span>` +
        (r.off ? ` <span class="dg-off-badge">${esc(translate("dg-official"))}</span>` : "") +
        (r.rare ? ` <span class="dg-rare">${esc(format("dg-c-rare-out", r.rare, pct != null ? 100 - pct : 0))}</span>` : "") +
      `</div>` +
      statsTable(spirit, finalRank, level, forecast, cmd) + commandBonusLine(cmd) +
      `<details class="dg-c-more"><summary>${esc(translate("dg-c-more"))}</summary>` +
        forecastExtras(spirit, forecast) + `</details>` +
      `</div>`;
  });
  C.matOut.innerHTML = html;
  wireResultNames(C.matOut);
}

/* ----- By Spirit (backward) ----- */
function spiritCardHead(spirit, rankHtml) {
  return `<div class="dg-c-cardhead">` +
    `<img class="dg-c-cardimg" src="${esc(spiritFile(spirit.name))}" alt="">` +
    `<span class="dg-c-cardname">${esc(spirit.name)}</span>` + (rankHtml || "") + `</div>`;
}
function recipeRow(r, q1, q2, needed, isRisky) {
  const pct = r.pct != null ? (isRisky ? riskyOdds(r.pct) : r.pct) : null;
  const total = recipeTotal(r, q1, q2);
  const note = needed > 0 ? `<span class="dg-c-boostnote">${esc(format("dg-c-boost", r.rank, needed))}</span>`
    : `<span class="dg-c-boostnote">${esc(translate("dg-c-asis"))}</span>`;
  return `<div class="dg-c-reciperow">` +
    matChip(r.m1, r.t1, q1, r.q1) + ` <span class="dg-plus">+</span> ` + matChip(r.m2, r.t2, q2, r.q2) +
    ` <span class="dg-c-total">${esc(format("dg-c-total", total, levelBonusForTotal(total)))}</span>` + note +
    (pct != null ? ` <span class="dg-c-pct${pct < 100 ? " low" : ""}">${pct}%</span>` : "") +
    (r.rare && pct != null && pct < 100 ? ` <span class="dg-rare">${esc(format("dg-c-rare-out", r.rare, 100 - pct))}</span>` : "") +
    `</div>`;
}
function renderSpiritMode() {
  const spirit = DG.spirits[+C.spirit.value] || DG.spirits[0];
  const rankVal = C.rank.value;                       // "" = any
  const forecast = curForecast(), level = curLevel(), isRisky = forecast === "Risky Winds", cmd = curCommand();
  const recs = DG.recipes.filter(r => r.sp === spirit.name);

  // ----- "any rank": list every recipe at its base rank, with how far it boosts -----
  if (!rankVal) {
    let html = `<div class="dg-c-card">` + spiritCardHead(spirit, "") + `</div>`;
    html += `<h3 class="grp-title">${esc(format("dg-c-all-recipes", recs.length, spirit.name))}</h3>`;
    recs.slice().sort((a, b) => rankIdx(a.rank) - rankIdx(b.rank)).forEach(r => {
      const maxR = recipeMaxRank(r, false);
      html += `<div class="dg-c-reciperow">` + rankPill(r.rank) + " " +
        matChip(r.m1, r.t1, r.q1) + ` <span class="dg-plus">+</span> ` + matChip(r.m2, r.t2, r.q2) +
        (r.off ? ` <span class="dg-off-badge">${esc(translate("dg-official"))}</span>` : "") +
        (r.pct != null && r.pct < 100 ? ` <span class="dg-c-pct low">${r.pct}%</span>` : "") +
        (r.rare ? ` <span class="dg-rare">→ ${esc(r.rare)}</span>` : "") +
        (rankIdx(maxR) > rankIdx(r.rank) ? ` <span class="dg-c-boostnote">${esc(format("dg-c-upto", maxR))}</span>` : "") +
        `</div>`;
    });
    C.spiritOut.innerHTML = html;
    wireResultNames(C.spiritOut);
    return;
  }

  // ----- specific rank: which recipes reach it, and with what amounts -----
  const target = rankVal, targetI = rankIdx(target);
  const viable = [];
  recs.forEach(r => {
    if (r.cap && targetI > rankIdx(r.cap)) return;     // this recipe caps below the target rank
    const needed = targetI - rankIdx(r.rank) - (isRisky ? 1 : 0);   // boost required
    if (needed < 0) return;
    if (needed > 4) return;
    const q1 = qtyForBoost(r.q1, needed), q2 = qtyForBoost(r.q2, needed);
    if (!isFinite(q1) || !isFinite(q2)) return;        // +1 impossible for a 1-qty piece
    viable.push({ r, needed, q1, q2 });
  });

  let html = `<div class="dg-c-card">` +
    spiritCardHead(spirit, `<span class="dg-c-rankbig">${esc(translate("dg-c-rank-out"))} ${esc(target)}` + (isRisky ? ` <span class="dg-c-up">(+Risky)</span>` : "") + `</span>`) +
    statsTable(spirit, target, level, forecast, cmd) + commandBonusLine(cmd) +
    `<details class="dg-c-more"><summary>${esc(translate("dg-c-more"))}</summary>` + forecastExtras(spirit, forecast) + `</details>` +
    `</div>`;
  if (!viable.length) {
    html += `<p class="empty">${esc(format("dg-c-unreachable", target, spirit.name))}</p>`;
  } else {
    viable.sort((a, b) => recipeTotal(a.r, a.q1, a.q2) - recipeTotal(b.r, b.q1, b.q2));
    html += `<h3 class="grp-title">${esc(format("dg-c-recipes-for", viable.length, target))}</h3>`;
    viable.forEach(v => { html += recipeRow(v.r, v.q1, v.q2, v.needed, isRisky); });
  }
  C.spiritOut.innerHTML = html;
  wireResultNames(C.spiritOut);
}

function wireResultNames(container) {
  container.querySelectorAll("[data-spirit]").forEach(b => b.addEventListener("click", () => openModal(b.getAttribute("data-spirit"))));
}

function renderCreation() { if (createMode === "materials") renderMaterialsMode(); else renderSpiritMode(); }

function initCreation() {
  fillCreateControls();
  document.querySelectorAll(".dg-mode").forEach(btn => btn.addEventListener("click", () => {
    createMode = btn.dataset.mode;
    document.querySelectorAll(".dg-mode").forEach(b => b.classList.toggle("active", b === btn));
    document.getElementById("dg-cmode-materials").style.display = createMode === "materials" ? "" : "none";
    document.getElementById("dg-cmode-spirit").style.display = createMode === "spirit" ? "" : "none";
    renderCreation();
  }));
  [C.forecast, C.command, C.m1mat, C.m1tier, C.m2mat, C.m2tier, C.spirit, C.rank].forEach(e => e.addEventListener("change", renderCreation));
  C.level.addEventListener("input", renderCreation);
  renderCreation();
}

/* =====================================================================
   TAB 3 — Abilities (search across every board, incl. permanent unlocks)
   ===================================================================== */
const abList = document.getElementById("dg-ab-list");
const abFilter = document.getElementById("dg-ab-filter");
const abCats = document.getElementById("dg-ab-cats");
let abCat = "all";

// name -> { type, perm, grants:[{spirit, cost, cond, grid}] }
const ABILITY_INDEX = {};
Object.keys(DG.boards || {}).forEach(spirit => {
  DG.boards[spirit].forEach(node => {
    // Quotas are board gates, Secrets only reshape the board — neither is a
    // real ability the player gains, so they're left out of the search.
    if (node.t === "Quota" || node.t === "Secret") return;
    const key = node.n;
    const entry = ABILITY_INDEX[key] || (ABILITY_INDEX[key] = { type: node.t, perm: isPermanent(node), grants: [] });
    if (isPermanent(node)) entry.perm = true;
    entry.grants.push({ spirit, cost: node.c, cond: node.cond, grid: node.g, t: node.t });
  });
});
function abCategoryOf(name) {
  const e = ABILITY_INDEX[name];
  if (e.perm) return "permanent";
  if (/Command$/.test(e.type)) return "command";
  return "stat";
}
const AB_CATS = ["all", "permanent", "stat", "command"];

function fillAbCats() {
  abCats.innerHTML = AB_CATS.map(c =>
    `<button class="dg-ab-cat${c === abCat ? " active" : ""}" data-cat="${c}">${esc(translate("dg-abcat-" + c))}</button>`).join("");
  abCats.querySelectorAll(".dg-ab-cat").forEach(b => b.addEventListener("click", () => {
    abCat = b.dataset.cat;
    abCats.querySelectorAll(".dg-ab-cat").forEach(x => x.classList.toggle("active", x === b));
    renderAbilities();
  }));
}
function renderAbilities() {
  const query = (abFilter.value || "").trim().toLowerCase();
  const names = Object.keys(ABILITY_INDEX).filter(n => {
    if (query && n.toLowerCase().indexOf(query) < 0) return false;
    if (abCat !== "all" && abCategoryOf(n) !== abCat) return false;
    return true;
  }).sort((a, b) => a.localeCompare(b));

  if (!names.length) { abList.innerHTML = `<p class="empty">${esc(translate("dg-empty"))}</p>`; return; }
  // Colour key: which Spirits you own, and where you've unlocked the node.
  let html = `<div class="dg-ab-legend"><span class="dg-ab-chip owned"><i></i>${esc(translate("dg-ab-legend-owned"))}</span>` +
    `<span class="dg-ab-chip unlocked"><i></i>${esc(translate("dg-ab-legend-unlocked"))}</span></div>`;
  names.forEach(name => {
    const e = ABILITY_INDEX[name];
    const icon = nodeIcon({ t: e.type, n: name, c: e.grants[0].cost });
    html += `<div class="dg-ab"><div class="dg-ab-head">` +
      `<img class="dg-ab-ic" src="${esc(BOARD_IMG + icon)}" alt="">` +
      `<span class="dg-ab-name">${esc(name)}</span>` +
      `<span class="dg-ab-type">${esc(e.type)}</span>` +
      (e.perm ? `<span class="dg-perm-badge">${esc(translate("dg-permanent"))}</span>` : "") +
      `<span class="dg-ab-count">${esc(format("dg-ab-from", e.grants.length))}</span></div>` +
      `<div class="dg-ab-spirits">` +
        e.grants.map(g => {
          const ownedSp = spiritOwned(g.spirit), unlocked = ownedSp && activeAbilityAt(g.spirit, g.grid) === name;
          const cls = "dg-ab-chip" + (g.cond ? " cond" : "") + (unlocked ? " unlocked" : ownedSp ? " owned" : "");
          const tip = [g.spirit, g.grid + " · " + g.cost, g.cond].filter(Boolean).map(esc).join("<br>");
          return `<button class="${cls}" data-spirit="${esc(g.spirit)}" data-pop="${esc(tip)}" tabindex="0">` +
            `<img src="${esc(spiritFile(g.spirit))}" alt="">${esc(g.spirit)}</button>`;
        }).join("") +
      `</div></div>`;
  });
  abList.innerHTML = html;
  abList.querySelectorAll("[data-spirit]").forEach(b => b.addEventListener("click", () => openModal(b.getAttribute("data-spirit"))));
  wirePop(abList);
}

/* =====================================================================
   TAB 4 — Materials + drop locations
   ===================================================================== */
const materialsList = document.getElementById("dg-materials-list");
const materialsFilter = document.getElementById("dg-materials-filter");
const DROPS_BY_MT = {};
DG.drops.forEach(d => { (DROPS_BY_MT[d.m + "|" + d.t] = DROPS_BY_MT[d.m + "|" + d.t] || []).push(d); });
function sourceMeta(src) {
  if (src === "Nightmares") return { key: "dg-src-nightmare", worlds: "nw" };
  if (src === "Rare Nightmares") return { key: "dg-src-rare", worlds: "rw" };
  return { key: "dg-src-streetpass", worlds: null };
}
function enemyPop(enemy, src) {
  const meta = sourceMeta(src);
  const lines = [`<b>${esc(enemy)}</b>`, `<span class="dg-pop-src">${esc(translate(meta.key))}</span>`];
  if (meta.worlds) {
    const worlds = (EATER_WORLDS[enemy] || {})[meta.worlds] || [];
    if (worlds.length) lines.push(`<span class="dg-pop-worlds">${worlds.map(esc).join(" · ")}</span>`);
  }
  return lines.join("");
}
function treasurePop(matTier) {
  const entries = TREASURE_BY_MAT[matTier] || [];
  const parts = [`<b>${esc(translate("dg-treasure"))}</b>`];
  CHARS.forEach(char => {
    const rows = entries.filter(e => e.char === char);
    if (!rows.length) return;
    parts.push(`<span class="dg-pop-char">${esc(CHAR_LABEL[char])}</span>`);
    rows.forEach(row => {
      const crossed = treasureCrossed(char, row.idx);
      const where = [row.world, row.area].filter(Boolean).map(esc).join(" — ");
      parts.push(`<span class="dg-pop-treas${crossed ? " crossed" : ""}">${where}</span>`);
    });
  });
  return parts.join("");
}
// Portal rewards, grouped by character then world (parsed at build time).
function rewardsHtml(ob) {
  if (!ob.rewards || !ob.rewards.length) return "";
  const byChar = {};
  ob.rewards.forEach(r => { (byChar[r.char] = byChar[r.char] || []).push(r); });
  let html = `<div class="dg-rewards"><span class="dg-obtain-label">${esc(translate("dg-rewards"))}</span>`;
  ["Sora", "Riku"].forEach(ch => {
    const rows = byChar[ch]; if (!rows) return;
    html += `<div class="dg-reward-char"><span class="dg-rw-char">${esc(ch)}</span><div class="dg-rw-worlds">` +
      rows.map(r => `<div class="dg-rw-row"><span class="dg-rw-world">${esc(r.world)}</span>` +
        `<span class="dg-rw-items">${r.items.map(esc).join(" · ")}</span></div>`).join("") +
      `</div></div>`;
  });
  return html + `</div>`;
}
function otherHtml(ob) {
  return ob.other ? `<div class="dg-obtain"><span class="dg-obtain-label">${esc(translate("dg-other"))}:</span> ${esc(ob.other)}</div>` : "";
}
const collapsedMats = new Set();
function renderMaterials() {
  const query = (materialsFilter.value || "").trim().toLowerCase();
  materialsList.innerHTML = ""; let shown = 0;
  DG.materials.forEach(material => {
    const tiersHtml = []; const searchBits = [material.toLowerCase()];
    DG.tiers.forEach(tier => {
      const matTier = material + " " + tier;
      const drops = DROPS_BY_MT[material + "|" + tier] || [];
      const treasures = TREASURE_BY_MAT[matTier] || [];
      const ob = (DG.obtain[material] || {})[tier] || {};
      const hasRewards = ob.rewards && ob.rewards.length, hasOther = !!ob.other;
      if (!drops.length && !treasures.length && !hasRewards && !hasOther) return;
      const chips = [];
      if (treasures.length) chips.push(`<span class="dg-chip dg-chip-treasure" tabindex="0" data-pop="${esc(treasurePop(matTier))}">${esc(translate("dg-treasure"))}</span>`);
      drops.forEach(d => {
        const cls = "dg-chip dg-chip-drop" + (d.src === "Rare Nightmares" ? " rare" : "");
        chips.push(`<span class="${cls}" tabindex="0" data-pop="${esc(enemyPop(d.e, d.src))}">${esc(d.e)} <b class="dg-rate">${d.r != null ? d.r + "%" : "?"}</b></span>`);
      });
      searchBits.push((matTier + " " + drops.map(d => d.e).join(" ")).toLowerCase());
      tiersHtml.push(`<div class="dg-tier">` +
        `<div class="dg-tier-name">${esc(matTier)}</div>` +
        (chips.length ? `<div class="dg-chips">${chips.join("")}</div>` : "") +
        rewardsHtml(ob) + otherHtml(ob) + `</div>`);
    });
    if (!tiersHtml.length) return;
    if (query && searchBits.join(" ").indexOf(query) < 0) return;
    const collapsed = collapsedMats.has(material);
    const block = el("div", "dg-mat" + (collapsed ? " collapsed" : ""));
    block.innerHTML =
      `<button class="dg-mat-title grp-title" data-mat="${esc(material)}" aria-expanded="${!collapsed}">` +
        `<span class="dg-mat-caret" aria-hidden="true">▾</span> ${esc(material)}</button>` +
      `<div class="dg-mat-body">${tiersHtml.join("")}</div>`;
    shown++; materialsList.appendChild(block);
  });
  if (!shown) { materialsList.innerHTML = `<p class="empty">${esc(translate("dg-empty"))}</p>`; return; }
  materialsList.querySelectorAll(".dg-mat-title").forEach(btn => btn.addEventListener("click", () => {
    const m = btn.getAttribute("data-mat");
    const nowCollapsed = !collapsedMats.has(m);
    if (nowCollapsed) collapsedMats.add(m); else collapsedMats.delete(m);
    btn.closest(".dg-mat").classList.toggle("collapsed", nowCollapsed);
    btn.setAttribute("aria-expanded", !nowCollapsed);
  }));
  wirePop(materialsList);
}

/* =====================================================================
   TAB 5 — Recipe-item checklist (shared with the DDD tracker)
   ===================================================================== */
const recipesList = document.getElementById("dg-recipes-list");
const recipesFilter = document.getElementById("dg-recipes-filter");
const recipesSummary = document.getElementById("dg-recipes-summary");
const OFFICIAL = {};
DG.recipes.forEach(r => { if (r.off && !OFFICIAL[r.sp]) OFFICIAL[r.sp] = r; });
DG.recipes.forEach(r => { if (!OFFICIAL[r.sp]) OFFICIAL[r.sp] = r; });
function recipeStore() { return dddSection("recipes"); }
function recipeOwned(name) { const i = RECIPE_INDEX.get(name); return i != null && !!recipeStore()[i]; }
function toggleRecipe(name) {
  const i = RECIPE_INDEX.get(name); if (i == null) return;
  const store = recipeStore(); if (store[i]) delete store[i]; else store[i] = true;
  saveDDD(); renderRecipes();
}
function ingredientLine(recipe) {
  if (!recipe) return "";
  return matChip(recipe.m1, recipe.t1, recipe.q1) + ' <span class="dg-plus">+</span> ' + matChip(recipe.m2, recipe.t2, recipe.q2);
}
function renderRecipes() {
  const query = (recipesFilter.value || "").trim().toLowerCase();
  const names = RECIPE_ITEMS.map(it => it.name);
  const owned = names.filter(recipeOwned).length;
  recipesSummary.innerHTML = `<span>${format("dg-recipe-count", `<b>${owned}</b>`, names.length)}</span>`;
  recipesList.innerHTML = "";
  const table = el("table", "dg-recipe-table");
  table.innerHTML = `<thead><tr><th></th><th>${esc(translate("dg-th-spirit"))}</th><th>${esc(translate("dg-th-recipe"))}</th></tr></thead>`;
  const tbody = el("tbody"); let shown = 0;
  names.forEach(name => {
    if (query && name.toLowerCase().indexOf(query) < 0) return;
    shown++;
    const has = recipeOwned(name), recipe = OFFICIAL[name];
    const tr = el("tr", has ? "dg-have" : "");
    tr.innerHTML =
      `<td class="dg-check-cell"><span class="dg-check${has ? " on" : ""}" role="checkbox" tabindex="0" aria-checked="${has}"></span></td>` +
      `<td class="dg-recipe-spirit"><img src="${esc(spiritFile(name))}" alt="" loading="lazy"><span class="dg-recipe-name${has ? " done" : ""}">${esc(name)}</span>` +
        (recipe && recipe.rank ? ` <span class="dg-rank">${esc(format("dg-rank", recipe.rank))}</span>` : "") + `</td>` +
      `<td class="dg-recipe-ing">${ingredientLine(recipe)}` +
        (recipe && recipe.pct != null && recipe.pct < 100 ? ` <span class="dg-pct-low">${recipe.pct}%</span>` : "") + `</td>`;
    const toggle = () => toggleRecipe(name);
    tr.querySelector(".dg-check").addEventListener("click", toggle);
    tr.querySelector(".dg-check").addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  if (!shown) recipesList.innerHTML = `<p class="empty">${esc(translate("dg-empty"))}</p>`;
  else recipesList.appendChild(table);
}

/* =====================================================================
   Tabs, filters, language + cross-tab sync
   ===================================================================== */
const TAB_IDS = ["spirits", "creation", "abilities", "materials", "commands", "recipes"];
document.querySelectorAll(".kh .tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".kh .tab").forEach(o => o.classList.remove("active"));
    tab.classList.add("active");
    TAB_IDS.forEach(id => { document.getElementById("tab-" + id).style.display = (id === tab.dataset.tab) ? "block" : "none"; });
    hidePop();
  };
});

spiritsFilter.addEventListener("input", renderSpirits);
spiritsOwnedOnly.addEventListener("change", renderSpirits);
document.getElementById("dg-spirits-reset").addEventListener("click", () => { spiritsFilter.value = ""; spiritsOwnedOnly.checked = false; renderSpirits(); });
materialsFilter.addEventListener("input", renderMaterials);
recipesFilter.addEventListener("input", renderRecipes);
document.getElementById("dg-recipes-reset").addEventListener("click", () => { recipesFilter.value = ""; renderRecipes(); });
abFilter.addEventListener("input", renderAbilities);
cmdFilter.addEventListener("input", renderCommands);
cmdCatSel.addEventListener("change", renderCommands);

function renderAll() { renderSpirits(); renderMaterials(); renderRecipes(); renderCreation(); fillAbCats(); renderAbilities(); fillCmdCats(); renderCommands(); }
document.addEventListener("i18n:updated", () => { buildTreasureIndex(); fillCreateControls(); renderAll(); if (modalSpirit) renderModal(); });

window.addEventListener("storage", e => {
  if (e.key === DDD_STORE_KEY) {            // tracker changed in another tab (ownership / abilities / treasures)
    DDD = loadDDD(); renderSpirits(); renderMaterials(); renderRecipes(); renderAbilities(); if (modalSpirit) renderModal();
  } else if (e.key === GUIDE_KEY) {
    GUIDE = loadGuide(); GUIDE.rank = GUIDE.rank || {}; GUIDE.nodes = GUIDE.nodes || {}; GUIDE.abilities = GUIDE.abilities || {};
    renderSpirits(); renderAbilities(); if (modalSpirit) renderModal();
  }
});

await fetchTrackerLang();
buildTreasureIndex();
renderSpirits();
renderMaterials();
renderRecipes();
initCreation();
fillAbCats();
renderAbilities();
fillCmdCats();
renderCommands();
});
