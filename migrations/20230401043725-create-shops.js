'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shops', {
      shopId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      AdminId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Admins",
          key: "adminId",
        },
        onDelete: "NO ACTION",
      },
      shopName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING
      },
      roadAddress: {
        allowNull: false,
        type: Sequelize.STRING
      },
      jibunAddress: {
        allowNull: false,
        type: Sequelize.STRING
      },
      x: {
        allowNull: false,
        type: Sequelize.STRING
      },
      y: {
        allowNull: false,
        type: Sequelize.STRING
      },
      operatingTime: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      thumbnail: {
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
      },
      // likeCount: {
      //   type: Sequelize.VIRTUAL,
      //   get() {
      //     const subquery = sequelize.literal(`
      //       (SELECT COUNT(*) FROM Likes WHERE Likes.PostId = Posts.postId)
      //     `);
      //     return sequelize.query(subquery, { type: Sequelize.QueryTypes.SELECT })
      //       .then(result => result[0].count);
      //   },
      // },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shops');
  }
};