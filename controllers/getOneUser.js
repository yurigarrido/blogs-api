const { oneUser } = require('../services/getOneUser');

const getOneUser = async (req, res, _next) => {
  const { id } = req.params;
  const newCategory = await oneUser(id);
  if (!newCategory) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(newCategory);
};

module.exports = { getOneUser };