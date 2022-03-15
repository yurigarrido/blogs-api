const { User } = require('../models');

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  if (email === '') return res.status(400).json({ message: '"email" is not allowed to be empty' });
  if (!email) return res.status(400).json({ message: '"email" is required' });

  // const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  // const emailIsValid = regex.test(email);

  // if (!emailIsValid) return res.status(400).json({ message: '"email" must be a valid email' });

  const emailAlreadyRegistered = await User.findOne({ where: { email } });
  console.log(emailAlreadyRegistered);
  if (!emailAlreadyRegistered) return res.status(400).json({ message: 'Invalid fields' });

  return next();
};

const validatePassword = async (req, res, next) => {
  const { password } = req.body;
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  if (!password) return res.status(400).json({ message: '"password" is required' });
  // if (password.length < 6) {
  //   return res.status(400).json({ 
  //     message: '"password" length must be 6 characters long', 
  //   });
  // }

  next();
};

module.exports = { validateEmail, validatePassword };