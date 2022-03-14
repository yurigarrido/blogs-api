const express = require('express');

const router = express.Router();

const { 
  validateDisplayName, 
  validateEmailName, 
  validatePassword } = require('../middlewares/createUser');

router.post('/', validateDisplayName, validateEmailName, validatePassword, (req, res) => {
  // console.log(req.body);
  res.status(200);
});

module.exports = router;