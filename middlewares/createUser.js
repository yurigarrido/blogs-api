const { Users } = require('../models');

const validateDisplayName = async (req, res, next) => {
  const { displayName } = req.body;

  if (!displayName) {
    return res.status(400).json({ message: '"displayName" is required' });
  }

  if (displayName.length < 8) {
    return res.status(422).json({ 
      message: '"displayName" length must be at least 8 characters long', 
    });
  }

  next();
};

const validateEmailName = async (req, res, next) => {
  const { email } = req.body;

  const emailAlreadyRegistered = await Users.findOne({ where: { email } });
  console.log(emailAlreadyRegistered);

  if (!email) {
    return res.status(400).json({
      message: 'User already registered',
    });
  }

  // if (!isUnique) {
  //   return next();
  // }

  return res.status(409).json({ message: 'User already registered' });
};

module.exports = { validateDisplayName, validateEmailName };