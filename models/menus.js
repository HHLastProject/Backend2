'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Shops, {
        targetKey: "shopId",
        foreignKey: "ShopId",
        onDelete: "CASCADE",
      });
    }
  }
  Menus.init( {
    menuId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ShopId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    menuName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    menuDescription: {
      allowNull: false,
      type: DataTypes.STRING
    },
    picture: {
      allowNull: true,
      type: DataTypes.STRING
    },
    price: {
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
    modelName: 'Menus',
  });
  return Menus;
};