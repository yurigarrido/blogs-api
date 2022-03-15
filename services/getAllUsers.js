const { User } = require('../models');

const allUsers = async () => {
  const users = await User.findAll();
  return users;
};
module.exports = { allUsers };