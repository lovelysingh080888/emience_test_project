const express = require('express');
const router = express.Router();
const product = require("../controllers/Product.controller")
router.get('/',product.getProduct);

module.exports = router;
