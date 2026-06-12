/* =====================================================================
   Site-wide theme toggle. Loaded in <head> (render-blocking) so the
   stored theme is applied before first paint — no bright flash.

   Two themes, persisted in localStorage under "preferred-theme":
     night  (default) — the guaranteed-dark palette
     day              — the brighter, opt-in palette
   The palettes live in css/main.css under :root / [data-theme="day"].
   The toggle button (mirroring the language toggle) offers the *other*
   theme; its wording comes from the page's lang JSON (theme-* keys).
   ===================================================================== */
(function () {
  var KEY = "preferred-theme";

  function stored() {
    try { return localStorage.getItem(KEY) === "day" ? "day" : "night"; }
    catch (e) { return "night"; }
  }
  function current() { return document.documentElement.getAttribute("data-theme") || "night"; }
  function apply(theme) { document.documentElement.setAttribute("data-theme", theme); }

  // Apply immediately — this script runs in <head> before the body renders.
  apply(stored());

  function msg(key, fallback) {
    if (typeof i18n === "undefined" || !i18n.getMessage) return fallback;
    var v = i18n.getMessage(key);
    return v === key ? fallback : v;   // getMessage echoes the key when not yet loaded/missing
  }

  function label() {
    var toDay = current() === "night";   // button offers the other mode
    var icon = document.getElementById("theme-icon");
    var text = document.getElementById("theme-text");
    var btn = document.getElementById("themeToggle");
    if (icon) icon.textContent = toDay ? "☀️" : "🌙"; // ☀️ / 🌙
    if (text) text.textContent = toDay ? msg("theme-to-day", "Day") : msg("theme-to-night", "Night");
    if (btn) btn.setAttribute("aria-label", msg("theme-toggle-aria", "Toggle bright theme"));
  }

  function set(theme) {
    apply(theme);
    try { localStorage.setItem(KEY, theme); } catch (e) { /* private browsing */ }
    label();
  }

  function init() {
    var btn = document.getElementById("themeToggle");
    if (btn) btn.addEventListener("click", function () {
      set(current() === "night" ? "day" : "night");
    });
    label();
    document.addEventListener("i18n:updated", label);   // re-label on language change
    window.addEventListener("storage", function (e) {   // mirror other tabs
      if (e.key === KEY) { apply(stored()); label(); }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
