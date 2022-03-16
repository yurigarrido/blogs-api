const { BlogPost, PostCategory } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
  console.log(title, content, categoryIds, userId);
  const newPost = await BlogPost.create({ title, content, userId });

  await Promise.all(categoryIds
    .map(async (idCategory) => PostCategory.create(
      { postId: newPost.id, categoryId: idCategory },
      )));

  return ({ id: newPost.id, userId, title, content });
};
module.exports = { createPost };
