/* =====================================================================
   Generic KH game completion tracker engine.
   Depends on: js/i18n.js (i18n) and a game data module that defines the
   TRACKER_GAME global (see js/kh-com-tracker-data.js for the shape):
     { id, storeKey, charKey, chars, trophyAuto, tabs: [{id, sections}] }
   Tab:     { id, sections, char? } — char-tagged tabs only appear for
            that character (switching characters falls back to tab 1)
   Section: { id, cols:[{k, name?, rarity?}], items:[...] } — shared list
            { ..., char: "sora" }            — belongs to one character
            { ..., variants: {sora: [...], riku: [...]} } — per character
   Items in a shared section may carry c: "sora"/"riku" — they share the
   section's progress store but only show for that character.
   UI text comes from the page's lang JSON: tabbtn-<tab>, sec-<section>,
   th-<section>-<col>, plus the shared gt-* keys.
   Progress is keyed by item index per section, in localStorage.
   ===================================================================== */

document.addEventListener('DOMContentLoaded', async function () {
await i18n.init();

const G = TRACKER_GAME;
const t = (key) => i18n.getMessage(key);
const fmt = (key, ...args) => i18n.format(key, ...args);

const CHARS = G.chars || [];
const CHAR_LABEL = {};
CHARS.forEach(c => { CHAR_LABEL[c.id] = c.label; });

/* ---------- persistent state ---------- */
function loadStore() {
  try { const raw = localStorage.getItem(G.storeKey); return raw ? JSON.parse(raw) : {}; }
  catch (e) { return {}; }
}
let STORE = loadStore();
function saveStore() { try { localStorage.setItem(G.storeKey, JSON.stringify(STORE)); } catch (e) { /* private browsing */ } }
function smap(id) { if (!STORE[id]) STORE[id] = {}; return STORE[id]; }
function toggle(map, i) { if (map[i]) delete map[i]; else map[i] = true; saveStore(); render(); }

let activeChar = (function () {
  if (!CHARS.length) return null;
  try { const c = localStorage.getItem(G.charKey); return CHARS.some(x => x.id === c) ? c : CHARS[0].id; }
  catch (e) { return CHARS[0].id; }
})();
function setActiveChar(c) { activeChar = c; try { localStorage.setItem(G.charKey, c); } catch (e) { /* ignore */ } }

/* ---------- helpers ---------- */
function el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
function chip(x, y) { return `<span class="prgchip${x >= y && y > 0 ? " full" : ""}">${x} / ${y}</span>`; }
function bar(x, y) {
  const pct = y ? Math.round(100 * x / y) : 0;
  return `<span class="dashnum">${x} / ${y}</span><span class="dashbar${x >= y && y > 0 ? " full" : ""}"><i style="width:${pct}%"></i></span>`;
}

/* ---------- item display text from the lang file ----------
   All user-facing item text (names, "where to find it", "how to obtain
   it", …) lives in the page's lang JSON under an "items" map:
       "items": { "<storeId>": [ { "name": "…", "where": "…" }, … ] }
   keyed by section store id then item index (matching the data order).
   The data module keeps only the structural bits + the item name as a
   stable id (used for trophy/auto-unlock matching). cellText prefers the
   lang text and falls back to the data value, so a game whose text has
   not been moved out yet keeps working unchanged. */
function langRow(storeId, i) {
  const items = (typeof i18n !== "undefined" && i18n.messages && i18n.messages.items) || null;
  const rows = items && items[storeId];
  return (rows && rows[i]) || null;
}
function cellText(storeId, i, key, it) {
  const row = langRow(storeId, i);
  return (row && Object.prototype.hasOwnProperty.call(row, key)) ? row[key] : it[key];
}
/* Per-group note shown under a group header: lang "gnote-<storeId>" (per
   character) or "gnote-<section>" maps a group name -> note text (rendered
   through fmtText, so it may carry a link). E.g. KH1 Trinity unlocks, or the
   COM Map Card drop-table link. */
function groupNote(storeId, secId, g) {
  const msgs = (typeof i18n !== "undefined" && i18n.messages) || {};
  const a = msgs['gnote-' + storeId];
  if (a && typeof a === "object" && a[g]) return a[g];
  const b = msgs['gnote-' + secId];
  return (b && typeof b === "object" && b[g]) || "";
}

/* ---------- inline markup in any lang string ----------
   Everything is escaped; two optional shorthands are recognised so an
   icon or a hover-tooltip can be added to any header/name by editing the
   lang file only:
     {{name}}        -> small inline icon  images/icons/name.png
     [[text|tip]]    -> <span title="tip"> (hover for more info)
   (Duplicated in js/kh-bbs-tracker.js — keep in sync.) */
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

/* Item-level character filter: items tagged c only count/show for that
   character. With no char filter (dashboard totals) everything counts. */
function itemVisible(it, char) { return !it.c || !char || it.c === char; }

/* Game tabs, plus a synthetic "Worlds" summary tab when the game declares
   a G.worldSummary config (see renderWorlds). Inserted second so it sits
   next to the trophies/dashboard tab. Real sections still come from G.tabs
   only (allLists/overallCount/findSec), so the summary adds no new stores. */
function gameTabs() {
  if (!G.worldSummary) return G.tabs;
  const tabs = G.tabs.slice();
  tabs.splice(1, 0, { id: "worlds", sections: [], worldSummary: true });
  return tabs;
}
/* Tabs tagged with a char only exist for that character. */
function visibleTabs() { return gameTabs().filter(tb => !tb.char || tb.char === activeChar); }
function ensureActiveTab() {
  if (!visibleTabs().some(tb => tb.id === activeTab)) activeTab = visibleTabs()[0].id;
}

/* Resolve a section for the active character. */
function resolved(sec) {
  if (sec.variants) {
    const c = activeChar;
    return { storeId: sec.id + "-" + c, items: sec.variants[c] || [], charLabel: CHAR_LABEL[c] };
  }
  if (sec.char) return { storeId: sec.id, items: sec.items, charLabel: CHAR_LABEL[sec.char] };
  return { storeId: sec.id, items: sec.items, charLabel: null };
}
/* Every trackable list (all variants), for the dashboard. Shared
   sections with c-tagged items get one row per character. */
function allLists() {
  const out = [];
  G.tabs.forEach(tab => tab.sections.forEach(sec => {
    if (sec.variants) {
      CHARS.forEach(c => out.push({
        label: fmt('gt-section-for', t('sec-' + sec.id), c.label),
        storeId: sec.id + "-" + c.id, items: sec.variants[c.id] || [], sec
      }));
    } else if (CHARS.length && (sec.items || []).some(it => it.c)) {
      CHARS.forEach(c => out.push({
        label: fmt('gt-section-for', t('sec-' + sec.id), c.label),
        storeId: sec.id, items: sec.items, c: c.id, sec
      }));
    } else {
      out.push({
        label: sec.char ? fmt('gt-section-for', t('sec-' + sec.id), CHAR_LABEL[sec.char]) : t('sec-' + sec.id),
        storeId: sec.id, items: sec.items, sec
      });
    }
  }));
  return out;
}
/* Site total: every store counted once, unfiltered (c-tagged items are
   each completable by exactly one character). */
function overallCount() {
  let x = 0, y = 0;
  G.tabs.forEach(tab => tab.sections.forEach(sec => {
    if (sec.variants) {
      CHARS.forEach(c => { const [a, b] = entryCount({ sec, storeId: sec.id + "-" + c.id, items: sec.variants[c.id] || [] }); x += a; y += b; });
    } else {
      const [a, b] = entryCount({ sec, storeId: sec.id, items: sec.items }); x += a; y += b;
    }
  }));
  return [x, y];
}
function findList(storeId) {
  for (const tab of G.tabs) for (const sec of tab.sections) {
    if (sec.variants) {
      for (const c of CHARS) if (sec.id + "-" + c.id === storeId) return sec.variants[c.id] || [];
    } else if (sec.id === storeId) return sec.items;
  }
  return null;
}
function findSec(id) {
  for (const tab of G.tabs) for (const sec of tab.sections) if (sec.id === id) return sec;
  return null;
}

/* ---------- multi-checkbox + cross-section auto ----------
   A section may declare `checks: [{k, th}, ...]`: each item then has one
   checkbox per check instead of a single one. The first check keeps the
   bare item index as its store key (backward-compatible "done"); extra
   checks are keyed `<i>::<k>`.
   `G.autoChecks: [{from, check, to, map, toKey?}]` auto-completes items
   in the `to` section: when the `from` section's mission (a map key) has
   its `check` set (primary checkbox if omitted), the mapped item (the
   value, matched on `toKey`/name) counts as done and locks. */
function checkKey(i, k, idx) { return idx === 0 ? String(i) : i + "::" + k; }
function isChecked(store, i, sec, idx) {
  const checks = sec && sec.checks;
  return checks ? !!store[checkKey(i, checks[idx].k, idx)] : !!store[i];
}
/* Source mission whose S-rank (etc.) auto-completed this item, or null. */
function autoSource(sec, it) {
  if (!G.autoChecks) return null;
  for (const a of G.autoChecks) {
    if (a.to !== sec.id) continue;
    const srcSec = findSec(a.from), srcStore = STORE[a.from] || {};
    if (!srcSec) continue;
    for (const mission in a.map) {
      if (a.map[mission] !== it[a.toKey || "name"]) continue;
      const mi = (srcSec.items || []).findIndex(x => x.name === mission);
      if (mi < 0) continue;
      const ci = a.check ? srcSec.checks.findIndex(c => c.k === a.check) : 0;
      if (ci >= 0 && isChecked(srcStore, mi, srcSec, ci)) return mission;
    }
  }
  return null;
}
function autoDone(sec, it) { return !!autoSource(sec, it); }

/* Count one list (a resolved section view). Handles multi-check
   sections (every check counts) and cross-section auto-completion. */
function entryCount(e) {
  const sec = e.sec, store = STORE[e.storeId] || {}, checks = sec && sec.checks, char = e.c || null;
  let d = 0, y = 0;
  (e.items || []).forEach((it, i) => {
    if (!itemVisible(it, char)) return;
    if (checks) checks.forEach((c, idx) => { y++; if (store[checkKey(i, c.k, idx)]) d++; });
    else { y++; if (store[i] || autoDone(sec, it)) d++; }
  });
  return [d, y];
}
/* Progress for a trophy: a whole section (string storeId), or a subset
   { section, nameEndsWith?, check?, perGroup? } — a name-filtered slice,
   a single check dimension across every item, or (perGroup) one unit per
   item group ("route"), done when any item in the group has the check. */
function trophyProgress(ref) {
  if (typeof ref === "string") {
    const items = findList(ref);
    return items ? entryCount({ sec: findSec(ref), storeId: ref, items }) : null;
  }
  const sec = findSec(ref.section);
  if (!sec) return null;
  const store = STORE[ref.section] || {};
  const checkIdx = (ref.check !== undefined && sec.checks) ? sec.checks.findIndex(c => c.k === ref.check) : -1;
  const itemDone = (it, i) => {
    if (ref.check !== undefined) return checkIdx >= 0 && !!store[checkKey(i, ref.check, checkIdx)];
    return !!store[i] || autoDone(sec, it);
  };
  if (ref.perGroup) {
    const groups = new Map();   // group -> any item done
    sec.items.forEach((it, i) => {
      const grp = it.g || it.name;
      groups.set(grp, groups.get(grp) || itemDone(it, i));
    });
    let d = 0;
    groups.forEach(v => { if (v) d++; });
    return [d, groups.size];
  }
  let d = 0, y = 0;
  sec.items.forEach((it, i) => {
    if (ref.nameEndsWith && !String(it.name).endsWith(ref.nameEndsWith)) return;
    if (ref.check !== undefined && checkIdx < 0) return;
    y++; if (itemDone(it, i)) d++;
  });
  return [d, y];
}

/* ---------- checklist table ---------- */
function toggleGroup(items, store, g, sec) {
  const idx = [];
  items.forEach((it, i) => { if (it.g === g && itemVisible(it, activeChar)) idx.push(i); });
  // toggle-all acts on the primary check (idx 0)
  const allDone = idx.every(i => store[i]);
  idx.forEach(i => { if (allDone) delete store[i]; else store[i] = true; });
  saveStore();
  render();
}
function checklist(box, sec, res, state) {
  const store = smap(res.storeId);
  const cols = sec.cols;
  const checks = sec.checks;
  const leadCount = checks ? checks.length : 1;
  const ths = cols.map(c => `<th>${t('th-' + sec.id + '-' + c.k)}</th>`).join("");
  const leadThs = checks ? checks.map(c => `<th class="chkhead">${t(c.th)}</th>`).join("") : "<th></th>";
  const tbl = el("table");
  tbl.innerHTML = `<thead><tr>${leadThs}${ths}${sec.trophies && G.trophyAuto ? `<th>${t('gt-th-progress')}</th>` : ""}</tr></thead>`;
  const tb = el("tbody");
  let shown = 0;
  const q = state.q.toLowerCase();
  let lastGroup = null;
  res.items.forEach((it, i) => {
    if (!itemVisible(it, activeChar)) return;
    const auto = checks ? null : autoSource(sec, it);
    const done = checks ? checks.every((c, idx) => store[checkKey(i, c.k, idx)])
                        : (!!store[i] || !!auto);
    if (state.hide && done) return;
    const lrow = langRow(res.storeId, i);
    const hay = (Object.values(it).join(" ") + (lrow ? " " + Object.values(lrow).join(" ") : "")).toLowerCase();
    if (q && !hay.includes(q)) return;
    if (it.g && it.g !== lastGroup) {
      lastGroup = it.g;
      const g = it.g;
      const gtr = el("tr");
      const gtd = el("td", "grp-title");
      gtd.colSpan = cols.length + leadCount + 1;
      gtd.style.borderBottom = "1px solid var(--line)";
      gtd.appendChild(el("span", null, fmtText(g)));
      const gbtn = el("button", "grpbtn", t('gt-toggle-all'));
      gbtn.onclick = () => toggleGroup(res.items, store, g, sec);
      gtd.appendChild(gbtn);
      gtr.appendChild(gtd);
      tb.appendChild(gtr);
      const gn = groupNote(res.storeId, sec.id, g);
      if (gn) {
        const ntr = el("tr"), ntd = el("td", "gnote");
        ntd.colSpan = cols.length + leadCount + 1;
        ntd.style.borderBottom = "1px solid var(--line)";
        ntd.innerHTML = fmtText(gn);
        ntr.appendChild(ntd);
        tb.appendChild(ntr);
      }
    }
    const tr = el("tr", done ? "donerow" : null);
    if (checks) {
      checks.forEach((c, idx) => {
        const key = checkKey(i, c.k, idx);
        const td = el("td", "chkcell");
        const chk = el("input", "chk");
        chk.type = "checkbox"; chk.checked = !!store[key];
        chk.addEventListener("change", () => toggle(store, key));
        td.appendChild(chk);
        tr.appendChild(td);
      });
    } else {
      const td = el("td", "chkcell");
      const chk = el("input", "chk");
      chk.type = "checkbox"; chk.checked = done;
      if (auto && !store[i]) { chk.disabled = true; chk.title = fmt('gt-auto-tip', auto); }
      else chk.addEventListener("change", () => toggle(store, i));
      td.appendChild(chk);
      tr.appendChild(td);
    }
    cols.forEach(c => {
      const v = cellText(res.storeId, i, c.k, it) || "";
      let html;
      if (c.rarity && v) html = `<span class="rarity ${esc(v.toLowerCase())}">${esc(v)}</span>`;
      else if (c.name) html = `<span class="itemname">${fmtText(v)}</span>${auto ? ` <span class="srcbadge" title="${fmt('gt-auto-tip', auto)}">${t('gt-auto-badge')}</span>` : ""}`;
      else html = fmtText(v);   // enables {{icon}} / [[text|tip]] / [text](url) in any column
      tr.appendChild(el("td", null, html));
    });
    if (sec.trophies && G.trophyAuto) {
      const ref = G.trophyAuto[it.name];
      let html = "";
      if (ref) { const r = trophyProgress(ref); if (r) html = chip(r[0], r[1]); }
      tr.appendChild(el("td", null, html));
    }
    tb.appendChild(tr);
    shown++;
  });
  tbl.appendChild(tb);
  if (shown) box.appendChild(tbl);
  else box.appendChild(el("div", "empty", t('gt-nothing')));
}

/* ---------- page skeleton ---------- */
const PANEL = {};
let activeTab = G.tabs[0].id;

/* Switch to a tab by id (used by the tab buttons and the dashboard links). */
function selectTab(id) {
  if (!gameTabs().some(tb => tb.id === id)) return;
  activeTab = id;
  document.querySelectorAll("#tabs .tab").forEach(b => b.classList.toggle("active", b.dataset.tab === id));
  gameTabs().forEach(tb => { const p = document.getElementById("tab-" + tb.id); if (p) p.style.display = tb.id === id ? "block" : "none"; });
  render();
}
function tabOfSection(secId) {
  for (const tb of G.tabs) if (tb.sections.some(s => s.id === secId)) return tb.id;
  return null;
}

function buildPage() {
  // character bar
  const charbar = document.getElementById("charbar");
  charbar.querySelectorAll(".charbtn").forEach(b => b.remove());
  const playingAs = document.getElementById("playing-as");
  if (CHARS.length) {
    playingAs.style.display = "";
    const anchor = document.getElementById("overallNote");
    CHARS.forEach(c => {
      const btn = el("button", "charbtn");
      btn.dataset.c = c.id;
      btn.innerHTML = `<span class="dot"></span>${esc(c.label)}`;
      btn.onclick = () => { setActiveChar(c.id); buildPage(); render(); };
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
  visibleTabs().forEach((tab, i) => {
    const btn = el("button", "tab" + (tab.id === activeTab ? " active" : ""), t('tabbtn-' + tab.id));
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
    const state = (PANEL[tab.id] && PANEL[tab.id].state) || { q: "", hide: false };
    const hasTrophies = tab.sections.some(s => s.trophies);
    const dash = hasTrophies ? el("div", "dash") : null;
    if (dash) panel.appendChild(dash);
    const tbar = el("div", "toolbar");
    const flt = el("input");
    flt.type = "text"; flt.placeholder = t('gt-filter'); flt.style.maxWidth = "240px"; flt.value = state.q;
    flt.addEventListener("input", () => { state.q = flt.value.trim(); render(); });
    const lbl = el("label", "hidelbl");
    const hide = el("input", "chk");
    hide.type = "checkbox"; hide.checked = state.hide;
    hide.addEventListener("change", () => { state.hide = hide.checked; render(); });
    lbl.appendChild(hide);
    lbl.appendChild(document.createTextNode(" " + t('gt-hide-done')));
    const count = el("span", "countbadge");
    const barEl = el("span", "dashbar");
    barEl.appendChild(el("i"));
    tbar.appendChild(flt); tbar.appendChild(lbl); tbar.appendChild(count); tbar.appendChild(barEl);
    if (hasTrophies) {
      const reset = el("button", "clearbtn", t('gt-reset'));
      reset.onclick = () => {
        if (confirm(t('gt-reset-confirm'))) { STORE = {}; saveStore(); render(); }
      };
      tbar.appendChild(reset);
    }
    panel.appendChild(tbar);
    const results = el("div", "results");
    panel.appendChild(results);
    main.appendChild(panel);
    PANEL[tab.id] = { state, results, count, bar: barEl, dash };
  });
}

function syncCharButtons() {
  document.querySelectorAll(".charbtn").forEach(b => b.classList.toggle("on", b.dataset.c === activeChar));
  // Drive the per-character accent scheme (e.g. Sora blue, Riku purple).
  if (activeChar) document.documentElement.setAttribute("data-char", activeChar);
  else document.documentElement.removeAttribute("data-char");
}
function setCount(p, x, y) {
  p.count.textContent = fmt('gt-count', x, y);
  p.bar.className = "dashbar" + (x >= y && y > 0 ? " full" : "");
  p.bar.firstChild.style.width = (y ? Math.round(100 * x / y) : 0) + "%";
}

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
/* Completed milestones (key -> toast): each auto-trophy whose tracked
   requirements are met, each fully-finished list, and the site total.
   Compared between renders so only newly-completed ones toast; seeded on
   first render so nothing fires on load or when navigating. */
function currentMilestones() {
  const m = new Map();
  if (G.trophyAuto) Object.keys(G.trophyAuto).forEach(name => {
    const r = trophyProgress(G.trophyAuto[name]);
    if (r && r[1] > 0 && r[0] >= r[1]) m.set("trophy::" + name, { text: fmt('gt-toast-trophy', name), icon: "🏆" });
  });
  allLists().forEach(({ label, storeId, items, c, sec }) => {
    const [x, y] = entryCount({ sec, storeId, items, c });
    if (y > 0 && x >= y) m.set("list::" + storeId + "::" + (c || ""), { text: fmt('gt-toast-section', label), icon: "✅" });
  });
  const [ox, oy] = overallCount();
  if (oy > 0 && ox >= oy) m.set("overall", { text: t('gt-toast-overall'), icon: "🎉" });
  return m;
}
function checkMilestones() {
  const cur = currentMilestones();
  if (prevMilestones) cur.forEach((v, k) => { if (!prevMilestones.has(k)) toast(v.text, v.icon); });
  prevMilestones = new Set(cur.keys());
}

/* ---------- Worlds summary (opt-in via G.worldSummary) ----------
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
function worldOf(secCfg, res, it, i) {
  const key = secCfg.key || "g";
  let w = (key === "g") ? it.g : (it[key] != null ? it[key] : cellText(res.storeId, i, key, it));
  w = String(w || "");
  // Optional: world is the part before a delimiter (e.g. "World - area").
  if (secCfg.split && w.indexOf(secCfg.split) >= 0) w = w.slice(0, w.indexOf(secCfg.split));
  // Normalise whitespace — some data uses non-breaking spaces in group names.
  w = String(w || "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
  const alias = G.worldSummary.alias || {};
  return alias[w] || w;
}
function worldEntryTable(list) {
  const tbl = el("table", "wtable"), tb = el("tbody");
  list.forEach(e => {
    const tr = el("tr", e.done ? "donerow" : null);
    const td = el("td", "chkcell"), chk = el("input", "chk");
    chk.type = "checkbox"; chk.checked = e.done;
    if (e.auto) { chk.disabled = true; chk.title = fmt('gt-auto-tip', e.auto); }
    else chk.addEventListener("change", () => toggle(e.store, e.i));
    td.appendChild(chk); tr.appendChild(td);
    let nameHtml = "";
    if (e.swatch) nameHtml += `<span class="wswatch" style="background:${e.swatch.c}"${e.swatch.t ? ` title="${esc(e.swatch.t)}" tabindex="0"` : ""}></span>`;
    nameHtml += `<span class="itemname">${fmtText(e.name)}</span>`;
    if (e.auto) nameHtml += ` <span class="srcbadge" title="${fmt('gt-auto-tip', e.auto)}">${t('gt-auto-badge')}</span>`;
    tr.appendChild(el("td", null, nameHtml));
    tr.appendChild(el("td", null, fmtText(e.where)));
    tb.appendChild(tr);
  });
  tbl.appendChild(tb);
  return tbl;
}
function renderWorlds(p) {
  const cfg = G.worldSummary, box = p.results;
  if (!p.state.open) p.state.open = {};
  const open = p.state.open;
  box.appendChild(el("div", "grp-title", fmtText(t('gt-worlds-title'))));
  const q = p.state.q.toLowerCase();
  const filtering = !!q || p.state.hide;
  const secViews = cfg.sections.map(s => {
    const secCfg = (typeof s === "string") ? { id: s } : s;
    const sec = findSec(secCfg.id), res = resolved(sec);
    const nameCol = sec.cols.find(c => c.name) || sec.cols[0];
    const whereKeys = secCfg.where || sec.cols.filter(c => c !== nameCol).map(c => c.k);
    return { secCfg, sec, res, store: smap(res.storeId), title: t('sec-' + sec.id), nameCol, whereKeys };
  });
  // A hex colour from the section's swatch map, validated (it builds inline style).
  const swatchOf = (secCfg, cell) => {
    if (!secCfg.swatch) return null;
    const v = cell(secCfg.swatch.field), c = secCfg.swatch.colors[v];
    if (!c || !/^#[0-9a-fA-F]{3,8}$/.test(c)) return null;
    return { c: c, t: (secCfg.swatch.titles && secCfg.swatch.titles[v]) || "" };
  };
  let dx = 0, dy = 0;
  cfg.worlds.forEach((world, wi) => {
    const slug = "w" + wi;
    const groups = [];
    secViews.forEach(sv => {
      const list = [];
      sv.res.items.forEach((it, i) => {
        if (!itemVisible(it, activeChar)) return;
        if (worldOf(sv.secCfg, sv.res, it, i) !== world) return;
        const auto = autoSource(sv.sec, it);
        const cell = k => cellText(sv.res.storeId, i, k, it) || "";
        const name = sv.secCfg.label
          ? sv.secCfg.label.replace(/\{(\w+)\}/g, (m, k) => cell(k)).trim()
          : cell(sv.nameCol.k);
        list.push({ store: sv.store, i, done: !!sv.store[i] || !!auto, auto, name,
          where: sv.whereKeys.map(cell).filter(Boolean).join(" · "), swatch: swatchOf(sv.secCfg, cell) });
      });
      if (list.length) groups.push({ title: sv.title, list });
    });
    let wdone = 0, wtotal = 0;
    groups.forEach(g => g.list.forEach(e => { wtotal++; if (e.done) wdone++; }));
    if (!wtotal) return;
    dx += wdone; dy += wtotal;
    let shown = groups.map(g => ({
      title: g.title,
      list: g.list.filter(e => (!q || (e.name + " " + e.where).toLowerCase().includes(q)) && (!p.state.hide || !e.done))
    })).filter(g => g.list.length);
    if (!shown.length) return;
    const complete = wdone === wtotal, wkey = "w:" + slug;
    const wdet = el("details", "wgroup");
    wdet.open = filtering ? true : ((wkey in open) ? open[wkey] : false);   // worlds collapsed by default
    const wsum = el("summary", "wsum" + (complete ? " wdone" : ""),
      fmtText(world) + ` <span class="wcount">${wdone} / ${wtotal}</span>`
      + (complete ? ` <span class="wbadge">${t('gt-world-complete')}</span>` : ""));
    // Record collapse state synchronously on click (the toggle event is async,
    // which lets a re-render's programmatic open clobber a just-made collapse).
    wsum.addEventListener("click", () => { if (!filtering) open[wkey] = !((wkey in open) ? open[wkey] : false); });
    wdet.appendChild(wsum);
    shown.forEach(g => {
      const tdone = g.list.filter(e => e.done).length, tkey = "t:" + slug + ":" + g.title;
      const tdet = el("details", "tgroup");
      tdet.open = filtering ? true : ((tkey in open) ? open[tkey] : true);   // type groups open by default
      const tsum = el("summary", "tsum", esc(g.title) + ` <span class="wcount">${tdone} / ${g.list.length}</span>`);
      tsum.addEventListener("click", () => { if (!filtering) open[tkey] = !((tkey in open) ? open[tkey] : true); });
      tdet.appendChild(tsum);
      tdet.appendChild(worldEntryTable(g.list));
      wdet.appendChild(tdet);
    });
    box.appendChild(wdet);
  });
  if (!dy) box.appendChild(el("div", "empty", t('gt-nothing')));
  setCount(p, dx, dy);
}

/* ---------- render ---------- */
function render() {
  const tab = gameTabs().find(tb => tb.id === activeTab);
  const p = PANEL[activeTab];
  p.results.innerHTML = "";
  if (tab.worldSummary) {
    renderWorlds(p);
    const [ox0, oy0] = overallCount();
    document.getElementById("overallNote").textContent = fmt('gt-overall', ox0, oy0, oy0 ? Math.round(100 * ox0 / oy0) : 0);
    checkMilestones();
    return;
  }
  if (p.dash) {
    p.dash.innerHTML = "";
    p.dash.appendChild(el("div", "grp-title", fmtText(t('gt-dash-title'))));
    const tbl = el("table", "dash-table");
    tbl.innerHTML = `<thead><tr><th>${t('gt-dash-section')}</th><th>${t('gt-dash-progress')}</th></tr></thead>`;
    const tb = el("tbody");
    allLists().forEach(({ label, storeId, items, c, sec }) => {
      const [x, y] = entryCount({ sec, storeId, items, c });
      const tr = el("tr"), tdL = el("td");
      const tabId = tabOfSection(sec.id);
      if (tabId) {
        const a = el("a", "dashlink", esc(label));
        a.href = "#";
        a.onclick = e => { e.preventDefault(); selectTab(tabId); };
        tdL.appendChild(a);
      } else { tdL.textContent = label; }
      tr.appendChild(tdL);
      tr.appendChild(el("td", null, bar(x, y)));
      tb.appendChild(tr);
    });
    tbl.appendChild(tb);
    p.dash.appendChild(tbl);
  }
  let cx = 0, cy = 0;
  tab.sections.forEach((sec, i) => {
    const res = resolved(sec);
    const title = res.charLabel ? fmt('gt-section-for', t('sec-' + sec.id), res.charLabel) : t('sec-' + sec.id);
    p.results.appendChild(el("div", i === 0 ? "grp-title" : "sub-title", fmtText(title)));
    // Optional explanatory note under a section title (lang key note-<id>);
    // newlines become separate lines.
    const note = t('note-' + sec.id);
    if (note && note !== 'note-' + sec.id) {
      const np = el("p", "hint");
      note.split("\n").forEach((line, k) => { if (k) np.appendChild(el("br")); np.appendChild(document.createTextNode(line)); });
      p.results.appendChild(np);
    }
    checklist(p.results, sec, res, p.state);
    const [x, y] = entryCount({ sec, storeId: res.storeId, items: res.items, c: activeChar });
    cx += x; cy += y;
  });
  setCount(p, cx, cy);

  const [ox, oy] = overallCount();
  document.getElementById("overallNote").textContent = fmt('gt-overall', ox, oy, oy ? Math.round(100 * ox / oy) : 0);
  checkMilestones();
}

buildPage();
render();

document.addEventListener('i18n:updated', () => { buildPage(); render(); });
window.addEventListener("storage", (e) => {
  if (e.key === G.storeKey) { STORE = loadStore(); render(); }
  if (G.charKey && e.key === G.charKey && CHARS.some(c => c.id === e.newValue)) {
    activeChar = e.newValue; buildPage(); render();
  }
});

});
