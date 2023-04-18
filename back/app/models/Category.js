const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db');

class Category extends Model {}

Category.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize, 
  tableName: 'category',
  underscored: true
})

module.exports = Category;