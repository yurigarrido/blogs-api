const { Category } = require('../models');

const createCategory = async (name) => {
  const newCaregory = await Category.create({ name });
  return newCaregory;
};
module.exports = { createCategory };