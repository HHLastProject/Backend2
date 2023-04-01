'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Reviews, {
        sourceKey: "userId",
        foreignKey: "UserId",
        onDelete: "CASCADE",
      });

      this.hasMany(models.Likes, {
        sourceKey: "userId",
        foreignKey: "UserId",
        onDelete: "CASCADE",
      });
    }
  }
  Users.init(
    {
    userId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    nickname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    gender: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  },
  {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};