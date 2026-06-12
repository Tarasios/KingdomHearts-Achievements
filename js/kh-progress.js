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
      const k = localStorage.key(i);
      if (KEY_RE.test(k)) data[k] = localStorage.getItem(k);
    }
    return data;
  }

  function doExport() {
    const payload = { format: FORMAT, version: 1, exported: new Date().toISOString(), data: collect() };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "kh-progress-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  function doImport(file, t) {
    file.text().then(text => {
      const o = JSON.parse(text);
      const data = (o && o.format === FORMAT && o.data) ? o.data
        : (o && typeof o === "object" && !Array.isArray(o) ? o : null); // tolerate a bare key map
      if (!data) throw new Error("bad format");
      const entries = Object.entries(data).filter(([k, v]) => KEY_RE.test(k) && typeof v === "string");
      if (!entries.length) throw new Error("no keys");
      if (!confirm(t("kp-import-confirm"))) return;
      entries.forEach(([k, v]) => { try { localStorage.setItem(k, v); } catch (e) { /* quota/private */ } });
      location.reload();
    }).catch(() => alert(t("kp-import-error")));
  }

  function build() {
    const header = document.querySelector(".kh .kh-header");
    if (!header || document.getElementById("kp-bar")) return;
    // i18n is a lexical global from i18n.js (loaded before this script),
    // not a window property — reference it directly, like the page scripts.
    const t = (key) => (typeof i18n !== "undefined" ? i18n.getMessage(key) : key);

    const bar = document.createElement("div");
    bar.className = "kp-bar";
    bar.id = "kp-bar";

    const exp = document.createElement("button");
    exp.className = "clearbtn";
    exp.id = "kp-export-btn";
    exp.onclick = doExport;

    const imp = document.createElement("button");
    imp.className = "clearbtn";
    imp.id = "kp-import-btn";
    const file = document.createElement("input");
    file.type = "file";
    file.accept = "application/json,.json";
    file.style.display = "none";
    file.addEventListener("change", () => { if (file.files[0]) doImport(file.files[0], t); file.value = ""; });
    imp.onclick = () => file.click();

    const note = document.createElement("span");
    note.className = "kp-note";
    note.id = "kp-note";

    function label() {
      exp.textContent = t("kp-export");
      imp.textContent = t("kp-import");
      note.textContent = t("kp-note");
    }
    label();
    document.addEventListener("i18n:updated", label);

    bar.appendChild(exp);
    bar.appendChild(imp);
    bar.appendChild(note);
    bar.appendChild(file);
    header.appendChild(bar);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
