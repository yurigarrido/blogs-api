const express = require('express');

const router = express.Router();

const { create } = require('../controllers/createPost');
const { authToken } = require('../middlewares/authToken');
const { 
  validateCategoryIds, 
  validateContent, 
  validateTitle } = require('../middlewares/createPost');

// create
router.post('/', authToken, validateCategoryIds, validateContent, validateTitle, create);

module.exports = router;