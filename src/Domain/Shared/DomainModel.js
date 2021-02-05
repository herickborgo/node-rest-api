const { Model, DataTypes } = require('sequelize');
const sequelize = require('@config/database/sequelize');

console.log(sequelize);

// class DomainModel extends Model { }
// DomainModel.init({ id: DataTypes.UUID }, { sequelize: app.database.sequelize });
