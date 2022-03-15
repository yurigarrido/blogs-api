const { allCategories } = require('../services/getAllCategories');

const getAllCategories = async (req, res, _next) => {
  const categories = await allCategories();
  return res.status(200).json(categories);
};

module.exports = { getAllCategories };