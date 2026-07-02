/* =====================================================================
   Landing page — series-wide and per-game completion overview.
   Reads each game's totals via KHSummary (no tracker needs to have been
   opened) and renders a big series progress bar, then the games grouped
   by HD collection: a short heading per collection over a uniform grid of
   banner cards (the banner is the natural "pick this game" target), each
   with a live progress bar. Text comes from lang/messages/<lang>/
   index.json; re-renders on language change and on another tab's edits.
   Depends on: js/kh-common.js (KH.el / KH.esc), js/kh-page.js,
   js/kh-summary.js, the per-game data modules and js/i18n.js.
   ===================================================================== */

// Per-game tracker page + banner file (note the mixed .png/.jpg).
// `bbs` uses the bespoke engine; everything else is generic.
const LANDING_GAMES = {
  kh1:   { page: "tools/kh1-tracker.html",    banner: "kh1.jpg" },
  khcom: { page: "tools/kh-com-tracker.html", banner: "khcom.jpg" },
  kh2:   { page: "tools/kh2-tracker.html",    banner: "kh2.jpg" },
  bbs:   { page: "tools/kh-bbs-tracker.html", banner: "bbs.jpg", bbs: true },
  khddd: { page: "tools/kh-ddd-tracker.html", banner: "khddd.jpg" },
  kh02:  { page: "tools/kh02-tracker.html",   banner: "kh02.jpg" },
  kh3:   { page: "tools/kh3-tracker.html",    banner: "kh3.jpg" }
};

// HD collections, in release order. `hero` is a file in images/heroes/.
const LANDING_COLLECTIONS = [
  { id: "hd1525", hero: "kh1525.png", games: ["kh1", "khcom", "kh2", "bbs"] },
  { id: "hd28",   hero: "kh28.jpg",   games: ["khddd", "kh02"] },
  { id: "kh3",    hero: "kh3.jpg",    games: ["kh3"] }
];

KH.Page.boot(class extends KH.Page {
  main() { this.render(); }
  onLanguageChange() { this.render(); }
  onStorage() { this.render(); }   // reflect changes from another tab

  pct(done, total) { return total ? Math.round(100 * done / total) : 0; }

  totalsFor(gameId) {
    if (LANDING_GAMES[gameId].bbs) return KHSummary.bbsTotals();
    const game = window.KH_GAMES && window.KH_GAMES[gameId];
    return game ? KHSummary.trackerTotals(game) : [0, 0];
  }
  // Achievement (platform-trophy) progress — distinct from 100% completion,
  // since not everything tracked is needed for every achievement.
  achievementsFor(gameId) {
    if (LANDING_GAMES[gameId].bbs) return KHSummary.bbsAchievements();
    const game = window.KH_GAMES && window.KH_GAMES[gameId];
    return game ? KHSummary.trackerAchievements(game) : [0, 0];
  }

  // A .banner figure that only appears once its image loads (so a missing
  // file leaves no broken-image icon).
  imageFigure(className, src, alt) {
    const figure = KH.el("figure", "banner " + className);
    const img = KH.el("img", "banner-img");
    img.alt = alt || "";
    img.addEventListener("load", () => { figure.style.display = ""; });
    img.addEventListener("error", () => { figure.style.display = "none"; });
    img.src = src;
    figure.appendChild(img);
    return figure;
  }

  progBar(done, total) {
    const wrap = KH.el("div", "progbar");
    wrap.appendChild(KH.el("span", "progbar-num", KH.esc(done + " / " + total)));
    const track = KH.el("span", "progbar-track" + (done >= total && total > 0 ? " full" : ""));
    const fill = KH.el("i");
    fill.style.width = this.pct(done, total) + "%";
    track.appendChild(fill);
    wrap.appendChild(track);
    wrap.appendChild(KH.el("span", "progbar-pct", this.pct(done, total) + "%"));
    return wrap;
  }
  // A bar with a small leading label (Achievements vs 100% completion).
  labeledBar(label, kind, done, total) {
    const row = KH.el("div", "prograw " + kind);
    row.appendChild(KH.el("span", "prograw-label", KH.esc(label)));
    row.appendChild(this.progBar(done, total));
    return row;
  }

  gameCard(gameId) {
    const totals = this.totalsFor(gameId), achievements = this.achievementsFor(gameId);
    const card = KH.el("a", "game-card");
    card.href = LANDING_GAMES[gameId].page;
    card.appendChild(this.imageFigure("card-banner", "images/banners/" + LANDING_GAMES[gameId].banner, this.translate("game-" + gameId)));
    const body = KH.el("div", "game-card-body");
    body.appendChild(KH.el("h3", null, KH.esc(this.translate("game-" + gameId))));
    body.appendChild(this.labeledBar(this.translate("lg-ach-label"), "ach", achievements[0], achievements[1]));
    body.appendChild(this.labeledBar(this.translate("lg-100-label"), "full", totals[0], totals[1]));
    card.appendChild(body);
    return { node: card, done: totals[0], total: totals[1], achDone: achievements[0], achTotal: achievements[1] };
  }

  render() {
    let seriesDone = 0, seriesTotal = 0, achDone = 0, achTotal = 0;

    const collectionsBox = document.getElementById("collections");
    collectionsBox.innerHTML = "";
    LANDING_COLLECTIONS.forEach(collection => {
      const section = KH.el("section", "collection");
      section.appendChild(KH.el("h3", "collection-title", KH.esc(this.translate("coll-" + collection.id))));
      const grid = KH.el("div", "game-cards");
      collection.games.forEach(gameId => {
        const card = this.gameCard(gameId);
        seriesDone += card.done; seriesTotal += card.total; achDone += card.achDone; achTotal += card.achTotal;
        grid.appendChild(card.node);
      });
      section.appendChild(grid);
      collectionsBox.appendChild(section);
    });

    const totalBox = document.getElementById("series-total");
    totalBox.innerHTML = "";
    totalBox.appendChild(KH.el("div", "series-headline", this.format("lg-total-count", seriesDone, seriesTotal, this.pct(seriesDone, seriesTotal))));
    totalBox.appendChild(this.labeledBar(this.translate("lg-ach-label"), "ach", achDone, achTotal));
    totalBox.appendChild(this.labeledBar(this.translate("lg-100-label"), "full", seriesDone, seriesTotal));
  }
});
