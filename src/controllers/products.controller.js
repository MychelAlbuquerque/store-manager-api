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

module.exports = {
  getAll,
  getById,
  insertProduct,
};