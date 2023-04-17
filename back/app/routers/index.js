const { Router } = require('express');
const routerCategory = require('./routerCategory');
const router = Router();

router.use('/categories', routerCategory);
module.exports = router;