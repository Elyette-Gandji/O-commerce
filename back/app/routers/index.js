const { Router } = require('express');
const categoryRouter = require('./categoryRouter');
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');
const router = Router();

router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/products', productRouter);
module.exports = router;
