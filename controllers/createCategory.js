const { createCategory } = require('../services/createCategory');

const create = async (req, res, _next) => {
  const { name } = req.body;
  const newCategory = await createCategory(name);
  return res.status(201).json(newCategory);
};

module.exports = { create };