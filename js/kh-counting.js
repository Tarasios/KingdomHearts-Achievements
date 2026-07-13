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

  /* ===================================================================
     KH.BbsCounter — Birth by Sleep counting and auto-unlock derivations
     (BBS's data model doesn't fit the TRACKER_GAME schema, so it gets
     its own counter with the same bind-to-a-store-source design):

       new KH.BbsCounter(BBS_DATA, () => store, { mergeItems })

     `store` is the nested BbsStore-shaped progress object; the engine
     passes its live handle, the landing summary a migrated snapshot
     (new KH.BbsStore(key).data). The optional `mergeItems(storeId,
     items)` hook overlays lang text onto items before the auto-unlock
     functions match on their fields (the engine's viewItems); the
     default uses the raw data. Reads the melding calculator's owned
     commands (KH.KEYS.MELD) for the command auto-unlocks.
     =================================================================== */
  class BbsCounter {
    constructor(data, getStore, hooks) {
      this.data = data;
      this.store = getStore;
      this.mergeItems = (hooks && hooks.mergeItems) || ((storeId, items) => items);
      /* name → index probes for the cross-off cascades */
      this.ARENA_IDX = {}; data.arena.forEach((stage, index) => { this.ARENA_IDX[stage.name] = index; });
      this.MISSION_IDX = {}; data.missions.forEach((mission, index) => { this.MISSION_IDX[mission.name] = index; });
    }

    /* ---------- data probes ---------- */
    /* Mission reward command for a character (reward is one name for all
       three characters, or an object keyed by character). */
    missionRewardFor(mission, char) {
      if (!mission.reward) return null;
      return typeof mission.reward === "string" ? mission.reward : (mission.reward[char] || null);
    }
    /* Unversed missions that count once fought — every other mission needs
       its max rank (high score) to count as complete. */
    missionNeedsRank(mission) { return !BbsCounter.MISSION_NO_RANK.has(mission.name); }
    /* Aqua's Realm of Darkness chests need a special save and aren't
       required for any achievement — excluded from every completion total
       and from auto-unlocking commands. */
    isRealmOfDarkness(groupName) { return String(groupName || "").indexOf("Realm of Darkness") === 0; }
    /* Commands owned in the melding calculator (per character). */
    meldOwned(char) {
      try {
        const raw = localStorage.getItem(KH.KEYS.MELD);
        if (!raw) return new Set();
        const saved = JSON.parse(raw);
        return new Set((saved[char] && saved[char].owned) || []);
      } catch (e) { return new Set(); }
    }
    arenaDone(stage, char) { const index = this.ARENA_IDX[stage]; return index != null && !!this.store()[char].arena[index]; }
    missionDoneByName(name, char) { const index = this.MISSION_IDX[name]; return index != null && !!this.store().missions.done[index + "-" + char]; }
    recordDoneBy(char, predicate) {
      const records = this.mergeItems(char + "-records", this.data.perChar[char].records);
      for (let index = 0; index < records.length; index++) if (predicate(records[index]) && this.store()[char].records[index]) return true;
      return false;
    }

    /* ---------- auto-unlocks and linked rows ---------- */
    /* Auto-unlocked commands for a character: melded in the calculator,
       rewarded by an Unversed mission at max rank, dropped by a checked-off
       treasure chest, made as an ice-cream recipe, or earned as a Finish
       command (both share the command's name). Map: name → source tag. */
    commandAuto(char) {
      const store = this.store(), data = this.data;
      const unlocked = new Map();
      const label = KH.BBS_CHAR_LABEL[char];
      this.meldOwned(char).forEach(name => unlocked.set(name, "meld"));
      data.missions.forEach((mission, index) => {
        const reward = this.missionRewardFor(mission, char);
        if (reward && store.missions.rank[index + "-" + char] && !unlocked.has(reward)) unlocked.set(reward, "mission");
      });
      const cmdNames = new Set(data.perChar[char].commands.map(cmd => cmd.name));
      data.perChar[char].treasures.forEach((treasure, index) => {
        if (this.isRealmOfDarkness(treasure.g)) return;
        if (store[char].treasures[index] && cmdNames.has(treasure.name) && !unlocked.has(treasure.name)) unlocked.set(treasure.name, "treasure");
      });
      data.patissier.forEach((recipe, index) => {
        if (recipe.g === label && store.shared.patissier[index] && cmdNames.has(recipe.name) && !unlocked.has(recipe.name)) unlocked.set(recipe.name, "icecream");
      });
      data.warrior.forEach((finish, index) => {
        if (finish.g === label && store.shared.warrior[index] && cmdNames.has(finish.name) && !unlocked.has(finish.name)) unlocked.set(finish.name, "finish");
      });
      // Sonic Blade is a field prize for winning Olympus Coliseum's Break the
      // Urns mini-game (all three characters), tracked by its record row.
      if (cmdNames.has("Sonic Blade") && !unlocked.has("Sonic Blade") &&
          this.recordDoneBy(char, record => record.cat === "Break the Urns")) unlocked.set("Sonic Blade", "record");
      return unlocked;
    }
    commandAutoFn(char) { const unlocked = this.commandAuto(char); return item => unlocked.get(item.name) || null; }
    /* Xehanort's Reports found in treasure chests cross off with that chest.
       Chests name them "Xehanort's Report 1"; the Reports list uses Roman
       numerals ("Xehanort's Report I"). Returns the set of report names found. */
    reportAuto() {
      const store = this.store();
      const roman = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"];
      const names = new Set(this.data.reports.map(report => report.name));
      const found = new Set();
      KH.BBS_CHARS.forEach(char => {
        this.data.perChar[char].treasures.forEach((treasure, index) => {
          if (this.isRealmOfDarkness(treasure.g) || !store[char].treasures[index]) return;
          const name = String(treasure.name).replace(/Report (\d+)$/, (m, n) => "Report " + (roman[+n] || n));
          if (names.has(name)) found.add(name);
        });
      });
      return found;
    }
    reportsAutoFn() { const found = this.reportAuto(); return item => found.has(item.name) ? "treasure" : null; }
    /* Unversed journal: filled by clearing its Unversed mission (done is
       enough — max rank isn't needed) or any of its Mirage Arena stages. */
    unversedAutoFn(char) {
      return item => {
        if (this.missionDoneByName(item.name, char)) return "uvmission";
        const location = item.loc || "";
        if (location.indexOf("Mirage Arena") >= 0) {
          const stages = (location.match(/"([^"]+)"/g) || []).map(s => s.slice(1, -1));
          if (stages.some(stage => this.arenaDone(stage, char))) return "arena";
        }
        return null;
      };
    }
    /* Records: the per-Unversed mission records cross off with their mission
       (done); the Arena Mode records cross off with their arena stage. */
    recordsAutoFn(char) {
      return item => {
        if (item.g === "Unversed Missions" && this.missionDoneByName(item.cat, char)) return "uvmission";
        if (item.cat === "Arena Mode") {
          for (let index = 0; index < this.data.arena.length; index++) {
            const stageName = this.data.arena[index].name;
            if ((item.entry || "").indexOf(stageName) >= 0 && this.arenaDone(stageName, char)) return "arena";
          }
        }
        return null;
      };
    }
    /* Character journal: the Hundred Acre Wood trio fills when the Hunny Pot
       command board is done; Monstro fills when "Monster of the Sea" is cleared. */
    charactersAutoFn(char) {
      return item => {
        if (BbsCounter.HAW_CHARS.has(item.name) && this.recordDoneBy(char, record => record.entry === "Hunny Pot Board")) return "board";
        if (item.name === "Monstro" && this.arenaDone("Monster of the Sea", char)) return "arena";
        return null;
      };
    }
    /* Records that mirror another tab's single checkbox are *linked* (two-way)
       rather than read-only auto: ticking the record ticks its arena stage /
       Unversed mission, and vice-versa. */
    recordsLinkFn(char) {
      return item => {
        if (item.g === "Unversed Missions") {
          const missionIndex = this.MISSION_IDX[item.cat];
          if (missionIndex != null) return { store: this.store().missions.done, key: missionIndex + "-" + char, src: "uvmission" };
        }
        if (item.cat === "Arena Mode") {
          for (let index = 0; index < this.data.arena.length; index++) {
            const stageName = this.data.arena[index].name;
            if ((item.entry || "").indexOf(stageName) >= 0) return { store: this.store()[char].arena, key: this.ARENA_IDX[stageName], src: "arena" };
          }
        }
        return null;
      };
    }
    /* Sections whose completion is auto-credited (read-only) from other
       tabs, and sections whose rows are two-way linked to another store. */
    autoFnFor(section, char) {
      if (section === "commands") return this.commandAutoFn(char);
      if (section === "characters") return this.charactersAutoFn(char);
      if (section === "unversed") return this.unversedAutoFn(char);
      return null;
    }
    linkFnFor(section, char) { return section === "records" ? this.recordsLinkFn(char) : null; }

    /* Ice-cream recipe ingredients. Each recipe slot (i1..i4) carries a
       baked-in quantity, e.g. "Crystal Sugar x3". Returns a map of
       ingredient name → the recipes that use it [{ pIdx, qty, char }]. */
    recipeIngredients() {
      const ingredients = {};
      this.data.patissier.forEach((recipe, recipeIndex) => {
        ["i1", "i2", "i3", "i4"].forEach(slot => {
          const text = recipe[slot];
          if (!text) return;
          const match = String(text).match(/^(.*?)\s*x\s*(\d+)\s*$/i);
          const name = (match ? match[1] : text).trim();
          const qty = match ? parseInt(match[2], 10) : 1;
          (ingredients[name] = ingredients[name] || []).push({ pIdx: recipeIndex, qty, char: recipe.g });
        });
      });
      return ingredients;
    }

    /* ---------- progress math ---------- */
    countMap(map, length) { let done = 0; for (let index = 0; index < length; index++) if (map[index]) done++; return done; }
    sharedCount(section) {
      if (section === "reports") {   // reports also auto-credit from their treasure chests
        const store = this.store().shared.reports, found = this.reportAuto();
        let done = 0;
        this.data.reports.forEach((report, index) => { if (store[index] || found.has(report.name)) done++; });
        return [done, this.data.reports.length];
      }
      return [this.countMap(this.store().shared[section], this.data[section].length), this.data[section].length];
    }
    charCount(char, section) {
      const store = this.store(), items = this.data.perChar[char][section];
      if (section === "treasures") {   // exclude Aqua's Realm of Darkness chests
        let done = 0, total = 0;
        items.forEach((item, index) => { if (this.isRealmOfDarkness(item.g)) return; total++; if (store[char].treasures[index]) done++; });
        return [done, total];
      }
      const autoFn = this.autoFnFor(section, char);
      const linkFn = this.linkFnFor(section, char);
      if (!autoFn && !linkFn) return [this.countMap(store[char][section], items.length), items.length];
      const merged = this.mergeItems(char + "-" + section, items);
      let done = 0;
      merged.forEach((item, index) => {
        const link = linkFn && linkFn(item);
        if (link) { if (link.store[link.key]) done++; }
        else if (store[char][section][index] || (autoFn && autoFn(item))) done++;
      });
      return [done, items.length];
    }
    groupCount(section, label) {
      const store = this.store();
      let done = 0, total = 0;
      this.data[section].forEach((item, index) => { if (item.g === label) { total++; if (store.shared[section][index]) done++; } });
      return [done, total];
    }
    missionsCount(char, map) {
      let done = 0;
      this.data.missions.forEach((mission, index) => { if (map[index + "-" + char]) done++; });
      return [done, this.data.missions.length];
    }
    /* Savage Slayer needs ONE character to max-rank every Unversed mission,
       so progress is the best single character's max-ranked count. */
    bestCharMissionsRank() {
      const store = this.store();
      let best = 0;
      KH.BBS_CHARS.forEach(char => {
        let done = 0;
        this.data.missions.forEach((mission, index) => { if (store.missions.rank[index + "-" + char]) done++; });
        if (done > best) best = done;
      });
      return [best, this.data.missions.length];
    }
    /* Best single character's progress through a per-character group (e.g.
       Pâtissier needs one character to make all of their ice-cream recipes). */
    bestCharGroup(section) {
      let best = null;
      KH.BBS_CHARS.forEach(char => {
        const count = this.groupCount(section, KH.BBS_CHAR_LABEL[char]);
        if (!best || count[0] > best[0]) best = count;
      });
      return best || [0, 0];
    }
    /* Arena stages cleared by a character (the store is per-character). */
    arenaCount(char) { return [this.countMap(this.store()[char].arena, this.data.arena.length), this.data.arena.length]; }
    /* Arena trophies are global — a stage counts once any character clears it. */
    arenaByStars(starsNeeded) {
      const store = this.store();
      const starCount = rank => (String(rank).match(/★/g) || []).length;
      let done = 0, total = 0;
      this.data.arena.forEach((stage, index) => {
        if (starCount(stage.rank) === starsNeeded) { total++; if (KH.BBS_CHARS.some(char => store[char].arena[index])) done++; }
      });
      return [done, total];
    }
    /* Ingredients a character actually needs (used by one of *their*
       recipes), done when collected or auto-credited by one of that
       character's completed recipes. */
    flavorsEligible(char) {
      const store = this.store();
      const label = KH.BBS_CHAR_LABEL[char];
      const ingredients = this.recipeIngredients();
      const flavorStore = store[char].flavors;
      let done = 0, total = 0;
      this.data.flavors.forEach((flavor, index) => {
        const recipes = (ingredients[flavor.name] || []).filter(use => use.char === label);
        if (!recipes.length) return;
        total++;
        if (flavorStore[index] || recipes.some(use => store.shared.patissier[use.pIdx])) done++;
      });
      return [done, total];
    }
    /* One character's full completion (their sections + their share of the
       shared lists + ingredients + arena + mission clears). */
    overallChar(char) {
      let done = 0, total = 0;
      KH.BbsStore.PER_CHAR_SECTIONS.forEach(section => { const [secDone, secTotal] = this.charCount(char, section); done += secDone; total += secTotal; });
      ["warrior", "patissier", "stickers"].forEach(section => {
        const [groupDone, groupTotal] = this.groupCount(section, KH.BBS_CHAR_LABEL[char]); done += groupDone; total += groupTotal;
      });
      const [flavorDone, flavorTotal] = this.flavorsEligible(char); done += flavorDone; total += flavorTotal;
      const [arenaDoneCount, arenaTotal] = this.arenaCount(char); done += arenaDoneCount; total += arenaTotal;
      const [missionDone] = this.missionsCount(char, this.store().missions.done); done += missionDone; total += this.data.missions.length;
      return [done, total];
    }
    /* The full 100% total (every character's sections — including the
       auto-cross-offs — plus the shared sections and Savage Slayer). The
       BBS tracker caches this under bbs_totals_v1 for the landing page. */
    fullTotals() {
      let done = 0, total = 0;
      KH.BBS_CHARS.forEach(char => { const [charDone, charTotal] = this.overallChar(char); done += charDone; total += charTotal; });
      ["trophies", "ingame", "reports"].forEach(section => { const [secDone, secTotal] = this.sharedCount(section); done += secDone; total += secTotal; });
      const [savageDone, savageTotal] = this.bestCharMissionsRank(); done += savageDone; total += savageTotal;
      return [done, total];
    }
    /* Achievement (platform-trophy) progress: the shared trophies list. */
    achievementsCount() { return this.sharedCount("trophies"); }
  }
  BbsCounter.MISSION_NO_RANK = new Set(["Flame Box", "Jellyshade", "Gluttonous Goo", "Element Cluster"]);
  BbsCounter.HAW_CHARS = new Set(["Winnie the Pooh", "Tigger", "Rabbit"]);

  KH.GameCounter = GameCounter;
  KH.BbsCounter = BbsCounter;
})();
