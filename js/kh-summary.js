/* =====================================================================
   DOM-free completion totals, shared by the landing page (and reusable
   anywhere). Computes [done, total] for any game straight from its data
   module + localStorage, without rendering — so the landing page can show
   progress for every game whether or not its tracker was opened.

   The counting deliberately MIRRORS the two tracker engines (kept in sync
   by hand, since this file must run without a DOM):
     trackerTotals(game) — generic engine, mirrors overallCount() in
                           js/kh-tracker.js (variants, multi-checks, the
                           cross-section autoChecks auto-completion).
     bbsTotals()         — Birth by Sleep, mirrors the dashboard totals in
                           js/kh-bbs-tracker.js (per-character + shared
                           sections, command auto-unlocks from melding /
                           missions / treasures). Prefers the exact total
                           the BBS tracker caches under bbs_totals_v1.
   Achievement-only progress (platform trophies, not full 100%):
     trackerAchievements(game) / bbsAchievements().

   Generic games register on window.KH_GAMES (see the kh-*-tracker-data.js
   modules); BBS exposes window.KH_BBS_DATA. Needs js/kh-common.js (KH.*).
   ===================================================================== */
var KHSummary = (function () {
  function getStore(key) {
    try { var raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : {}; }
    catch (e) { return {}; }
  }

  /* ---------- generic engine (mirror of js/kh-tracker.js) ---------- */
  function findSec(game, sectionId) {
    for (var tabIndex = 0; tabIndex < game.tabs.length; tabIndex++) {
      var sections = game.tabs[tabIndex].sections;
      for (var secIndex = 0; secIndex < sections.length; secIndex++) if (sections[secIndex].id === sectionId) return sections[secIndex];
    }
    return null;
  }
  function checkKey(index, checkId, checkIndex) { return checkIndex === 0 ? String(index) : index + "::" + checkId; }
  function isChecked(store, index, section, checkIndex) {
    var checks = section && section.checks;
    return checks ? !!store[checkKey(index, checks[checkIndex].k, checkIndex)] : !!store[index];
  }
  function autoDone(game, allStores, section, item) {
    if (!game.autoChecks) return false;
    for (var ruleIndex = 0; ruleIndex < game.autoChecks.length; ruleIndex++) {
      var rule = game.autoChecks[ruleIndex];
      if (rule.to !== section.id) continue;
      var sourceSec = findSec(game, rule.from), sourceStore = allStores[rule.from] || {};
      if (!sourceSec) continue;
      for (var mission in rule.map) {
        if (rule.map[mission] !== item[rule.toKey || "name"]) continue;
        var sourceItems = sourceSec.items || [];
        var checkIndex = 0;
        if (rule.check) {
          checkIndex = -1;
          for (var ci = 0; ci < sourceSec.checks.length; ci++) if (sourceSec.checks[ci].k === rule.check) { checkIndex = ci; break; }
        }
        if (checkIndex < 0) continue;
        for (var itemIndex = 0; itemIndex < sourceItems.length; itemIndex++) if (sourceItems[itemIndex].name === mission && isChecked(sourceStore, itemIndex, sourceSec, checkIndex)) return true;
      }
    }
    return false;
  }
  function entryCount(game, allStores, section, storeId, items) {
    var store = allStores[storeId] || {}, checks = section && section.checks, done = 0, total = 0;
    (items || []).forEach(function (item, index) {
      if (checks) checks.forEach(function (check, checkIndex) { total++; if (store[checkKey(index, check.k, checkIndex)]) done++; });
      else { total++; if (store[index] || autoDone(game, allStores, section, item)) done++; }
    });
    return [done, total];
  }
  function trackerTotals(game) {
    var allStores = getStore(game.storeKey), chars = game.chars || [], done = 0, total = 0;
    game.tabs.forEach(function (tab) {
      tab.sections.forEach(function (section) {
        if (section.variants) {
          chars.forEach(function (char) {
            var count = entryCount(game, allStores, section, section.id + "-" + char.id, section.variants[char.id] || []);
            done += count[0]; total += count[1];
          });
        } else {
          var count = entryCount(game, allStores, section, section.id, section.items);
          done += count[0]; total += count[1];
        }
      });
    });
    return [done, total];
  }

  /* ---------- Birth by Sleep (mirror of js/kh-bbs-tracker.js) ---------- */
  var BBS_CHARS = KH.BBS_CHARS;
  var BBS_LABEL = KH.BBS_CHAR_LABEL;

  function countMap(map, length) { var done = 0; map = map || {}; for (var index = 0; index < length; index++) if (map[index]) done++; return done; }
  function groupCount(data, store, section, label) {
    var done = 0, total = 0, sectionStore = (store.shared && store.shared[section]) || {};
    (data[section] || []).forEach(function (item, index) { if (item.g === label) { total++; if (sectionStore[index]) done++; } });
    return [done, total];
  }
  function meldOwned(char) {
    try {
      var raw = localStorage.getItem("bbs_meld_tracker_v1");
      if (!raw) return {};
      var saved = JSON.parse(raw), owned = {};
      ((saved[char] && saved[char].owned) || []).forEach(function (name) { owned[name] = 1; });
      return owned;
    } catch (e) { return {}; }
  }
  function rewardFor(mission, char) {
    if (!mission.reward) return null;
    return typeof mission.reward === "string" ? mission.reward : (mission.reward[char] || null);
  }
  function commandsDone(data, store, char) {
    var auto = meldOwned(char);
    var rank = (store.missions && store.missions.rank) || {};
    data.missions.forEach(function (mission, index) {
      var reward = rewardFor(mission, char);
      if (reward && rank[index + "-" + char]) auto[reward] = 1;
    });
    var commands = data.perChar[char].commands, cmdNames = {};
    commands.forEach(function (cmd) { cmdNames[cmd.name] = 1; });
    var treasureStore = (store[char] && store[char].treasures) || {};
    data.perChar[char].treasures.forEach(function (treasure, index) {
      if (treasureStore[index] && cmdNames[treasure.name] && String(treasure.g || "").indexOf("Realm of Darkness") !== 0) auto[treasure.name] = 1;
    });
    var label = BBS_LABEL[char];
    var recipeStore = (store.shared && store.shared.patissier) || {};
    data.patissier.forEach(function (recipe, index) { if (recipe.g === label && recipeStore[index] && cmdNames[recipe.name]) auto[recipe.name] = 1; });
    var finishStore = (store.shared && store.shared.warrior) || {};
    data.warrior.forEach(function (finish, index) { if (finish.g === label && finishStore[index] && cmdNames[finish.name]) auto[finish.name] = 1; });
    var commandStore = (store[char] && store[char].commands) || {}, done = 0;
    commands.forEach(function (cmd, index) { if (commandStore[index] || auto[cmd.name]) done++; });
    return [done, commands.length];
  }
  // Ingredients are per character (each has their own store + eligibility by
  // location). Done = obtained, or auto-credited by one of THAT character's
  // checked ice-cream recipes (recipe slots i1..i4 hold "Name xN").
  function flavorsDoneChar(data, store, char) {
    var label = BBS_LABEL[char];
    var recipeStore = (store.shared && store.shared.patissier) || {};
    var flavorStore = (store[char] && store[char].flavors) || {};
    var usedBy = {};
    data.patissier.forEach(function (recipe, recipeIndex) {
      if (recipe.g !== label) return;
      ["i1", "i2", "i3", "i4"].forEach(function (slot) {
        var text = recipe[slot];
        if (!text) return;
        var match = String(text).match(/^(.*?)\s*x\s*\d+\s*$/i);
        var name = (match ? match[1] : text).trim();
        (usedBy[name] = usedBy[name] || []).push(recipeIndex);
      });
    });
    var done = 0, total = 0;
    data.flavors.forEach(function (flavor, index) {
      if (!(usedBy[flavor.name] && usedBy[flavor.name].length)) return;   // only ingredients this char's recipes use
      total++;
      if (flavorStore[index] || usedBy[flavor.name].some(function (recipeIndex) { return recipeStore[recipeIndex]; })) done++;
    });
    return [done, total];
  }

  // Treasures excluding Aqua's Realm of Darkness chests (special save, not
  // required for any achievement) — mirrors charCount() in the BBS engine.
  function treasuresDone(data, store, char) {
    var treasureStore = (store[char] && store[char].treasures) || {}, done = 0, total = 0;
    data.perChar[char].treasures.forEach(function (treasure, index) {
      if (String(treasure.g || "").indexOf("Realm of Darkness") === 0) return;
      total++; if (treasureStore[index]) done++;
    });
    return [done, total];
  }

  /* Achievement (platform-trophy) progress only — the trophies list — as
   opposed to full 100% completion (everything tracked). */
  function trackerAchievements(game) {
    var allStores = getStore(game.storeKey), done = 0, total = 0;
    game.tabs.forEach(function (tab) {
      tab.sections.forEach(function (section) {
        if (!section.trophies) return;
        var count = entryCount(game, allStores, section, section.id, section.items);
        done += count[0]; total += count[1];
      });
    });
    return [done, total];
  }
  function bbsAchievements() {
    var data = window.KH_BBS_DATA;
    if (!data) return [0, 0];
    var store = getStore("bbs_progress_v1");
    return [countMap(store.shared && store.shared.trophies, data.trophies.length), data.trophies.length];
  }

  function bbsTotals() {
    var data = window.KH_BBS_DATA;
    if (!data) return [0, 0];
    // Prefer the exact total the BBS tracker cached — it already counts every
    // auto-cross-off (greyed checkboxes). Fall back to a DOM-free recompute
    // (close, but without the lang-dependent auto-cross-offs) if it hasn't run.
    var cached = getStore("bbs_totals_v1");
    if (Array.isArray(cached) && cached.length === 2) return cached;
    var store = getStore("bbs_progress_v1"), done = 0, total = 0;
    function add(count) { done += count[0]; total += count[1]; }

    BBS_CHARS.forEach(function (char) {
      add(commandsDone(data, store, char));
      ["records", "characters", "unversed"].forEach(function (section) {
        var items = data.perChar[char][section];
        add([countMap(store[char] && store[char][section], items.length), items.length]);
      });
      add(treasuresDone(data, store, char));     // excludes Realm of Darkness chests
      add([countMap(store[char] && store[char].arena, data.arena.length), data.arena.length]);   // arena is per-character
      ["stickers", "warrior", "patissier"].forEach(function (section) { add(groupCount(data, store, section, BBS_LABEL[char])); });
      add(flavorsDoneChar(data, store, char));   // per-character ingredients
      var missionDone = (store.missions && store.missions.done) || {}, doneCount = 0;
      data.missions.forEach(function (mission, index) { if (missionDone[index + "-" + char]) doneCount++; });
      add([doneCount, data.missions.length]);
    });
    ["trophies", "ingame", "reports"].forEach(function (section) {
      add([countMap(store.shared && store.shared[section], data[section].length), data[section].length]);
    });
    var rank = (store.missions && store.missions.rank) || {}, rankedCount = 0;
    data.missions.forEach(function (mission, index) {
      if (BBS_CHARS.some(function (char) { return rank[index + "-" + char]; })) rankedCount++;
    });
    add([rankedCount, data.missions.length]);
    return [done, total];
  }

  return {
    trackerTotals: trackerTotals, bbsTotals: bbsTotals,
    trackerAchievements: trackerAchievements, bbsAchievements: bbsAchievements,
    getStore: getStore
  };
})();
