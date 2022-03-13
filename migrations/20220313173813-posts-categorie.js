'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("PostsCategories", {
      categoryId: {
        type: Sequelize.INTEGER, allowNull: false,
      },
      postId: { type: Sequelize.INTEGER, allowNull: false}
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("PostsCategories");
  }
};