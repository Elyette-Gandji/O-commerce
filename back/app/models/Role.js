const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db');

class Role extends Model {}

Role.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'role'
});

module.exports = Role;
