const { 
  Category,
 } = require('../models');

const validateTitle = async (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }

  next();
};

const validateContent = async (req, res, next) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ message: '"content" is required' });

  return next();
};

const validateCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }

  const hasCategories = await Promise
  .all(categoryIds.map(async (id) => {
    const categoryExists = await Category.findByPk(id);
    if (!categoryExists) return false;
    return true;
  }));

  if (hasCategories.some((category) => category === false)) {
    console.log(hasCategories);
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  
  next();
};

module.exports = { validateCategoryIds, validateContent, validateTitle };