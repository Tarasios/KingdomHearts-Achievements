/* =====================================================================
   KH.Page — the shared page lifecycle every page script used to hand-roll:

       document.addEventListener('DOMContentLoaded', async function () {
         await i18n.init();
         ...build + render...
         document.addEventListener('i18n:updated', rerender);
         window.addEventListener('storage', rerender);
       });

   Two ways to use it (both boot on DOMContentLoaded and run main() after
   the page's lang JSON has loaded):

     subclass — pages with real state/behavior:
         KH.Page.boot(class extends KH.Page {
           main() { ...build + first render... }
           onLanguageChange() { ...re-render in the new language... }
           onStorage(event)  { ...reflect another tab's change... }
         });

     composition — pages that keep their logic in one closure:
         KH.Page.boot({ async main() { ... } });

   The onLanguageChange / onStorage hooks are OPTIONAL: they are only
   wired when defined, so a page that manages its own listeners (e.g. the
   melding calculator) can adopt boot()/main() without double-wiring.
   `this.translate` / `this.format` wrap the shared i18n instance.
   Depends on js/kh-common.js (the KH namespace) and js/i18n.js.
   ===================================================================== */
KH.Page = class {
  constructor() {
    this.translate = (key) => i18n.getMessage(key);
    this.format = (key, ...args) => i18n.format(key, ...args);
  }

  /* i18n first (so main() renders in the right language), then the page,
     then the optional live-update hooks. */
  async start() {
    await i18n.init();
    await this.main();
    if (this.onLanguageChange) document.addEventListener("i18n:updated", () => this.onLanguageChange());
    if (this.onStorage) window.addEventListener("storage", event => this.onStorage(event));
  }

  /* Build the page and render it once. Base pages (tools, credits) are
     static HTML filled by i18n, so the default is intentionally empty. */
  main() {}

  /* Boot a subclass (constructor) or a spec object ({ main, ... }). */
  static boot(spec) {
    const start = () => {
      const page = typeof spec === "function" ? new spec() : Object.assign(new KH.Page(), spec);
      page.start();
    };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
    else start();
  }
};
