'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Menus', 'picture', {
      allowNull: true,
      type: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Menus', 'picture', {
      allowNull: false,
      type: Sequelize.STRING
    });
  }
};