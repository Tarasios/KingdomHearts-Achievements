/* =====================================================================
   Shared progress import/export for the Kingdom Hearts tools.
   Included on every KH tool page after its main script; injects an
   Export / Import bar under the page header. Exports every
   localStorage key belonging to a KH tool (all games at once) so a
   backup made on one page restores the whole site — useful when
   moving to another browser, machine or domain.
   Labels come from the page's lang JSON (kp-* keys).
   ===================================================================== */

(function () {
  // every KH tool storage key starts with one of these
  const KEY_RE = /^(bbs_|khcom_|kh1_|kh2_|khddd_|kh02_|kh3_)/;
  const FORMAT = "kh-tools-progress";

  function collect() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (KEY_RE.test(key)) data[key] = localStorage.getItem(key);
    }
    return data;
  }

  function doExport() {
    const payload = { format: FORMAT, version: 1, exported: new Date().toISOString(), data: collect() };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "kh-progress-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    setTimeout(() => { URL.revokeObjectURL(downloadLink.href); downloadLink.remove(); }, 500);
  }

  function doImport(file, translate) {
    file.text().then(text => {
      const parsed = JSON.parse(text);
      const data = (parsed && parsed.format === FORMAT && parsed.data) ? parsed.data
        : (parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : null); // tolerate a bare key map
      if (!data) throw new Error("bad format");
      const entries = Object.entries(data).filter(([key, value]) => KEY_RE.test(key) && typeof value === "string");
      if (!entries.length) throw new Error("no keys");
      if (!confirm(translate("kp-import-confirm"))) return;
      entries.forEach(([key, value]) => { try { localStorage.setItem(key, value); } catch (e) { /* quota/private */ } });
      location.reload();
    }).catch(() => alert(translate("kp-import-error")));
  }

  function build() {
    const header = document.querySelector(".kh .kh-header");
    if (!header || document.getElementById("kp-bar")) return;
    // i18n is a lexical global from i18n.js (loaded before this script),
    // not a window property — reference it directly, like the page scripts.
    const translate = (key) => (typeof i18n !== "undefined" ? i18n.getMessage(key) : key);

    const barEl = document.createElement("div");
    barEl.className = "kp-bar";
    barEl.id = "kp-bar";

    const exportBtn = document.createElement("button");
    exportBtn.className = "clearbtn";
    exportBtn.id = "kp-export-btn";
    exportBtn.onclick = doExport;

    const importBtn = document.createElement("button");
    importBtn.className = "clearbtn";
    importBtn.id = "kp-import-btn";
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "application/json,.json";
    fileInput.style.display = "none";
    fileInput.addEventListener("change", () => { if (fileInput.files[0]) doImport(fileInput.files[0], translate); fileInput.value = ""; });
    importBtn.onclick = () => fileInput.click();

    const note = document.createElement("span");
    note.className = "kp-note";
    note.id = "kp-note";

    function label() {
      exportBtn.textContent = translate("kp-export");
      importBtn.textContent = translate("kp-import");
      note.textContent = translate("kp-note");
    }
    label();
    document.addEventListener("i18n:updated", label);

    barEl.appendChild(exportBtn);
    barEl.appendChild(importBtn);
    barEl.appendChild(note);
    barEl.appendChild(fileInput);
    header.appendChild(barEl);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
