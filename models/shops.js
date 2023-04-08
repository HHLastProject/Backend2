'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shops extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      this.hasMany(models.Reviews, {
        sourceKey: "shopId",
        foreignKey: "ShopId",
        onDelete: "CASCADE",
      });

      this.hasMany(models.Likes, {
        sourceKey: "shopId",
        foreignKey: "ShopId",
        onDelete: "CASCADE",
      });

      this.hasMany(models.Menus, {
        sourceKey: "shopId",
        foreignKey: "ShopId",
        onDelete: "CASCADE",
      });
    }
  }
  Shops.init({
    shopId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    AdminId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shopName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING
    },
    detailAddress: {
      allowNull: false,
      type: DataTypes.STRING
    },
    x: {
      allowNull: true,
      type: DataTypes.STRING
    },
    y: {
      allowNull: true,
      type: DataTypes.STRING
    },
    thumbnail: {
      allowNull: false,
      type: DataTypes.STRING
    },
    operatingTime: {
      allowNull: false,
      type: DataTypes.STRING
    },
    phoneNumber: {
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
  }, {
    sequelize,
    modelName: 'Shops',
  });
  return Shops;
};