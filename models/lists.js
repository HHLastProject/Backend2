'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Folders, {
        targetKey: "folderId",
        foreignKey: "FolderId",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.Shops, {
        targetKey: "shopId",
        foreignKey: "ShopId",
        onDelete: "CASCADE",
      });
    }
  }
  Lists.init({
    listId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    FolderId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    ShopId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Lists',
  });
  return Lists;
};