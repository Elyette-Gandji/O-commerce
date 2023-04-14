const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db');

class UserHasVote extends Model {}

UserHasVote.init({
  rating: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
}, {
  sequelize, 
  tableName: 'user_has_vote'
})

module.exports = UserHasVote;
