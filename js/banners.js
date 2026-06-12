/* =====================================================================
   Per-game banner images. Banner figures start hidden (.banner is
   display:none in css/main.css) and are revealed only when their image
   actually loads — so a missing file leaves no broken-image icon. Drop
   a matching file into images/banners/ to make a banner appear; see
   images/banners/README.md for the expected names.
   ===================================================================== */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img.banner-img").forEach(function (img) {
    var fig = img.closest(".banner") || img;
    function show() { fig.style.display = ""; }
    function hide() { fig.style.display = "none"; }
    img.addEventListener("load", show);
    img.addEventListener("error", hide);
    if (img.complete) { if (img.naturalWidth > 0) show(); else hide(); }
  });
});
