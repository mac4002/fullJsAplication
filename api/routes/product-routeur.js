const express = require('express');
const router = express.Router();
const productController = require(__basedir + '/controllers/product-controller.js');

router.route('/')
    .get(productController.list)

    .post(productController.add);

module.exports = router;