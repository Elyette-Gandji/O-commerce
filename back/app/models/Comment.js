const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db');

class Comment extends Model {}

Comment.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'comment'
});

module.exports = Comment;
