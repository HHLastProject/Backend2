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
      this.belongsTo(models.Admin, {
        targetKey: "adminId",
        foreignKey: "AdminId",
        onDelete: "CASCADE",
      })

      this.hasMany(models.Feeds, {
        sourceKey: "shopId",
        foreignKey: "ShopId",
      });

      this.hasMany(models.Scrap, {
        sourceKey: "shopId",
        foreignKey: "ShopId",
      });

      this.hasMany(models.Menus, {
        sourceKey: "shopId",
        foreignKey: "ShopId",
      });
                          
      // this.hasMany(models.SearchHistory, {
      //   sourceKey: "shopId",
      //   foreignKey: "ShopId",
      // });
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
    dong: {
      allowNull: false,
      type: DataTypes.STRING
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lng: {
      allowNull: true,
      type: DataTypes.STRING
    },
    lat: {
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