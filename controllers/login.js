const { createToken } = require('../utils/auth/jsonWebToken');
const { verifyLogin } = require('../services/login');

const login = async (req, res, _next) => {
  const { email, password } = req.body;
  const user = await verifyLogin(password, email);

  if (!user) return res.status(400).json({ message: 'Invalid fields' });

  const token = await createToken(user);
  return res.status(200).json({ token });
};

module.exports = { login };