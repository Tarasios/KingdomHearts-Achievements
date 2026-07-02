/* =====================================================================
   DOM-free completion totals, shared by the landing page (and reusable
   anywhere). Computes [done, total] for any game straight from its data
   module + localStorage, without rendering — so the landing page can show
   progress for every game whether or not its tracker was opened.

   This is a thin façade: the actual counting rules live in
   js/kh-counting.js (KH.GameCounter — the SAME class the tracker engine
   uses live), bound here to a freshly-parsed localStorage snapshot.
     trackerTotals(game) / trackerAchievements(game) — generic games
     bbsTotals() / bbsAchievements() — Birth by Sleep (prefers the exact
       total the BBS tracker caches under bbs_totals_v1)

   Generic games register on window.KH_GAMES (see the kh-*-tracker-data.js
   modules); BBS exposes window.KH_BBS_DATA. Needs js/kh-common.js (KH.*),
   js/kh-store.js and js/kh-counting.js.
   ===================================================================== */
var KHSummary = (function () {
  function getStore(key) {
    try { var raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : {}; }
    catch (e) { return {}; }
  }

  /* ---------- generic games (KH.GameCounter over a snapshot) ---------- */
  function counterFor(game) {
    var snapshot = getStore(game.storeKey);   // parsed once per call
    return new KH.GameCounter(game, function () { return snapshot; });
  }
  function trackerTotals(game) { return counterFor(game).overallCount(); }

  /* Achievement (platform-trophy) progress only — the trophies list — as
   opposed to full 100% completion (everything tracked). */
  function trackerAchievements(game) { return counterFor(game).achievementsCount(); }

  /* ---------- Birth by Sleep (KH.BbsCounter over a snapshot) ----------
     The snapshot goes through KH.BbsStore so the same load-merge and
     arena migration apply as in the tracker. Without a lang file loaded
     the counter matches auto-unlocks on the raw data text — identical to
     the tracker unless a lang override renames a matched field, which is
     why bbsTotals still prefers the tracker's own cached figure. */
  function bbsCounterOrNull() {
    var data = window.KH_BBS_DATA;
    if (!data) return null;
    var snapshot = new KH.BbsStore(KH.KEYS.BBS_PROGRESS).data;
    return new KH.BbsCounter(data, function () { return snapshot; });
  }
  function bbsAchievements() {
    var counter = bbsCounterOrNull();
    return counter ? counter.achievementsCount() : [0, 0];
  }
  function bbsTotals() {
    // Prefer the exact total the BBS tracker cached — it already counts every
    // lang-aware auto-cross-off. Fall back to the shared counter if the
    // tracker hasn't run yet.
    var cached = getStore(KH.KEYS.BBS_TOTALS);
    if (Array.isArray(cached) && cached.length === 2) return cached;
    var counter = bbsCounterOrNull();
    return counter ? counter.fullTotals() : [0, 0];
  }

  return {
    trackerTotals: trackerTotals, bbsTotals: bbsTotals,
    trackerAchievements: trackerAchievements, bbsAchievements: bbsAchievements,
    getStore: getStore
  };
})();
