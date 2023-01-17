const Joi = require('joi');

const idProductSchema = Joi.number().integer().min(1).required();

const insertProductSchema = Joi.object({ name: Joi.string().min(5).required() });

module.exports = {
  idProductSchema,
  insertProductSchema,
};