const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db');

class Order extends Model {}

Order.init({
  number_order: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize, 
  tableName: 'order',
  underscored: true
})

module.exports = Order;
