const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const { createUserValidate, updateUserValidate } = require('../validator/userValidator');

router.get('/', userController.getAllUsers);
// ajouter paramValidator 
router.get('/:id', userController.getOneUser);
router.post('/', createUserValidate,  userController.createUser);
// ajouter paramValidator 
router.delete('/:id', userController.deleteOneUser);
// ajouter paramValidator 
router.put('/:id',updateUserValidate, userController.updateUser);

module.exports = router;