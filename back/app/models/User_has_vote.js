const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db');

class User_has_vote extends Model {}

User_has_vote.init({
  rating: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
}, {
  sequelize, 
  tableName: 'rating'
})

module.exports = User_has_vote;
