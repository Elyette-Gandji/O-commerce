const express = require("express");
const productController = require("../controllers/productController");
const validateParam = require("../validator/validateParam");

const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/:id", validateParam, productController.getOneProduct);

module.exports = router;
