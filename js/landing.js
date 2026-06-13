/* =====================================================================
   Landing page — series-wide and per-game completion overview.
   Reads each game's totals via KHSummary (no tracker needs to have been
   opened) and renders a big series progress bar, then the games grouped
   by HD collection: a short heading per collection over a uniform grid of
   banner cards (the banner is the natural "pick this game" target), each
   with a live progress bar. Text comes from lang/messages/<lang>/
   index.json; re-renders on language change.
   ===================================================================== */
document.addEventListener("DOMContentLoaded", async function () {
  await i18n.init();
  var t = function (k) { return i18n.getMessage(k); };
  var fmt = function () { return i18n.format.apply(i18n, arguments); };

  // Per-game tracker page + banner file (note the mixed .png/.jpg).
  // `bbs` uses the bespoke engine; everything else is generic.
  var GAME = {
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

  function pct(x, y) { return y ? Math.round(100 * x / y) : 0; }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }

  function totalsFor(id) {
    if (GAME[id].bbs) return KHSummary.bbsTotals();
    var G = window.KH_GAMES && window.KH_GAMES[id];
    return G ? KHSummary.trackerTotals(G) : [0, 0];
  }
  // Achievement (platform-trophy) progress — distinct from 100% completion,
  // since not everything tracked is needed for every achievement.
  function achFor(id) {
    if (GAME[id].bbs) return KHSummary.bbsAchievements();
    var G = window.KH_GAMES && window.KH_GAMES[id];
    return G ? KHSummary.trackerAchievements(G) : [0, 0];
  }

  // A .banner figure that only appears once its image loads (so a missing
  // file leaves no broken-image icon).
  function imageFigure(cls, src, alt) {
    var fig = el("figure", "banner " + cls);
    var img = el("img", "banner-img");
    img.alt = alt || "";
    img.addEventListener("load", function () { fig.style.display = ""; });
    img.addEventListener("error", function () { fig.style.display = "none"; });
    img.src = src;
    fig.appendChild(img);
    return fig;
  }

  function progBar(x, y) {
    var wrap = el("div", "progbar");
    wrap.appendChild(el("span", "progbar-num", esc(x + " / " + y)));
    var track = el("span", "progbar-track" + (x >= y && y > 0 ? " full" : ""));
    var fill = el("i"); fill.style.width = pct(x, y) + "%";
    track.appendChild(fill);
    wrap.appendChild(track);
    wrap.appendChild(el("span", "progbar-pct", pct(x, y) + "%"));
    return wrap;
  }
  // A bar with a small leading label (Achievements vs 100% completion).
  function labeledBar(label, kind, x, y) {
    var row = el("div", "prograw " + kind);
    row.appendChild(el("span", "prograw-label", esc(label)));
    row.appendChild(progBar(x, y));
    return row;
  }

  function gameCard(id) {
    var r = totalsFor(id), a = achFor(id);
    var card = el("a", "game-card");
    card.href = GAME[id].page;
    card.appendChild(imageFigure("card-banner", "images/banners/" + GAME[id].banner, t("game-" + id)));
    var body = el("div", "game-card-body");
    body.appendChild(el("h3", null, esc(t("game-" + id))));
    body.appendChild(labeledBar(t("lg-ach-label"), "ach", a[0], a[1]));
    body.appendChild(labeledBar(t("lg-100-label"), "full", r[0], r[1]));
    card.appendChild(body);
    return { node: card, x: r[0], y: r[1], ax: a[0], ay: a[1] };
  }

  function render() {
    var sx = 0, sy = 0, ax = 0, ay = 0;

    var coll = document.getElementById("collections");
    coll.innerHTML = "";
    COLLECTIONS.forEach(function (c) {
      var group = el("section", "collection");
      group.appendChild(el("h3", "collection-title", esc(t("coll-" + c.id))));
      var grid = el("div", "game-cards");
      c.games.forEach(function (id) {
        var card = gameCard(id);
        sx += card.x; sy += card.y; ax += card.ax; ay += card.ay;
        grid.appendChild(card.node);
      });
      group.appendChild(grid);
      coll.appendChild(group);
    });

    var total = document.getElementById("series-total");
    total.innerHTML = "";
    total.appendChild(el("div", "series-headline", fmt("lg-total-count", sx, sy, pct(sx, sy))));
    total.appendChild(labeledBar(t("lg-ach-label"), "ach", ax, ay));
    total.appendChild(labeledBar(t("lg-100-label"), "full", sx, sy));
  }

  render();
  document.addEventListener("i18n:updated", render);
  window.addEventListener("storage", render);   // reflect changes from another tab
});
