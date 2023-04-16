const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/products", productController.getAllProducts)
router.get("/product/:id", productController.getOneProduct);

module.exports = router;
