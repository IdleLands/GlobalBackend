const { get } = require('lodash');

const { DB } = require('../db');

const RUNNER_UPS = 5;

const ALWAYS_FIELDS = { 'owner': 1 };

const allQueries = [
  { cat: 'Worldly Leaders' },

  {
    name: 'Most Ticks',
    query: { 'statistics.Character.Ticks': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Character.Ticks': 1 },
    params: { sort: { 'statistics.Character.Ticks': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Character.Ticks', 0),
        exactValue: get(x, 'statistics.Character.Ticks').toLocaleString() + ' Ticks'
      };
    }
  },

  {
    name: 'Most Levels',
    query: { 'statistics.Character.Experience.Levels': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Character.Experience.Levels': 1 },
    params: { sort: { 'statistics.Character.Experience.Levels': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Character.Experience.Levels', 0),
        exactValue: get(x, 'statistics.Character.Experience.Levels').toLocaleString() + ' Levels'
      };
    }
  },

  {
    name: 'Most Events',
    query: { 'statistics.Character.Events': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Character.Events': 1 },
    params: { sort: { 'statistics.Character.Events': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Character.Events', 0),
        exactValue: get(x, 'statistics.Character.Events').toLocaleString() + ' Events'
      };
    }
  },

  { cat: 'Combat Leaders' },

  {
    name: 'Most Injured',
    query: { 'statistics.Character.Injury.Receive': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Character.Injury.Receive': 1 },
    params: { sort: { 'statistics.Character.Injury.Receive': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Character.Injury.Receive', 0),
        exactValue: get(x, 'statistics.Character.Injury.Receive').toLocaleString() + ' Injuries'
      };
    }
  },
  
  { cat: 'Ability Leaders' },
  
  {
    name: 'Mastodon Phenomenon (Archer)',
    query: { 'statistics.Profession.Archer.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Archer.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Archer.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Profession.Archer.AbilityUses'),
        exactValue: get(x, 'statistics.Profession.Archer.AbilityUses').toLocaleString() + ' Uses'
      };
    }
  },
  
  {
    name: 'Grueling Dueling (Barbarian)',
    query: { 'statistics.Profession.Barbarian.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Barbarian.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Barbarian.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Profession.Barbarian.AbilityUses'),
        exactValue: get(x, 'statistics.Profession.Barbarian.AbilityUses').toLocaleString() + ' Uses'
      };
    }
  },
  
  {
    name: 'Enormous Performance (Bard)',
    query: { 'statistics.Profession.Bard.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Bard.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Bard.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Profession.Bard.AbilityUses'),
        exactValue: get(x, 'statistics.Profession.Bard.AbilityUses').toLocaleString() + ' Uses'
      };
    }
  },
  
  {
    name: 'Black Hat Fast Track (Bitomancer)',
    query: { 'statistics.Profession.Bitomancer.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Bitomancer.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Bitomancer.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Profession.Bitomancer.AbilityUses'),
        exactValue: get(x, 'statistics.Profession.Bitomancer.AbilityUses').toLocaleString() + ' Uses'
      };
    }
  },
  
  {
    name: 'Ranked Unthanked (Fighter)',
    query: { 'statistics.Profession.Fighter.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Fighter.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Fighter.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Profession.Fighter.AbilityUses'),
        exactValue: get(x, 'statistics.Profession.Fighter.AbilityUses').toLocaleString() + ' Uses'
      };
    }
  },
  
  {
    name: 'General General (Generalist)',
    query: { 'statistics.Profession.Generalist.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Generalist.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Generalist.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Profession.Generalist.AbilityUses'),
        exactValue: get(x, 'statistics.Profession.Generalist.AbilityUses').toLocaleString() + ' Uses'
      };
    }
  },
  
  {
    name: 'Best Jest in the West (Jester)',
    query: { 'statistics.Profession.Jester.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Jester.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Jester.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Profession.Jester.AbilityUses'),
        exactValue: get(x, 'statistics.Profession.Jester.AbilityUses').toLocaleString() + ' Uses'
      };
    }
  },
  
  {
    name: 'Alchemy Apogee (Mage)',
    query: { 'statistics.Profession.Mage.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Mage.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Mage.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Profession.Mage.AbilityUses'),
        exactValue: get(x, 'statistics.Profession.Mage.AbilityUses').toLocaleString() + ' Uses'
      };
    }
  },
  
  {
    name: 'Frustration Temptation (MagicalMonster)',
    query: { 'statistics.Profession.MagicalMonster.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.MagicalMonster.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.MagicalMonster.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Profession.MagicalMonster.AbilityUses'),
        exactValue: get(x, 'statistics.Profession.MagicalMonster.AbilityUses').toLocaleString() + ' Uses'
      };
    }
  },
  
  {
    name: 'Swap Shop (Monster)',
    query: { 'statistics.Profession.Monster.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Monster.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Monster.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Profession.Monster.AbilityUses'),
        exactValue: get(x, 'statistics.Profession.Monster.AbilityUses').toLocaleString() + ' Uses'
      };
    }
  },
  
  {
    name: 'Welcome to the Bone Zone (Necromancer)',
    query: { 'statistics.Profession.Necromancer.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Necromancer.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Necromancer.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Profession.Necromancer.AbilityUses'),
        exactValue: get(x, 'statistics.Profession.Necromancer.AbilityUses').toLocaleString() + ' Uses'
      };
    }
  },
  
  {
    name: 'Villager Pillager (Pirate)',
    query: { 'statistics.Profession.Pirate.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Pirate.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Pirate.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Profession.Pirate.AbilityUses'),
        exactValue: get(x, 'statistics.Profession.Pirate.AbilityUses').toLocaleString() + ' Uses'
      };
    }
  },
  
  {
    name: 'Fortune Foreman (Rogue)',
    query: { 'statistics.Profession.Rogue.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Rogue.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Rogue.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Profession.Rogue.AbilityUses'),
        exactValue: get(x, 'statistics.Profession.Rogue.AbilityUses').toLocaleString() + ' Uses'
      };
    }
  },
  
  {
    name: 'Yeast Beast of the East (SandwichArtist)',
    query: { 'statistics.Profession.SandwichArtist.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.SandwichArtist.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.SandwichArtist.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Profession.SandwichArtist.AbilityUses'),
        exactValue: get(x, 'statistics.Profession.SandwichArtist.AbilityUses').toLocaleString() + ' Uses'
      };
    }
  }


];

exports.route = (app) => {
  app.get('/leaderboard', async (req, res) => {

    const validQueryData = allQueries.map(x => x.cat ? x : { ...x, results: DB.$statistics.find(x.query, { fields: x.fields, ...x.params }) });

    const cursors = await Promise.all(validQueryData);

    for(cursor of cursors) {
      if(!cursor.results) continue;
      cursor.arr = await cursor.results.toArray();
    }

    const retData = cursors.map(x => {
      if(x.cat) return x;

      return {
        name: x.name,
        results: x.arr.map(y => x.formatter(y))
      };
    });

    const sortedRetData = [];
    for(data of retData) {
      if(data.cat) {
        sortedRetData.push({ cat: data.cat, children: [] });
      } else {
        const curCat = sortedRetData[sortedRetData.length - 1];
        curCat.children.push(data);
      }
    }

    res.json(sortedRetData);
    
  });
}
