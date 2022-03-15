const { User } = require('../models');

const createUser = async (displayName, password, email) => {
  const user = await User.create({ displayName, password, email });
  return user;
};
module.exports = { createUser };