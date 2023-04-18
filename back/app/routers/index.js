const { Router } = require('express');
const categoryRouter = require('./categoryRouter');
const router = Router();

router.use('/categories', categoryRouter);
module.exports = router;