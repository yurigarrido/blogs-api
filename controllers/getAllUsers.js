const { allUsers } = require('../services/getAllUsers');

const getAllUsers = async (req, res, _next) => {
  const users = await allUsers();
  return res.status(200).json(users);
};

module.exports = { getAllUsers };