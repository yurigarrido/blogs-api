'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const BlogPosts = queryInterface.createTable(
      'BlogPosts',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        content: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        userId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'Users',
            key: 'id',
          }
        },
        published: {
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated: {
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
    );

    return BlogPosts;
  },

  down: async (queryInterface, Sequelize) => (
    queryInterface.dropTable('BlogPosts')
  ),
};