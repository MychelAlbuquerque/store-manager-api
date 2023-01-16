const Joi = require('joi');

const idProductSchema = Joi.number().integer().min(1).required();

module.exports = {
  idProductSchema,
};