
const { DB } = require('../db');

exports.route = (app) => {
  app.get('/guild', async (req, res) => {
    
    const guild = await DB.$guilds
    .findOne(
      { name: req.query.name },
      { fields: { motd: 1, recruitment: 1, taxes: 1, name: 1, tag: 1, buildingLevels: 1, members: 1 } }
    );

    res.json(guild);
    
  });
}
