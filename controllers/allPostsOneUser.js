const { allPosts } = require('../services/allPosts');

const allPostsOneUser = async (req, res, _next) => {
  const { id } = req.user;
  const allPostsOfUser = await allPosts(id);
  // if (!allPostsOfUser) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(allPostsOfUser);
};

module.exports = { allPostsOneUser };