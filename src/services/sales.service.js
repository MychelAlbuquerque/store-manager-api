const salesModel = require('../models/sales.model');

const getAll = async () => {
  const sales = await salesModel.getAll();
  return { type: null, message: sales };
};

const getById = async (id) => {
  const sale = await salesModel.getById(id);
  console.log(sale);
  if (!sale.length) return { type: 'error', message: 'Sale not found' };
  return { type: null, message: sale };
};

module.exports = {
  getAll,
  getById,
};