const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db');

class Promotion extends Model {}

Promotion.init({
  percent: {
    type: DataTypes.INTEGER
  },
  validity: {
    type: DataTypes.DATE
  }
}, {
  sequelize, 
  tableName: 'promotion',
  underscored: true
})

module.exports = Promotion;