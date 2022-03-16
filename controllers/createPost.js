const { createPost } = require('../services/createPost');

const create = async (req, res, _next) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const newPost = await createPost(title, content, categoryIds, id);
  return res.status(201).json(newPost);
};

module.exports = { create };