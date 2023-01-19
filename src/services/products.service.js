const productsModel = require('../models/products.model');
const validations = require('./validations/validations');

const getAll = async () => {
  const products = await productsModel.getAll();

  return { type: null, message: products };
};

const getById = async (id) => {
  const error = await validations.idValidation(id);
  if (error.type) return error;

  const product = await productsModel.getById(id);
  if (!product) return { type: 'error', message: 'Product not found' };

  return { type: null, message: product };
};

const insertProduct = async (name) => {
  const error = await validations.insertProductValidation(name);
  if (error.type) return error;

  const newProductId = await productsModel.insertProduct(name);
  const newProduct = await productsModel.getById(newProductId);

  return { type: null, message: newProduct };
};

const updateProduct = async (name, id) => {
  const error = await validations.insertProductValidation(name);
  if (error.type) return error;

  await productsModel.updateProduct(name, id);

  const updatedProduct = await getById(id);
  return updatedProduct;
};

const deleteProduct = async (id) => {
  const product = await getById(id);
  if (product.type) return product;
  await productsModel.deleteProduct(id);

  return product;
};

module.exports = {
  getAll,
  getById,
  insertProduct,
  updateProduct,
  deleteProduct,
};