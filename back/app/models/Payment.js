const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Payment extends Model {}

Payment.init(
  {
    card_number: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    expirency: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cvc: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'payment'
  }
);

module.exports = Payment;
