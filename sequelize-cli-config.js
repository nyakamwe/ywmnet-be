require('ts-node/register');

const { config } = require('./src/config/config.ts');

module.exports = {
  development: {
    username: config.username,
    password: config.password,
    database: config.database,
    host: config.host,
    dialect: config.dialect,
    seederStorage: 'sequelize',
  },
};
