const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return result;
};

const getById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?', [id],
  );
  return result;
};

const insertProduct = async (productName) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)', [productName],
  );
  return insertId;
};

const updateProduct = async (name, id) => {
  await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?', [name, id],
  );
};

module.exports = {
  getAll,
  getById,
  insertProduct,
  updateProduct,
};