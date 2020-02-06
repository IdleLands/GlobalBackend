
const { DB } = require('../db');

const loggedInQuery = process.env.NODE_ENV === 'production' ? true : false;

exports.route = (app) => {
  app.get('/players', async (req, res) => {
    
    const players = await DB.$players
    .find(
      { loggedIn: loggedInQuery },
      { fields: { title: 1, name: 1, profession: 1, 'level.__current': 1, 'level.maximum': 1, ascensionLevel: 1, map: 1 } }
    )
    .sort({ name: 1 })
    .toArray();

    res.json(players);
    
  });
}
