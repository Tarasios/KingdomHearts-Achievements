/* =====================================================================
   Golden-master capture/compare for the refactor.

     node dev/verify/golden.js --baseline   # capture + write baseline
     node dev/verify/golden.js              # capture + diff vs baseline

   Seeds the committed fixture (see gen-fixture.js), then captures the
   user-visible text of everything the counting/rendering code produces:
     - landing page: series total + every game card (BOTH fixture
       variants — with and without the bbs_totals_v1 cache)
     - all 7 tracker pages (noCache variant): #overallNote plus the full
       text of every tab panel, for every character where applicable
   The capture is pure textContent (whitespace-normalized), so any change
   in counted totals, dashboards, checklist rows, badges or labels shows
   up as a diff. Exits 1 on mismatch, printing the differing keys.
   ===================================================================== */
"use strict";

const fs = require("fs");
const { REPO_ROOT, BASELINE_FILE, launch, serve, loadFixture, seed, norm, watchErrors } = require("./lib");

const PORT = 8177;
const BASE = `http://127.0.0.1:${PORT}`;

const TRACKERS = [
  "tools/kh1-tracker.html", "tools/kh-com-tracker.html", "tools/kh2-tracker.html",
  "tools/kh-bbs-tracker.html", "tools/kh-ddd-tracker.html", "tools/kh02-tracker.html",
  "tools/kh3-tracker.html"
];

async function captureLanding(browser, variant) {
  const context = await browser.newContext();
  await seed(context, loadFixture(variant));
  const page = await context.newPage();
  const errors = watchErrors(page);
  await page.goto(`${BASE}/index.html`, { waitUntil: "load" });
  await page.waitForFunction(() =>
    document.getElementById("collections").children.length > 0 &&
    document.getElementById("series-total").textContent.trim().length > 0);
  const capture = await page.evaluate(() => ({
    seriesTotal: document.getElementById("series-total").textContent,
    collections: document.getElementById("collections").textContent
  }));
  await context.close();
  if (errors.length) throw new Error(`landing(${variant}): ${errors.join(" | ")}`);
  return { seriesTotal: norm(capture.seriesTotal), collections: norm(capture.collections) };
}

/* Capture every tab panel (and #overallNote) for the current character. */
async function captureTabs(page) {
  const out = { overall: norm(await page.locator("#overallNote").textContent()) };
  const tabs = await page.$$eval(".tab[data-tab]", btns => btns.map(b => b.dataset.tab));
  for (const tabId of tabs) {
    await page.click(`.tab[data-tab="${tabId}"]`);
    out["tab:" + tabId] = norm(await page.$eval(`#tab-${tabId}`, el => el.textContent));
  }
  return out;
}

async function captureTracker(browser, pagePath) {
  const context = await browser.newContext();
  await seed(context, loadFixture("noCache"));
  const page = await context.newPage();
  const errors = watchErrors(page);
  await page.goto(`${BASE}/${pagePath}`, { waitUntil: "load" });
  await page.waitForSelector(".tab[data-tab]");
  await page.waitForFunction(() => document.getElementById("overallNote").textContent.trim().length > 0);

  const capture = {};
  const chars = await page.$$eval(".charbtn", btns => btns.map(b => b.dataset.c));
  if (chars.length) {
    for (const charId of chars) {
      await page.click(`.charbtn[data-c="${charId}"]`);
      capture[charId] = await captureTabs(page);
    }
  } else {
    capture.single = await captureTabs(page);
  }
  await context.close();
  if (errors.length) throw new Error(`${pagePath}: ${errors.join(" | ")}`);
  return capture;
}

function flatten(obj, prefix, into) {
  for (const key in obj) {
    const val = obj[key], name = prefix + "." + key;
    if (val && typeof val === "object") flatten(val, name, into);
    else into[name] = val;
  }
  return into;
}

(async function main() {
  const writeBaseline = process.argv.includes("--baseline");
  const server = await serve(REPO_ROOT, PORT);
  const browser = await launch();
  const result = {};
  try {
    result["landing.withCache"] = await captureLanding(browser, "withCache");
    result["landing.noCache"] = await captureLanding(browser, "noCache");
    for (const pagePath of TRACKERS) {
      result[pagePath] = await captureTracker(browser, pagePath);
      console.log("captured " + pagePath);
    }
  } finally {
    await browser.close();
    server.kill();
  }

  if (writeBaseline) {
    fs.writeFileSync(BASELINE_FILE, JSON.stringify(result, null, 1) + "\n");
    console.log("baseline written: " + BASELINE_FILE);
    return;
  }

  const baseline = flatten(JSON.parse(fs.readFileSync(BASELINE_FILE, "utf8")), "", {});
  const current = flatten(result, "", {});
  const keys = new Set([...Object.keys(baseline), ...Object.keys(current)]);
  let failures = 0;
  for (const key of keys) {
    if (baseline[key] === current[key]) continue;
    failures++;
    console.error(`DIFF ${key}`);
    console.error(`  baseline: ${String(baseline[key]).slice(0, 220)}`);
    console.error(`  current : ${String(current[key]).slice(0, 220)}`);
  }
  if (failures) { console.error(`golden: ${failures} differing entries`); process.exit(1); }
  console.log(`golden: OK (${keys.size} entries match)`);
})().catch(err => { console.error(err); process.exit(1); });
