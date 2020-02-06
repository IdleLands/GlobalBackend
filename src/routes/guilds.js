
const { DB } = require('../db');

exports.route = (app) => {
  app.get('/guilds', async (req, res) => {
    
    const guilds = await DB.$guilds
    .find(
      { $expr: { $gt: [{ $size: { $objectToArray: '$members' } }, 0] } },
      { fields: { name: 1, tag: 1, buildingLevels: 1, members: 1 } }
    )
    .sort({ name: 1 })
    .toArray();

    res.json(guilds);
    
  });
}
