'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PostCategories = queryInterface.createTable(
      'PostsCategories',
      {
        postId: {
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'BlogPosts',
            key: 'id',
          },
          type: Sequelize.INTEGER,
        },
        categoryId: {
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'Categories',
            key: 'id',
          },
          type: Sequelize.INTEGER,
        },
      },
    );

    return PostCategories;
  },

  down: async (queryInterface, Sequelize) => (
    queryInterface.dropTable('PostCategories')
  ),
};