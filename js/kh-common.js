/* =====================================================================
   Shared helpers for the Kingdom Hearts tools — the small utilities that
   used to be copy-pasted into js/kh-tracker.js, js/kh-bbs-tracker.js,
   js/kh-melding.js and js/landing.js. Loaded (as a plain <script>) before
   any of those, it publishes a single global `KH`; each consumer pulls in
   what it needs, e.g.

       const { el, esc, fmtText, chip, bar, toast } = KH;

   so existing call sites read exactly as before.

   What lives here, and where to look when you want to change it:
     el(tag, className, html)   — create one element (className/html optional)
     esc(text)                  — HTML-escape & < > " (for text + attributes)
     ICON_BASE / fmtText(text)  — inline markup shared by the lang strings:
                                    {{icon}}      -> images/icons/icon.png
                                    [[text|tip]]  -> hover tooltip span
                                    [text](url)   -> safe external link
     chip(done, total)          — "x / y" progress pill (.prgchip)
     bar(done, total)           — number + mini progress bar (.dashbar)
     toast(text, icon)          — bottom-corner completion toast
     BBS_CHARS / BBS_CHAR_LABEL — the three Birth by Sleep characters,
                                  shared by the BBS tracker, melding
                                  calculator and landing-page summary.
     KEYS                       — every cross-file localStorage key (and
                                  the export/sync prefix regex) in ONE
                                  place. Per-game progress keys still live
                                  in each game's data module (storeKey).
   Game DATA still lives in the per-game js/kh-*-tracker-data.js modules;
   this file is purely presentation/util glue.
   ===================================================================== */
window.KH = (function () {
  /* ---------- DOM + text ---------- */
  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }
  function esc(text) {
    return String(text == null ? "" : text).replace(/[&<>"]/g,
      ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
  }

  /* Inline markup recognised in any lang string (everything else escaped),
     so an icon, tooltip or link can be added by editing the lang file only:
       {{name}}        -> small inline icon  images/icons/name.png
       [[text|tip]]    -> <span title="tip"> (hover for more info)
       [text](url)     -> external link (http(s)/root/anchor URLs only). */
  // Resolved via data-root so icons work from the root AND tools/ pages.
  const ICON_BASE = ((document.body && document.body.dataset.root) || "./") + "images/icons/";
  function fmtText(text) {
    text = String(text == null ? "" : text);
    const markup = /\{\{\s*([\w-]+)\s*\}\}|\[\[([^\]|]+)\|([^\]]+)\]\]|\[([^\]|]+)\]\(([^)\s]+)\)/g;
    let html = "", lastIndex = 0, match;
    while ((match = markup.exec(text))) {
      html += esc(text.slice(lastIndex, match.index));
      if (match[1] != null) {
        html += `<img class="hdricon" src="${ICON_BASE}${match[1]}.png" alt="">`;
      } else if (match[2] != null) {
        html += `<span class="hasinfo" title="${esc(match[3].trim())}" tabindex="0">${esc(match[2].trim())}</span>`;
      } else {
        const url = match[5].trim();
        const safeUrl = /^(https?:\/\/|\/|#)/.test(url) ? url : "#";
        html += `<a href="${esc(safeUrl)}" target="_blank" rel="noopener noreferrer">${esc(match[4].trim())}</a>`;
      }
      lastIndex = markup.lastIndex;
    }
    return html + esc(text.slice(lastIndex));
  }

  /* ---------- progress widgets ---------- */
  function chip(done, total) {
    return `<span class="prgchip${done >= total && total > 0 ? " full" : ""}">${done} / ${total}</span>`;
  }
  function bar(done, total) {
    const percent = total ? Math.round(100 * done / total) : 0;
    return `<span class="dashnum">${done} / ${total}</span>`
      + `<span class="dashbar${done >= total && total > 0 ? " full" : ""}"><i style="width:${percent}%"></i></span>`;
  }

  /* ---------- completion toast ---------- */
  function toast(text, icon) {
    let host = document.getElementById("kh-toasts");
    if (!host) { host = el("div"); host.id = "kh-toasts"; document.body.appendChild(host); }
    const node = el("div", "kh-toast");
    node.innerHTML = `<span class="kh-toast-ic">${icon || "✅"}</span><span>${esc(text)}</span>`;
    host.appendChild(node);
    requestAnimationFrame(() => node.classList.add("show"));
    setTimeout(() => { node.classList.add("hide"); setTimeout(() => node.remove(), 450); }, 4600);
  }

  /* ---------- Birth by Sleep characters (shared by 3 BBS scripts) ---------- */
  const BBS_CHARS = ["terra", "ventus", "aqua"];
  const BBS_CHAR_LABEL = { terra: "Terra", ventus: "Ventus", aqua: "Aqua" };

  /* ---------- localStorage keys shared across files ----------
     RE matches every progress key the export/import bar and the
     cross-origin sync move between browsers — extend it when a new game
     prefix is added. The named keys are the ones read/written by more
     than one script; single-owner keys stay next to their owner. */
  const KEYS = {
    RE: /^(bbs_|khcom_|kh1_|kh2_|khddd_|kh02_|kh3_)/,
    MELD: "bbs_meld_tracker_v1",        // melding calculator <-> BBS tracker
    MELD_CHAR: "bbs_meld_tracker_v1_char",
    BBS_PROGRESS: "bbs_progress_v1",
    BBS_VIEW: "bbs_view_v1",
    BBS_TOTALS: "bbs_totals_v1",        // BBS tracker -> landing summary
    DDD_GUIDE: "khddd_guide_v1",
    LANG: "preferred-language",
    THEME: "preferred-theme",
    view: storeKey => storeKey + ":view" // per-tab checklist/journal mode
  };

  return { el, esc, ICON_BASE, fmtText, chip, bar, toast, BBS_CHARS, BBS_CHAR_LABEL, KEYS };
})();
