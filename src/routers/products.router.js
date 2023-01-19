const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);
router.post('/', productsController.insertProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;