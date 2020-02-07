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

  { cat: 'The Best of the Best' },

  {
    name: 'You\'re Still Here?',
    description: 'Steps Taken',
    query: { 'statistics.Character.Movement.Steps.Normal': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Character.Movement.Steps.Normal': 1 },
    params: { sort: { 'statistics.Character.Movement.Steps.Normal': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Character.Movement.Steps.Normal', 0),
        exactValue: get(x, 'statistics.Character.Movement.Steps.Normal').toLocaleString() + ' Steps'
      };
    }
  },

  {
    name: 'Quester Tester',
    description: 'Quests Completed',
    query: { 'statistics.Quest.Personal.Total': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Quest.Personal.Total': 1 },
    params: { sort: { 'statistics.Quest.Personal.Total': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Quest.Personal.Total', 0),
        exactValue: get(x, 'statistics.Quest.Personal.Total').toLocaleString() + ' Quests'
      };
    }
  },

  {
    name: 'Quester Bester',
    description: 'Quest Levels Earned',
    query: { 'statistics.Quest.Personal.Level': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Quest.Personal.Level': 1 },
    params: { sort: { 'statistics.Quest.Personal.Level': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Quest.Personal.Level', 0),
        exactValue: get(x, 'statistics.Quest.Personal.Level').toLocaleString() + ' Levels'
      };
    }
  },

  {
    name: 'Shapeshifter',
    description: 'Class Changes',
    query: { 'statistics.Character.ProfessionChanges': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Character.ProfessionChanges': 1 },
    params: { sort: { 'statistics.Character.ProfessionChanges': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Character.ProfessionChanges', 0),
        exactValue: get(x, 'statistics.Character.ProfessionChanges').toLocaleString() + ' Times'
      };
    }
  },

  {
    name: 'Yo Mama',
    description: 'Norkos Dungeon -8: Lava Lake steps',
    query: { 'statistics.Map.Norkos Dungeon -8.Steps': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Map.Norkos Dungeon -8.Steps': 1 },
    params: { sort: { 'statistics.Map.Norkos Dungeon -8.Steps': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Map.Norkos Dungeon -8.Steps', 0),
        exactValue: get(x, 'statistics.Map.Norkos Dungeon -8.Steps').toLocaleString() + ' Steps'
      };
    }
  },

  {
    name: 'Reading is Fundamental',
    description: 'Scrolls Read',
    query: { 'statistics.Item.Use.BuffScroll': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Item.Use.BuffScroll': 1 },
    params: { sort: { 'statistics.Item.Use.BuffScroll': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Item.Use.BuffScroll', 0),
        exactValue: get(x, 'statistics.Item.Use.BuffScroll').toLocaleString() + ' Scrolls'
      };
    }
  },

  {
    name: 'First Among Equals',
    description: 'Most parties formed as Leader',
    query: { 'statistics.Event.Party.Create': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Event.Party.Create': 1 },
    params: { sort: { 'statistics.Event.Party.Create': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Event.Party.Create', 0),
        exactValue: get(x, 'statistics.Event.Party.Create').toLocaleString()
      };
    }
  },

  { cat: 'The Best of the Rest' },

  {
    name: 'Power Underwhelming',
    description: 'Most Deaths',
    query: { 'statistics.Combat.All.Times.Lose': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Combat.All.Times.Lose': 1 },
    params: { sort: { 'statistics.Combat.All.Times.Lose': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Combat.All.Times.Lose', 0),
        exactValue: get(x, 'statistics.Combat.All.Times.Lose').toLocaleString() + ' Deaths'
      };
    }
  },

  {
    name: 'I Put a Spell on You',
    description: 'Most Witch Events',
    query: { 'statistics.Event.Witch.Times': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Event.Witch.Times': 1 },
    params: { sort: { 'statistics.Event.Witch.Times': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Event.Witch.Times', 0),
        exactValue: get(x, 'statistics.Event.Witch.Times').toLocaleString() + ' Times'
      };
    }
  },

  {
    name: 'Garbage Man\'s Lament',
    description: 'Most ForsakeItem Events',
    query: { 'statistics.Event.ForsakeItem.Times': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Event.ForsakeItem.Times': 1 },
    params: { sort: { 'statistics.Event.ForsakeItem.Times': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Event.ForsakeItem.Times', 0),
        exactValue: get(x, 'statistics.Event.ForsakeItem.Times').toLocaleString() + ' Times'
      };
    }
  },

  {
    name: 'Can\'t See a Damn Thing',
    description: 'Most Attacks Missed',
    query: { 'statistics.Combat.All.Give.Miss': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Combat.All.Give.Miss': 1 },
    params: { sort: { 'statistics.Combat.All.Give.Miss': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Combat.All.Give.Miss', 0),
        exactValue: get(x, 'statistics.Combat.All.Give.Miss').toLocaleString() + ' Misses'
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
    name: 'Mastodon Phenomenon',
    description: "Archer",
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
    name: 'Grueling Dueling',
    description: "Barbarian",
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
    name: 'Enormous Performance',
    description: "Bard",
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
    name: 'Black Hat Fast Track',
    description: "Bitomancer",
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
    name: 'Protection Projection',
    description: "Most Cure Injury uses",
    query: { 'statistics.Character.Injury.Cure': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Character.Injury.Cure': 1 },
    params: { sort: { 'statistics.Character.Injury.Cure': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Character.Injury.Cure'),
        exactValue: get(x, 'statistics.Character.Injury.Cure').toLocaleString() + ' Times'
      };
    }
  },
  
  {
    name: 'Ranked Unthanked',
    description: "Fighter",
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
    name: 'General General',
    description: "Generalist",
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
    name: 'Best Jest in the West',
    description: "Jester",
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
    name: 'Alchemy Apogee',
    description: "Mage",
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
    name: 'Frustration Temptation',
    description: "MagicalMonster",
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
    name: 'Swap Shop',
    description: "Monster",
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
    name: 'Welcome to the Bone Zone',
    description: "Necromancer",
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
    name: 'Villager Pillager',
    description: "Pirate",
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
    name: 'Fortune Foreman',
    description: "Rogue",
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
    name: 'Yeast Beast of the East',
    description: "SandwichArtist",
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
  },

  { cat: "Others" },

  {
    name: 'Yes Man',
    description: 'Most Affirmed Decisions',
    query: { 'statistics.Character.Choose.Personality.Affirmer': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Character.Choose.Personality.Affirmer': 1 },
    params: { sort: { 'statistics.Character.Choose.Personality.Affirmer': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Character.Choose.Personality.Affirmer'),
        exactValue: get(x, 'statistics.Character.Choose.Personality.Affirmer').toLocaleString()
      };
    }
  },

  {
    name: 'Naysayer',
    description: 'Most Denied Decisions',
    query: { 'statistics.Character.Choose.Personality.Denier': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Character.Choose.Personality.Denier': 1 },
    params: { sort: { 'statistics.Character.Choose.Personality.Denier': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Character.Choose.Personality.Denier'),
        exactValue: get(x, 'statistics.Character.Choose.Personality.Denier').toLocaleString()
      };
    }
  },

  {
    name: 'Meh, whatever',
    description: 'Most Indecisive Decisions',
    query: { 'statistics.Character.Choose.Personality.Indecisive': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Character.Choose.Personality.Indecisive': 1 },
    params: { sort: { 'statistics.Character.Choose.Personality.Indecisive': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Character.Choose.Personality.Indecisive'),
        exactValue: get(x, 'statistics.Character.Choose.Personality.Indecisive').toLocaleString()
      };
    }
  },

  {
    name: 'Beam Me Up, Scotty',
    description: 'Most teleporters',
    query: { 'statistics.Character.Movement.Teleport': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Character.Movement.Teleport': 1 },
    params: { sort: { 'statistics.Character.Movement.Teleport': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Character.Movement.Teleport'),
        exactValue: get(x, 'statistics.Character.Movement.Teleport').toLocaleString() + " Teleports"
      };
    }
  },

  {
    name: 'It\'s Getting Hot in Here',
    description: 'Most items unequipped',
    query: { 'statistics.Item.Unequip.Times': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Item.Unequip.Times': 1 },
    params: { sort: { 'statistics.Item.Unequip.Times': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Item.Unequip.Times'),
        exactValue: get(x, 'statistics.Item.Unequip.Times').toLocaleString() + " Times"
      };
    }
  },

  {
    name: 'Department of Redundancy Department',
    description: 'Most duplicate items found',
    query: { 'statistics.Event.FindItem.Duplicate': { $gt: 0 } },
    fields: { ...ALWAYS_FIELDS, 'statistics.Event.FindItem.Duplicate': 1 },
    params: { sort: { 'statistics.Event.FindItem.Duplicate': -1 }, limit: RUNNER_UPS },
    formatter: (x) => {
      return {
        name: get(x, 'owner'),
        value: get(x, 'statistics.Event.FindItem.Duplicate'),
        exactValue: get(x, 'statistics.Event.FindItem.Duplicate').toLocaleString() + " Items"
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
        description: x.description || '',
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
