/* =====================================================================
   Site chrome, shared by every page: the header nav (built here from ONE
   menu definition instead of being copy-pasted into each HTML file), the
   Games dropdown behavior, the Credits footer, and the service-worker
   registration.

   Pages carry only a placeholder:  <nav id="site-nav"></nav>
   The nav is built synchronously at script-eval time — this file sits at
   the end of <body>, so the placeholder is already parsed but
   DOMContentLoaded has not fired yet. That ordering matters: theme.js
   wires #themeToggle and i18n fills #logo-name on/after DOMContentLoaded,
   so both find the injected elements.

   To add a game to the menu, edit GAMES_MENU below — one place, every
   page. Game titles are proper nouns (kept in English by site policy);
   all other visible text still comes from the lang JSONs by element id.
   ===================================================================== */

/* ---------- header nav (from the GAMES_MENU definition) ---------- */
(function () {
  var GAMES_MENU = [
    { label: "Kingdom Hearts Final Mix", page: "tools/kh1-tracker.html" },
    { label: "Re:Chain of Memories", page: "tools/kh-com-tracker.html" },
    { label: "Kingdom Hearts II", page: "tools/kh2-tracker.html" },
    {
      label: "Birth by Sleep", page: "tools/kh-bbs-tracker.html",
      sub: [{ label: "Melding Calculator", page: "tools/kh-melding.html" }]
    },
    {
      label: "Dream Drop Distance", page: "tools/kh-ddd-tracker.html",
      sub: [{ label: "Dream Guide", page: "tools/kh-dream-guide.html" }]
    },
    { label: "Kingdom Hearts 0.2", page: "tools/kh02-tracker.html" },
    { label: "Kingdom Hearts III", page: "tools/kh3-tracker.html" }
  ];

  var host = document.getElementById("site-nav");
  if (!host || host.children.length) return;
  var root = (document.body && document.body.getAttribute("data-root")) || "./";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }
  function caret(glyph) {
    var span = el("span", "caret", glyph);
    span.setAttribute("aria-hidden", "true");
    return span;
  }
  function gameLink(item) {
    var anchor = el("a", null, item.label + (item.sub ? " " : ""));
    anchor.href = root + item.page;
    if (item.sub) anchor.appendChild(caret("▸"));
    return anchor;
  }

  var logo = el("a", "logo");
  logo.id = "logo-name"; // filled from the page's lang JSON
  logo.href = root;

  var menuBtn = el("button", "nav-menu-btn", "Games ");
  menuBtn.id = "games-menu-btn";
  menuBtn.type = "button";
  menuBtn.setAttribute("aria-haspopup", "true");
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.appendChild(caret("▾"));

  var menu = el("ul", "nav-menu");
  menu.id = "games-menu";
  GAMES_MENU.forEach(function (item) {
    var row = el("li", item.sub ? "has-submenu" : null);
    row.appendChild(gameLink(item));
    if (item.sub) {
      var subList = el("ul", "nav-submenu");
      item.sub.forEach(function (subItem) {
        var subRow = el("li");
        subRow.appendChild(gameLink(subItem));
        subList.appendChild(subRow);
      });
      row.appendChild(subList);
    }
    menu.appendChild(row);
  });

  var menuHolder = el("li", "has-menu");
  menuHolder.appendChild(menuBtn);
  menuHolder.appendChild(menu);
  var links = el("ul", "nav-links");
  links.appendChild(menuHolder);

  var themeBtn = el("button", "theme-btn");
  themeBtn.id = "themeToggle";
  themeBtn.type = "button";
  var themeIcon = el("span", "theme-icon");
  themeIcon.id = "theme-icon";
  themeIcon.setAttribute("aria-hidden", "true");
  var themeText = el("span", "theme-text");
  themeText.id = "theme-text";
  themeBtn.appendChild(themeIcon);
  themeBtn.appendChild(themeText);
  var themeBox = el("div", "theme-toggle");
  themeBox.appendChild(themeBtn);

  var right = el("div", "nav-right");
  right.appendChild(links);
  right.appendChild(themeBox);
  var content = el("div", "nav-content");
  content.appendChild(logo);
  content.appendChild(right);
  var container = el("div", "container");
  container.appendChild(content);
  host.appendChild(container);
})();

/* =====================================================================
   Games dropdown — open on hover with intent, or on click (touch).
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
  document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector("footer.site-footer")) return;
    var root = (document.body && document.body.getAttribute("data-root")) || "./";

    var link = document.createElement("a");
    link.className = "footer-credits-link";
    // i18n fills the label from the page JSON's "footer-credits" key (and
    // re-fills it on language switch); the default only shows if a page's
    // JSON is missing the key.
    link.id = "footer-credits";
    link.href = root + "credits.html";
    link.textContent = "Credits";

    var inner = document.createElement("div");
    inner.className = "container";
    inner.appendChild(link);

    var footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.appendChild(inner);
    document.body.appendChild(footer);
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
