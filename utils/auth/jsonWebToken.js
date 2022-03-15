require('dotenv').config();

const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || 'secret';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (user) => {
  const { password: passDb, ...userWithouPassword } = user.dataValues;
  const token = jwt.sign(userWithouPassword, SECRET, jwtConfig);
  return token;
};

const verifyToken = (token) => {
  try {
    const dataUser = jwt.verify(token, SECRET);
    return dataUser;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

module.exports = { createToken, verifyToken };