/* =====================================================================
   Header Games dropdown — open on hover with intent, or on click (touch).
   Uses a short close delay so the pointer has time to cross the gap from
   the button to the menu, and from the Birth by Sleep row to its Melding
   Calculator submenu, before it closes. Keyboard users get :focus-within
   (CSS) plus Escape to close.
   ===================================================================== */
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("games-menu-btn");
  if (!btn) return;
  var menu = btn.closest(".has-menu");
  if (!menu) return;
  var DELAY = 320;   // ms grace period before a hovered menu closes

  function closeAll() {
    menu.classList.remove("open");
    menu.querySelectorAll(".has-submenu.open").forEach(function (s) { s.classList.remove("open"); });
    btn.setAttribute("aria-expanded", "false");
  }

  // Hover intent: open immediately, close after a delay that any re-entry
  // cancels — covers the button→menu and row→submenu gaps.
  function hoverIntent(elm, onOpen) {
    var timer;
    elm.addEventListener("mouseenter", function () { clearTimeout(timer); elm.classList.add("open"); if (onOpen) onOpen(); });
    elm.addEventListener("mouseleave", function () {
      timer = setTimeout(function () {
        elm.classList.remove("open");
        if (elm === menu) { closeAll(); }
      }, DELAY);
    });
  }
  hoverIntent(menu, function () { btn.setAttribute("aria-expanded", "true"); });
  menu.querySelectorAll(".has-submenu").forEach(function (sm) { hoverIntent(sm); });

  // Click toggle for touch devices; outside-click / Escape to close.
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (menu.classList.contains("open")) closeAll();
    else { menu.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
  });
  document.addEventListener("click", function (e) { if (!menu.contains(e.target)) closeAll(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeAll(); });
});

/* =====================================================================
   Site footer — injected on every page so the Credits link lives in one
   place instead of being copied into each HTML file. The link points at
   credits.html (resolved via data-root so it works from subfolders and
   under a GitHub Pages subpath) and its label follows the active
   language, updating when i18n switches it.
   ===================================================================== */
(function () {
  var LABELS = { en: "Credits", fr: "Crédits" };
  function storedLang() {
    try { return localStorage.getItem("preferred-language") === "fr" ? "fr" : "en"; }
    catch (e) { return "en"; }
  }
  document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector("footer.site-footer")) return;
    var root = (document.body && document.body.getAttribute("data-root")) || "./";

    var link = document.createElement("a");
    link.className = "footer-credits-link";
    link.href = root + "credits.html";
    link.textContent = LABELS[storedLang()];

    var inner = document.createElement("div");
    inner.className = "container";
    inner.appendChild(link);

    var footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.appendChild(inner);
    document.body.appendChild(footer);

    document.addEventListener("i18n:updated", function (e) {
      var lang = (e.detail && e.detail.lang) || storedLang();
      link.textContent = LABELS[lang] || LABELS.en;
    });
  });
})();

/* Register the caching service worker (see /sw.js). Resolved relative to the
   site root via data-root so it works under a subpath (e.g. GitHub Pages). */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    var root = (document.body && document.body.getAttribute("data-root")) || "./";
    navigator.serviceWorker.register(root + "sw.js").catch(function () { /* caching is optional */ });
  });
}
