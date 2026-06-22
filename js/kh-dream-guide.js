/* =====================================================================
   Kingdom Hearts Dream Drop Distance — Dream Guide

   A DDD sub-tool (sibling of the BBS Melding Calculator). Three tabs:
     Spirits ... gallery of the 54 Spirits; click to own, greyed when not.
     Materials . every crafting material's drop sources — Dream Eaters
                 (hover → the worlds they appear in) and Treasures (hover →
                 each chest's character + location, struck through when the
                 matching DDD-tracker treasure is already checked off).
     Recipes ... a checklist of the Spirits' Recipe items.

   Reuse, not duplication: Dream Eater → world data, the Treasure list and
   the Recipe-item checklist all come from the Dream Drop Distance tracker
   (TRACKER_GAME in js/kh-dream-guide-data.js's sibling kh-ddd-tracker-data.js)
   and its progress store (khddd_progress_v1). Only the material drop %s and
   synthesis recipes come from js/kh-dream-guide-data.js (DREAM_GUIDE).

   Stores touched:
     khddd_progress_v1  - DDD tracker. Read: treasures-<char> (cross-offs).
                          Read/write: recipes (the checklist is the same data).
     khddd_guide_v1     - this tool's own "owned Spirit" set.

   Game terms (Spirit/Dream Eater names, materials, tiers, worlds, Sora/Riku)
   stay English in every language; only UI chrome is translated.
   ===================================================================== */
document.addEventListener('DOMContentLoaded', async function () {
await i18n.init();

const { el, esc } = KH;
const translate = (key) => i18n.getMessage(key);
const format = (key, ...args) => i18n.format(key, ...args);

const DG = window.DREAM_GUIDE;
const GAME = window.TRACKER_GAME;          // the DDD tracker config
const DDD_STORE_KEY = GAME.storeKey;       // "khddd_progress_v1"
const GUIDE_KEY = "khddd_guide_v1";
const CHARS = (GAME.chars || []).map(c => c.id);          // ["sora","riku"]
const CHAR_LABEL = {}; (GAME.chars || []).forEach(c => CHAR_LABEL[c.id] = c.label);
const SPIRIT_IMG = "../images/dreamdrop/spirits/";

/* ---------- pull the sections we reuse out of the tracker config ---------- */
function findSec(id) {
  for (const tab of GAME.tabs) for (const sec of tab.sections) if (sec.id === id) return sec;
  return null;
}
const DREAMEATERS = (findSec("dreameaters") || {}).items || [];
const RECIPE_ITEMS = (findSec("recipes") || {}).items || [];
const TREASURE_SEC = findSec("treasures") || {};
const TREASURE_VARIANTS = TREASURE_SEC.variants || {};

// Dream Eater name -> { nw:[worlds], rw:[worlds] } for the drop hovers.
const EATER_WORLDS = {};
DREAMEATERS.forEach(item => { EATER_WORLDS[item.name] = { nw: item.nw || [], rw: item.rw || [] }; });

// Recipe-item name -> index into the tracker's recipes store.
const RECIPE_INDEX = new Map();
RECIPE_ITEMS.forEach((item, i) => { if (!RECIPE_INDEX.has(item.name)) RECIPE_INDEX.set(item.name, i); });

/* ---------- DDD tracker store (read; recipes also written) ---------- */
function loadDDD() { try { return JSON.parse(localStorage.getItem(DDD_STORE_KEY)) || {}; } catch (e) { return {}; } }
let DDD = loadDDD();
function saveDDD() { try { localStorage.setItem(DDD_STORE_KEY, JSON.stringify(DDD)); } catch (e) { /* private browsing */ } }
function dddSection(id) { if (!DDD[id]) DDD[id] = {}; return DDD[id]; }

/* ---------- this tool's own "owned Spirit" set ---------- */
function loadGuide() { try { return JSON.parse(localStorage.getItem(GUIDE_KEY)) || {}; } catch (e) { return {}; } }
let GUIDE = loadGuide();
if (!GUIDE.owned) GUIDE.owned = {};
function saveGuide() { try { localStorage.setItem(GUIDE_KEY, JSON.stringify(GUIDE)); } catch (e) { /* private browsing */ } }
function spiritOwned(name) { return !!GUIDE.owned[name]; }
function toggleSpirit(name) {
  if (GUIDE.owned[name]) delete GUIDE.owned[name]; else GUIDE.owned[name] = true;
  saveGuide(); renderSpirits();
}

/* ---------- treasure index (built once the tracker lang is fetched) ----------
   Maps "<Material> <Tier>" -> [ { char, world, area, idx } ] using the
   tracker's per-character treasure lists (name + world group `g`) and the
   tracker lang file (the human "area" text). Cross-off state is read live
   from DDD["treasures-<char>"][idx]. */
let TREASURE_BY_MAT = {};
let trackerLang = null;

async function fetchTrackerLang() {
  const root = (document.body && document.body.getAttribute("data-root")) || "../";
  const langs = [i18n.getCurrentLanguage(), "en"];
  for (const lang of langs) {
    try {
      const res = await fetch(`${root}lang/messages/${lang}/kh-ddd-tracker.json`);
      if (res.ok) { trackerLang = await res.json(); return; }
    } catch (e) { /* try next */ }
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
      const area = (langRows[idx] && langRows[idx].area) || "";
      (TREASURE_BY_MAT[key] = TREASURE_BY_MAT[key] || []).push({
        char: char, world: entry.g || "", area: area, idx: idx
      });
    });
  });
}
function treasureCrossed(char, idx) {
  const store = DDD["treasures-" + char];
  return !!(store && store[idx]);
}

/* ---------- hover popover (worlds / treasure locations) ---------- */
const pop = document.getElementById("dg-pop");
function showPop(target, html) {
  pop.innerHTML = html;
  pop.classList.add("open");
  pop.setAttribute("aria-hidden", "false");
  const rect = target.getBoundingClientRect();
  // measure, then clamp into the viewport
  const pw = pop.offsetWidth, ph = pop.offsetHeight, margin = 8;
  let left = rect.left + rect.width / 2 - pw / 2;
  left = Math.max(margin, Math.min(left, window.innerWidth - pw - margin));
  let top = rect.top - ph - 10;
  if (top < margin) top = rect.bottom + 10;   // flip below if no room above
  pop.style.left = left + "px";
  pop.style.top = top + "px";
}
function hidePop() { pop.classList.remove("open"); pop.setAttribute("aria-hidden", "true"); }
// One delegated set of handlers for every [data-pop] trigger.
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

/* =====================================================================
   TAB 1 — Spirits gallery
   ===================================================================== */
const spiritsGrid = document.getElementById("dg-spirits-grid");
const spiritsCount = document.getElementById("dg-spirits-count");
const spiritsFilter = document.getElementById("dg-spirits-filter");

function renderSpirits() {
  const query = (spiritsFilter.value || "").trim().toLowerCase();
  const owned = DG.spirits.filter(s => spiritOwned(s.name)).length;
  spiritsCount.innerHTML = format("dg-owned-count", owned, DG.spirits.length);
  spiritsGrid.innerHTML = "";
  let shown = 0;
  DG.spirits.forEach(spirit => {
    if (query && spirit.name.toLowerCase().indexOf(query) < 0) return;
    shown++;
    const has = spiritOwned(spirit.name);
    const card = el("button", "dg-spirit" + (has ? " owned" : ""));
    card.type = "button";
    card.setAttribute("aria-pressed", has ? "true" : "false");
    const file = spirit.name.replace(/ /g, "_") + ".png";
    card.innerHTML =
      `<span class="dg-spirit-img"><img src="${esc(SPIRIT_IMG + file)}" alt="" loading="lazy"></span>` +
      `<span class="dg-spirit-name">${esc(spirit.name)}</span>` +
      (spirit.attr ? `<span class="dg-spirit-attr">${esc(spirit.attr)}</span>` : "");
    card.addEventListener("click", () => toggleSpirit(spirit.name));
    spiritsGrid.appendChild(card);
  });
  if (!shown) spiritsGrid.innerHTML = `<p class="empty">${esc(translate("dg-empty"))}</p>`;
}

/* =====================================================================
   TAB 2 — Materials + drop locations
   ===================================================================== */
const materialsList = document.getElementById("dg-materials-list");
const materialsFilter = document.getElementById("dg-materials-filter");

// Drops keyed by "<Material>|<Tier>" -> [ {src, e, r} ]
const DROPS_BY_MT = {};
DG.drops.forEach(d => { (DROPS_BY_MT[d.m + "|" + d.t] = DROPS_BY_MT[d.m + "|" + d.t] || []).push(d); });

// Per-source-type hover label + which world list to read.
function sourceMeta(src) {
  if (src === "Nightmares") return { key: "dg-src-nightmare", worlds: "nw" };
  if (src === "Rare Nightmares") return { key: "dg-src-rare", worlds: "rw" };
  return { key: "dg-src-streetpass", worlds: null };   // StreetPass Portals
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
  // group by character, in tracker char order
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

// Extract the obtainment text for a given material + tier from the joined
// "Rewards"/"Other methods" blobs (each tier introduced by "<Mat> <Tier> :").
function obtainText(material, tier) {
  const blob = (DG.obtain[material] || {});
  const out = [];
  ["Rewards", "Other methods"].forEach(section => {
    const text = blob[section];
    if (!text) return;
    const slice = sliceTier(text, material, tier);
    if (slice) out.push({ section, text: slice });
  });
  return out;
}
function sliceTier(text, material, tier) {
  const tiers = DG.tiers;
  const start = text.indexOf(material + " " + tier);
  if (start < 0) return "";
  let from = text.indexOf(":", start);
  from = from < 0 ? start + (material + " " + tier).length : from + 1;
  // cut at the next tier header
  let end = text.length;
  tiers.forEach(t => {
    if (t === tier) return;
    const h = text.indexOf(material + " " + t, from);
    if (h >= 0 && h < end) end = h;
  });
  return text.slice(from, end).trim();
}

function renderMaterials() {
  const query = (materialsFilter.value || "").trim().toLowerCase();
  materialsList.innerHTML = "";
  let shown = 0;

  DG.materials.forEach(material => {
    // does this material (or any of its drop enemies) match the filter?
    const block = el("div", "dg-mat");
    const tiersHtml = [];

    DG.tiers.forEach(tier => {
      const matTier = material + " " + tier;
      const drops = DROPS_BY_MT[material + "|" + tier] || [];
      const treasures = TREASURE_BY_MAT[matTier] || [];
      const obtains = obtainText(material, tier);
      if (!drops.length && !treasures.length && !obtains.length) return;

      const chips = [];
      // Treasure chip first (a known, fixed location), then drop enemies.
      if (treasures.length) {
        chips.push(`<span class="dg-chip dg-chip-treasure" tabindex="0" data-pop="${esc(treasurePop(matTier))}">` +
          `${esc(translate("dg-treasure"))}</span>`);
      }
      drops.forEach(d => {
        const isRare = d.src === "Rare Nightmares";
        const isSp = d.src === "Streetpass Portals";
        const cls = "dg-chip dg-chip-drop" + (isRare ? " rare" : "") + (isSp ? " sp" : "");
        chips.push(`<span class="${cls}" tabindex="0" data-pop="${esc(enemyPop(d.e, d.src))}">` +
          `${esc(d.e)} <b class="dg-rate">${d.r != null ? d.r + "%" : "?"}</b></span>`);
      });

      const obtainHtml = obtains.map(o =>
        `<div class="dg-obtain"><span class="dg-obtain-label">${esc(translate(o.section === "Rewards" ? "dg-rewards" : "dg-other"))}:</span> ${esc(o.text)}</div>`
      ).join("");

      tiersHtml.push(
        `<div class="dg-tier" data-search="${esc((matTier + " " + drops.map(d => d.e).join(" ")).toLowerCase())}">` +
        `<div class="dg-tier-name">${esc(matTier)}</div>` +
        `<div class="dg-chips">${chips.join("")}</div>` +
        obtainHtml +
        `</div>`
      );
    });

    if (!tiersHtml.length) return;
    block.innerHTML = `<h3 class="grp-title dg-mat-title">${esc(material)}</h3>` + tiersHtml.join("");

    // filter: keep tiers whose search text matches; hide the material if none
    if (query) {
      let any = false;
      block.querySelectorAll(".dg-tier").forEach(t => {
        const match = (t.getAttribute("data-search") || "").indexOf(query) >= 0 || material.toLowerCase().indexOf(query) >= 0;
        t.style.display = match ? "" : "none";
        if (match) any = true;
      });
      if (!any) return;
    }
    shown++;
    materialsList.appendChild(block);
  });

  if (!shown) materialsList.innerHTML = `<p class="empty">${esc(translate("dg-empty"))}</p>`;
  wirePop(materialsList);
}

/* =====================================================================
   TAB 3 — Recipe-item checklist (shared with the DDD tracker)
   ===================================================================== */
const recipesList = document.getElementById("dg-recipes-list");
const recipesFilter = document.getElementById("dg-recipes-filter");
const recipesSummary = document.getElementById("dg-recipes-summary");

// Spirit name -> the synthesis recipe shown on the checklist. Prefer the
// one flagged as the official Recipe item; otherwise fall back to the
// Spirit's first listed recipe (a few have no flagged official).
const OFFICIAL = {};
DG.recipes.forEach(r => { if (r.off && !OFFICIAL[r.sp]) OFFICIAL[r.sp] = r; });
DG.recipes.forEach(r => { if (!OFFICIAL[r.sp]) OFFICIAL[r.sp] = r; });

function recipeStore() { return dddSection("recipes"); }
function recipeOwned(name) {
  const i = RECIPE_INDEX.get(name);
  return i != null && !!recipeStore()[i];
}
function toggleRecipe(name) {
  const i = RECIPE_INDEX.get(name);
  if (i == null) return;
  const store = recipeStore();
  if (store[i]) delete store[i]; else store[i] = true;
  saveDDD(); renderRecipes();
}

function ingredientLine(recipe) {
  if (!recipe) return "";
  const part = (m, t, q) => `<span class="dg-ing">${esc(m + " " + t)}${q ? ` <b>×${q}</b>` : ""}</span>`;
  return part(recipe.m1, recipe.t1, recipe.q1) + ' <span class="dg-plus">+</span> ' + part(recipe.m2, recipe.t2, recipe.q2);
}

function renderRecipes() {
  const query = (recipesFilter.value || "").trim().toLowerCase();
  // Iterate spirits in the tracker's recipe order.
  const names = RECIPE_ITEMS.map(it => it.name);
  const owned = names.filter(recipeOwned).length;
  recipesSummary.innerHTML = `<span>${format("dg-recipe-count", `<b>${owned}</b>`, names.length)}</span>`;
  recipesList.innerHTML = "";

  const table = el("table", "dg-recipe-table");
  table.innerHTML = `<thead><tr><th></th><th>${esc(translate("dg-th-spirit"))}</th><th>${esc(translate("dg-th-recipe"))}</th></tr></thead>`;
  const tbody = el("tbody");
  let shown = 0;
  names.forEach(name => {
    if (query && name.toLowerCase().indexOf(query) < 0) return;
    shown++;
    const has = recipeOwned(name);
    const recipe = OFFICIAL[name];
    const file = name.replace(/ /g, "_") + ".png";
    const tr = el("tr", has ? "dg-have" : "");
    tr.innerHTML =
      `<td class="dg-check-cell"><span class="dg-check${has ? " on" : ""}" role="checkbox" tabindex="0" aria-checked="${has}"></span></td>` +
      `<td class="dg-recipe-spirit"><img src="${esc(SPIRIT_IMG + file)}" alt="" loading="lazy"><span class="dg-recipe-name${has ? " done" : ""}">${esc(name)}</span>` +
        (recipe && recipe.rank ? ` <span class="dg-rank">${esc(format("dg-rank", recipe.rank))}</span>` : "") + `</td>` +
      `<td class="dg-recipe-ing">${ingredientLine(recipe)}` +
        (recipe && recipe.pct != null && recipe.pct < 100 ? ` <span class="dg-pct-low">${recipe.pct}%</span>` : "") + `</td>`;
    const toggle = () => toggleRecipe(name);
    tr.querySelector(".dg-check").addEventListener("click", toggle);
    tr.querySelector(".dg-check").addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  if (!shown) recipesList.innerHTML = `<p class="empty">${esc(translate("dg-empty"))}</p>`;
  else recipesList.appendChild(table);
}

/* =====================================================================
   TAB 4 — Creation calculator

   Implements the wiki's Spirit-creation stat formula:
     Stat = base × (rank correction + random) × level correction ÷ 10
            + Forecast bonus, capped at the per-stat maximum.
   Plus per-Forecast initial-disposition odds, the breed's elemental
   resistances, and an optional sacrificed Deck Command bonus.
   ===================================================================== */
const CREATE = DG.create;
const C_EL = {
  spirit: document.getElementById("dg-c-spirit"),
  forecast: document.getElementById("dg-c-forecast"),
  rank: document.getElementById("dg-c-rank"),
  level: document.getElementById("dg-c-level"),
  command: document.getElementById("dg-c-command"),
  out: document.getElementById("dg-c-output"),
};
const RES_KEYS = [["fire", "Fire"], ["blz", "Blizzard"], ["thn", "Thunder"], ["wtr", "Water"], ["drk", "Dark"], ["lgt", "Light"]];

function fillCreateControls() {
  C_EL.spirit.innerHTML = DG.spirits.map((s, i) => `<option value="${i}">${esc(s.name)}</option>`).join("");
  C_EL.forecast.innerHTML = CREATE.forecasts.map(f => `<option value="${esc(f)}">${esc(f)}</option>`).join("");
  // ranks shown high → low for a natural dropdown
  C_EL.rank.innerHTML = CREATE.ranks.slice().reverse().map(r => `<option value="${esc(r)}">${esc(r)}</option>`).join("");
  // commands grouped by category; first option = none
  const groups = {};
  DG.commands.forEach((c, i) => { (groups[c.cat] = groups[c.cat] || []).push(`<option value="${i}">${esc(c.name)}</option>`); });
  let cmdHtml = `<option value="">${esc(translate("dg-c-none"))}</option>`;
  Object.keys(groups).forEach(cat => { cmdHtml += `<optgroup label="${esc(cat)}">${groups[cat].join("")}</optgroup>`; });
  C_EL.command.innerHTML = cmdHtml;
}

function levelCorrection(level) { return level <= 50 ? 10 + level : 35 + level / 2; }

// One stat's [floor(min), floor(max)] given base, rank, level, forecast
// flat-bonus range [bMin,bMax] and the command flat bonus. Capped at the
// stat's maximum (max-rank-correction formula).
function statRange(base, rank, level, bonusRange, cmdFlat) {
  if (typeof base !== "number") return null;        // "???" breed stat
  const rc = CREATE.rankCorr[rank], mrc = CREATE.maxRankCorr[rank];
  const lc = levelCorrection(level);
  const lo = base * (rc + (rc - 1.1) / 10) * lc / 10 + bonusRange[0] + cmdFlat;
  const hi = base * (rc + (rc - 0.9) / 10) * lc / 10 + bonusRange[1] + cmdFlat;
  const cap = base * (mrc + (mrc - 0.9) / 10) * lc / 10 + cmdFlat;
  return { lo: Math.floor(lo), hi: Math.min(Math.floor(hi), Math.floor(cap)), cap: Math.floor(cap), base: base };
}

function rangeText(r) {
  if (!r) return "—";
  return r.lo === r.hi ? `${r.lo}` : `${r.lo}–${r.hi}`;
}

function renderCreation() {
  const spirit = DG.spirits[+C_EL.spirit.value] || DG.spirits[0];
  const forecast = C_EL.forecast.value || CREATE.forecasts[0];
  const baseRank = C_EL.rank.value || spirit.rank || "C";
  const level = Math.min(99, Math.max(1, parseInt(C_EL.level.value, 10) || 1));
  const cmd = C_EL.command.value === "" ? null : DG.commands[+C_EL.command.value];

  // Risky Winds creates a Spirit one rank higher.
  const ranks = CREATE.ranks;
  const isRisky = forecast === "Risky Winds";
  const effRank = isRisky ? ranks[Math.min(ranks.indexOf(baseRank) + 1, ranks.length - 1)] : baseRank;

  const fb = CREATE.forecastBonus[forecast] || {};
  const cmdFor = key => (cmd && cmd[key]) || 0;
  const stats = [
    { key: "hp", label: translate("dg-c-hp"), base: spirit.hp, bonus: fb.hp || [0, 0] },
    { key: "str", label: translate("dg-c-str"), base: spirit.str, bonus: fb.str || [0, 0] },
    { key: "mag", label: translate("dg-c-mag"), base: spirit.mag, bonus: fb.mag || [0, 0] },
    { key: "def", label: translate("dg-c-def"), base: spirit.def, bonus: fb.def || [0, 0] },
  ];

  // ---- header / summary ----
  let html = `<div class="dg-c-summary">` +
    `<img class="dg-c-portrait" src="${esc(SPIRIT_IMG + spirit.name.replace(/ /g, "_") + ".png")}" alt="">` +
    `<div><div class="dg-c-title">${esc(spirit.name)}</div>` +
    `<div class="dg-c-meta">` +
      `<span><b>${esc(translate("dg-c-attr"))}:</b> ${esc(spirit.attr || "—")}</span>` +
      `<span><b>${esc(translate("dg-c-style"))}:</b> ${esc(spirit.style || "—")}</span>` +
      `<span><b>${esc(translate("dg-c-dp"))}:</b> ${esc(spirit.dp || "—")}</span>` +
      `<span><b>${esc(translate("dg-c-rank-out"))}:</b> ${esc(effRank)}${isRisky && effRank !== baseRank ? ` <span class="dg-c-up">(${esc(baseRank)}→${esc(effRank)})</span>` : ""}</span>` +
      `<span><b>${esc(translate("dg-c-level-out"))}:</b> ${level}</span>` +
    `</div></div></div>`;

  // ---- stats table ----
  html += `<table class="dg-c-stats"><thead><tr>` +
    `<th>${esc(translate("dg-c-th-stat"))}</th><th>${esc(translate("dg-c-th-base"))}</th>` +
    `<th>${esc(translate("dg-c-th-result"))}</th><th>${esc(translate("dg-c-th-cap"))}</th></tr></thead><tbody>`;
  stats.forEach(s => {
    const r = statRange(s.base, effRank, level, s.bonus, cmdFor(s.key));
    const bonusNote = [];
    if (r && (s.bonus[0] || s.bonus[1])) bonusNote.push(`${translate("dg-c-forecast")} +${s.bonus[0]}${s.bonus[1] !== s.bonus[0] ? "–" + s.bonus[1] : ""}`);
    if (r && cmdFor(s.key)) bonusNote.push(`${esc(cmd.name)} +${cmdFor(s.key)}`);
    html += `<tr><td class="dg-c-statname">${esc(s.label)}</td>` +
      `<td>${typeof s.base === "number" ? s.base : esc(String(s.base))}</td>` +
      `<td class="dg-c-result">${rangeText(r)}` +
        (bonusNote.length ? ` <span class="dg-c-bonus">${esc(bonusNote.join(", "))}</span>` : "") + `</td>` +
      `<td class="dg-c-cap">${r ? r.cap : "—"}</td></tr>`;
  });
  html += `</tbody></table>`;

  // ---- resistances ----
  html += `<h3 class="grp-title">${esc(translate("dg-c-resist"))}</h3><div class="dg-c-res">`;
  RES_KEYS.forEach(([k, label]) => {
    const mult = spirit.res ? spirit.res[k] : null;
    const cmdBonus = cmdFor(k);
    const weak = typeof mult === "number" && mult > 1;
    const strong = typeof mult === "number" && mult < 1;
    html += `<span class="dg-c-res-chip${weak ? " weak" : strong ? " strong" : ""}">` +
      `<span class="dg-c-res-el">${esc(label)}</span>` +
      `<b>${typeof mult === "number" ? "×" + mult : "—"}</b>` +
      (cmdBonus ? `<span class="dg-c-res-add">+${cmdBonus}%</span>` : "") + `</span>`;
  });
  html += `</div>`;

  // ---- disposition odds ----
  const odds = CREATE.dispoOdds[forecast] || [0, 0, 0, 0];
  html += `<h3 class="grp-title">${esc(translate("dg-c-dispo"))} <span class="dg-c-sub">— ${esc(forecast)}</span></h3>` +
    `<div class="dg-c-dispos">`;
  (spirit.disps || []).forEach((d, i) => {
    const pct = odds[i] || 0;
    html += `<div class="dg-c-dispo${pct ? "" : " off"}">` +
      `<div class="dg-c-dispo-head"><span class="dg-c-dispo-no">${["I", "II", "III", "IV"][i]}</span>` +
        `<span class="dg-c-dispo-name">${esc(d.n)}</span><span class="dg-c-dispo-pct">${pct}%</span></div>` +
      `<div class="dg-c-dispo-bar"><i style="width:${pct}%"></i></div>` +
      (d.b ? `<div class="dg-c-dispo-beh">${esc(d.b)}</div>` : "") + `</div>`;
  });
  html += `</div>`;

  // ---- forecast effect note ----
  const fi = (CREATE.forecastInfo || {})[forecast];
  if (fi) {
    html += `<div class="dg-c-forecast-note"><b>${esc(forecast)}.</b> ${esc(fi.desc || "")}` +
      (fi.effect && fi.effect !== "—" ? ` <span class="dg-c-forecast-eff">${esc(fi.effect)}</span>` : "") + `</div>`;
  }

  C_EL.out.innerHTML = html;
}

function initCreation() {
  fillCreateControls();
  // default rank to the selected Spirit's recipe rank
  const syncRankToSpirit = () => {
    const s = DG.spirits[+C_EL.spirit.value];
    if (s && s.rank) C_EL.rank.value = s.rank;
  };
  C_EL.spirit.addEventListener("change", () => { syncRankToSpirit(); renderCreation(); });
  [C_EL.forecast, C_EL.rank, C_EL.command].forEach(el => el.addEventListener("change", renderCreation));
  C_EL.level.addEventListener("input", renderCreation);
  syncRankToSpirit();
  renderCreation();
}

/* =====================================================================
   Tabs, filters, language + cross-tab sync
   ===================================================================== */
document.querySelectorAll(".kh .tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".kh .tab").forEach(other => other.classList.remove("active"));
    tab.classList.add("active");
    ["spirits", "materials", "recipes", "creation"].forEach(id => {
      document.getElementById("tab-" + id).style.display = (id === tab.dataset.tab) ? "block" : "none";
    });
    hidePop();
  };
});

spiritsFilter.addEventListener("input", renderSpirits);
document.getElementById("dg-spirits-reset").addEventListener("click", () => { spiritsFilter.value = ""; renderSpirits(); });
materialsFilter.addEventListener("input", renderMaterials);
recipesFilter.addEventListener("input", renderRecipes);
document.getElementById("dg-recipes-reset").addEventListener("click", () => { recipesFilter.value = ""; renderRecipes(); });

function renderAll() { renderSpirits(); renderMaterials(); renderRecipes(); renderCreation(); }

// Re-render dynamic content when the language changes.
document.addEventListener("i18n:updated", () => { buildTreasureIndex(); renderAll(); });

// Mirror changes made in the DDD tracker (or this tool) in another tab.
window.addEventListener("storage", e => {
  if (e.key === DDD_STORE_KEY) { DDD = loadDDD(); renderMaterials(); renderRecipes(); }
  else if (e.key === GUIDE_KEY) { GUIDE = loadGuide(); if (!GUIDE.owned) GUIDE.owned = {}; renderSpirits(); }
});

await fetchTrackerLang();
buildTreasureIndex();
renderSpirits();
renderMaterials();
renderRecipes();
initCreation();   // fills the creation controls, then renders the calculator
});
