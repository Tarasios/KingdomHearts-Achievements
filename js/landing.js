/* =====================================================================
   Landing page — series-wide and per-game completion overview.
   Reads each game's totals via KHSummary (no tracker needs to have been
   opened) and renders a big series progress bar, then the games grouped
   by HD collection: a short heading per collection over a uniform grid of
   banner cards (the banner is the natural "pick this game" target), each
   with a live progress bar. Text comes from lang/messages/<lang>/
   index.json; re-renders on language change.
   Depends on: js/kh-common.js (KH.el / KH.esc), js/kh-summary.js, the
   per-game data modules and js/i18n.js.
   ===================================================================== */
document.addEventListener("DOMContentLoaded", async function () {
  await i18n.init();
  var el = KH.el, esc = KH.esc;
  var translate = function (key) { return i18n.getMessage(key); };
  var format = function () { return i18n.format.apply(i18n, arguments); };

  // Per-game tracker page + banner file (note the mixed .png/.jpg).
  // `bbs` uses the bespoke engine; everything else is generic.
  var GAMES = {
    kh1:   { page: "tools/kh1-tracker.html",    banner: "kh1.jpg" },
    khcom: { page: "tools/kh-com-tracker.html", banner: "khcom.jpg" },
    kh2:   { page: "tools/kh2-tracker.html",    banner: "kh2.jpg" },
    bbs:   { page: "tools/kh-bbs-tracker.html", banner: "bbs.jpg", bbs: true },
    khddd: { page: "tools/kh-ddd-tracker.html", banner: "khddd.jpg" },
    kh02:  { page: "tools/kh02-tracker.html",   banner: "kh02.jpg" },
    kh3:   { page: "tools/kh3-tracker.html",    banner: "kh3.jpg" }
  };

  // HD collections, in release order. `hero` is a file in images/heroes/.
  var COLLECTIONS = [
    { id: "hd1525", hero: "kh1525.png", games: ["kh1", "khcom", "kh2", "bbs"] },
    { id: "hd28",   hero: "kh28.jpg",   games: ["khddd", "kh02"] },
    { id: "kh3",    hero: "kh3.jpg",    games: ["kh3"] }
  ];

  function pct(done, total) { return total ? Math.round(100 * done / total) : 0; }

  function totalsFor(gameId) {
    if (GAMES[gameId].bbs) return KHSummary.bbsTotals();
    var game = window.KH_GAMES && window.KH_GAMES[gameId];
    return game ? KHSummary.trackerTotals(game) : [0, 0];
  }
  // Achievement (platform-trophy) progress — distinct from 100% completion,
  // since not everything tracked is needed for every achievement.
  function achievementsFor(gameId) {
    if (GAMES[gameId].bbs) return KHSummary.bbsAchievements();
    var game = window.KH_GAMES && window.KH_GAMES[gameId];
    return game ? KHSummary.trackerAchievements(game) : [0, 0];
  }

  // A .banner figure that only appears once its image loads (so a missing
  // file leaves no broken-image icon).
  function imageFigure(className, src, alt) {
    var figure = el("figure", "banner " + className);
    var img = el("img", "banner-img");
    img.alt = alt || "";
    img.addEventListener("load", function () { figure.style.display = ""; });
    img.addEventListener("error", function () { figure.style.display = "none"; });
    img.src = src;
    figure.appendChild(img);
    return figure;
  }

  function progBar(done, total) {
    var wrap = el("div", "progbar");
    wrap.appendChild(el("span", "progbar-num", esc(done + " / " + total)));
    var track = el("span", "progbar-track" + (done >= total && total > 0 ? " full" : ""));
    var fill = el("i"); fill.style.width = pct(done, total) + "%";
    track.appendChild(fill);
    wrap.appendChild(track);
    wrap.appendChild(el("span", "progbar-pct", pct(done, total) + "%"));
    return wrap;
  }
  // A bar with a small leading label (Achievements vs 100% completion).
  function labeledBar(label, kind, done, total) {
    var row = el("div", "prograw " + kind);
    row.appendChild(el("span", "prograw-label", esc(label)));
    row.appendChild(progBar(done, total));
    return row;
  }

  function gameCard(gameId) {
    var totals = totalsFor(gameId), achievements = achievementsFor(gameId);
    var card = el("a", "game-card");
    card.href = GAMES[gameId].page;
    card.appendChild(imageFigure("card-banner", "images/banners/" + GAMES[gameId].banner, translate("game-" + gameId)));
    var body = el("div", "game-card-body");
    body.appendChild(el("h3", null, esc(translate("game-" + gameId))));
    body.appendChild(labeledBar(translate("lg-ach-label"), "ach", achievements[0], achievements[1]));
    body.appendChild(labeledBar(translate("lg-100-label"), "full", totals[0], totals[1]));
    card.appendChild(body);
    return { node: card, done: totals[0], total: totals[1], achDone: achievements[0], achTotal: achievements[1] };
  }

  function render() {
    var seriesDone = 0, seriesTotal = 0, achDone = 0, achTotal = 0;

    var collectionsBox = document.getElementById("collections");
    collectionsBox.innerHTML = "";
    COLLECTIONS.forEach(function (collection) {
      var section = el("section", "collection");
      section.appendChild(el("h3", "collection-title", esc(translate("coll-" + collection.id))));
      var grid = el("div", "game-cards");
      collection.games.forEach(function (gameId) {
        var card = gameCard(gameId);
        seriesDone += card.done; seriesTotal += card.total; achDone += card.achDone; achTotal += card.achTotal;
        grid.appendChild(card.node);
      });
      section.appendChild(grid);
      collectionsBox.appendChild(section);
    });

    var totalBox = document.getElementById("series-total");
    totalBox.innerHTML = "";
    totalBox.appendChild(el("div", "series-headline", format("lg-total-count", seriesDone, seriesTotal, pct(seriesDone, seriesTotal))));
    totalBox.appendChild(labeledBar(translate("lg-ach-label"), "ach", achDone, achTotal));
    totalBox.appendChild(labeledBar(translate("lg-100-label"), "full", seriesDone, seriesTotal));
  }

  render();
  document.addEventListener("i18n:updated", render);
  window.addEventListener("storage", render);   // reflect changes from another tab
});
