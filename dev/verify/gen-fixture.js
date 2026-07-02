/* =====================================================================
   Generates dev/verify/fixture.json — a deterministic localStorage seed
   used by golden.js and smoke.js. Run once (node dev/verify/gen-fixture.js)
   and COMMIT the output; regenerating is only needed when the fixture
   strategy itself changes. Golden runs always read the committed file, so
   a data-module edit that shifts item order shows up as a golden diff
   (exactly the kind of progress-breaking change the harness exists to
   catch) instead of being silently absorbed.

   Strategy: load index.html (it pulls in all seven game data modules),
   then derive a seed straight from the live configs so every seeded key
   matches a real item:
     - plain sections ..... every 3rd item checked
     - multi-check ........ every 3rd item, cycling through the checks
                            (exercises both the bare-index and "i::k" keys)
     - counters ........... every 4th item at a mid value; index 0 seeded
                            as legacy `true` (the pre-counter format)
     - BBS ................ nested store, every 3rd entry per map, terra
                            missions done+ranked, melding-owned commands
   Variants (merged over `common` by lib.loadFixture):
     withCache — bbs_totals_v1 present (landing uses the cached figure)
     noCache   — no cache AND legacy shared arena (exercises the landing
                 fallback + the BBS engine's arena migration)
   ===================================================================== */
"use strict";

const fs = require("fs");
const { REPO_ROOT, FIXTURE_FILE, launch, serve } = require("./lib");

const PORT = 8177;

/* Runs inside the browser with the data modules loaded. */
function buildInBrowser() {
  const CHARS = ["terra", "ventus", "aqua"];
  const PER_CHAR = ["records", "characters", "unversed", "commands", "treasures"];
  const SHARED = ["trophies", "ingame", "reports", "stickers", "patissier", "warrior"];

  const common = {};

  Object.values(window.KH_GAMES).forEach(game => {
    const all = {};
    game.tabs.forEach(tab => tab.sections.forEach(sec => {
      const lists = sec.variants
        ? (game.chars || []).map(c => ({ storeId: sec.id + "-" + c.id, items: sec.variants[c.id] || [] }))
        : [{ storeId: sec.id, items: sec.items || [] }];
      lists.forEach(({ storeId, items }) => {
        const store = {};
        items.forEach((item, i) => {
          if (sec.counter) {
            if (i % 4 !== 0) return;
            const max = +item.max > 0 ? +item.max : 1;
            store[i] = i === 0 ? true : Math.min((i % max) + 1, max);
          } else if (sec.checks) {
            if (i % 3 !== 0) return;
            const ci = Math.floor(i / 3) % sec.checks.length;
            const check = sec.checks[ci];
            if (item[check.k] === false) return; // check does not apply
            store[ci === 0 ? String(i) : i + "::" + check.k] = true;
          } else if (i % 3 === 0) {
            store[i] = true;
          }
        });
        if (Object.keys(store).length) all[storeId] = store;
      });
    }));
    common[game.storeKey] = all;
  });

  const bbs = window.KH_BBS_DATA;
  const bbsStore = { shared: {}, missions: { done: {}, rank: {} } };
  SHARED.forEach(sec => {
    const store = {};
    (bbs[sec] || []).forEach((item, i) => { if (i % 3 === 0) store[i] = true; });
    bbsStore.shared[sec] = store;
  });
  bbs.missions.forEach((mission, i) => {
    if (i % 4 === 0) { bbsStore.missions.done[i + "-terra"] = true; bbsStore.missions.rank[i + "-terra"] = true; }
    if (i % 5 === 0) bbsStore.missions.done[i + "-ventus"] = true;
  });
  CHARS.forEach(char => {
    bbsStore[char] = {};
    PER_CHAR.forEach(sec => {
      const store = {};
      (bbs.perChar[char][sec] || []).forEach((item, i) => { if (i % 3 === 0) store[i] = true; });
      bbsStore[char][sec] = store;
    });
    const flavors = {};
    (bbs.flavors || []).forEach((item, i) => { if (i % 3 === 0) flavors[i] = true; });
    bbsStore[char].flavors = flavors;
    const arena = {};
    (bbs.arena || []).forEach((item, i) => { if (i % 2 === 0) arena[i] = true; });
    bbsStore[char].arena = arena;
  });
  common.bbs_progress_v1 = bbsStore;

  // Same shape the melding calculator writes: { abilities: {}, owned: [] }.
  common.bbs_meld_tracker_v1 = {
    terra: { abilities: { "Fire Boost": 1 }, owned: bbs.perChar.terra.commands.slice(0, 5).map(c => c.name) },
    ventus: { abilities: {}, owned: bbs.perChar.ventus.commands.slice(0, 3).map(c => c.name) },
    aqua: { abilities: {}, owned: [] }
  };
  common.bbs_meld_tracker_v1_char = "ventus";
  common.khcom_char = "riku";
  common.khddd_char = "riku";
  common.khddd_guide_v1 = { rank: {}, nodes: {}, abilities: {} };
  common.bbs_view_v1 = { unversed: "journal" };

  // Journal view for the first journal-capable KH1 tab (exercises tile grid).
  const kh1 = window.KH_GAMES.kh1;
  const journalTab = kh1 && kh1.tabs.find(t => t.sections.some(s => s.journal));
  if (journalTab) common[kh1.storeKey + ":view"] = { [journalTab.id]: "journal" };

  // Legacy BBS store for the noCache variant: arena progress still under
  // shared (pre-migration format) — engine migrates it, summary fallback
  // (pre-refactor) does not; that difference is a documented golden note.
  const legacy = JSON.parse(JSON.stringify(bbsStore));
  CHARS.forEach(char => { delete legacy[char].arena; });
  legacy.shared.arena = { 0: true, 1: true };

  return {
    common,
    variants: {
      withCache: { bbs_totals_v1: [1234, 5678] },
      noCache: { bbs_progress_v1: legacy }
    }
  };
}

(async function main() {
  const server = await serve(REPO_ROOT, PORT);
  const browser = await launch();
  try {
    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: "load" });
    await page.waitForFunction(() => window.KH_GAMES && window.KH_BBS_DATA);
    const fixture = await page.evaluate(buildInBrowser);
    fs.writeFileSync(FIXTURE_FILE, JSON.stringify(fixture, null, 1) + "\n");
    const keys = Object.keys(fixture.common);
    console.log(`wrote ${FIXTURE_FILE}: ${keys.length} common keys (${keys.join(", ")})`);
  } finally {
    await browser.close();
    server.kill();
  }
})().catch(err => { console.error(err); process.exit(1); });
