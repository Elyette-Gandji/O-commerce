const express = require('express');

/*--------------- Controllers ---------------*/
const categoryController = require('../controllers/categoryController');

/*--------------- Routes ---------------*/
const router = express.Router();

// Route GET 
router.get('/categories', categoryController.getAllCategory);
router.get('/categories/:id', categoryController.getOneCategory);

/* Export */
module.exports = router;