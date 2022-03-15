const express = require('express');

const router = express.Router();
const { authToken } = require('../middlewares/authToken');
const { create } = require('../controllers/createUser');
const { 
  validateDisplayName, 
  validateEmailName, 
  validatePassword,
} = require('../middlewares/createUser');
const { getAllUsers } = require('../controllers/getAllUsers');

// create
router.post('/', validateDisplayName, validateEmailName, validatePassword, create);

// read all Users
router.get('/', authToken, getAllUsers);

module.exports = router;