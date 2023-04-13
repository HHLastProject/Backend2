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
      this.hasMany(models.Feeds, {
        sourceKey: "userId",
        foreignKey: "UserId",
      });

      this.hasMany(models.Scrap, {
        sourceKey: "userId",
        foreignKey: "UserId",
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
    id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING
    },
    prifilePic: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    nickname: {
      allowNull: true,
      type: DataTypes.STRING
    },
    gender: {
      allowNull: true,
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