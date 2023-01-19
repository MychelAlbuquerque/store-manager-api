const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    `SELECT sp.sale_id AS saleId, sp.product_id AS productId, sp.quantity, sales.date
    FROM sales_products AS sp
    INNER JOIN sales AS sales ON sp.sale_id = sales.id`,
  );
  return result;
};

const getById = async (id) => {
  const [result] = await connection.execute(
    `SELECT sp.product_id AS productId, sp.quantity, sales.date
    FROM sales_products AS sp
    INNER JOIN sales AS sales ON sales.id = sp.sale_id
    WHERE sp.sale_id = ?`, [id],
  );
  return result;
};

module.exports = {
  getAll,
  getById,
};