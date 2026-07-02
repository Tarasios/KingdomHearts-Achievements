/* =====================================================================
   Behavioral smoke test — the checks the golden capture can't express.

     node dev/verify/smoke.js

   1. Every page (12 shell pages + bridge.html) loads with zero JS errors
      and zero failed non-image requests; shell pages have the nav, the
      Credits footer, and their i18n text applied.
   2. Progress persists: ticking a KH1 checkbox survives a reload.
   3. French: preferred-language=fr localizes the landing page; a page
      whose fr JSON is missing (tools) falls back to English cleanly.
   4. Subpath run: the site works served under /KingdomHearts-Achievements/
      (the GitHub Pages shape), proving every data-root-resolved path.
   Exits 1 with a failure list if anything is off.
   ===================================================================== */
"use strict";

const path = require("path");
const { REPO_ROOT, launch, serve, loadFixture, seed, watchErrors } = require("./lib");

const PORT = 8178;
const SUBPATH_PORT = 8179;

const SHELL_PAGES = [
  "index.html", "credits.html", "tools/index.html",
  "tools/kh1-tracker.html", "tools/kh-com-tracker.html", "tools/kh2-tracker.html",
  "tools/kh-bbs-tracker.html", "tools/kh-ddd-tracker.html", "tools/kh02-tracker.html",
  "tools/kh3-tracker.html", "tools/kh-melding.html", "tools/kh-dream-guide.html"
];

const failures = [];
function check(condition, message) { if (!condition) failures.push(message); }

async function pageLoads(browser, base, withFixture) {
  for (const pagePath of SHELL_PAGES) {
    const context = await browser.newContext();
    if (withFixture) await seed(context, loadFixture("withCache"));
    const page = await context.newPage();
    const errors = watchErrors(page);
    await page.goto(`${base}/${pagePath}`, { waitUntil: "load" });
    try {
      await page.waitForFunction(() => {
        const logo = document.getElementById("logo-name");
        return logo && logo.textContent.trim().length > 0;
      }, { timeout: 8000 });
    } catch (e) { errors.push("i18n text never applied"); }
    const shell = await page.evaluate(() => ({
      nav: !!document.getElementById("games-menu-btn"),
      footer: !!document.querySelector("footer.site-footer .footer-credits-link")
    }));
    check(shell.nav, `${pagePath}: nav missing`);
    check(shell.footer, `${pagePath}: credits footer missing`);
    check(errors.length === 0, `${pagePath}: ${errors.join(" | ")}`);
    await context.close();
  }

  // bridge.html is bare by design: no nav/footer/i18n, just the sync script.
  const context = await browser.newContext();
  const page = await context.newPage();
  const errors = watchErrors(page);
  await page.goto(`${base}/bridge.html`, { waitUntil: "load" });
  check(errors.length === 0, `bridge.html: ${errors.join(" | ")}`);
  await context.close();
}

async function navBehavior(browser, base) {
  const context = await browser.newContext();
  const page = await context.newPage();
  const errors = watchErrors(page);
  await page.goto(`${base}/index.html`, { waitUntil: "load" });
  await page.waitForFunction(() => {
    const logo = document.getElementById("logo-name");
    return logo && logo.textContent.trim().length > 0;
  });
  // Hover opens (hover-intent); Escape closes; a click with the pointer
  // already on the button then re-opens (the touch/click toggle path).
  await page.hover("#games-menu-btn");
  check(await page.$eval(".has-menu", m => m.classList.contains("open")), "nav: hover did not open menu");
  const gameCount = await page.$$eval("#games-menu > li", items => items.length);
  check(gameCount === 7, `nav: expected 7 games in menu, got ${gameCount}`);
  const subCount = await page.$$eval(".nav-submenu a", links => links.length);
  check(subCount === 2, `nav: expected 2 submenu links, got ${subCount}`);
  await page.keyboard.press("Escape");
  check(await page.$eval(".has-menu", m => !m.classList.contains("open")), "nav: Escape did not close menu");
  await page.click("#games-menu-btn");
  check(await page.$eval(".has-menu", m => m.classList.contains("open")), "nav: click toggle did not reopen menu");
  await page.keyboard.press("Escape");
  const themeBefore = await page.evaluate(() => document.documentElement.getAttribute("data-theme"));
  await page.click("#themeToggle");
  const themeAfter = await page.evaluate(() => document.documentElement.getAttribute("data-theme"));
  check(themeBefore !== themeAfter, "nav: theme toggle did not switch theme");
  const firstHref = await page.$eval("#games-menu a", link => link.getAttribute("href"));
  check(firstHref === "./tools/kh1-tracker.html", `nav: unexpected first game link ${firstHref}`);
  check(errors.length === 0, `nav behavior: ${errors.join(" | ")}`);
  await context.close();
}

async function persistence(browser, base) {
  const context = await browser.newContext();
  const page = await context.newPage();
  const errors = watchErrors(page);
  const box = '#panels .results input[type="checkbox"]:not(:disabled)';
  await page.goto(`${base}/tools/kh1-tracker.html`, { waitUntil: "load" });
  await page.waitForSelector(box);
  await page.locator(box).first().check();
  const stored = await page.evaluate(() => localStorage.getItem("kh1_progress_v1"));
  check(stored && stored !== "{}", "kh1: tick did not reach localStorage");
  await page.reload({ waitUntil: "load" });
  await page.waitForSelector(box);
  check(await page.locator(box).first().isChecked(), "kh1: tick lost after reload");
  check(errors.length === 0, `kh1 persistence: ${errors.join(" | ")}`);
  await context.close();
}

async function french(browser, base) {
  const context = await browser.newContext();
  await context.addInitScript(() => localStorage.setItem("preferred-language", "fr"));
  const page = await context.newPage();
  // fr/tools.json does not exist; the i18n fallback fetches it (404) then en.
  const errors = watchErrors(page, /\/lang\/messages\/fr\//);
  await page.goto(`${base}/index.html`, { waitUntil: "load" });
  await page.waitForFunction(() => document.documentElement.lang === "fr");
  await page.goto(`${base}/tools/index.html`, { waitUntil: "load" });
  await page.waitForFunction(() => {
    const logo = document.getElementById("logo-name");
    return logo && logo.textContent.trim().length > 0;
  });
  check(await page.evaluate(() => document.documentElement.lang) === "en",
    "tools: fr fallback did not land on English");
  check(errors.length === 0, `french: ${errors.join(" | ")}`);
  await context.close();
}

async function subpath(browser) {
  const server = await serve(path.dirname(REPO_ROOT), SUBPATH_PORT);
  const base = `http://127.0.0.1:${SUBPATH_PORT}/${path.basename(REPO_ROOT)}`;
  try {
    for (const pagePath of ["index.html", "tools/kh1-tracker.html", "credits.html"]) {
      const context = await browser.newContext();
      const page = await context.newPage();
      const errors = watchErrors(page);
      await page.goto(`${base}/${pagePath}`, { waitUntil: "load" });
      await page.waitForFunction(() => {
        const logo = document.getElementById("logo-name");
        return logo && logo.textContent.trim().length > 0;
      });
      const footerHref = await page.$eval("footer.site-footer .footer-credits-link", a => a.href);
      check(footerHref === `${base}/credits.html`, `${pagePath} (subpath): footer resolves to ${footerHref}`);
      check(errors.length === 0, `${pagePath} (subpath): ${errors.join(" | ")}`);
      await context.close();
    }
  } finally { server.kill(); }
}

(async function main() {
  const server = await serve(REPO_ROOT, PORT);
  const browser = await launch();
  const base = `http://127.0.0.1:${PORT}`;
  try {
    await pageLoads(browser, base, true);
    console.log("pages: done");
    await navBehavior(browser, base);
    console.log("nav: done");
    await persistence(browser, base);
    console.log("persistence: done");
    await french(browser, base);
    console.log("french: done");
    await subpath(browser);
    console.log("subpath: done");
  } finally {
    await browser.close();
    server.kill();
  }
  if (failures.length) {
    failures.forEach(failure => console.error("FAIL " + failure));
    process.exit(1);
  }
  console.log("smoke: OK");
})().catch(err => { console.error(err); process.exit(1); });
