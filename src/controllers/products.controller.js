const productServices = require('../services/products.service');

const getAll = async (_req, res) => {
  const { type, message } = await productServices.getAll();

  if (type) return res.status(404).json(message);
  return res.status(200).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productServices.getById(id);

  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message, errorCode } = await productServices.insertProduct(name);
  if (type) return res.status(errorCode).json({ message });
  return res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message, errorCode } = await productServices.updateProduct(name, id);
  if (type) return res.status(errorCode || 404).json({ message });
  return res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productServices.deleteProduct(id);

  if (type) return res.status(404).json({ message });
  return res.status(204).json();
};

module.exports = {
  getAll,
  getById,
  insertProduct,
  updateProduct,
  deleteProduct,
};