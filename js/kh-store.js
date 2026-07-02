/* =====================================================================
   localStorage-backed stores — the persistence layer both tracker
   engines, the melding calculator and the landing summary share. Every
   class here is DOM-free and guards every localStorage touch (private
   browsing throws; a corrupt value falls back to a blank store).

   The value SHAPES are the site's save-file format and must stay
   backward compatible:
     TrackerStore  { <sectionId>: { <itemIndex>: true|number,
                                    "<itemIndex>::<checkId>": true } }
                   (numbers are counter values; a legacy `true` in a
                   counter section means "full")
     BbsStore      { shared: {<section>: {i:true}},
                     missions: { done: {"i-char":true}, rank: {...} },
                     terra|ventus|aqua: {<section>: {i:true}} }
                   (loading migrates the old shared arena section into
                   every character so pre-split progress isn't lost)
     ViewStore     { <tabId>: "journal" }  — absent means checklist
     CharPref      a bare validated string (active character id)

   Consumers keep a direct handle on `.data` and mutate it, then call
   save() — mirroring how the engines have always worked. reload() picks
   up another tab's writes (the callers re-point their handle).
   Depends on js/kh-common.js (KH namespace, KH.BBS_CHARS).
   ===================================================================== */
(function () {

  class JsonStore {
    constructor(key) {
      this.key = key;
      this.data = this.load();
    }
    /* Shape of a fresh store; subclasses override. */
    blank() { return {}; }
    load() {
      try {
        const raw = localStorage.getItem(this.key);
        return raw ? JSON.parse(raw) : this.blank();
      } catch (e) { return this.blank(); }
    }
    save() {
      try { localStorage.setItem(this.key, JSON.stringify(this.data)); }
      catch (e) { /* private browsing: works, just won't persist */ }
    }
    reload() { this.data = this.load(); }
    reset() { this.data = this.blank(); this.save(); }
  }

  /* Generic-engine progress (one per game, at game.storeKey). */
  class TrackerStore extends JsonStore {
    section(storeId) {
      if (!this.data[storeId]) this.data[storeId] = {};
      return this.data[storeId];
    }
    /* Checked keys are deleted (not set false) so stores stay sparse. */
    toggle(sectionData, key) {
      if (sectionData[key]) delete sectionData[key];
      else sectionData[key] = true;
      this.save();
    }
    /* Counter items store a clamped number; 0 is removed. */
    setCount(sectionData, index, value, max) {
      value = Math.min(Math.max(value, 0), max);
      if (value <= 0) delete sectionData[index]; else sectionData[index] = value;
      this.save();
    }
  }

  /* Birth by Sleep progress (bbs_progress_v1) — nested per-character shape. */
  class BbsStore extends JsonStore {
    blank() {
      const store = { shared: {}, missions: { done: {}, rank: {} } };
      BbsStore.SHARED_SECTIONS.forEach(section => { store.shared[section] = {}; });
      KH.BBS_CHARS.forEach(char => {
        store[char] = {};
        BbsStore.PER_CHAR_SECTIONS.forEach(section => { store[char][section] = {}; });
        store[char].flavors = {};
        store[char].arena = {};
      });
      return store;
    }
    /* Merge saved progress into a blank store so missing branches never
       crash, and migrate the pre-split shared arena to every character. */
    load() {
      const store = this.blank();
      try {
        const raw = localStorage.getItem(this.key);
        if (raw) {
          const saved = JSON.parse(raw);
          BbsStore.SHARED_SECTIONS.forEach(section => {
            if (saved.shared && saved.shared[section]) store.shared[section] = saved.shared[section];
          });
          if (saved.missions) {
            store.missions.done = saved.missions.done || {};
            store.missions.rank = saved.missions.rank || {};
          }
          KH.BBS_CHARS.forEach(char => {
            BbsStore.PER_CHAR_SECTIONS.forEach(section => {
              if (saved[char] && saved[char][section]) store[char][section] = saved[char][section];
            });
            if (saved[char] && saved[char].flavors) store[char].flavors = saved[char].flavors;
            // arena used to be a single shared section; copy old progress to
            // every character so it isn't lost now that it's per-character.
            if (saved[char] && saved[char].arena) store[char].arena = saved[char].arena;
            else if (saved.shared && saved.shared.arena) store[char].arena = Object.assign({}, saved.shared.arena);
          });
        }
      } catch (e) { /* fresh store */ }
      return store;
    }
  }
  BbsStore.SHARED_SECTIONS = ["trophies", "ingame", "reports", "stickers", "patissier", "warrior"];
  BbsStore.PER_CHAR_SECTIONS = ["records", "characters", "unversed", "commands", "treasures"];

  /* Checklist-vs-journal view mode, persisted per tab. */
  class ViewStore extends JsonStore {
    journalOn(tabId) { return this.data[tabId] === "journal"; }
    setJournal(tabId, on) {
      if (on) this.data[tabId] = "journal"; else delete this.data[tabId];
      this.save();
    }
  }

  /* Active-character preference: a validated bare string. */
  class CharPref {
    constructor(key, validIds, fallback) {
      this.key = key;
      this.valid = validIds;
      try {
        const saved = localStorage.getItem(key);
        this.id = this.valid.includes(saved) ? saved : fallback;
      } catch (e) { this.id = fallback; }
    }
    set(id) {
      this.id = id;
      try { localStorage.setItem(this.key, id); } catch (e) { /* ignore */ }
    }
  }

  KH.JsonStore = JsonStore;
  KH.TrackerStore = TrackerStore;
  KH.BbsStore = BbsStore;
  KH.ViewStore = ViewStore;
  KH.CharPref = CharPref;
})();
