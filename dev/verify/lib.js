/* =====================================================================
   Shared plumbing for the verification scripts (gen-fixture / golden /
   smoke). Node-only, never shipped to the site.

   Serves the repo with `python3 -m http.server`, launches the system
   Chromium through Playwright, and seeds localStorage fixtures before a
   page's own scripts run. Nothing here touches site behavior.

   Where to look:
     browser ........ launch() (falls back to Playwright's own Chromium)
     web server ..... serve(rootDir, port) / stop via proc.kill()
     fixtures ....... loadFixture(variant) merges common + variant keys,
                      seed(context, data) installs them pre-navigation
   ===================================================================== */
"use strict";

const { spawn } = require("child_process");
const http = require("http");
const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const FIXTURE_FILE = path.join(__dirname, "fixture.json");
const BASELINE_FILE = path.join(__dirname, "golden-baseline.json");

function playwright() {
  try { return require("playwright"); } catch (e) { /* not on NODE_PATH */ }
  // Remote/dev container location (see repo docs); last resort before failing.
  return require("/opt/node22/lib/node_modules/playwright");
}

async function launch() {
  const { chromium } = playwright();
  const exe = process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium";
  try {
    if (fs.existsSync(exe)) return await chromium.launch({ executablePath: exe });
  } catch (e) { /* fall through to Playwright's managed browser */ }
  return await chromium.launch();
}

/* Start `python3 -m http.server` in rootDir and resolve once it answers. */
function serve(rootDir, port) {
  const proc = spawn("python3", ["-m", "http.server", String(port), "--bind", "127.0.0.1"],
    { cwd: rootDir, stdio: "ignore" });
  const ready = new Promise((resolve, reject) => {
    const started = Date.now();
    (function poll() {
      http.get({ host: "127.0.0.1", port, path: "/" }, res => { res.resume(); resolve(); })
        .on("error", () => {
          if (Date.now() - started > 10000) reject(new Error("http.server did not start"));
          else setTimeout(poll, 150);
        });
    })();
  });
  return ready.then(() => proc);
}

function loadFixture(variant) {
  const fx = JSON.parse(fs.readFileSync(FIXTURE_FILE, "utf8"));
  if (variant && !fx.variants[variant]) throw new Error("unknown fixture variant: " + variant);
  return Object.assign({}, fx.common, variant ? fx.variants[variant] : {});
}

/* Install fixture keys before any page script runs (re-applied on reload). */
async function seed(context, data) {
  await context.addInitScript(entries => {
    for (const key in entries) {
      const value = entries[key];
      localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
    }
  }, data);
}

/* Collapse whitespace so layout-only differences never break a golden diff. */
function norm(text) { return String(text || "").replace(/\s+/g, " ").trim(); }

/* Track real page problems: JS errors always; failed subresources except the
   optional banner/hero images (missing ones are by design — banners.js hides
   them). `allow` is an optional extra regex of tolerated URLs (e.g. the
   fr→en lang fallback intentionally 404s first). Caller asserts empty. */
function watchErrors(page, allow) {
  const errors = [];
  page.on("pageerror", err => errors.push("pageerror: " + err.message));
  page.on("console", msg => {
    if (msg.type() !== "error") return;
    const text = msg.text();
    if (/Failed to load resource/.test(text)) return; // handled via response hook below
    errors.push("console: " + text);
  });
  page.on("response", res => {
    if (res.status() < 400) return;
    const url = res.url();
    if (/\/images\//.test(url)) return; // optional artwork, hidden when missing
    if (allow && allow.test(url)) return;
    errors.push("http " + res.status() + ": " + url);
  });
  return errors;
}

module.exports = { REPO_ROOT, FIXTURE_FILE, BASELINE_FILE, launch, serve, loadFixture, seed, norm, watchErrors };
