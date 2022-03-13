const express = require('express');

const router = express.Router();

const createUser = require('../middlewares/createUser');

router.post('/', createUser.validateEmail);

module.exports = router;