const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db');

class OrderHasProduct extends Model {}

OrderHasProduct.init({
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize, 
  tableName: 'order_has_product'
})

module.exports = OrderHasProduct;
