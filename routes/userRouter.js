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
const { getOneUser } = require('../controllers/getOneUser');

// create
router.post('/', validateDisplayName, validateEmailName, validatePassword, create);

// read one user
router.get('/:id', authToken, getOneUser);

// read all Users
router.get('/', authToken, getAllUsers);

module.exports = router;