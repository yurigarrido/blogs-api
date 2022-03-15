const { User } = require('../models');

const verifyLogin = async (password, email) => {
  const user = await User.findOne({ where: { email } });
  if (user.dataValues.password !== password) {
    return null;
  }
  return user;
};
module.exports = { verifyLogin };