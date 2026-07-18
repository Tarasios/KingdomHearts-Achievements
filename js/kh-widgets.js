/* =====================================================================
   Shared tracker UI widgets — the interface pieces that were duplicated
   between the generic engine (js/kh-tracker.js) and the BBS engine
   (js/kh-bbs-tracker.js). Everything i18n-dependent takes ready-made
   text: the engines resolve their own gt-… / bt-… keys and pass strings,
   so this file needs no i18n knowledge.

   KH.Popover          — the hover/focus popover for journal tiles
                         (one absolutely-positioned node per page).
   KH.MilestoneToaster — diffs a computed milestone set between renders
                         and toasts only newly-completed ones; the first
                         compute seeds silently so nothing fires on load.
   KH.widgets.setCount        — a panel's "x / y" badge + progress bar.
   KH.widgets.toolbar         — filter input, hide-done toggle, count
                                badge + bar, optional reset button.
   KH.widgets.viewToggle      — the Checklist | Journal segmented control.
   KH.widgets.syncCharButtons — active-character buttons + page accent.
   KH.widgets.entryTable      — the Worlds-summary checkbox table.
   Depends on js/kh-common.js (KH.el / KH.esc / KH.fmtText / KH.toast).
   ===================================================================== */
(function () {
  const { el, esc, fmtText, toast } = KH;

  /* ---------- hover popover (journal tiles) ---------- */
  class Popover {
    constructor() {
      this.node = null;
      // Capture-phase scroll hide: the tile under the pointer moves away.
      window.addEventListener("scroll", () => this.hide(), true);
    }
    element() {
      if (!this.node) {
        this.node = el("div", "kh-pop");
        this.node.setAttribute("aria-hidden", "true");
        document.body.appendChild(this.node);
      }
      return this.node;
    }
    show(anchor) {
      const pop = this.element();
      pop.innerHTML = anchor.dataset.pop || "";
      pop.classList.add("open");
      pop.setAttribute("aria-hidden", "false");
      const rect = anchor.getBoundingClientRect(), width = pop.offsetWidth, height = pop.offsetHeight, margin = 8;
      pop.style.left = Math.max(margin, Math.min(rect.left + rect.width / 2 - width / 2, window.innerWidth - width - margin)) + "px";
      let top = rect.top - height - 8;
      if (top < margin) top = rect.bottom + 8;
      pop.style.top = top + "px";
    }
    hide() {
      if (this.node) { this.node.classList.remove("open"); this.node.setAttribute("aria-hidden", "true"); }
    }
    /* Attach show/hide to every [data-pop] node in a container. */
    wire(container) {
      container.querySelectorAll("[data-pop]").forEach(node => {
        node.addEventListener("mouseenter", () => this.show(node));
        node.addEventListener("mouseleave", () => this.hide());
        node.addEventListener("focus", () => this.show(node));
        node.addEventListener("blur", () => this.hide());
      });
    }
  }

  /* ---------- completion toasts ---------- */
  class MilestoneToaster {
    /* compute() returns a Map of milestone key -> { text, icon }. */
    constructor(compute) {
      this.compute = compute;
      this.previous = null;
    }
    check() {
      const current = this.compute();
      if (this.previous) current.forEach((milestone, key) => {
        if (!this.previous.has(key)) toast(milestone.text, milestone.icon);
      });
      this.previous = new Set(current.keys());   // first run seeds without toasting
    }
  }

  const widgets = {
    /* Update a panel's count badge ("x / y" text comes pre-formatted) and
       its mini progress bar. */
    setCount(panel, done, total, countText) {
      panel.count.textContent = countText;
      panel.bar.className = "dashbar" + (done >= total && total > 0 ? " full" : "");
      panel.bar.firstChild.style.width = (total ? Math.round(100 * done / total) : 0) + "%";
    },

    /* Panel toolbar. spec:
         state    — { q, hide } (mutated in place; persists across renders)
         labels   — { filter, hideDone }
         onChange — re-render callback for filter/hide changes
         reset?   — { label, confirm, onReset }
       Returns { toolbar, count, bar } (count/bar feed setCount). */
    toolbar(spec) {
      const bar = el("div", "toolbar");
      const filterInput = el("input");
      filterInput.type = "text";
      filterInput.placeholder = spec.labels.filter;
      filterInput.style.maxWidth = "240px";
      filterInput.value = spec.state.q;
      filterInput.addEventListener("input", () => { spec.state.q = filterInput.value.trim(); spec.onChange(); });
      const hideLabel = el("label", "hidelbl");
      const hideToggle = el("input", "chk");
      hideToggle.type = "checkbox";
      hideToggle.checked = spec.state.hide;
      hideToggle.addEventListener("change", () => { spec.state.hide = hideToggle.checked; spec.onChange(); });
      hideLabel.appendChild(hideToggle);
      hideLabel.appendChild(document.createTextNode(" " + spec.labels.hideDone));
      const countBadge = el("span", "countbadge");
      const progressBar = el("span", "dashbar");
      progressBar.appendChild(el("i"));
      bar.appendChild(filterInput);
      bar.appendChild(hideLabel);
      bar.appendChild(countBadge);
      bar.appendChild(progressBar);
      if (spec.reset) {
        const resetBtn = el("button", "clearbtn", spec.reset.label);
        resetBtn.onclick = () => { if (confirm(spec.reset.confirm)) spec.reset.onReset(); };
        bar.appendChild(resetBtn);
      }
      return { toolbar: bar, count: countBadge, bar: progressBar };
    },

    /* Checklist | Journal segmented control. spec:
         on       — journal currently active
         labels   — { checklist, journal }
         onChange(journalOn) — persist + re-render */
    viewToggle(spec) {
      const seg = el("div", "viewseg");
      const checklistBtn = el("button", "viewbtn" + (spec.on ? "" : " on"), spec.labels.checklist);
      const journalBtn = el("button", "viewbtn" + (spec.on ? " on" : ""), spec.labels.journal);
      const select = journalOn => {
        checklistBtn.classList.toggle("on", !journalOn);
        journalBtn.classList.toggle("on", journalOn);
        spec.onChange(journalOn);
      };
      checklistBtn.onclick = () => select(false);
      journalBtn.onclick = () => select(true);
      seg.appendChild(checklistBtn);
      seg.appendChild(journalBtn);
      return seg;
    },

    /* Reflect the active character on the char-bar buttons and drive the
       per-character page accent (data-char on <html>). */
    syncCharButtons(activeChar) {
      document.querySelectorAll(".charbtn").forEach(btn => btn.classList.toggle("on", btn.dataset.c === activeChar));
      if (activeChar) document.documentElement.setAttribute("data-char", activeChar);
      else document.documentElement.removeAttribute("data-char");
    },

    /* Journal (in-game grid) view: an ordered grid of square tiles
       (perRow wide) grouped like the checklist, with group headers
       carrying a done-count. Owned tiles can show an icon; unowned tiles
       show the default "missing" tile. Hovering shows the popover;
       clicking toggles owned. Tile order matches the data so positions
       line up with the in-game collection. spec:
         items, perRow, query, tileExtra?          — list + layout
         hideDone?                                 — drop fully-owned groups
         skip?(item)                               — hide ineligible items
         groupOf(item)                             — group header text
         owned(item, index) / toggle(item, index)  — state + click
         readonly?(item, index) -> tip | null      — auto rows lock
         ownedTile?(item) -> { src?, classes?, fill? } | null
         tip(item, owned, index) -> popover html
         ariaLabel?(item, index)                   — defaults to item.name
         haystack(item, index)                     — filter text
       `popover` is the page's KH.Popover (wired onto the grid). */
    journalGrid(container, spec, popover) {
      const perRow = spec.perRow || 9;
      const query = (spec.query || "").toLowerCase();
      const groups = []; let cur = null;
      spec.items.forEach((item, index) => {
        if (spec.skip && spec.skip(item)) return;
        const g = spec.groupOf(item) || "";
        if (!cur || cur.g !== g) { cur = { g, rows: [] }; groups.push(cur); }
        cur.rows.push({ item, index });
      });
      const wrap = el("div", "jrnl");
      wrap.style.setProperty("--jrnl-cols", perRow);
      groups.forEach(group => {
        let done = 0;
        const rows = group.rows.map(({ item, index }) => {
          const owned = spec.owned(item, index);
          if (owned) done++;
          return { item, index, owned };
        });
        // "Hide completed" hides whole finished groups (worlds); individual
        // owned tiles always stay, so positions match the in-game journal.
        if (spec.hideDone && rows.length && done === rows.length) return;
        const grid = el("div", "jrnl-grid");
        rows.forEach(({ item, index, owned }) => {
          const tile = el("button", "jrnl-tile " + (owned ? "owned" : "unowned") + (spec.tileExtra ? " " + spec.tileExtra : ""));
          tile.type = "button";
          tile.dataset.pop = spec.tip(item, owned, index);
          tile.setAttribute("aria-pressed", owned ? "true" : "false");
          tile.setAttribute("aria-label", spec.ariaLabel ? spec.ariaLabel(item, index) : item.name);
          if (spec.ownedTile && owned) {
            const t = spec.ownedTile(item);
            if (t && t.classes) t.classes.forEach(cls => tile.classList.add(cls));
            if (t && t.src) {
              const img = el("img", "jrnl-ic" + (t.fill ? " fill" : ""));
              img.src = t.src; img.alt = "";
              tile.appendChild(img);
            }
          }
          const readonlyTip = spec.readonly && spec.readonly(item, index);
          if (readonlyTip) { tile.disabled = true; tile.classList.add("auto"); tile.title = readonlyTip; }
          else tile.onclick = () => spec.toggle(item, index);
          if (query && !spec.haystack(item, index).toLowerCase().includes(query)) tile.classList.add("dim");
          grid.appendChild(tile);
        });
        if (group.g) {
          const head = el("div", "jrnl-whead");
          head.appendChild(el("span", "jrnl-wname", fmtText(group.g)));
          head.appendChild(el("span", "jrnl-wcount", `${done} / ${group.rows.length}`));
          wrap.appendChild(head);
        }
        wrap.appendChild(grid);
      });
      container.appendChild(wrap);
      popover.wire(wrap);
    },

    /* Worlds-summary entry table: one checkbox row per collectible. Each
       entry: { done, name, where, onToggle?, swatch?: {c, t},
                auto?: {tip, label?} } — auto rows are read-only. */
    entryTable(entries) {
      const table = el("table", "wtable"), tbody = el("tbody");
      entries.forEach(entry => {
        const row = el("tr", entry.done ? "donerow" : null);
        const cell = el("td", "chkcell"), checkbox = el("input", "chk");
        checkbox.type = "checkbox";
        checkbox.checked = entry.done;
        if (entry.auto) { checkbox.disabled = true; checkbox.title = entry.auto.tip; }
        else checkbox.addEventListener("change", entry.onToggle);
        cell.appendChild(checkbox);
        row.appendChild(cell);
        let nameHtml = "";
        if (entry.swatch) nameHtml += `<span class="wswatch" style="background:${entry.swatch.c}"${entry.swatch.t ? ` title="${esc(entry.swatch.t)}" tabindex="0"` : ""}></span>`;
        nameHtml += `<span class="itemname">${fmtText(entry.name)}</span>`;
        if (entry.auto && entry.auto.label) nameHtml += ` <span class="srcbadge" title="${entry.auto.tip}">${entry.auto.label}</span>`;
        row.appendChild(el("td", null, nameHtml));
        row.appendChild(el("td", null, fmtText(entry.where)));
        tbody.appendChild(row);
      });
      table.appendChild(tbody);
      return table;
    }
  };

  KH.Popover = Popover;
  KH.MilestoneToaster = MilestoneToaster;
  KH.widgets = widgets;
})();
