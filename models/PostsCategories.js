module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories',
    {}, { timestamps: false });
  PostsCategories.associate = (models) => {
    models.Categories.belongsToMany(models.User, {
      as: 'categoryId',
      through: PostsCategories,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
    models.Posts.belongsToMany(models.Posts, {
      as: 'postId',
      through: PostsCategories,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
  };
  return PostsCategories;
};