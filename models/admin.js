'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      this.hasMany(models.Shops, {
        sourceKey: 'adminId',
        foreignKey: 'AdminId',
        onDelete: "CASCADE",
      });
    }
  }
  Admin.init({
      adminId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      adminEmail: {
        allowNull: false,
        type: DataTypes.STRING
      },
      adminPassword: {
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
    modelName: 'Admin',
  });
  return Admin;
};