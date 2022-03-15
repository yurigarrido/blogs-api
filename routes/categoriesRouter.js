const express = require('express');

const router = express.Router();

const { authToken } = require('../middlewares/authToken');
const { validateFields } = require('../middlewares/createCategory');
const { create } = require('../controllers/createCategory');
const { getAllCategories } = require('../controllers/getAllCategories');

// create
router.post('/', authToken, validateFields, create);

// read all categories
router.get('/', authToken, getAllCategories);

module.exports = router;