const productsModel = require('../models/products.model');
const validations = require('./validations/validations');

const getAll = async () => {
  const products = await productsModel.getAll();

  return { type: null, message: products };
};

const getById = async (id) => {
  const error = validations.idValidation(id);
  if (error.type) return error;
  
  const product = await productsModel.getById(id);
  if (!product) return { type: 'error', message: 'Product not found' };

  return { type: null, message: product };
};

module.exports = {
  getAll,
  getById,
};