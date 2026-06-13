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
  const re = /\{\{\s*([\w-]+)\s*\}\}|\[\[([^\]|]+)\|([^\]]+)\]\]/g;
  let out = "", last = 0, m;
  while ((m = re.exec(s))) {
    out += esc(s.slice(last, m.index));
    if (m[1] != null) out += `<img class="hdricon" src="${ICON_BASE}${m[1]}.png" alt="">`;
    else out += `<span class="hasinfo" title="${esc(m[3].trim())}" tabindex="0">${esc(m[2].trim())}</span>`;
    last = re.lastIndex;
  }
  return out + esc(s.slice(last));
}

/* Item-level character filter: items tagged c only count/show for that
   character. With no char filter (dashboard totals) everything counts. */
function itemVisible(it, char) { return !it.c || !char || it.c === char; }

/* Tabs tagged with a char only exist for that character. */
function visibleTabs() { return G.tabs.filter(tb => !tb.char || tb.char === activeChar); }
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
      else html = esc(v);
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
    btn.onclick = () => {
      tabsBox.querySelectorAll(".tab").forEach(x => x.classList.remove("active"));
      btn.classList.add("active");
      activeTab = tab.id;
      G.tabs.forEach(tb => { document.getElementById("tab-" + tb.id).style.display = tb.id === activeTab ? "block" : "none"; });
      render();
    };
    tabsBox.appendChild(btn);
  });

  // panels + toolbars
  const main = document.getElementById("panels");
  main.innerHTML = "";
  G.tabs.forEach(tab => {
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

/* ---------- render ---------- */
function render() {
  const tab = G.tabs.find(tb => tb.id === activeTab);
  const p = PANEL[activeTab];
  p.results.innerHTML = "";
  if (p.dash) {
    p.dash.innerHTML = "";
    p.dash.appendChild(el("div", "grp-title", fmtText(t('gt-dash-title'))));
    const tbl = el("table", "dash-table");
    tbl.innerHTML = `<thead><tr><th>${t('gt-dash-section')}</th><th>${t('gt-dash-progress')}</th></tr></thead>`;
    const tb = el("tbody");
    allLists().forEach(({ label, storeId, items, c, sec }) => {
      const [x, y] = entryCount({ sec, storeId, items, c });
      tb.appendChild(el("tr", null, `<td>${label}</td><td>${bar(x, y)}</td>`));
    });
    tbl.appendChild(tb);
    p.dash.appendChild(tbl);
  }
  let cx = 0, cy = 0;
  tab.sections.forEach((sec, i) => {
    const res = resolved(sec);
    const title = res.charLabel ? fmt('gt-section-for', t('sec-' + sec.id), res.charLabel) : t('sec-' + sec.id);
    p.results.appendChild(el("div", i === 0 ? "grp-title" : "sub-title", fmtText(title)));
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
