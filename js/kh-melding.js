/* =====================================================================
   KH Birth by Sleep — Command Melding Calculator
   Logic ported from the original single-file version.

   Depends on: js/kh-common.js (KH.*), js/i18n.js (i18n),
   js/kh-melding-data.js (CRYSTALS, CRYSTAL_TABLE, RECIPES, ABILITY_META)
   and js/kh-bbs-tracker-data.js (BBS_DATA) for two-way integration with
   the Achievement Tracker: ownership recorded there is shown here, and the
   Meld button writes back to it (bbs_progress_v1).
   Game terms (commands, abilities, crystals, character names) are kept in
   English in every language; UI chrome goes through i18n.

   Where to look (top → bottom):
     derived data ............. recipes / ingredients / commands / ownable
     ability cell renderers ... abilityTags / abilitySingle
     character ownership ...... recipeAllowed / commandAllowed / ownerBadge
     per-character state ....... loadStore / curAbilities / toggleOwned
     achievement-tracker sync . achOwnedSets / achMarkOwned
     combobox engine .......... makeCombo (type-ahead input + menu)
     meld action .............. doMeld / wireMeld
     the six tabs ............. renderForward / renderCommand / renderAbility
                                / renderCrystals / renderSearchAbility / renderTracker
   ===================================================================== */

document.addEventListener('DOMContentLoaded', async function () {
await i18n.init();

const { el, esc } = KH;
const translate = (key) => i18n.getMessage(key);
const format = (key, ...args) => i18n.format(key, ...args);

/* ---------- derived data ---------- */
const recipes = RECIPES.map(row => ({ cmd: row[0], a: row[1], b: row[2], type: row[3], pct: row[4], cat: row[5], own: row[6] || "" }));
const CATS = ["Attack", "Magic", "Action", "Shotlock"];
const ingredients = [...new Set(recipes.flatMap(recipe => [recipe.a, recipe.b]))].sort((x, y) => x.localeCompare(y));
const commands = [...new Set(recipes.map(recipe => recipe.cmd))].sort((x, y) => x.localeCompare(y));
const ownable = [...new Set([...ingredients, ...commands])].sort((x, y) => x.localeCompare(y));
const ABILITY_NAMES = Object.keys(ABILITY_META);

function abilityFor(type, crystal) {
  if (type === "-" || !CRYSTAL_TABLE[type]) return null;
  const crystalIndex = CRYSTALS.indexOf(crystal);
  if (crystalIndex < 0) return null;
  return CRYSTAL_TABLE[type][crystalIndex];
}

// Shared ability-cell renderers. Show all 7 crystal outcomes as tags;
// completed ones get red + strikethrough. Abilities owned per the
// Achievement Tracker are gold-highlighted (no separate marker). The
// hover tooltip is just the crystal that grants the ability.
// With opts {pick, rk} the tags become click-to-select for melding,
// and a leading "None" tag lets you meld without taking an ability.
function abilityTags(type, opts) {
  if (type === "-") return '<span class="crystal-tag">' + translate('kh-no-ability') + '</span>';
  opts = opts || {};
  const tags = CRYSTALS.map((crystalName, crystalIndex) => {
    const ability = CRYSTAL_TABLE[type][crystalIndex];
    const completed = abilityCompleted(ability);
    const owned = achHas(ability);
    const selected = opts.pick && meldPick && meldPick.rk === opts.rk && meldPick.ability === ability;
    const className = "abtag" + (completed ? " done" : "") + (owned ? " ach" : "") + (opts.pick ? " pick" : "") + (selected ? " sel" : "");
    const data = opts.pick ? ` data-rk="${esc(opts.rk)}" data-ab="${esc(ability)}"` : "";
    return `<span class="${className}" title="${esc(crystalName)}"${data}>${ability}</span>`;
  });
  if (opts.pick) {
    const selected = meldPick && meldPick.rk === opts.rk && meldPick.ability === null;
    tags.unshift(`<span class="abtag none pick${selected ? " sel" : ""}" data-rk="${esc(opts.rk)}" data-none="1" title="${translate('kh-tip-none')}">${translate('kh-none-ability')}</span>`);
  }
  return '<div class="ablist">' + tags.join("") + '</div>';
}
// Single ability (when a specific crystal is chosen), red if completed,
// gold if owned per the Achievement Tracker. Tooltip = the crystal.
function abilitySingle(type, crystal) {
  const ability = abilityFor(type, crystal);
  if (!ability) return '<span class="crystal-tag">— (' + translate('kh-no-ability') + ')</span>';
  const completed = abilityCompleted(ability);
  const owned = achHas(ability);
  return `<span class="ability${completed ? ' done' : ''}${owned ? ' ach' : ''}" title="${esc(crystal)}">${ability}</span>`;
}

/* ---------- character ownership ----------
   Each recipe carries an `own` code: T = Terra, V = Ventus, A = Aqua.
   A character can perform a recipe only if their letter is present. */
const CHAR_LETTER = { terra: "T", ventus: "V", aqua: "A" };
const CHAR_LABEL = KH.BBS_CHAR_LABEL;

function recipeAllowed(recipe, char) {
  if (!char) return true;
  return (recipe.own || "").includes(CHAR_LETTER[char]);
}
function ownerBadge(own) {
  const code = own || "";
  return '<span class="userbadge">' + ["terra", "ventus", "aqua"].map(char => {
    const has = code.includes(CHAR_LETTER[char]);
    const tip = has ? CHAR_LABEL[char] : format('kh-tip-cannot-use', CHAR_LABEL[char]);
    return `<span class="ub ${char} ${has ? '' : 'off'}" title="${tip}"></span>`;
  }).join("") + '</span>';
}
function commandAllowed(cmd, char) {
  if (!char) return true;
  return recipes.some(recipe => recipe.cmd === cmd && recipeAllowed(recipe, char));
}

/* ---------- per-character persistent state ----------
   Progress is tracked separately for Terra, Ventus, Aqua in localStorage:
     abilities: { "Magic Haste": craftedCount, ... }
     owned:     [ "Fira", "Sliding Dash", ... ] */
const STORE_KEY = "bbs_meld_tracker_v1";
const CHARS = KH.BBS_CHARS;
function blankChar() { return { abilities: {}, owned: [] }; }
function loadStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) { const saved = JSON.parse(raw); for (const char of CHARS) if (!saved[char]) saved[char] = blankChar(); return saved; }
  } catch (e) { /* fall through to a fresh store */ }
  return { terra: blankChar(), ventus: blankChar(), aqua: blankChar() };
}
const STORE = loadStore();
function saveStore() { try { localStorage.setItem(STORE_KEY, JSON.stringify(STORE)); } catch (e) { /* private browsing */ } }

// active character is persistent and always set (defaults to Terra)
let activeChar = (function () {
  try { const saved = localStorage.getItem(STORE_KEY + "_char"); return CHARS.includes(saved) ? saved : "terra"; }
  catch (e) { return "terra"; }
})();
function setActiveChar(char) { activeChar = char; try { localStorage.setItem(STORE_KEY + "_char", char); } catch (e) { /* ignore */ } }

function curAbilities() { return STORE[activeChar].abilities; }
function curOwnedSet() { return new Set(STORE[activeChar].owned); }
function abilityCount(name) { return curAbilities()[name] || 0; }
function abilityMax(name) { return (ABILITY_META[name] || {}).max || 1; }
function abilityCompleted(name) { const meta = ABILITY_META[name]; return meta ? abilityCount(name) >= meta.max : false; }
function setAbilityCount(name, count) {
  count = Math.max(0, Math.min(count, abilityMax(name) * 99)); // allow overshoot but keep sane
  curAbilities()[name] = count; saveStore();
}
function toggleOwned(cmd) {
  const owned = STORE[activeChar].owned; const index = owned.indexOf(cmd);
  if (index >= 0) owned.splice(index, 1); else owned.push(cmd);
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
CHARS.forEach(char => {
  const index = new Map();
  ((BBS_DATA.perChar[char] || {}).commands || []).forEach((item, itemIndex) => { if (!index.has(item.name)) index.set(item.name, itemIndex); });
  ACH_INDEX[char] = index;
});
/* Names counted as owned by the tracker for a character: checked off
   there, rewarded by a max-ranked Unversed mission, or found in a
   checked treasure chest (mirrors the tracker's own auto sources). */
function achOwnedSets() {
  ACH = loadAch();
  const sets = {};
  CHARS.forEach(char => {
    const owned = new Set();
    const commandStore = (ACH[char] && ACH[char].commands) || {};
    ((BBS_DATA.perChar[char] || {}).commands || []).forEach((item, itemIndex) => { if (commandStore[itemIndex]) owned.add(item.name); });
    const rank = (ACH.missions && ACH.missions.rank) || {};
    (BBS_DATA.missions || []).forEach((mission, missionIndex) => {
      const reward = mission.reward && (typeof mission.reward === "string" ? mission.reward : mission.reward[char]);
      if (reward && rank[missionIndex + "-" + char]) owned.add(reward);
    });
    const treasureStore = (ACH[char] && ACH[char].treasures) || {};
    ((BBS_DATA.perChar[char] || {}).treasures || []).forEach((treasure, treasureIndex) => { if (treasureStore[treasureIndex]) owned.add(treasure.name); });
    sets[char] = owned;
  });
  return sets;
}
let ACH_OWNED = achOwnedSets();
function achHas(name) { return ACH_OWNED[activeChar].has(name); }
function ownedAnywhere(name) { return isOwned(name) || achHas(name); }
/* Owned set for "what can I meld" checks: melding-calculator ticks
   plus everything the Achievement Tracker says this character has. */
function curOwnedAll() { const owned = curOwnedSet(); ACH_OWNED[activeChar].forEach(name => owned.add(name)); return owned; }
function achMarkOwned(names) {
  ACH = loadAch();
  if (!ACH[activeChar]) ACH[activeChar] = {};
  if (!ACH[activeChar].commands) ACH[activeChar].commands = {};
  names.forEach(name => {
    const index = ACH_INDEX[activeChar].get(name);
    if (index != null) ACH[activeChar].commands[index] = true;
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
CHARS.forEach(char => ((BBS_DATA.perChar[char] || {}).commands || []).forEach(item => {
  const icon = ICON_GROUP[item.g];
  if (icon && !CMD_ICON.has(item.name)) CMD_ICON.set(item.name, icon);
}));
const CAT_ICON = { Attack: "attack", Magic: "magic", Action: "movement", Shotlock: "shotlock" };
function iconFor(name, cat) { return CMD_ICON.get(name) || (cat ? CAT_ICON[cat] : null); }
function cmdIcon(name, cat) {
  const icon = iconFor(name, cat);
  return icon ? `<img class="cmdicon" src="../images/commands/cmd-${icon}.png" alt="" title="${ICON_LABEL[icon]}">` : "";
}

/* ---------- helpers ---------- */
function pctCls(percent) { return percent <= 20 ? "pct low" : "pct"; }
function typePill(type) { return type === "-" ? '<span class="type-pill">—</span>' : `<span class="type-pill">${type}</span>`; }
function highlight(name, query) {
  if (!query) return esc(name);
  const matchIndex = name.toLowerCase().indexOf(query.toLowerCase());
  if (matchIndex < 0) return esc(name);
  return esc(name.slice(0, matchIndex)) + '<span class="match">' + esc(name.slice(matchIndex, matchIndex + query.length)) + '</span>' + esc(name.slice(matchIndex + query.length));
}
function catLabel(cat) { return translate('kh-cat-' + cat.toLowerCase()); }

/* ---------- combobox engine ----------
   Type-ahead behaviour for a text input + menu pair.
   onChange(value) fires whenever the committed value changes. */
function makeCombo(id, getOptions, onChange) {
  const input = document.getElementById(id);
  const menu = document.getElementById(id + "-menu");
  const clearBtn = document.querySelector(`[data-clear="${id}"]`);
  let value = "";          // committed value
  let activeIndex = -1;    // highlighted option index
  let shownOptions = [];   // currently shown options

  function commit(chosen) { value = chosen; input.value = chosen; close(); onChange(value); }
  function open() { renderMenu(input.value); menu.classList.add("open"); }
  function close() { menu.classList.remove("open"); activeIndex = -1; }

  function renderMenu(query) {
    const options = getOptions();
    const queryLower = query.trim().toLowerCase();
    // rank: startsWith first, then includes
    shownOptions = options.filter(option => !queryLower || option.toLowerCase().includes(queryLower))
      .sort((a, b) => {
        const aStarts = a.toLowerCase().startsWith(queryLower) ? 0 : 1, bStarts = b.toLowerCase().startsWith(queryLower) ? 0 : 1;
        return aStarts - bStarts || a.localeCompare(b);
      }).slice(0, 60);
    menu.innerHTML = "";
    if (!shownOptions.length) { menu.appendChild(el("div", "opt none", translate('kh-no-matches'))); return; }
    shownOptions.forEach((option, index) => {
      const optionEl = el("div", "opt" + (index === activeIndex ? " active" : ""));
      optionEl.innerHTML = highlight(option, query);
      optionEl.onmousedown = (event) => { event.preventDefault(); commit(option); };
      menu.appendChild(optionEl);
    });
  }

  input.addEventListener("focus", open);
  input.addEventListener("input", () => {
    activeIndex = -1; renderMenu(input.value); menu.classList.add("open");
    // typing without commit clears committed value until a match is chosen
    if (value && input.value !== value) { value = ""; onChange(value); }
  });
  input.addEventListener("keydown", (event) => {
    if (!menu.classList.contains("open") && (event.key === "ArrowDown")) { open(); return; }
    if (event.key === "ArrowDown") { activeIndex = Math.min(activeIndex + 1, shownOptions.length - 1); renderMenu(input.value); scrollActive(); event.preventDefault(); }
    else if (event.key === "ArrowUp") { activeIndex = Math.max(activeIndex - 1, 0); renderMenu(input.value); scrollActive(); event.preventDefault(); }
    else if (event.key === "Enter") { if (activeIndex >= 0 && shownOptions[activeIndex]) commit(shownOptions[activeIndex]); else if (shownOptions.length === 1) commit(shownOptions[0]); event.preventDefault(); }
    else if (event.key === "Escape") { close(); }
  });
  function scrollActive() { const active = menu.querySelector(".opt.active"); if (active) active.scrollIntoView({ block: "nearest" }); }
  input.addEventListener("blur", () => {
    setTimeout(() => { // allow option mousedown to fire first
      // if typed text exactly matches an option, accept it
      const options = getOptions();
      const exact = options.find(option => option.toLowerCase() === input.value.trim().toLowerCase());
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
  document.querySelectorAll(".charbtn").forEach(btn => btn.classList.toggle("on", btn.dataset.c === activeChar));
}
function rerenderAll() {
  ACH_OWNED = achOwnedSets();   // pick up Achievement Tracker changes
  renderForward(); renderCommand(); buildPills(); renderAbility();
  renderCrystals(); renderSearchAbility(); renderTracker();
}
function wireCharBar(scopeSelector) {
  document.querySelectorAll(scopeSelector + " .charbtn").forEach(btn => {
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
    document.querySelectorAll(".kh .tab").forEach(other => other.classList.remove("active"));
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
function rowKey(prefix, recipe) { return prefix + "|" + recipe.cmd + "|" + recipe.a + "|" + recipe.b + "|" + recipe.type + "|" + recipe.pct; }
function doMeld(recipe, ability) {
  if (!isOwned(recipe.cmd)) toggleOwned(recipe.cmd);
  if (ability) setAbilityCount(ability, abilityCount(ability) + 1);
  achMarkOwned(ability ? [recipe.cmd, ability] : [recipe.cmd]);
  meldPick = null;
  showToast(ability ? format('kh-melded-ab', recipe.cmd, ability) : format('kh-melded', recipe.cmd));
  rerenderAll();
}
let toastTimer = null;
function showToast(message) {
  let toastEl = document.getElementById("meldToast");
  if (!toastEl) { toastEl = el("div", "meldtoast"); toastEl.id = "meldToast"; document.body.appendChild(toastEl); }
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
}
/* Icon + command name on one line; ownership is shown by the row tint
   (and the green/grey chip colours), not by a ✓/✗ marker. */
function ownName(name, cat) {
  const owned = ownedAnywhere(name);
  return `<span class="ownname" title="${owned ? translate('kh-own-yes') : translate('kh-own-no')}">${cmdIcon(name, cat)}${name}</span>`;
}
function meldCell(rowId, canMeld) {
  return `<td><button class="meldbtn" data-rk="${esc(rowId)}" ${canMeld ? "" : "disabled"} title="${canMeld ? "" : translate('kh-tip-need-pick')}">${translate('kh-meld-btn')}</button></td>`;
}
/* Wire up the pickable tags and meld buttons rendered into `container`.
   meldables: Map(rowId -> {rec, ability}); rerender: tab's own renderer. */
function wireMeld(container, meldables, rerender) {
  container.querySelectorAll(".abtag.pick").forEach(tag => {
    tag.onclick = () => {
      const rowId = tag.dataset.rk;
      const ability = tag.dataset.none === "1" ? null : tag.dataset.ab;   // None → no ability
      meldPick = (meldPick && meldPick.rk === rowId && meldPick.ability === ability) ? null : { rk: rowId, ability };
      rerender();
    };
  });
  container.querySelectorAll(".meldbtn").forEach(btn => {
    btn.onclick = () => {
      const meldable = meldables.get(btn.dataset.rk);
      if (meldable) doMeld(meldable.rec, meldable.ability);
    };
  });
}

/* ---------- forward meld ---------- */
const slot1Combo = makeCombo("f1", () => ingredients, renderForward);
const slot2Combo = makeCombo("f2", () => ingredients, renderForward);
const crystalCombo = makeCombo("crystal", () => CRYSTALS.slice(), renderForward);
wireCharBar("#tab-forward");

function renderForward() {
  const slot1Value = slot1Combo.value, slot2Value = slot2Combo.value, crystalValue = crystalCombo.value;
  const container = document.getElementById("forwardResults"); container.innerHTML = "";
  document.getElementById("charNote").textContent = activeChar ? format('kh-note-filtering', CHAR_LABEL[activeChar]) : "";
  if (!slot1Value && !slot2Value) { container.appendChild(el("div", "empty", translate('kh-forward-empty'))); return; }

  // slot order doesn't matter in BBS — match either arrangement
  const matches = recipes.filter(recipe => {
    const slotHas = (slotValue) => slotValue === "" || recipe.a === slotValue || recipe.b === slotValue;
    const combo = (slot1Value && slot2Value) ? ((recipe.a === slot1Value && recipe.b === slot2Value) || (recipe.a === slot2Value && recipe.b === slot1Value)) : (slotHas(slot1Value) && slotHas(slot2Value));
    return combo && recipeAllowed(recipe, activeChar);
  });

  if (!matches.length) {
    container.appendChild(el("div", "empty", activeChar ? format('kh-forward-none-char', CHAR_LABEL[activeChar]) : translate('kh-forward-none')));
    return;
  }

  const meldables = new Map();
  CATS.forEach(cat => {
    const rows = matches.filter(recipe => recipe.cat === cat);
    if (!rows.length) return;
    const catIcon = CAT_ICON[cat] ? `<img class="cmdicon" src="../images/commands/cmd-${CAT_ICON[cat]}.png" alt="">` : "";
    container.appendChild(el("div", "grp-title", catIcon + format('kh-group-commands', catLabel(cat))));
    const table = el("table");
    table.innerHTML = `<thead><tr><th>${translate('kh-th-result')}</th><th>${translate('kh-th-slot1')}</th><th>${translate('kh-th-slot2')}</th><th>${translate('kh-th-type')}</th><th>%</th><th>${crystalValue ? format('kh-th-ability-with', crystalValue) : translate('kh-th-ability-per')}</th><th>${translate('kh-th-meld')}</th></tr></thead>`;
    const tbody = el("tbody");
    rows.forEach(recipe => {
      const rowId = rowKey("fwd", recipe);
      // show the slot-1 ingredient in the Slot 1 column (and slot-2 in
      // Slot 2) regardless of how the recipe is stored
      let slotA = recipe.a, slotB = recipe.b;
      if (slot1Value && slotA !== slot1Value && slotB === slot1Value) { slotA = recipe.b; slotB = recipe.a; }
      else if (!slot1Value && slot2Value && slotA === slot2Value && slotB !== slot2Value) { slotA = recipe.b; slotB = recipe.a; }
      let abilityCell, selectedAbility = null, canMeld = false;
      if (crystalValue) {
        selectedAbility = abilityFor(recipe.type, crystalValue); canMeld = true;
        abilityCell = abilitySingle(recipe.type, crystalValue);
      } else if (recipe.type === "-") {
        abilityCell = '<span class="crystal-tag">' + translate('kh-no-ability-shotlock') + '</span>';
        canMeld = true;   // Shotlocks have no ability — always meldable
      } else if (meldPick && meldPick.rk === rowId) {
        selectedAbility = meldPick.ability; canMeld = true;   // ability or null (None)
        abilityCell = abilityTags(recipe.type, { pick: true, rk: rowId });
      } else {
        abilityCell = abilityTags(recipe.type, { pick: true, rk: rowId });
      }
      meldables.set(rowId, { rec: recipe, ability: recipe.type === "-" ? null : selectedAbility });
      const owned = ownedAnywhere(recipe.cmd);
      const row = el("tr", owned ? "owned-row" : null);
      row.innerHTML = `<td class="cmd">${ownName(recipe.cmd, recipe.cat)}${ownerBadge(recipe.own)}</td>
        <td class="ing">${ingChip(slotA)}</td><td class="ing">${ingChip(slotB)}</td>
        <td>${typePill(recipe.type)}</td><td class="${pctCls(recipe.pct)}">${recipe.pct}%</td><td>${abilityCell}</td>${meldCell(rowId, canMeld)}`;
      tbody.appendChild(row);
    });
    table.appendChild(tbody); container.appendChild(table);
  });
  wireMeld(container, meldables, renderForward);

  if (crystalValue) {
    container.appendChild(el("p", "legend", format('kh-legend-pinned', crystalValue)));
  } else {
    container.appendChild(el("p", "legend", format('kh-legend-order', CRYSTALS.join(" · "))));
  }
  container.appendChild(el("p", "legend", translate('kh-legend-meld')));
}
/* Ingredient chip — green when owned (per either tracker), grey when
   not; nowrap via CSS. No check mark, the colour carries the meaning. */
function ingChip(name) {
  const owned = ownedAnywhere(name);
  return `<span class="${owned ? 'chip-have' : 'chip-need'}" title="${owned ? translate('kh-own-yes') : translate('kh-own-no')}">${name}</span>`;
}

/* ---------- by command ---------- */
const targetCmd = makeCombo("targetCmd", () => commands.filter(cmd => commandAllowed(cmd, activeChar)), renderCommand);
const targetCrystal = makeCombo("targetCrystal", () => CRYSTALS.slice(), renderCommand);
wireCharBar("#tab-bycommand");

function renderCommand() {
  const cmd = targetCmd.value, crystalValue = targetCrystal.value;
  const container = document.getElementById("commandResults"); container.innerHTML = "";
  if (!cmd) { container.appendChild(el("div", "empty", translate('kh-cmd-empty'))); return; }
  if (activeChar && !commandAllowed(cmd, activeChar)) {
    container.appendChild(el("div", "empty", format('kh-cmd-cant', cmd, CHAR_LABEL[activeChar])));
    return;
  }
  let rows = recipes.filter(recipe => recipe.cmd === cmd).sort((a, b) => b.pct - a.pct);
  if (activeChar) rows = rows.filter(recipe => recipeAllowed(recipe, activeChar));
  container.appendChild(el("div", "grp-title", ownName(cmd, rows.length ? rows[0].cat : null)));
  const meldables = new Map();
  const table = el("table");
  table.innerHTML = `<thead><tr><th>${translate('kh-th-slot1')}</th><th>${translate('kh-th-slot2')}</th><th>${translate('kh-th-type')}</th><th>%</th><th>${translate('kh-th-usedby')}</th><th>${crystalValue ? format('kh-th-ability-with', crystalValue) : translate('kh-th-ability-per')}</th><th>${translate('kh-th-meld')}</th></tr></thead>`;
  const tbody = el("tbody");
  rows.forEach(recipe => {
    const rowId = rowKey("cmd", recipe);
    let abilityCell, selectedAbility = null, canMeld = false;
    if (recipe.type === "-") { abilityCell = '<span class="crystal-tag">' + translate('kh-no-ability-shotlock') + '</span>'; canMeld = true; }
    else if (crystalValue) { selectedAbility = abilityFor(recipe.type, crystalValue); canMeld = true; abilityCell = abilitySingle(recipe.type, crystalValue); }
    else {
      if (meldPick && meldPick.rk === rowId) { selectedAbility = meldPick.ability; canMeld = true; }
      abilityCell = abilityTags(recipe.type, { pick: true, rk: rowId });
    }
    meldables.set(rowId, { rec: recipe, ability: recipe.type === "-" ? null : selectedAbility });
    const row = el("tr", ownedAnywhere(recipe.cmd) ? "owned-row" : null);
    row.innerHTML = `<td class="ing">${ingChip(recipe.a)}</td><td class="ing">${ingChip(recipe.b)}</td><td>${typePill(recipe.type)}</td><td class="${pctCls(recipe.pct)}">${recipe.pct}%</td><td>${ownerBadge(recipe.own)}</td><td>${abilityCell}</td>${meldCell(rowId, canMeld)}`;
    tbody.appendChild(row);
  });
  table.appendChild(tbody); container.appendChild(table);
  wireMeld(container, meldables, renderCommand);
  container.appendChild(el("p", "legend", crystalValue
    ? format('kh-legend-cmd-pinned', crystalValue, CHAR_LABEL[activeChar])
    : format('kh-legend-cmd-tags', CRYSTALS.join(" · "), CHAR_LABEL[activeChar])));
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
  return recipes.some(recipe => recipeAllowed(recipe, char) && (recipe.cmd === name || recipe.a === name || recipe.b === name));
}

function buildPills() {
  ownedPills.innerHTML = "";
  const query = ownedFilter.value.trim().toLowerCase();
  ownable.filter(name => nameUsableBy(name, activeChar))
    .filter(name => !query || name.toLowerCase().includes(query)).forEach(name => {
    const owned = achHas(name);
    const pill = el("button", "pill" + (isOwned(name) ? " on" : "") + (owned ? " ach" : ""), cmdIcon(name) + name);
    if (owned) pill.title = translate('kh-tip-ach-cmd');
    pill.onclick = () => { toggleOwned(name); buildPills(); renderAbility(); renderForward(); renderCommand(); renderSearchAbility(); };
    ownedPills.appendChild(pill);
  });
}
document.getElementById("clearOwned").onclick = () => {
  STORE[activeChar].owned = []; saveStore();
  buildPills(); renderAbility(); renderForward(); renderCommand(); renderSearchAbility();
};
ownedFilter.addEventListener("input", buildPills);

function renderAbility() {
  const container = document.getElementById("abilityResults"); container.innerHTML = "";
  // ticked here OR owned per the Achievement Tracker
  const owned = curOwnedAll();
  if (!owned.size) { container.appendChild(el("div", "empty", format('kh-owned-empty', CHAR_LABEL[activeChar]))); return; }
  const craftable = recipes.filter(recipe => owned.has(recipe.a) && owned.has(recipe.b) && recipeAllowed(recipe, activeChar));
  if (!craftable.length) { container.appendChild(el("div", "empty", translate('kh-owned-none'))); return; }
  const byCommand = {};
  craftable.forEach(recipe => { (byCommand[recipe.cmd] = byCommand[recipe.cmd] || []).push(recipe); });
  const commandNames = Object.keys(byCommand).sort((a, b) => a.localeCompare(b));
  container.appendChild(el("div", "grp-title", format('kh-owned-can-make', CHAR_LABEL[activeChar], commandNames.length)));
  const table = el("table");
  table.innerHTML = `<thead><tr><th>${translate('kh-th-command')}</th><th>${translate('kh-th-recipe-owned')}</th><th>${translate('kh-th-type')}</th><th>%</th><th>${translate('kh-th-usedby')}</th><th>${translate('kh-th-abilities-all')}</th></tr></thead>`;
  const tbody = el("tbody");
  commandNames.forEach(cmd => {
    byCommand[cmd].sort((a, b) => b.pct - a.pct).forEach((recipe, index) => {
      const row = el("tr", ownedAnywhere(cmd) ? "owned-row" : null);
      row.innerHTML = `<td class="cmd">${index === 0 ? ownName(cmd, recipe.cat) : ""}</td>
        <td class="recipe-line"><span class="havechip">${recipe.a}</span> + <span class="havechip">${recipe.b}</span></td>
        <td>${typePill(recipe.type)}</td><td class="${pctCls(recipe.pct)}">${recipe.pct}%</td><td>${ownerBadge(recipe.own)}</td><td>${abilityTags(recipe.type)}</td>`;
      tbody.appendChild(row);
    });
  });
  table.appendChild(tbody); container.appendChild(table);
  container.appendChild(el("p", "legend", format('kh-legend-owned', CRYSTALS.join(" · "), CHAR_LABEL[activeChar])));
}
wireCharBar("#tab-byability");

/* ---------- crystal chart ---------- */
const crystalFilter = document.getElementById("crystalFilter");
function renderCrystals() {
  const container = document.getElementById("crystalResults"); container.innerHTML = "";
  const query = crystalFilter.value.trim().toLowerCase();
  const types = Object.keys(CRYSTAL_TABLE); // A..P
  const scroller = el("div", "scrollx");
  const table = el("table", "crystal-table");
  table.innerHTML = `<thead><tr><th>${translate('kh-th-type')}</th>${CRYSTALS.map(crystal => `<th class="cryhead">${crystal}</th>`).join("")}</tr></thead>`;
  const tbody = el("tbody");
  let hits = 0;
  types.forEach(type => {
    const cells = CRYSTAL_TABLE[type].map((ability) => {
      const hit = query && ability.toLowerCase().includes(query);
      if (hit) hits++;
      const completed = abilityCompleted(ability);
      const owned = achHas(ability);
      const className = [hit ? 'cellhit' : '', completed ? 'celldone' : '', owned ? 'cellach' : ''].filter(Boolean).join(' ');
      const tip = [completed ? format('kh-tip-completed-for', ability, CHAR_LABEL[activeChar]) : '', owned ? translate('kh-tip-ach') : ''].filter(Boolean).join(' — ');
      return `<td class="${className}" title="${tip}">${ability}</td>`;
    }).join("");
    const row = el("tr");
    row.innerHTML = `<td class="ctype">${type}</td>${cells}`;
    tbody.appendChild(row);
  });
  table.appendChild(tbody); scroller.appendChild(table); container.appendChild(scroller);
  document.getElementById("crystalCount").textContent = query ? format('kh-chart-matches', hits, crystalFilter.value.trim()) : "";
  container.appendChild(el("p", "legend", format('kh-legend-chart', CHAR_LABEL[activeChar])));
}
crystalFilter.addEventListener("input", renderCrystals);

/* ---------- search by ability ---------- */
// For an ability, which crystal(s) produce it for a given type:
function crystalsForAbilityType(ability, type) {
  if (!CRYSTAL_TABLE[type]) return [];
  const crystals = [];
  CRYSTAL_TABLE[type].forEach((candidate, index) => { if (candidate === ability) crystals.push(CRYSTALS[index]); });
  return crystals;
}
// All recipes that can yield this ability (type contains it), with the crystal needed.
function recipesForAbility(ability) {
  const results = [];
  recipes.forEach(recipe => {
    const crystals = crystalsForAbilityType(ability, recipe.type);
    if (crystals.length) results.push({ rec: recipe, crystals });
  });
  return results;
}
const abQuery = makeCombo("abQuery", () => ABILITY_NAMES.slice().sort(), renderSearchAbility);
wireCharBar("#tab-searchability");

function renderSearchAbility() {
  const container = document.getElementById("searchAbilityResults"); container.innerHTML = "";
  const ability = abQuery.value;
  if (!ability) { container.appendChild(el("div", "empty", translate('kh-ab-empty'))); return; }
  const meta = ABILITY_META[ability];
  const completed = abilityCompleted(ability);
  // header with progress
  const header = el("div", "trk-summary");
  header.innerHTML = `<span><b class="${completed ? 'trk-name done' : 'trk-name'}">${ability}</b></span>` +
    `<span>${translate('kh-abcat-' + meta.cat.toLowerCase())}</span>` +
    `<span>${format('kh-ab-crystal', meta.crystal)}</span>` +
    `<span>${abilityCount(ability)} / ${meta.max} ${completed ? '<span class="donepill">' + translate('kh-completed') + '</span>' : ''}` +
    `${achHas(ability) ? ' <span class="achpill" title="' + translate('kh-tip-ach') + '">' + translate('kh-ach-pill') + '</span>' : ''}</span>`;
  container.appendChild(header);

  const results = recipesForAbility(ability).filter(result => recipeAllowed(result.rec, activeChar));
  if (!results.length) { container.appendChild(el("div", "empty", format('kh-ab-none', CHAR_LABEL[activeChar], ability))); return; }

  // sort: fully-owned recipes first, then by % desc
  const owned = curOwnedAll();
  results.sort((a, b) => {
    const aHas = (owned.has(a.rec.a) && owned.has(a.rec.b)) ? 0 : 1;
    const bHas = (owned.has(b.rec.a) && owned.has(b.rec.b)) ? 0 : 1;
    return aHas - bHas || b.rec.pct - a.rec.pct || a.rec.cmd.localeCompare(b.rec.cmd);
  });

  const table = el("table");
  table.innerHTML = `<thead><tr><th>${translate('kh-th-command')}</th><th>${translate('kh-th-slot1')}</th><th>${translate('kh-th-slot2')}</th><th>${translate('kh-th-crystal')}</th><th>${translate('kh-th-type')}</th><th>%</th><th>${translate('kh-th-usedby')}</th></tr></thead>`;
  const tbody = el("tbody");
  results.forEach(({ rec, crystals }) => {
    const haveA = owned.has(rec.a), haveB = owned.has(rec.b), both = haveA && haveB;
    const slot = (name, have) => have
      ? `<span class="chip-have" title="${translate('kh-tip-owned')}">${name}</span>`
      : `<span class="chip-need">${name}</span>`;
    const row = el("tr"); if (both) row.className = "recipe-have";
    row.innerHTML = `<td class="cmd">${ownName(rec.cmd, rec.cat)}</td>
      <td>${slot(rec.a, haveA)}</td><td>${slot(rec.b, haveB)}</td>
      <td>${crystals.join(", ")}</td><td>${typePill(rec.type)}</td>
      <td class="${pctCls(rec.pct)}">${rec.pct}%</td><td>${ownerBadge(rec.own)}</td>`;
    tbody.appendChild(row);
  });
  table.appendChild(tbody); container.appendChild(table);
  const haveCount = results.filter(result => owned.has(result.rec.a) && owned.has(result.rec.b)).length;
  container.appendChild(el("p", "legend", format('kh-ab-legend', results.length, CHAR_LABEL[activeChar], haveCount, meta.crystal, ability)));
}

/* ---------- ability tracker ---------- */
const trkFilter = document.getElementById("trkFilter");
const TRK_CATS = ["Prize", "Stats", "Support"];
function renderTracker() {
  const container = document.getElementById("trackerResults"); container.innerHTML = "";
  const query = trkFilter.value.trim().toLowerCase();
  // summary
  const allAbilities = ABILITY_NAMES;
  const completedCount = allAbilities.filter(abilityCompleted).length;
  const craftedCount = allAbilities.reduce((sum, ability) => sum + Math.min(abilityCount(ability), abilityMax(ability)), 0);
  const totalMax = allAbilities.reduce((sum, ability) => sum + abilityMax(ability), 0);
  document.getElementById("trkSummary").innerHTML =
    `<span><b>${CHAR_LABEL[activeChar]}</b></span>` +
    `<span>${format('kh-trk-completed', completedCount, allAbilities.length)}</span>` +
    `<span>${format('kh-trk-copies', craftedCount, totalMax)}</span>`;

  TRK_CATS.forEach(cat => {
    let names = allAbilities.filter(ability => ABILITY_META[ability].cat === cat);
    if (query) names = names.filter(ability => ability.toLowerCase().includes(query));
    if (!names.length) return;
    container.appendChild(el("div", "trk-cat", format('kh-trk-group', translate('kh-abcat-' + cat.toLowerCase()))));
    const table = el("table", "trk-table");
    table.innerHTML = `<thead><tr><th>${translate('kh-th-ability')}</th><th>${translate('kh-th-crystal')}</th><th>${translate('kh-th-crafted')}</th><th>${translate('kh-th-progress')}</th><th>${translate('kh-th-status')}</th></tr></thead>`;
    const tbody = el("tbody");
    names.forEach(name => {   // ABILITY_META declaration order = in-game order
      const meta = ABILITY_META[name];
      const count = abilityCount(name), max = meta.max, done = count >= max;
      const row = el("tr");
      const fraction = Math.min(1, count / max) * 100;
      row.innerHTML =
        `<td class="trk-name ${done ? 'done' : ''}">${name}</td>` +
        `<td class="crystaltag">${meta.crystal}</td>` +
        `<td><span class="stepper">
            <button class="stepbtn" data-act="dec" data-ab="${name}">−</button>
            <span class="stepval"><b>${count}</b> <span class="mx">/ ${max}</span></span>
            <button class="stepbtn" data-act="inc" data-ab="${name}">+</button>
         </span></td>` +
        `<td><span class="trk-progress ${done ? 'full' : ''}"><i style="width:${fraction}%"></i></span></td>` +
        `<td>${done ? '<span class="donepill">' + translate('kh-completed') + '</span> ' : ''}${achHas(name) ? '<span class="achpill" title="' + translate('kh-tip-ach') + '">' + translate('kh-ach-pill') + '</span>' : ''}</td>`;
      tbody.appendChild(row);
    });
    table.appendChild(tbody); container.appendChild(table);
  });

  // wire steppers
  container.querySelectorAll(".stepbtn").forEach(btn => {
    btn.onclick = () => {
      const name = btn.dataset.ab;
      const current = abilityCount(name);
      setAbilityCount(name, btn.dataset.act === "inc" ? current + 1 : current - 1);
      renderTracker();
      // also refresh other tabs' completed highlighting
      renderForward(); renderCommand(); renderAbility(); renderCrystals(); renderSearchAbility();
    };
  });
}
trkFilter.addEventListener("input", renderTracker);
document.getElementById("trkReset").onclick = () => {
  if (confirm(format('kh-trk-reset-confirm', CHAR_LABEL[activeChar]))) {
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
document.addEventListener("click", (event) => {
  if (!event.target.closest(".combo")) document.querySelectorAll(".menu.open").forEach(menu => menu.classList.remove("open"));
});

/* Live-sync when the Achievement Tracker (in another tab) changes. */
window.addEventListener("storage", (event) => {
  if (event.key === ACH_KEY) rerenderAll();
});

});
