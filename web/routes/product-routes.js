const express = require('express');
const router = express.Router();
const products = require('../controllers/product-controller');

router.post('/', products.addProduct);
// router.get('/', products.getProducts);

module.exports = router;
