const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model {}

User.init({
  first_name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  password: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize, 
  tableName: "user"
});


module.exports = User;