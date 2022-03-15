const { User } = require('../models');

const oneUser = async (id) => {
  const user = await User.findByPk(id);

  if (!user) return null;
  return user;
};
module.exports = { oneUser };