/* =====================================================================
   KH Birth by Sleep — Command Melding Calculator
   Logic ported from the original single-file version.
   Depends on: js/i18n.js (i18n), js/kh-melding-data.js
   (CRYSTALS, CRYSTAL_TABLE, RECIPES, ABILITY_META) and
   js/kh-bbs-tracker-data.js (BBS_DATA) for two-way integration with
   the Achievement Tracker: ownership recorded there is shown here,
   and the Meld button writes back to it (bbs_progress_v1).
   Game terms (commands, abilities, crystals, character names) are kept
   in English in every language; UI chrome goes through i18n.
   ===================================================================== */

document.addEventListener('DOMContentLoaded', async function () {
await i18n.init();

const t = (key) => i18n.getMessage(key);
const fmt = (key, ...args) => i18n.format(key, ...args);

/* ---------- derived data ---------- */
const R = RECIPES.map(r => ({ cmd: r[0], a: r[1], b: r[2], type: r[3], pct: r[4], cat: r[5], own: r[6] || "" }));
const CATS = ["Attack", "Magic", "Action", "Shotlock"];
const ingredients = [...new Set(R.flatMap(r => [r.a, r.b]))].sort((x, y) => x.localeCompare(y));
const commands = [...new Set(R.map(r => r.cmd))].sort((x, y) => x.localeCompare(y));
const ownable = [...new Set([...ingredients, ...commands])].sort((x, y) => x.localeCompare(y));
const ABILITY_NAMES = Object.keys(ABILITY_META);

function abilityFor(type, crystal) {
  if (type === "-" || !CRYSTAL_TABLE[type]) return null;
  const i = CRYSTALS.indexOf(crystal);
  if (i < 0) return null;
  return CRYSTAL_TABLE[type][i];
}

// Shared ability-cell renderers. Show all 7 crystal outcomes as tags;
// completed ones get red + strikethrough. Abilities owned per the
// Achievement Tracker are gold-highlighted (no separate marker). The
// hover tooltip is just the crystal that grants the ability.
// With opts {pick, rk} the tags become click-to-select for melding,
// and a leading "None" tag lets you meld without taking an ability.
function abilityTags(type, opts) {
  if (type === "-") return '<span class="crystal-tag">' + t('kh-no-ability') + '</span>';
  const o = opts || {};
  const tags = CRYSTALS.map((cn, i) => {
    const ab = CRYSTAL_TABLE[type][i];
    const done = abilityCompleted(ab);
    const ach = achHas(ab);
    const sel = o.pick && meldPick && meldPick.rk === o.rk && meldPick.ability === ab;
    const cls = "abtag" + (done ? " done" : "") + (ach ? " ach" : "") + (o.pick ? " pick" : "") + (sel ? " sel" : "");
    const data = o.pick ? ` data-rk="${esc(o.rk)}" data-ab="${esc(ab)}"` : "";
    return `<span class="${cls}" title="${esc(cn)}"${data}>${ab}</span>`;
  });
  if (o.pick) {
    const sel = meldPick && meldPick.rk === o.rk && meldPick.ability === null;
    tags.unshift(`<span class="abtag none pick${sel ? " sel" : ""}" data-rk="${esc(o.rk)}" data-none="1" title="${t('kh-tip-none')}">${t('kh-none-ability')}</span>`);
  }
  return '<div class="ablist">' + tags.join("") + '</div>';
}
// Single ability (when a specific crystal is chosen), red if completed,
// gold if owned per the Achievement Tracker. Tooltip = the crystal.
function abilitySingle(type, crystal) {
  const ab = abilityFor(type, crystal);
  if (!ab) return '<span class="crystal-tag">— (' + t('kh-no-ability') + ')</span>';
  const done = abilityCompleted(ab);
  const ach = achHas(ab);
  return `<span class="ability${done ? ' done' : ''}${ach ? ' ach' : ''}" title="${esc(crystal)}">${ab}</span>`;
}

/* ---------- character ownership ----------
   Each recipe carries an `own` code: T = Terra, V = Ventus, A = Aqua.
   A character can perform a recipe only if their letter is present. */
const CHAR_LETTER = { terra: "T", ventus: "V", aqua: "A" };
const CHAR_LABEL = { terra: "Terra", ventus: "Ventus", aqua: "Aqua" };

function recipeAllowed(rec, char) {
  if (!char) return true;
  return (rec.own || "").includes(CHAR_LETTER[char]);
}
function ownerBadge(own) {
  const code = own || "";
  return '<span class="userbadge">' + ["terra", "ventus", "aqua"].map(c => {
    const has = code.includes(CHAR_LETTER[c]);
    const tip = has ? CHAR_LABEL[c] : fmt('kh-tip-cannot-use', CHAR_LABEL[c]);
    return `<span class="ub ${c} ${has ? '' : 'off'}" title="${tip}"></span>`;
  }).join("") + '</span>';
}
function commandAllowed(cmd, char) {
  if (!char) return true;
  return R.some(r => r.cmd === cmd && recipeAllowed(r, char));
}

/* ---------- per-character persistent state ----------
   Progress is tracked separately for Terra, Ventus, Aqua in localStorage:
     abilities: { "Magic Haste": craftedCount, ... }
     owned:     [ "Fira", "Sliding Dash", ... ] */
const STORE_KEY = "bbs_meld_tracker_v1";
const CHARS = ["terra", "ventus", "aqua"];
function blankChar() { return { abilities: {}, owned: [] }; }
function loadStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) { const o = JSON.parse(raw); for (const c of CHARS) if (!o[c]) o[c] = blankChar(); return o; }
  } catch (e) { /* fall through to a fresh store */ }
  return { terra: blankChar(), ventus: blankChar(), aqua: blankChar() };
}
const STORE = loadStore();
function saveStore() { try { localStorage.setItem(STORE_KEY, JSON.stringify(STORE)); } catch (e) { /* private browsing */ } }

// active character is persistent and always set (defaults to Terra)
let activeChar = (function () {
  try { const c = localStorage.getItem(STORE_KEY + "_char"); return CHARS.includes(c) ? c : "terra"; }
  catch (e) { return "terra"; }
})();
function setActiveChar(c) { activeChar = c; try { localStorage.setItem(STORE_KEY + "_char", c); } catch (e) { /* ignore */ } }

function curAbilities() { return STORE[activeChar].abilities; }
function curOwnedSet() { return new Set(STORE[activeChar].owned); }
function abilityCount(name) { return curAbilities()[name] || 0; }
function abilityMax(name) { return (ABILITY_META[name] || {}).max || 1; }
function abilityCompleted(name) { const m = ABILITY_META[name]; return m ? abilityCount(name) >= m.max : false; }
function setAbilityCount(name, n) {
  n = Math.max(0, Math.min(n, abilityMax(name) * 99)); // allow overshoot but keep sane
  curAbilities()[name] = n; saveStore();
}
function toggleOwned(cmd) {
  const s = STORE[activeChar].owned; const i = s.indexOf(cmd);
  if (i >= 0) s.splice(i, 1); else s.push(cmd);
  saveStore();
}
function isOwned(cmd) { return STORE[activeChar].owned.includes(cmd); }

/* ---------- achievement tracker integration ----------
   The Achievement Tracker (kh-bbs-tracker.html) keeps its own store
   under bbs_progress_v1, keyed by item index into
   BBS_DATA.perChar[char].commands — commands AND the "Miscellaneous -
   Abilities" entries live in that same list. We read it to show
   ownership here, and the Meld button writes back into it. */
const ACH_KEY = "bbs_progress_v1";
function loadAch() { try { return JSON.parse(localStorage.getItem(ACH_KEY)) || {}; } catch (e) { return {}; } }
let ACH = loadAch();
const ACH_INDEX = {};   // char -> Map(name -> index in the tracker's commands list)
CHARS.forEach(c => {
  const m = new Map();
  ((BBS_DATA.perChar[c] || {}).commands || []).forEach((it, i) => { if (!m.has(it.name)) m.set(it.name, i); });
  ACH_INDEX[c] = m;
});
/* Names counted as owned by the tracker for a character: checked off
   there, rewarded by a max-ranked Unversed mission, or found in a
   checked treasure chest (mirrors the tracker's own auto sources). */
function achOwnedSets() {
  ACH = loadAch();
  const out = {};
  CHARS.forEach(char => {
    const s = new Set();
    const cs = (ACH[char] && ACH[char].commands) || {};
    ((BBS_DATA.perChar[char] || {}).commands || []).forEach((it, i) => { if (cs[i]) s.add(it.name); });
    const rank = (ACH.missions && ACH.missions.rank) || {};
    (BBS_DATA.missions || []).forEach((m, i) => {
      const r = m.reward && (typeof m.reward === "string" ? m.reward : m.reward[char]);
      if (r && rank[i + "-" + char]) s.add(r);
    });
    const tch = (ACH[char] && ACH[char].treasures) || {};
    ((BBS_DATA.perChar[char] || {}).treasures || []).forEach((tr, i) => { if (tch[i]) s.add(tr.name); });
    out[char] = s;
  });
  return out;
}
let ACH_OWNED = achOwnedSets();
function achHas(name) { return ACH_OWNED[activeChar].has(name); }
function ownedAnywhere(name) { return isOwned(name) || achHas(name); }
/* Owned set for "what can I meld" checks: melding-calculator ticks
   plus everything the Achievement Tracker says this character has. */
function curOwnedAll() { const s = curOwnedSet(); ACH_OWNED[activeChar].forEach(n => s.add(n)); return s; }
function achMarkOwned(names) {
  ACH = loadAch();
  if (!ACH[activeChar]) ACH[activeChar] = {};
  if (!ACH[activeChar].commands) ACH[activeChar].commands = {};
  names.forEach(n => {
    const i = ACH_INDEX[activeChar].get(n);
    if (i != null) ACH[activeChar].commands[i] = true;
  });
  try { localStorage.setItem(ACH_KEY, JSON.stringify(ACH)); } catch (e) { /* private browsing */ }
  ACH_OWNED = achOwnedSets();
}

/* ---------- command category icons ----------
   Fine-grained category (movement/defense/reprisal…) comes from the
   tracker data's group headings; melding's own category is the
   fallback. Icons live in ../images/commands/cmd-<cat>.png. */
const ICON_GROUP = {
  "Battle Commands - Attacks": "attack",
  "Battle Commands - Magic": "magic",
  "Action Commands - Movement": "movement",
  "Action Commands - Defense": "defense",
  "Action Commands - Reprisals": "reprisal",
  "Shotlock Commands": "shotlock"
};
const ICON_LABEL = { attack: "Attack", magic: "Magic", movement: "Movement", defense: "Defense", reprisal: "Reprisal", shotlock: "Shotlock" };
const CMD_ICON = new Map();
CHARS.forEach(c => ((BBS_DATA.perChar[c] || {}).commands || []).forEach(it => {
  const ic = ICON_GROUP[it.g];
  if (ic && !CMD_ICON.has(it.name)) CMD_ICON.set(it.name, ic);
}));
const CAT_ICON = { Attack: "attack", Magic: "magic", Action: "movement", Shotlock: "shotlock" };
function iconFor(name, cat) { return CMD_ICON.get(name) || (cat ? CAT_ICON[cat] : null); }
function cmdIcon(name, cat) {
  const ic = iconFor(name, cat);
  return ic ? `<img class="cmdicon" src="../images/commands/cmd-${ic}.png" alt="" title="${ICON_LABEL[ic]}">` : "";
}

/* ---------- helpers ---------- */
function el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
function pctCls(p) { return p <= 20 ? "pct low" : "pct"; }
function typePill(tp) { return tp === "-" ? '<span class="type-pill">—</span>' : `<span class="type-pill">${tp}</span>`; }
function esc(s) { return s.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c])); }
function highlight(name, q) {
  if (!q) return esc(name);
  const i = name.toLowerCase().indexOf(q.toLowerCase());
  if (i < 0) return esc(name);
  return esc(name.slice(0, i)) + '<span class="match">' + esc(name.slice(i, i + q.length)) + '</span>' + esc(name.slice(i + q.length));
}
function catLabel(cat) { return t('kh-cat-' + cat.toLowerCase()); }

/* ---------- combobox engine ----------
   Type-ahead behaviour for a text input + menu pair.
   onChange(value) fires whenever the committed value changes. */
function makeCombo(id, getOptions, onChange) {
  const input = document.getElementById(id);
  const menu = document.getElementById(id + "-menu");
  const clearBtn = document.querySelector(`[data-clear="${id}"]`);
  let value = "";        // committed value
  let active = -1;       // highlighted option index
  let current = [];      // currently shown options

  function commit(v) { value = v; input.value = v; close(); onChange(value); }
  function open() { render(input.value); menu.classList.add("open"); }
  function close() { menu.classList.remove("open"); active = -1; }

  function render(q) {
    const opts = getOptions();
    const ql = q.trim().toLowerCase();
    // rank: startsWith first, then includes
    current = opts.filter(o => !ql || o.toLowerCase().includes(ql))
      .sort((a, b) => {
        const as = a.toLowerCase().startsWith(ql) ? 0 : 1, bs = b.toLowerCase().startsWith(ql) ? 0 : 1;
        return as - bs || a.localeCompare(b);
      }).slice(0, 60);
    menu.innerHTML = "";
    if (!current.length) { menu.appendChild(el("div", "opt none", t('kh-no-matches'))); return; }
    current.forEach((o, idx) => {
      const d = el("div", "opt" + (idx === active ? " active" : ""));
      d.innerHTML = highlight(o, q);
      d.onmousedown = (e) => { e.preventDefault(); commit(o); };
      menu.appendChild(d);
    });
  }

  input.addEventListener("focus", open);
  input.addEventListener("input", () => {
    active = -1; render(input.value); menu.classList.add("open");
    // typing without commit clears committed value until a match is chosen
    if (value && input.value !== value) { value = ""; onChange(value); }
  });
  input.addEventListener("keydown", (e) => {
    if (!menu.classList.contains("open") && (e.key === "ArrowDown")) { open(); return; }
    if (e.key === "ArrowDown") { active = Math.min(active + 1, current.length - 1); render(input.value); scrollActive(); e.preventDefault(); }
    else if (e.key === "ArrowUp") { active = Math.max(active - 1, 0); render(input.value); scrollActive(); e.preventDefault(); }
    else if (e.key === "Enter") { if (active >= 0 && current[active]) commit(current[active]); else if (current.length === 1) commit(current[0]); e.preventDefault(); }
    else if (e.key === "Escape") { close(); }
  });
  function scrollActive() { const a = menu.querySelector(".opt.active"); if (a) a.scrollIntoView({ block: "nearest" }); }
  input.addEventListener("blur", () => {
    setTimeout(() => { // allow option mousedown to fire first
      // if typed text exactly matches an option, accept it
      const opts = getOptions();
      const exact = opts.find(o => o.toLowerCase() === input.value.trim().toLowerCase());
      if (exact) { if (exact !== value) commit(exact); }
      else if (!value) { input.value = ""; }
      else { input.value = value; }
      close();
    }, 120);
  });
  clearBtn.onclick = () => { input.value = ""; value = ""; close(); onChange(""); input.focus(); };

  return { get value() { return value; }, set value(v) { value = v; input.value = v; onChange(v); } };
}

/* ---------- character selector (shared, persistent) ---------- */
function syncCharButtons() {
  document.querySelectorAll(".charbtn").forEach(b => b.classList.toggle("on", b.dataset.c === activeChar));
}
function rerenderAll() {
  ACH_OWNED = achOwnedSets();   // pick up Achievement Tracker changes
  renderForward(); renderCommand(); buildPills(); renderAbility();
  renderCrystals(); renderSearchAbility(); renderTracker();
}
function wireCharBar(scopeSel) {
  document.querySelectorAll(scopeSel + " .charbtn").forEach(btn => {
    btn.onclick = () => {
      setActiveChar(btn.dataset.c);   // always selects (never clears)
      syncCharButtons();
      rerenderAll();
    };
  });
}

/* ---------- tabs ---------- */
document.querySelectorAll(".kh .tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".kh .tab").forEach(x => x.classList.remove("active"));
    tab.classList.add("active");
    ["forward", "bycommand", "byability", "searchability", "tracker", "crystals"].forEach(id => {
      document.getElementById("tab-" + id).style.display = (id === tab.dataset.tab) ? "block" : "none";
    });
  };
});

/* ---------- meld action ----------
   In Forward Meld / Find a Command, clicking an ability tag selects it
   for that recipe row; the row's Meld button then records the meld:
   result command owned here AND checked off in the Achievement
   Tracker, ability +1 in the Ability Tracker and checked off in the
   tracker's Miscellaneous - Abilities list. */
let meldPick = null;   // { rk, ability } — rk identifies a recipe row
function rowKey(prefix, m) { return prefix + "|" + m.cmd + "|" + m.a + "|" + m.b + "|" + m.type + "|" + m.pct; }
function doMeld(rec, ability) {
  if (!isOwned(rec.cmd)) toggleOwned(rec.cmd);
  if (ability) setAbilityCount(ability, abilityCount(ability) + 1);
  achMarkOwned(ability ? [rec.cmd, ability] : [rec.cmd]);
  meldPick = null;
  showToast(ability ? fmt('kh-melded-ab', rec.cmd, ability) : fmt('kh-melded', rec.cmd));
  rerenderAll();
}
let toastTimer = null;
function showToast(msg) {
  let box = document.getElementById("meldToast");
  if (!box) { box = el("div", "meldtoast"); box.id = "meldToast"; document.body.appendChild(box); }
  box.textContent = msg;
  box.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => box.classList.remove("show"), 2600);
}
/* Icon + command name on one line; ownership is shown by the row tint
   (and the green/grey chip colours), not by a ✓/✗ marker. */
function ownName(name, cat) {
  const o = ownedAnywhere(name);
  return `<span class="ownname" title="${o ? t('kh-own-yes') : t('kh-own-no')}">${cmdIcon(name, cat)}${name}</span>`;
}
function meldCell(rk, canMeld) {
  return `<td><button class="meldbtn" data-rk="${esc(rk)}" ${canMeld ? "" : "disabled"} title="${canMeld ? "" : t('kh-tip-need-pick')}">${t('kh-meld-btn')}</button></td>`;
}
/* Wire up the pickable tags and meld buttons rendered into `box`.
   meldables: Map(rk -> {rec, ability}); rerender: tab's own renderer. */
function wireMeld(box, meldables, rerender) {
  box.querySelectorAll(".abtag.pick").forEach(tag => {
    tag.onclick = () => {
      const rk = tag.dataset.rk;
      const ab = tag.dataset.none === "1" ? null : tag.dataset.ab;   // None → no ability
      meldPick = (meldPick && meldPick.rk === rk && meldPick.ability === ab) ? null : { rk, ability: ab };
      rerender();
    };
  });
  box.querySelectorAll(".meldbtn").forEach(btn => {
    btn.onclick = () => {
      const m = meldables.get(btn.dataset.rk);
      if (m) doMeld(m.rec, m.ability);
    };
  });
}

/* ---------- forward meld ---------- */
const f1 = makeCombo("f1", () => ingredients, renderForward);
const f2 = makeCombo("f2", () => ingredients, renderForward);
const crystal = makeCombo("crystal", () => CRYSTALS.slice(), renderForward);
wireCharBar("#tab-forward");

function renderForward() {
  const s1 = f1.value, s2 = f2.value, cry = crystal.value;
  const box = document.getElementById("forwardResults"); box.innerHTML = "";
  document.getElementById("charNote").textContent = activeChar ? fmt('kh-note-filtering', CHAR_LABEL[activeChar]) : "";
  if (!s1 && !s2) { box.appendChild(el("div", "empty", t('kh-forward-empty'))); return; }

  // slot order doesn't matter in BBS — match either arrangement
  const matches = R.filter(r => {
    const setHas = (x) => x === "" || r.a === x || r.b === x;
    const combo = (s1 && s2) ? ((r.a === s1 && r.b === s2) || (r.a === s2 && r.b === s1)) : (setHas(s1) && setHas(s2));
    return combo && recipeAllowed(r, activeChar);
  });

  if (!matches.length) {
    box.appendChild(el("div", "empty", activeChar ? fmt('kh-forward-none-char', CHAR_LABEL[activeChar]) : t('kh-forward-none')));
    return;
  }

  const meldables = new Map();
  CATS.forEach(cat => {
    const rows = matches.filter(m => m.cat === cat);
    if (!rows.length) return;
    const catIc = CAT_ICON[cat] ? `<img class="cmdicon" src="../images/commands/cmd-${CAT_ICON[cat]}.png" alt="">` : "";
    box.appendChild(el("div", "grp-title", catIc + fmt('kh-group-commands', catLabel(cat))));
    const tbl = el("table");
    tbl.innerHTML = `<thead><tr><th>${t('kh-th-result')}</th><th>${t('kh-th-slot1')}</th><th>${t('kh-th-slot2')}</th><th>${t('kh-th-type')}</th><th>%</th><th>${cry ? fmt('kh-th-ability-with', cry) : t('kh-th-ability-per')}</th><th>${t('kh-th-meld')}</th></tr></thead>`;
    const tb = el("tbody");
    rows.forEach(m => {
      const rk = rowKey("fwd", m);
      // show the slot-1 ingredient in the Slot 1 column (and slot-2 in
      // Slot 2) regardless of how the recipe is stored
      let A = m.a, B = m.b;
      if (s1 && A !== s1 && B === s1) { A = m.b; B = m.a; }
      else if (!s1 && s2 && A === s2 && B !== s2) { A = m.b; B = m.a; }
      let abilityCell, selAb = null, hasSel = false;
      if (cry) {
        selAb = abilityFor(m.type, cry); hasSel = true;
        abilityCell = abilitySingle(m.type, cry);
      } else if (m.type === "-") {
        abilityCell = '<span class="crystal-tag">' + t('kh-no-ability-shotlock') + '</span>';
        hasSel = true;   // Shotlocks have no ability — always meldable
      } else if (meldPick && meldPick.rk === rk) {
        selAb = meldPick.ability; hasSel = true;   // ability or null (None)
        abilityCell = abilityTags(m.type, { pick: true, rk });
      } else {
        abilityCell = abilityTags(m.type, { pick: true, rk });
      }
      meldables.set(rk, { rec: m, ability: m.type === "-" ? null : selAb });
      const owned = ownedAnywhere(m.cmd);
      const tr = el("tr", owned ? "owned-row" : null);
      tr.innerHTML = `<td class="cmd">${ownName(m.cmd, m.cat)}${ownerBadge(m.own)}</td>
        <td class="ing">${ingChip(A)}</td><td class="ing">${ingChip(B)}</td>
        <td>${typePill(m.type)}</td><td class="${pctCls(m.pct)}">${m.pct}%</td><td>${abilityCell}</td>${meldCell(rk, hasSel)}`;
      tb.appendChild(tr);
    });
    tbl.appendChild(tb); box.appendChild(tbl);
  });
  wireMeld(box, meldables, renderForward);

  if (cry) {
    box.appendChild(el("p", "legend", fmt('kh-legend-pinned', cry)));
  } else {
    box.appendChild(el("p", "legend", fmt('kh-legend-order', CRYSTALS.join(" · "))));
  }
  box.appendChild(el("p", "legend", t('kh-legend-meld')));
}
/* Ingredient chip — green when owned (per either tracker), grey when
   not; nowrap via CSS. No check mark, the colour carries the meaning. */
function ingChip(name) {
  const o = ownedAnywhere(name);
  return `<span class="${o ? 'chip-have' : 'chip-need'}" title="${o ? t('kh-own-yes') : t('kh-own-no')}">${name}</span>`;
}

/* ---------- by command ---------- */
const targetCmd = makeCombo("targetCmd", () => commands.filter(c => commandAllowed(c, activeChar)), renderCommand);
const targetCrystal = makeCombo("targetCrystal", () => CRYSTALS.slice(), renderCommand);
wireCharBar("#tab-bycommand");

function renderCommand() {
  const cmd = targetCmd.value, cry = targetCrystal.value;
  const box = document.getElementById("commandResults"); box.innerHTML = "";
  if (!cmd) { box.appendChild(el("div", "empty", t('kh-cmd-empty'))); return; }
  if (activeChar && !commandAllowed(cmd, activeChar)) {
    box.appendChild(el("div", "empty", fmt('kh-cmd-cant', cmd, CHAR_LABEL[activeChar])));
    return;
  }
  let rows = R.filter(r => r.cmd === cmd).sort((a, b) => b.pct - a.pct);
  if (activeChar) rows = rows.filter(r => recipeAllowed(r, activeChar));
  box.appendChild(el("div", "grp-title", ownName(cmd, rows.length ? rows[0].cat : null)));
  const meldables = new Map();
  const tbl = el("table");
  tbl.innerHTML = `<thead><tr><th>${t('kh-th-slot1')}</th><th>${t('kh-th-slot2')}</th><th>${t('kh-th-type')}</th><th>%</th><th>${t('kh-th-usedby')}</th><th>${cry ? fmt('kh-th-ability-with', cry) : t('kh-th-ability-per')}</th><th>${t('kh-th-meld')}</th></tr></thead>`;
  const tb = el("tbody");
  rows.forEach(m => {
    const rk = rowKey("cmd", m);
    let abilityCell, selAb = null, hasSel = false;
    if (m.type === "-") { abilityCell = '<span class="crystal-tag">' + t('kh-no-ability-shotlock') + '</span>'; hasSel = true; }
    else if (cry) { selAb = abilityFor(m.type, cry); hasSel = true; abilityCell = abilitySingle(m.type, cry); }
    else {
      if (meldPick && meldPick.rk === rk) { selAb = meldPick.ability; hasSel = true; }
      abilityCell = abilityTags(m.type, { pick: true, rk });
    }
    meldables.set(rk, { rec: m, ability: m.type === "-" ? null : selAb });
    const tr = el("tr", ownedAnywhere(m.cmd) ? "owned-row" : null);
    tr.innerHTML = `<td class="ing">${ingChip(m.a)}</td><td class="ing">${ingChip(m.b)}</td><td>${typePill(m.type)}</td><td class="${pctCls(m.pct)}">${m.pct}%</td><td>${ownerBadge(m.own)}</td><td>${abilityCell}</td>${meldCell(rk, hasSel)}`;
    tb.appendChild(tr);
  });
  tbl.appendChild(tb); box.appendChild(tbl);
  wireMeld(box, meldables, renderCommand);
  box.appendChild(el("p", "legend", cry
    ? fmt('kh-legend-cmd-pinned', cry, CHAR_LABEL[activeChar])
    : fmt('kh-legend-cmd-tags', CRYSTALS.join(" · "), CHAR_LABEL[activeChar])));
}

/* ---------- by ability (owned ingredients) ---------- */
const ownedPills = document.getElementById("ownedPills");
const ownedFilter = document.getElementById("ownedFilter");

/* A command exists for a character if it's in their Achievement Tracker
   command list, or failing that (name drift safety net) if any of their
   recipes produce or consume it. Hides e.g. Aqua's Firewheel from
   Terra/Ventus. */
function nameUsableBy(name, char) {
  if (!char) return true;
  if (ACH_INDEX[char].has(name)) return true;
  return R.some(r => recipeAllowed(r, char) && (r.cmd === name || r.a === name || r.b === name));
}

function buildPills() {
  ownedPills.innerHTML = "";
  const q = ownedFilter.value.trim().toLowerCase();
  ownable.filter(n => nameUsableBy(n, activeChar))
    .filter(n => !q || n.toLowerCase().includes(q)).forEach(name => {
    const ach = achHas(name);
    const p = el("button", "pill" + (isOwned(name) ? " on" : "") + (ach ? " ach" : ""), cmdIcon(name) + name);
    if (ach) p.title = t('kh-tip-ach-cmd');
    p.onclick = () => { toggleOwned(name); buildPills(); renderAbility(); renderForward(); renderCommand(); renderSearchAbility(); };
    ownedPills.appendChild(p);
  });
}
document.getElementById("clearOwned").onclick = () => {
  STORE[activeChar].owned = []; saveStore();
  buildPills(); renderAbility(); renderForward(); renderCommand(); renderSearchAbility();
};
ownedFilter.addEventListener("input", buildPills);

function renderAbility() {
  const box = document.getElementById("abilityResults"); box.innerHTML = "";
  // ticked here OR owned per the Achievement Tracker
  const owned = curOwnedAll();
  if (!owned.size) { box.appendChild(el("div", "empty", fmt('kh-owned-empty', CHAR_LABEL[activeChar]))); return; }
  const craftable = R.filter(r => owned.has(r.a) && owned.has(r.b) && recipeAllowed(r, activeChar));
  if (!craftable.length) { box.appendChild(el("div", "empty", t('kh-owned-none'))); return; }
  const byCmd = {};
  craftable.forEach(m => { (byCmd[m.cmd] = byCmd[m.cmd] || []).push(m); });
  const names = Object.keys(byCmd).sort((a, b) => a.localeCompare(b));
  box.appendChild(el("div", "grp-title", fmt('kh-owned-can-make', CHAR_LABEL[activeChar], names.length)));
  const tbl = el("table");
  tbl.innerHTML = `<thead><tr><th>${t('kh-th-command')}</th><th>${t('kh-th-recipe-owned')}</th><th>${t('kh-th-type')}</th><th>%</th><th>${t('kh-th-usedby')}</th><th>${t('kh-th-abilities-all')}</th></tr></thead>`;
  const tb = el("tbody");
  names.forEach(cmd => {
    byCmd[cmd].sort((a, b) => b.pct - a.pct).forEach((m, idx) => {
      const tr = el("tr", ownedAnywhere(cmd) ? "owned-row" : null);
      tr.innerHTML = `<td class="cmd">${idx === 0 ? ownName(cmd, m.cat) : ""}</td>
        <td class="recipe-line"><span class="havechip">${m.a}</span> + <span class="havechip">${m.b}</span></td>
        <td>${typePill(m.type)}</td><td class="${pctCls(m.pct)}">${m.pct}%</td><td>${ownerBadge(m.own)}</td><td>${abilityTags(m.type)}</td>`;
      tb.appendChild(tr);
    });
  });
  tbl.appendChild(tb); box.appendChild(tbl);
  box.appendChild(el("p", "legend", fmt('kh-legend-owned', CRYSTALS.join(" · "), CHAR_LABEL[activeChar])));
}
wireCharBar("#tab-byability");

/* ---------- crystal chart ---------- */
const crystalFilter = document.getElementById("crystalFilter");
function renderCrystals() {
  const box = document.getElementById("crystalResults"); box.innerHTML = "";
  const q = crystalFilter.value.trim().toLowerCase();
  const types = Object.keys(CRYSTAL_TABLE); // A..P
  const wrap = el("div", "scrollx");
  const tbl = el("table", "crystal-table");
  tbl.innerHTML = `<thead><tr><th>${t('kh-th-type')}</th>${CRYSTALS.map(c => `<th class="cryhead">${c}</th>`).join("")}</tr></thead>`;
  const tb = el("tbody");
  let hits = 0;
  types.forEach(tp => {
    const cells = CRYSTAL_TABLE[tp].map((ab) => {
      const hit = q && ab.toLowerCase().includes(q);
      if (hit) hits++;
      const done = abilityCompleted(ab);
      const ach = achHas(ab);
      const cls = [hit ? 'cellhit' : '', done ? 'celldone' : '', ach ? 'cellach' : ''].filter(Boolean).join(' ');
      const tip = [done ? fmt('kh-tip-completed-for', ab, CHAR_LABEL[activeChar]) : '', ach ? t('kh-tip-ach') : ''].filter(Boolean).join(' — ');
      return `<td class="${cls}" title="${tip}">${ab}</td>`;
    }).join("");
    const tr = el("tr");
    tr.innerHTML = `<td class="ctype">${tp}</td>${cells}`;
    tb.appendChild(tr);
  });
  tbl.appendChild(tb); wrap.appendChild(tbl); box.appendChild(wrap);
  document.getElementById("crystalCount").textContent = q ? fmt('kh-chart-matches', hits, crystalFilter.value.trim()) : "";
  box.appendChild(el("p", "legend", fmt('kh-legend-chart', CHAR_LABEL[activeChar])));
}
crystalFilter.addEventListener("input", renderCrystals);

/* ---------- search by ability ---------- */
// For an ability, which crystal(s) produce it for a given type:
function crystalsForAbilityType(ability, type) {
  if (!CRYSTAL_TABLE[type]) return [];
  const out = [];
  CRYSTAL_TABLE[type].forEach((ab, i) => { if (ab === ability) out.push(CRYSTALS[i]); });
  return out;
}
// All recipes that can yield this ability (type contains it), with the crystal needed.
function recipesForAbility(ability) {
  const out = [];
  R.forEach(r => {
    const crys = crystalsForAbilityType(ability, r.type);
    if (crys.length) out.push({ rec: r, crystals: crys });
  });
  return out;
}
const abQuery = makeCombo("abQuery", () => ABILITY_NAMES.slice().sort(), renderSearchAbility);
wireCharBar("#tab-searchability");

function renderSearchAbility() {
  const box = document.getElementById("searchAbilityResults"); box.innerHTML = "";
  const ab = abQuery.value;
  if (!ab) { box.appendChild(el("div", "empty", t('kh-ab-empty'))); return; }
  const meta = ABILITY_META[ab];
  const done = abilityCompleted(ab);
  // header with progress
  const head = el("div", "trk-summary");
  head.innerHTML = `<span><b class="${done ? 'trk-name done' : 'trk-name'}">${ab}</b></span>` +
    `<span>${t('kh-abcat-' + meta.cat.toLowerCase())}</span>` +
    `<span>${fmt('kh-ab-crystal', meta.crystal)}</span>` +
    `<span>${abilityCount(ab)} / ${meta.max} ${done ? '<span class="donepill">' + t('kh-completed') + '</span>' : ''}` +
    `${achHas(ab) ? ' <span class="achpill" title="' + t('kh-tip-ach') + '">' + t('kh-ach-pill') + '</span>' : ''}</span>`;
  box.appendChild(head);

  const list = recipesForAbility(ab).filter(x => recipeAllowed(x.rec, activeChar));
  if (!list.length) { box.appendChild(el("div", "empty", fmt('kh-ab-none', CHAR_LABEL[activeChar], ab))); return; }

  // sort: fully-owned recipes first, then by % desc
  const owned = curOwnedAll();
  list.sort((a, b) => {
    const ah = (owned.has(a.rec.a) && owned.has(a.rec.b)) ? 0 : 1;
    const bh = (owned.has(b.rec.a) && owned.has(b.rec.b)) ? 0 : 1;
    return ah - bh || b.rec.pct - a.rec.pct || a.rec.cmd.localeCompare(b.rec.cmd);
  });

  const tbl = el("table");
  tbl.innerHTML = `<thead><tr><th>${t('kh-th-command')}</th><th>${t('kh-th-slot1')}</th><th>${t('kh-th-slot2')}</th><th>${t('kh-th-crystal')}</th><th>${t('kh-th-type')}</th><th>%</th><th>${t('kh-th-usedby')}</th></tr></thead>`;
  const tb = el("tbody");
  list.forEach(({ rec, crystals }) => {
    const haveA = owned.has(rec.a), haveB = owned.has(rec.b), both = haveA && haveB;
    const slot = (name, have) => have
      ? `<span class="chip-have" title="${t('kh-tip-owned')}">${name}</span>`
      : `<span class="chip-need">${name}</span>`;
    const tr = el("tr"); if (both) tr.className = "recipe-have";
    tr.innerHTML = `<td class="cmd">${ownName(rec.cmd, rec.cat)}</td>
      <td>${slot(rec.a, haveA)}</td><td>${slot(rec.b, haveB)}</td>
      <td>${crystals.join(", ")}</td><td>${typePill(rec.type)}</td>
      <td class="${pctCls(rec.pct)}">${rec.pct}%</td><td>${ownerBadge(rec.own)}</td>`;
    tb.appendChild(tr);
  });
  tbl.appendChild(tb); box.appendChild(tbl);
  const haveCount = list.filter(x => owned.has(x.rec.a) && owned.has(x.rec.b)).length;
  box.appendChild(el("p", "legend", fmt('kh-ab-legend', list.length, CHAR_LABEL[activeChar], haveCount, meta.crystal, ab)));
}

/* ---------- ability tracker ---------- */
const trkFilter = document.getElementById("trkFilter");
const TRK_CATS = ["Prize", "Stats", "Support"];
function renderTracker() {
  const box = document.getElementById("trackerResults"); box.innerHTML = "";
  const q = trkFilter.value.trim().toLowerCase();
  // summary
  const all = ABILITY_NAMES;
  const completed = all.filter(abilityCompleted).length;
  const crafted = all.reduce((s, a) => s + Math.min(abilityCount(a), abilityMax(a)), 0);
  const totalMax = all.reduce((s, a) => s + abilityMax(a), 0);
  document.getElementById("trkSummary").innerHTML =
    `<span><b>${CHAR_LABEL[activeChar]}</b></span>` +
    `<span>${fmt('kh-trk-completed', completed, all.length)}</span>` +
    `<span>${fmt('kh-trk-copies', crafted, totalMax)}</span>`;

  TRK_CATS.forEach(cat => {
    let names = all.filter(a => ABILITY_META[a].cat === cat);
    if (q) names = names.filter(a => a.toLowerCase().includes(q));
    if (!names.length) return;
    box.appendChild(el("div", "trk-cat", fmt('kh-trk-group', t('kh-abcat-' + cat.toLowerCase()))));
    const tbl = el("table", "trk-table");
    tbl.innerHTML = `<thead><tr><th>${t('kh-th-ability')}</th><th>${t('kh-th-crystal')}</th><th>${t('kh-th-crafted')}</th><th>${t('kh-th-progress')}</th><th>${t('kh-th-status')}</th></tr></thead>`;
    const tb = el("tbody");
    names.forEach(name => {   // ABILITY_META declaration order = in-game order
      const meta = ABILITY_META[name];
      const n = abilityCount(name), mx = meta.max, done = n >= mx;
      const tr = el("tr");
      const frac = Math.min(1, n / mx) * 100;
      tr.innerHTML =
        `<td class="trk-name ${done ? 'done' : ''}">${name}</td>` +
        `<td class="crystaltag">${meta.crystal}</td>` +
        `<td><span class="stepper">
            <button class="stepbtn" data-act="dec" data-ab="${name}">−</button>
            <span class="stepval"><b>${n}</b> <span class="mx">/ ${mx}</span></span>
            <button class="stepbtn" data-act="inc" data-ab="${name}">+</button>
         </span></td>` +
        `<td><span class="trk-progress ${done ? 'full' : ''}"><i style="width:${frac}%"></i></span></td>` +
        `<td>${done ? '<span class="donepill">' + t('kh-completed') + '</span> ' : ''}${achHas(name) ? '<span class="achpill" title="' + t('kh-tip-ach') + '">' + t('kh-ach-pill') + '</span>' : ''}</td>`;
      tb.appendChild(tr);
    });
    tbl.appendChild(tb); box.appendChild(tbl);
  });

  // wire steppers
  box.querySelectorAll(".stepbtn").forEach(btn => {
    btn.onclick = () => {
      const name = btn.dataset.ab;
      const cur = abilityCount(name);
      setAbilityCount(name, btn.dataset.act === "inc" ? cur + 1 : cur - 1);
      renderTracker();
      // also refresh other tabs' completed highlighting
      renderForward(); renderCommand(); renderAbility(); renderCrystals(); renderSearchAbility();
    };
  });
}
trkFilter.addEventListener("input", renderTracker);
document.getElementById("trkReset").onclick = () => {
  if (confirm(fmt('kh-trk-reset-confirm', CHAR_LABEL[activeChar]))) {
    STORE[activeChar].abilities = {}; saveStore();
    renderTracker(); renderForward(); renderCommand(); renderAbility(); renderCrystals(); renderSearchAbility();
  }
};
wireCharBar("#tab-tracker");

/* ---------- initial render + language switches ---------- */
syncCharButtons();
rerenderAll();
document.addEventListener('i18n:updated', rerenderAll);

/* close any open combo menu when clicking elsewhere */
document.addEventListener("click", (e) => {
  if (!e.target.closest(".combo")) document.querySelectorAll(".menu.open").forEach(m => m.classList.remove("open"));
});

/* Live-sync when the Achievement Tracker (in another tab) changes. */
window.addEventListener("storage", (e) => {
  if (e.key === ACH_KEY) rerenderAll();
});

});
