'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    static associate(models) {
      this.belongsTo(models.user);
    }
  }
  todo.init({
    user_id: DataTypes.STRING,
    desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'todo',
    underscored: true,
  });
  return todo;
};