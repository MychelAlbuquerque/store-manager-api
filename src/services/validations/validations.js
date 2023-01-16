const { idProductSchema } = require('./schemas');

const idValidation = (id) => {
  const { error } = idProductSchema.validate(id);
  if (error) return { type: 'INVALID_ID', message: 'Insira um ID válido' };
  return { type: null, message: '' };
};

module.exports = {
  idValidation,
};