/* =====================================================================
   Header Games dropdown — touch/click + keyboard support.
   On desktop the menu opens on hover/focus (pure CSS). For touch
   devices (no hover) this toggles an `.open` class on click, and closes
   it on outside-click or Escape. The Birth by Sleep submenu (Melding
   Calculator) shows inline while the menu is open on mobile (see the
   mobile rules in css/main.css).
   ===================================================================== */
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("games-menu-btn");
  if (!btn) return;
  var li = btn.closest(".has-menu");
  if (!li) return;

  function setOpen(open) {
    li.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    setOpen(!li.classList.contains("open"));
  });

  document.addEventListener("click", function (e) {
    if (!li.contains(e.target)) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
});
