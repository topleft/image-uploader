const path = require('path');
console.log('Test_DB', process.env.TEST_DB)
module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.DEV_DB,
    migrations: {
      directory: path.join(__dirname, '/src/db/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '/src/db/seeds')
    }
  },
  test: {
    client: 'postgresql',
    connection: process.env.TEST_DB,
    migrations: {
      directory: path.join(__dirname, '/src/db/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '/src/db/seeds')
    }
  }
};
