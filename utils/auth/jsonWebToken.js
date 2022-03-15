require('dotenv').config();

const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (user) => {
  const { password: passDb, ...userWithouPassword } = user.dataValues;
  const token = jwt.sign(userWithouPassword, SECRET_KEY, jwtConfig);
  return token;
};

const verifyToken = (token) => {
  try {
    const dataUser = jwt.verify(token, SECRET_KEY);
    return dataUser;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

module.exports = { createToken, verifyToken };