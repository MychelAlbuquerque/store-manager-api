const { idProductSchema, insertProductSchema } = require('./schemas');

const idValidation = (id) => {
  const { error } = idProductSchema.validate(id);
  if (error) return { type: 'INVALID_ID', message: 'Insira um ID válido' };
  return { type: null, message: '' };
};

const insertProductValidation = (name) => {
  const { error } = insertProductSchema.validate({ name });
  if (error) {
    return {
      type: 'INVALID_PRODUCT_NAME',
      message: error.message,
      errorCode: name ? 422 : 400, 
    };
  }
  return { type: null, message: '' };
};

module.exports = {
  idValidation,
  insertProductValidation,
};