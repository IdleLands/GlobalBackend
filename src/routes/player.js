
const { DB } = require('../db');

exports.route = (app) => {
  app.get('/player', async (req, res) => {

      const player = await DB.$players
          .findOne(
              {name: req.query.name, banned: {$ne: true}},
              {
                  fields: {
                      name: 1,
                      title: 1,
                      profession: 1,
                      'level.__current': 1,
                      'level.maximum': 1,
                      ascensionLevel: 1,
                      map: 1,
                      createdAt: 1,
                      gender: 1,
                      xp: 1,
                      gold: 1,
                      loggedIn: 1,
                      stats: 1,
                      availableGenders: 1,
                      availableTitles: 1,
                      lastLoc: 1,
                      lastOnline: 1
                  }
              }
          );

    if(!player) return res.json(null);

    const [inventory, collectibles, statistics, achievements] = await Promise.all([
      DB.$inventory.findOne({ owner: req.query.name }),
      DB.$collectibles.findOne({ owner: req.query.name }),
      DB.$statistics.findOne({ owner: req.query.name }),
      DB.$achievements.findOne({ owner: req.query.name })
    ]);

    player.inventory = inventory;
    player.collectibles = collectibles;
    player.statistics = statistics;
    player.achievements = achievements;

    res.json(player);
    
  });
}
