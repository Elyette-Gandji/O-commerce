const express = require('express');

/*--------------- Controllers ---------------*/
const categoryController = require('../controllers/categoryController');
const isAdmin = require('../middlewares/isAdmin');
const validateCategory = require('../validator/validateCategory');

/*--------------- Routes ---------------*/
const router = express.Router();

// Route GET 
router.get('/categories', categoryController.getAllCategory);
router.get('/categories/:id', categoryController.getOneCategory);

// Route POST
router.post('/categories', isAdmin, validateCategory, categoryController.createOneCategory);

/* Export */
module.exports = router;