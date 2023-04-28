'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lists', {
      listId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ScrapId : {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Scraps",
          key: "scrapId",
        },
        onDelete: "CASCADE",
      },
      FolderId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Folders",
          key: "folderId",
        },
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Lists');
  }
};