/* =====================================================================
   DOM-free completion counting — THE single implementation of what
   "done" means, shared by the tracker engine (live dashboard, toolbar
   counts, milestones) and the landing summary (js/kh-summary.js). It
   used to live as hand-kept mirrored copies in js/kh-tracker.js and
   js/kh-summary.js; any change to a counting rule now happens here once.

   KH.GameCounter — counting over a TRACKER_GAME config (the generic
   engine's schema: tabs → sections → items, variants, multi-checks,
   counters, cross-section autoChecks, trophy references).

   A counter binds a game config to a STORE SOURCE, not to a store:
     new KH.GameCounter(game, () => stores, { textOf })
   `stores` is the all-sections progress object ({ sectionId: {...} }).
   The engine passes its live store handle; the summary passes a
   just-parsed localStorage snapshot. The optional `textOf(storeId,
   index, key, item)` hook resolves item text through the lang file
   (the engine's cellText) for trophy `match` filters; the default reads
   the raw data value.
   Depends on nothing but the game config shape (no DOM, no i18n).
   ===================================================================== */
(function () {

  class GameCounter {
    constructor(game, getStores, hooks) {
      this.game = game;
      this.stores = getStores;
      this.textOf = (hooks && hooks.textOf) || ((storeId, index, key, item) => item[key]);
    }

    /* ---------- config lookups ---------- */
    findSec(sectionId) {
      for (const tab of this.game.tabs) for (const section of tab.sections) if (section.id === sectionId) return section;
      return null;
    }
    findList(storeId) {
      for (const tab of this.game.tabs) for (const section of tab.sections) {
        if (section.variants) {
          for (const charId of Object.keys(section.variants)) if (section.id + "-" + charId === storeId) return section.variants[charId] || [];
        } else if (section.id === storeId) return section.items;
      }
      return null;
    }

    /* ---------- per-item state ----------
       The first check keeps the bare item index as its store key
       (backward-compatible "done"); extra checks are keyed "<i>::<k>". */
    checkKey(index, checkId, checkIndex) { return checkIndex === 0 ? String(index) : index + "::" + checkId; }
    isChecked(store, index, section, checkIndex) {
      const checks = section && section.checks;
      return checks ? !!store[this.checkKey(index, checks[checkIndex].k, checkIndex)] : !!store[index];
    }
    /* An item opts a check OUT by setting that check's key to false in
       the data (e.g. a Spirit-only Dream Eater carries nightmare:false). */
    checkApplies(item, check) { return item[check.k] !== false; }
    /* Counter sections track 0..max copies; a legacy `true` (an item
       completed before the section became a counter) counts as maxed. */
    itemMax(item) { const max = +item.max; return max > 0 ? max : 1; }
    counterValue(store, index, item) {
      const raw = store[index];
      if (raw === true) return this.itemMax(item);
      return Math.min(Math.max(+raw || 0, 0), this.itemMax(item));
    }
    /* Items tagged c only count/show for that character; with no charId
       filter (dashboard/overall totals) everything counts. */
    itemVisible(item, charId) { return !item.c || !charId || item.c === charId; }

    /* ---------- cross-section auto-completion ----------
       game.autoChecks: [{from, check, to, map, toKey?}] — an item in the
       `to` section counts as done when the mapped `from` mission has its
       `check` set. Returns the source mission's name (for the tooltip),
       or null. */
    autoSource(section, item) {
      if (!this.game.autoChecks) return null;
      for (const rule of this.game.autoChecks) {
        if (rule.to !== section.id) continue;
        const sourceSec = this.findSec(rule.from), sourceStore = this.stores()[rule.from] || {};
        if (!sourceSec) continue;
        for (const mission in rule.map) {
          if (rule.map[mission] !== item[rule.toKey || "name"]) continue;
          const checkIndex = rule.check ? sourceSec.checks.findIndex(c => c.k === rule.check) : 0;
          if (checkIndex < 0) continue;
          // Any source row with this name being checked counts (a minigame can
          // have several challenge rows; clearing any of them completes it).
          for (let sourceIndex = 0; sourceIndex < (sourceSec.items || []).length; sourceIndex++) {
            if (sourceSec.items[sourceIndex].name === mission && this.isChecked(sourceStore, sourceIndex, sourceSec, checkIndex)) return mission;
          }
        }
      }
      return null;
    }
    autoDone(section, item) { return !!this.autoSource(section, item); }

    /* ---------- counting ---------- */
    /* Count one list (a resolved section view {section, storeId, items,
       charId?}). Handles counter sections (each item contributes its max),
       multi-check sections (every applicable check counts) and
       cross-section auto-completion. */
    entryCount(view) {
      const section = view.section, store = this.stores()[view.storeId] || {};
      const checks = section && section.checks, charId = view.charId || null;
      let done = 0, total = 0;
      (view.items || []).forEach((item, index) => {
        if (!this.itemVisible(item, charId)) return;
        if (section && section.counter) { total += this.itemMax(item); done += this.counterValue(store, index, item); }
        else if (checks) checks.forEach((check, checkIndex) => { if (!this.checkApplies(item, check)) return; total++; if (store[this.checkKey(index, check.k, checkIndex)]) done++; });
        else { total++; if (store[index] || this.autoDone(section, item)) done++; }
      });
      return [done, total];
    }
    /* Site total: every store counted once, unfiltered (c-tagged items are
       each completable by exactly one character). */
    overallCount() {
      const chars = this.game.chars || [];
      let done = 0, total = 0;
      this.game.tabs.forEach(tab => tab.sections.forEach(section => {
        if (section.variants) {
          chars.forEach(character => {
            const [secDone, secTotal] = this.entryCount({ section, storeId: section.id + "-" + character.id, items: section.variants[character.id] || [] });
            done += secDone; total += secTotal;
          });
        } else {
          const [secDone, secTotal] = this.entryCount({ section, storeId: section.id, items: section.items });
          done += secDone; total += secTotal;
        }
      }));
      return [done, total];
    }
    /* Achievement (platform-trophy) progress only — the trophies-flagged
       sections — as opposed to full 100% completion. */
    achievementsCount() {
      let done = 0, total = 0;
      this.game.tabs.forEach(tab => tab.sections.forEach(section => {
        if (!section.trophies) return;
        const [secDone, secTotal] = this.entryCount({ section, storeId: section.id, items: section.items });
        done += secDone; total += secTotal;
      }));
      return [done, total];
    }

    /* Progress for a trophy: a whole section (string storeId), an array of
       those (summed), or a filtered subset
       { section, nameStartsWith?, nameEndsWith?, itemHas?, itemNot?,
         match?:{field,value}, check?, perGroup? }. */
    trophyProgress(ref) {
      if (Array.isArray(ref)) {   // sum several sections (e.g. the whole Synthesis tab)
        let done = 0, total = 0;
        ref.forEach(part => { const progress = this.trophyProgress(part); if (progress) { done += progress[0]; total += progress[1]; } });
        return [done, total];
      }
      if (typeof ref === "string") {
        const items = this.findList(ref);
        return items ? this.entryCount({ section: this.findSec(ref), storeId: ref, items }) : null;
      }
      const section = this.findSec(ref.section);
      if (!section) return null;
      const store = this.stores()[ref.section] || {};
      const checkIndex = (ref.check !== undefined && section.checks) ? section.checks.findIndex(c => c.k === ref.check) : -1;
      const checkObj = checkIndex >= 0 ? section.checks[checkIndex] : null;
      const nameOk = item => {
        if (ref.nameStartsWith && !String(item.name).startsWith(ref.nameStartsWith)) return false;
        if (ref.nameEndsWith && !String(item.name).endsWith(ref.nameEndsWith)) return false;
        if (ref.itemHas) for (const k in ref.itemHas) if (item[k] !== ref.itemHas[k]) return false;   // include only matching items
        if (ref.itemNot) for (const k in ref.itemNot) if (item[k] === ref.itemNot[k]) return false;   // drop matching items (e.g. Nightmares: spirit:false)
        return true;
      };
      if (section.variants) {   // sum across every character variant (e.g. Secret Portals as both Sora and Riku)
        let done = 0, total = 0;
        for (const charId of Object.keys(section.variants)) {
          const sid = ref.section + "-" + charId, vstore = this.stores()[sid] || {};
          (section.variants[charId] || []).forEach((item, index) => {
            if (!nameOk(item)) return;
            if (ref.match && String(this.textOf(sid, index, ref.match.field, item) || "").indexOf(ref.match.value) < 0) return;
            if (ref.check !== undefined && (checkIndex < 0 || (checkObj && !this.checkApplies(item, checkObj)))) return;
            total++;
            const isDone = ref.check !== undefined ? !!vstore[this.checkKey(index, ref.check, checkIndex)] : (!!vstore[index] || this.autoDone(section, item));
            if (isDone) done++;
          });
        }
        return [done, total];
      }
      const itemDone = (item, index) => {
        if (ref.check !== undefined) return checkIndex >= 0 && this.checkApplies(item, checkObj) && !!store[this.checkKey(index, ref.check, checkIndex)];
        return !!store[index] || this.autoDone(section, item);
      };
      if (ref.perGroup) {
        const groupsDone = new Map();   // group -> any item done
        section.items.forEach((item, index) => {
          const groupName = item.g || item.name;
          groupsDone.set(groupName, groupsDone.get(groupName) || itemDone(item, index));
        });
        let done = 0;
        groupsDone.forEach(isDone => { if (isDone) done++; });
        return [done, groupsDone.size];
      }
      let done = 0, total = 0;
      section.items.forEach((item, index) => {
        if (!nameOk(item)) return;
        if (ref.match && String(this.textOf(ref.section, index, ref.match.field, item) || "").indexOf(ref.match.value) < 0) return;
        if (ref.check !== undefined && checkIndex < 0) return;
        if (ref.check !== undefined && checkObj && !this.checkApplies(item, checkObj)) return;   // skip items that lack this form
        total++; if (itemDone(item, index)) done++;
      });
      return [done, total];
    }
  }

  KH.GameCounter = GameCounter;
})();
