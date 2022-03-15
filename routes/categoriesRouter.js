const express = require('express');

const router = express.Router();

const { authToken } = require('../middlewares/authToken');
const { validateFields } = require('../middlewares/createCategory');
const { create } = require('../controllers/createCategory');

// create
router.post('/', authToken, validateFields, create);

module.exports = router;