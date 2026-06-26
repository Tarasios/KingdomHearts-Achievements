/* =====================================================================
   Cross-origin progress sync for the Kingdom Hearts tools.

   The app is mirrored at two origins:
     • https://tarasios.ca/games/kingdom-hearts/
     • https://tarasios.github.io/KingdomHearts-Achievements/
   Browsers keep localStorage per-origin, so the two copies cannot read each
   other's saves directly. This module adds a one-click "Sync" that exchanges
   progress between them and merges BOTH ways — a union, so a check on either
   side wins and nothing is ever lost.

   How: the Sync button opens the partner site's bridge.html in a pop-up. A
   pop-up is a first-party browsing context for the partner origin, so it can
   always read its own localStorage (a cross-site iframe may be partitioned
   and cannot). The two windows then postMessage their data, merge, save, and
   reload.

   Self-contained: this file + bridge.html are the whole feature. It reads the
   same keys as the Export/Import bar (js/kh-progress.js) and, on tool pages,
   adds its button to that bar. Nothing else on the site is touched, and on an
   unrecognised origin (e.g. localhost) the button simply doesn't appear.
   ===================================================================== */
(function () {
  "use strict";

  // Same key set the Export/Import bar uses (js/kh-progress.js).
  var KEY_RE = /^(bbs_|khcom_|kh1_|kh2_|khddd_|kh02_|kh3_)/;

  // Each origin's partner copy of the app (trailing slash required).
  var PARTNERS = {
    "https://tarasios.ca": "https://tarasios.github.io/KingdomHearts-Achievements/",
    "https://tarasios.github.io": "https://tarasios.ca/games/kingdom-hearts/"
  };
  var PARTNER_BASE = PARTNERS[location.origin] || null;
  var PARTNER_ORIGIN = PARTNER_BASE ? new URL(PARTNER_BASE).origin : null;

  var T = { READY: "KH_SYNC_READY", DATA: "KH_SYNC_DATA", RESULT: "KH_SYNC_RESULT" };

  /* ---- storage helpers (KH keys only) ---- */
  function collect() {
    var data = {};
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (KEY_RE.test(k)) data[k] = localStorage.getItem(k);
    }
    return data;
  }
  function write(data) {
    Object.keys(data || {}).forEach(function (k) {
      if (KEY_RE.test(k) && typeof data[k] === "string") {
        try { localStorage.setItem(k, data[k]); } catch (e) { /* quota / private */ }
      }
    });
  }

  /* ---- merge: deep union, "checked on either side wins" ---- */
  function isObj(v) { return v && typeof v === "object" && !Array.isArray(v); }
  function parse(s) { try { return JSON.parse(s); } catch (e) { return undefined; } }
  function unionObj(a, b) {
    var out = {}, k;
    for (k in a) if (Object.prototype.hasOwnProperty.call(a, k)) out[k] = a[k];
    for (k in b) if (Object.prototype.hasOwnProperty.call(b, k)) {
      if (isObj(out[k]) && isObj(b[k])) out[k] = unionObj(out[k], b[k]);
      else if (out[k] === true || b[k] === true) out[k] = true;
      else if (!(k in out)) out[k] = b[k];
      // else keep the existing scalar (e.g. the active character) — local wins
    }
    return out;
  }
  function mergeValue(localVal, incomingVal) {
    var a = parse(localVal), b = parse(incomingVal);
    if (isObj(a) && isObj(b)) return JSON.stringify(unionObj(a, b));
    return localVal != null ? localVal : incomingVal; // scalars: keep local
  }
  function mergeData(local, incoming) {
    var out = {}, k;
    for (k in local) out[k] = local[k];
    for (k in incoming) out[k] = (k in out) ? mergeValue(out[k], incoming[k]) : incoming[k];
    return out;
  }

  /* ---- bridge role: runs inside the pop-up, on the partner origin ---- */
  function runBridge() {
    window.addEventListener("message", function (e) {
      if (PARTNER_ORIGIN && e.origin !== PARTNER_ORIGIN) return; // only our partner
      var m = e.data || {};
      if (m.type !== T.DATA) return;
      var merged = mergeData(collect(), m.data || {});
      write(merged);
      try { e.source.postMessage({ type: T.RESULT, data: merged }, e.origin); } catch (err) {}
      setTimeout(function () { try { window.close(); } catch (err) {} }, 150);
    });
    // Announce readiness to whoever opened us.
    if (window.opener) {
      try { window.opener.postMessage({ type: T.READY }, PARTNER_ORIGIN || "*"); } catch (err) {}
    }
  }

  /* ---- initiator role: runs on a tool page when Sync is clicked ---- */
  function openSync(cb) {
    cb = cb || function () {};
    if (!PARTNER_BASE) { cb("unavailable"); return; }
    var popup = window.open(PARTNER_BASE + "bridge.html", "kh-sync", "width=460,height=300");
    if (!popup) { cb("blocked"); return; }
    var done = false;
    function onMsg(e) {
      if (e.origin !== PARTNER_ORIGIN) return;
      var m = e.data || {};
      if (m.type === T.READY) {
        try { popup.postMessage({ type: T.DATA, data: collect() }, PARTNER_ORIGIN); } catch (err) {}
      } else if (m.type === T.RESULT) {
        done = true;
        write(mergeData(collect(), m.data || {}));
        window.removeEventListener("message", onMsg);
        cb("ok");
      }
    }
    window.addEventListener("message", onMsg);
    setTimeout(function () {
      if (!done) { window.removeEventListener("message", onMsg); cb("timeout"); }
    }, 25000);
  }

  /* ---- tiny transient status toast ---- */
  function toast(msg) {
    var el = document.createElement("div");
    el.textContent = msg;
    el.setAttribute("role", "status");
    el.style.cssText = "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);" +
      "background:#1b2030;color:#fff;padding:10px 16px;border-radius:8px;z-index:9999;" +
      "box-shadow:0 4px 16px rgba(0,0,0,.35);font:14px system-ui,sans-serif;max-width:90vw;";
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 3800);
  }

  /* ---- add the Sync button to the Export/Import bar, if present ---- */
  function addButton() {
    if (!PARTNER_BASE) return;            // unknown origin (e.g. localhost) → no button
    var bar = document.getElementById("kp-bar");
    if (!bar || document.getElementById("kp-sync-btn")) return;
    var host;
    try { host = new URL(PARTNER_BASE).host; } catch (e) { host = "the other site"; }

    var btn = document.createElement("button");
    btn.className = "clearbtn";
    btn.id = "kp-sync-btn";
    btn.type = "button";
    btn.textContent = "↻ Sync";
    btn.title = "Merge your progress with " + host + " (both ways)";
    btn.addEventListener("click", function () {
      var prev = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Syncing…";
      openSync(function (status) {
        btn.disabled = false;
        btn.textContent = prev;
        if (status === "ok") { toast("Progress synced. Reloading…"); setTimeout(function () { location.reload(); }, 800); }
        else if (status === "blocked") toast("Pop-up blocked — allow pop-ups for this site, then click Sync again.");
        else if (status === "timeout") toast("Sync timed out — please try again.");
        else toast("Sync isn't available here.");
      });
    });

    var note = document.getElementById("kp-note");
    if (note) bar.insertBefore(btn, note); else bar.appendChild(btn);
  }

  /* ---- boot: bridge role in the pop-up, button role on tool pages ---- */
  function boot() {
    if (document.body && document.body.getAttribute("data-kh-bridge")) runBridge();
    else addButton();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  window.KHSync = { collect: collect, openSync: openSync };
})();
