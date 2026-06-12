/* =====================================================================
   DOM-free completion totals, shared by the landing page (and reusable
   anywhere). Computes [done, total] for any game straight from its data
   module + localStorage, without rendering — so the landing page can
   show progress for every game whether or not its tracker was opened.

   The counting mirrors the tracker engines exactly:
     trackerTotals(G) — generic engine, mirrors overallCount() in
                        js/kh-tracker.js (variants, multi-checks, the
                        cross-section autoChecks auto-completion).
     bbsTotals()      — Birth by Sleep, mirrors the two dashboard tables
                        in js/kh-bbs-tracker.js (per-character sections +
                        shared sections counted once, command auto-unlocks
                        from melding / missions / treasures included).

   Generic games register themselves on window.KH_GAMES (see the
   kh-*-tracker-data.js modules); BBS exposes window.KH_BBS_DATA.
   ===================================================================== */
var KHSummary = (function () {
  function getStore(key) {
    try { var r = localStorage.getItem(key); return r ? JSON.parse(r) : {}; }
    catch (e) { return {}; }
  }

  /* ---------- generic engine (mirror of js/kh-tracker.js) ---------- */
  function findSec(G, id) {
    for (var t = 0; t < G.tabs.length; t++) {
      var secs = G.tabs[t].sections;
      for (var s = 0; s < secs.length; s++) if (secs[s].id === id) return secs[s];
    }
    return null;
  }
  function checkKey(i, k, idx) { return idx === 0 ? String(i) : i + "::" + k; }
  function isChecked(store, i, sec, idx) {
    var checks = sec && sec.checks;
    return checks ? !!store[checkKey(i, checks[idx].k, idx)] : !!store[i];
  }
  function autoDone(G, STORE, sec, it) {
    if (!G.autoChecks) return false;
    for (var n = 0; n < G.autoChecks.length; n++) {
      var a = G.autoChecks[n];
      if (a.to !== sec.id) continue;
      var srcSec = findSec(G, a.from), srcStore = STORE[a.from] || {};
      if (!srcSec) continue;
      for (var mission in a.map) {
        if (a.map[mission] !== it[a.toKey || "name"]) continue;
        var items = srcSec.items || [], mi = -1;
        for (var j = 0; j < items.length; j++) if (items[j].name === mission) { mi = j; break; }
        if (mi < 0) continue;
        var ci = 0;
        if (a.check) {
          ci = -1;
          for (var c = 0; c < srcSec.checks.length; c++) if (srcSec.checks[c].k === a.check) { ci = c; break; }
        }
        if (ci >= 0 && isChecked(srcStore, mi, srcSec, ci)) return true;
      }
    }
    return false;
  }
  function entryCount(G, STORE, sec, storeId, items) {
    var store = STORE[storeId] || {}, checks = sec && sec.checks, d = 0, y = 0;
    (items || []).forEach(function (it, i) {
      if (checks) checks.forEach(function (c, idx) { y++; if (store[checkKey(i, c.k, idx)]) d++; });
      else { y++; if (store[i] || autoDone(G, STORE, sec, it)) d++; }
    });
    return [d, y];
  }
  function trackerTotals(G) {
    var STORE = getStore(G.storeKey), CHARS = G.chars || [], x = 0, y = 0;
    G.tabs.forEach(function (tab) {
      tab.sections.forEach(function (sec) {
        if (sec.variants) {
          CHARS.forEach(function (c) {
            var r = entryCount(G, STORE, sec, sec.id + "-" + c.id, sec.variants[c.id] || []);
            x += r[0]; y += r[1];
          });
        } else {
          var r = entryCount(G, STORE, sec, sec.id, sec.items);
          x += r[0]; y += r[1];
        }
      });
    });
    return [x, y];
  }

  /* ---------- Birth by Sleep (mirror of js/kh-bbs-tracker.js) ---------- */
  var BBS_CHARS = ["terra", "ventus", "aqua"];
  var BBS_LABEL = { terra: "Terra", ventus: "Ventus", aqua: "Aqua" };

  function countMap(map, n) { var d = 0; map = map || {}; for (var i = 0; i < n; i++) if (map[i]) d++; return d; }
  function groupCount(D, store, key, label) {
    var d = 0, y = 0, m = (store.shared && store.shared[key]) || {};
    (D[key] || []).forEach(function (it, i) { if (it.g === label) { y++; if (m[i]) d++; } });
    return [d, y];
  }
  function meldOwned(char) {
    try {
      var raw = localStorage.getItem("bbs_meld_tracker_v1");
      if (!raw) return {};
      var o = JSON.parse(raw), set = {};
      ((o[char] && o[char].owned) || []).forEach(function (n) { set[n] = 1; });
      return set;
    } catch (e) { return {}; }
  }
  function rewardFor(m, char) {
    if (!m.reward) return null;
    return typeof m.reward === "string" ? m.reward : (m.reward[char] || null);
  }
  function commandsDone(D, store, char) {
    var auto = meldOwned(char);
    var rank = (store.missions && store.missions.rank) || {};
    D.missions.forEach(function (ms, i) {
      var r = rewardFor(ms, char);
      if (r && rank[i + "-" + char]) auto[r] = 1;
    });
    var cmds = D.perChar[char].commands, names = {};
    cmds.forEach(function (c) { names[c.name] = 1; });
    var trStore = (store[char] && store[char].treasures) || {};
    D.perChar[char].treasures.forEach(function (tr, i) { if (trStore[i] && names[tr.name]) auto[tr.name] = 1; });
    var cStore = (store[char] && store[char].commands) || {}, d = 0;
    cmds.forEach(function (it, i) { if (cStore[i] || auto[it.name]) d++; });
    return [d, cmds.length];
  }
  // Ingredients are per character (each has their own store + eligibility by
  // location). Done = obtained, or auto-credited by one of THAT character's
  // checked ice-cream recipes (recipe slots i1..i4 hold "Name xN").
  function flavorsDoneChar(D, store, c) {
    var locKey = { terra: "locT", ventus: "locV", aqua: "locA" }[c];
    var label = BBS_LABEL[c];
    var pat = (store.shared && store.shared.patissier) || {};
    var fl = (store[c] && store[c].flavors) || {};
    var used = {};
    D.patissier.forEach(function (r, pIdx) {
      if (r.g !== label) return;
      ["i1", "i2", "i3", "i4"].forEach(function (k) {
        var s = r[k];
        if (!s) return;
        var m = String(s).match(/^(.*?)\s*x\s*\d+\s*$/i);
        var name = (m ? m[1] : s).trim();
        (used[name] = used[name] || []).push(pIdx);
      });
    });
    var d = 0, y = 0;
    D.flavors.forEach(function (f, i) {
      if (!f[locKey]) return;
      y++;
      if (fl[i] || (used[f.name] || []).some(function (pIdx) { return pat[pIdx]; })) d++;
    });
    return [d, y];
  }

  function bbsTotals() {
    var D = window.KH_BBS_DATA;
    if (!D) return [0, 0];
    var store = getStore("bbs_progress_v1"), x = 0, y = 0;
    function add(r) { x += r[0]; y += r[1]; }

    BBS_CHARS.forEach(function (c) {
      add(commandsDone(D, store, c));
      ["records", "characters", "unversed", "treasures"].forEach(function (sec) {
        var items = D.perChar[c][sec];
        add([countMap(store[c] && store[c][sec], items.length), items.length]);
      });
      ["stickers", "warrior", "patissier"].forEach(function (k) { add(groupCount(D, store, k, BBS_LABEL[c])); });
      add(flavorsDoneChar(D, store, c));   // per-character ingredients
      var done = (store.missions && store.missions.done) || {}, md = 0;
      D.missions.forEach(function (m, i) { if (done[i + "-" + c]) md++; });
      add([md, D.missions.length]);
    });
    ["trophies", "ingame", "reports", "arena"].forEach(function (k) {
      add([countMap(store.shared && store.shared[k], D[k].length), D[k].length]);
    });
    var rank = (store.missions && store.missions.rank) || {}, sd = 0;
    D.missions.forEach(function (m, i) {
      if (BBS_CHARS.some(function (c) { return rank[i + "-" + c]; })) sd++;
    });
    add([sd, D.missions.length]);
    return [x, y];
  }

  return { trackerTotals: trackerTotals, bbsTotals: bbsTotals, getStore: getStore };
})();
