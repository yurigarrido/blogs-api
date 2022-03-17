const express = require('express');

const router = express.Router();

const { create } = require('../controllers/createPost');
const { allPostsOneUser } = require('../controllers/allPostsOneUser');
const { authToken } = require('../middlewares/authToken');
const { 
  validateCategoryIds, 
  validateContent, 
  validateTitle } = require('../middlewares/createPost');

// create
router.post('/', authToken, validateCategoryIds, validateContent, validateTitle, create);

// read all posts one user 
router.post('/', authToken, validateCategoryIds, validateContent, validateTitle, create);

// all post one user 
router.get('/', authToken, allPostsOneUser);

module.exports = router;