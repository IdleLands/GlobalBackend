const { MongoClient } = require('mongodb');

const DB_URI = process.env.MONGODB_URI;
if(!DB_URI) {
  console.error('No env.MONGODB_URI set. Set one.');
  process.exit(0);
}

class Database {
  constructor() {
    this.isReady = new Promise(async (resolve, reject) => {
      
      const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      try {
        await client.connect();

        const db = client.db(client.s.options.dbName);
        
        console.log('Connected to ' + DB_URI);

        this.$statistics = db.collection('statistics');
        this.$players = db.collection('player');
        this.$guilds = db.collection('guild');

        this.$inventory = db.collection('inventory');
        this.$collectibles = db.collection('collectibles');
        this.$achievements = db.collection('achievements');

        resolve();

      } catch(e) {
        console.error(e);
      }
    });
  }
}

exports.DB = new Database();