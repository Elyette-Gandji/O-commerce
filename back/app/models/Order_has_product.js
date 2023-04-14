const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db');

class Order_has_product extends Model {}

Order_has_product.init({
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize, 
  tableName: 'order_has_product'
})

module.exports = Order_has_product;
