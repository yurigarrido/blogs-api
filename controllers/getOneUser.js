const { oneUser } = require('../services/getOneUser');

const getOneUser = async (req, res, _next) => {
  const { id } = req.params;
  const user = await oneUser(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

module.exports = { getOneUser };