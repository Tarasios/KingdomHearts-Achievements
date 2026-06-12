/* =====================================================================
   Landing page — series-wide and per-game completion overview.
   Reads each game's totals via KHSummary (no tracker needs to have been
   opened) and renders a big series progress bar plus one card per game,
   each linking to its tracker. Text comes from lang/messages/<lang>/
   index.json (game-<id> names + lg-* chrome); re-renders on language
   change. Game order matches the Tools page.
   ===================================================================== */
document.addEventListener("DOMContentLoaded", async function () {
  await i18n.init();
  var t = function (k) { return i18n.getMessage(k); };
  var fmt = function () { return i18n.format.apply(i18n, arguments); };

  // id -> tracker page + banner basename. `bbs` uses the bespoke engine.
  var GAMES = [
    { id: "kh1",   page: "/tools/kh1-tracker.html" },
    { id: "khcom", page: "/tools/kh-com-tracker.html" },
    { id: "kh2",   page: "/tools/kh2-tracker.html" },
    { id: "bbs",   page: "/tools/kh-bbs-tracker.html", bbs: true },
    { id: "khddd", page: "/tools/kh-ddd-tracker.html" },
    { id: "kh02",  page: "/tools/kh02-tracker.html" },
    { id: "kh3",   page: "/tools/kh3-tracker.html" }
  ];

  function pct(x, y) { return y ? Math.round(100 * x / y) : 0; }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }

  function totalsFor(g) {
    if (g.bbs) return KHSummary.bbsTotals();
    var G = window.KH_GAMES && window.KH_GAMES[g.id];
    return G ? KHSummary.trackerTotals(G) : [0, 0];
  }

  // A figure that only appears once its image loads (no broken-image icon).
  function bannerFigure(id) {
    var fig = el("figure", "banner card-banner");
    var img = el("img", "banner-img");
    img.alt = "";
    img.addEventListener("load", function () { fig.style.display = ""; });
    img.addEventListener("error", function () { fig.style.display = "none"; });
    img.src = "/images/banners/" + id + ".jpg";
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

  function render() {
    var sx = 0, sy = 0;
    var rows = GAMES.map(function (g) {
      var r = totalsFor(g);
      sx += r[0]; sy += r[1];
      return { g: g, x: r[0], y: r[1] };
    });

    // ----- series total -----
    var total = document.getElementById("series-total");
    total.innerHTML = "";
    var headline = el("div", "series-headline", fmt("lg-total-count", sx, sy, pct(sx, sy)));
    total.appendChild(headline);
    total.appendChild(progBar(sx, sy));

    // ----- per-game cards -----
    var grid = document.getElementById("game-cards");
    grid.innerHTML = "";
    rows.forEach(function (row) {
      var card = el("a", "project-card game-card");
      card.href = row.g.page;
      card.appendChild(bannerFigure(row.g.id));
      card.appendChild(el("h3", null, esc(t("game-" + row.g.id))));
      card.appendChild(progBar(row.x, row.y));
      card.appendChild(el("span", "game-card-cta", t("lg-open")));
      grid.appendChild(card);
    });
  }

  render();
  document.addEventListener("i18n:updated", render);
  // Reflect progress changes made in another tab.
  window.addEventListener("storage", render);
});
