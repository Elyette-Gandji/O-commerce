const express = require('express');

/*--------------- Controllers ---------------*/
const categoryController = require('../controllers/categoryController');
// todo const isAdmin = require('../middlewares/isAdmin');
const validateCategory = require('../validator/validateCategory');
const validateParam = require('../validator/validateParam');

/*--------------- Routes ---------------*/
const router = express.Router();

// Route GET 
router.get('/', categoryController.getAllCategory);
router.get('/:id', validateParam, categoryController.getOneCategory);

// Route POST
// Todo ajouter isAdmin
router.post('/', validateCategory, categoryController.createOneCategory);

// Route DELETE
router.delete('/:id', validateParam, categoryController.deleteOneCategory);

/* Export */
module.exports = router;