'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Menus', {
      menuId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ShopId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Shops",
          key: "shopId",
        },
        onDelete: "CASCADE",
      },
      menuName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      menuDescription: {
        allowNull: false,
        type: Sequelize.STRING
      },
      picture: {
        allowNull: true,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Menus');
  }
};