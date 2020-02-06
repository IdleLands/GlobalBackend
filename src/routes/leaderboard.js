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
        exactValue: get(x, 'statistics.Character.Ticks').toLocaleString()
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
        exactValue: get(x, 'statistics.Character.Experience.Levels').toLocaleString()
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
        exactValue: get(x, 'statistics.Character.Events').toLocaleString()
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
        exactValue: get(x, 'statistics.Character.Injury.Receive').toLocaleString()
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
