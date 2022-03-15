const express = require('express');

const router = express.Router();

const { create } = require('../controllers/createUser');
const { 
  validateDisplayName, 
  validateEmailName, 
  validatePassword } = require('../middlewares/createUser');

// create
router.post('/', validateDisplayName, validateEmailName, validatePassword, create);

module.exports = router;