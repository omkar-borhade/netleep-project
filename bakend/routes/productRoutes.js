// productRoutes.js
const express = require('express');
const productController = require('../controllers/productController');
const Product = require('../models/product');
const router = express.Router();

router.post('/checkout', productController.checkout);

router.get('/productList', async (req, res, next) => {
    try {
      const products = await Product.find();
      res.render('productList', { products });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
