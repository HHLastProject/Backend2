'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Folders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Lists, {
        sourceKey: "folderId",
        foreignKey: "FolderId",
      });

      this.belongsTo(models.Scrap, {
        targetKey: "scrapId",
        foreignKey: "ScrapId",
      });
    }
  }
  Folders.init({
    folderId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ScrapId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    folderName: {
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
    modelName: 'Folders',
  });
  return Folders;
};