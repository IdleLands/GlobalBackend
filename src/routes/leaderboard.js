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
    name: 'Most "Pet Phenomemon" uses (Archer)',
    query: { 'statistics.Profession.Archer.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Archer.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Archer.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: `${numeral(get(x, 'statistics.Profession.Archer.AbilityUses'))} Uses`,
        exactValue: get(x, 'statistics.Profession.Archer.AbilityUses').toLocaleString()
      };
    }
  },
  
  {
    name: 'Most "Duel" uses (Barbarian)',
    query: { 'statistics.Profession.Barbarian.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Barbarian.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Barbarian.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: `${numeral(get(x, 'statistics.Profession.Barbarian.AbilityUses'))} Uses`,
        exactValue: get(x, 'statistics.Profession.Barbarian.AbilityUses').toLocaleString()
      };
    }
  },
  
  {
    name: 'Most "Orchestra" uses (Bard)',
    query: { 'statistics.Profession.Bard.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Bard.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Bard.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: `${numeral(get(x, 'statistics.Profession.Bard.AbilityUses'))} Uses`,
        exactValue: get(x, 'statistics.Profession.Bard.AbilityUses').toLocaleString()
      };
    }
  },
  
  {
    name: 'Most "Hack The System" uses (Bitomancer)',
    query: { 'statistics.Profession.Bitomancer.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Bitomancer.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Bitomancer.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: `${numeral(get(x, 'statistics.Profession.Bitomancer.AbilityUses'))} Uses`,
        exactValue: get(x, 'statistics.Profession.Bitomancer.AbilityUses').toLocaleString()
      };
    }
  },
  
  {
    name: 'Most "Experiencer" uses (Fighter)',
    query: { 'statistics.Profession.Fighter.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Fighter.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Fighter.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: `${numeral(get(x, 'statistics.Profession.Fighter.AbilityUses'))} Uses`,
        exactValue: get(x, 'statistics.Profession.Fighter.AbilityUses').toLocaleString()
      };
    }
  },
  
  {
    name: 'Most "Generalize" uses (Generalist)',
    query: { 'statistics.Profession.Generalist.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Generalist.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Generalist.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: `${numeral(get(x, 'statistics.Profession.Generalist.AbilityUses'))} Uses`,
        exactValue: get(x, 'statistics.Profession.Generalist.AbilityUses').toLocaleString()
      };
    }
  },
  
  {
    name: 'Most "Jest" uses (Jester)',
    query: { 'statistics.Profession.Jester.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Jester.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Jester.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: `${numeral(get(x, 'statistics.Profession.Jester.AbilityUses'))} Uses`,
        exactValue: get(x, 'statistics.Profession.Jester.AbilityUses').toLocaleString()
      };
    }
  },
  
  {
    name: 'Most "Alchemy" uses (Mage)',
    query: { 'statistics.Profession.Mage.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Mage.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Mage.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: `${numeral(get(x, 'statistics.Profession.Mage.AbilityUses'))} Uses`,
        exactValue: get(x, 'statistics.Profession.Mage.AbilityUses').toLocaleString()
      };
    }
  },
  
  {
    name: 'Most "Tempt Fate" uses (MagicalMonster)',
    query: { 'statistics.Profession.MagicalMonster.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.MagicalMonster.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.MagicalMonster.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: `${numeral(get(x, 'statistics.Profession.MagicalMonster.AbilityUses'))} Uses`,
        exactValue: get(x, 'statistics.Profession.MagicalMonster.AbilityUses').toLocaleString()
      };
    }
  },
  
  {
    name: 'Most "Swap Fiend" uses (Monster)',
    query: { 'statistics.Profession.Monster.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Monster.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Monster.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: `${numeral(get(x, 'statistics.Profession.Monster.AbilityUses'))} Uses`,
        exactValue: get(x, 'statistics.Profession.Monster.AbilityUses').toLocaleString()
      };
    }
  },
  
  {
    name: 'Most "Bone Fiend" uses (Necromancer)',
    query: { 'statistics.Profession.Necromancer.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Necromancer.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Necromancer.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: `${numeral(get(x, 'statistics.Profession.Necromancer.AbilityUses'))} Uses`,
        exactValue: get(x, 'statistics.Profession.Necromancer.AbilityUses').toLocaleString()
      };
    }
  },
  
  {
    name: 'Most "Pillage" uses (Pirate)',
    query: { 'statistics.Profession.Pirate.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Pirate.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Pirate.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: `${numeral(get(x, 'statistics.Profession.Pirate.AbilityUses'))} Uses`,
        exactValue: get(x, 'statistics.Profession.Pirate.AbilityUses').toLocaleString()
      };
    }
  },
  
  {
    name: 'Most "Good Luck" uses (Rogue)',
    query: { 'statistics.Profession.Rogue.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.Rogue.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.Rogue.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: `${numeral(get(x, 'statistics.Profession.Rogue.AbilityUses'))} Uses`,
        exactValue: get(x, 'statistics.Profession.Rogue.AbilityUses').toLocaleString()
      };
    }
  },
  
  {
    name: 'Most "Panhandle" uses (SandwichArtist)',
    query: { 'statistics.Profession.SandwichArtist.AbilityUses': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Profession.SandwichArtist.AbilityUses': 1 },
    params: { sort: { 'statistics.Profession.SandwichArtist.AbilityUses': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: `${numeral(get(x, 'statistics.Profession.SandwichArtist.AbilityUses'))} Uses`,
        exactValue: get(x, 'statistics.Profession.SandwichArtist.AbilityUses').toLocaleString()
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
