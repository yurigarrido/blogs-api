const { verifyToken } = require('../utils/auth/jsonWebToken');

const authToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  const validToken = verifyToken(authorization);
  if (!validToken) return res.status(401).json({ message: 'Expired or invalid token' });
  req.user = validToken;
  next();
};

module.exports = { authToken };