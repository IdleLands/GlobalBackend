
const { DB } = require('../db');

exports.route = (app) => {
  app.get('/player', async (req, res) => {
    
    const player = await DB.$players
    .findOne(
      { name: req.query.name },
      { fields: { name: 1, profession: 1, 'level.__current': 1, 'level.maximum': 1, ascensionLevel: 1, map: 1 } }
    );

    res.json(player);
    
  });
}
