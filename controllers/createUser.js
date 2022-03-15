const { createToken } = require('../utils/auth/jsonWebToken');
const { createUser } = require('../services/createUser');

const create = async (req, res, _next) => {
  const { email, password, displayName } = req.body;
  const user = await createUser(displayName, password, email);
  const token = await createToken(user);
  return res.status(201).json({ token });
};

module.exports = { create };