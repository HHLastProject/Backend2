'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Shops', 'operatingTime', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Shops', 'phoneNumber', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
