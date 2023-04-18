const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Address extends Model {}

Address.init({
  street: {
    type: DataTypes.TEXT,
    allowNull: false
  }, 
  zip: {
    type: DataTypes.INTEGER,
    allowNull: false
  }, 
  city: {
    type: DataTypes.TEXT,
    allowNull: false
  }, 
  country: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fullname: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize, 
  tableName: 'address',
  underscored: true
})

module.exports = Address;