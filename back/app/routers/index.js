const { Router } = require('express');
const categoryRouter = require('./categoryRouter');
const productRouter = require("./productRouter");
const router = Router();


router.use('/categories', categoryRouter);
router.use("/products", productRouter);
module.exports = router;
