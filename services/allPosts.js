const { BlogPost, User, Category } = require('../models');

const allPosts = async (id) => {
  if (id) {
    const posts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    console.log(posts);
    return posts;
  }
  const users = await BlogPost.findAll();
  return users;
};
module.exports = { allPosts };
