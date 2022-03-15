const express = require('express');

const router = express.Router();

const { login } = require('../controllers/login');
const { 
  validateEmail, 
  validatePassword } = require('../middlewares/login');

// create
router.post('/', validateEmail, validatePassword, login);

module.exports = router;