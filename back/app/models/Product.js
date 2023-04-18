const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db');

class Product extends Model {}

Product.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'product',
  underscored: true
});

module.exports = Product;
