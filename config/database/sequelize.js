const { Sequelize } = require('sequelize');
const config = require('config');

module.exports = () => new Sequelize(config.get('db.database'), config.get('db.username'), config.get('db.password'), {
  host: config.get('db.host'),
  dialect: config.get('db.dialect'),
  port: config.get('db.port'),
});
