const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const { createUserValidate, updateUserValidate } = require('../validator/userValidator');
const validateParam = require('../validator/validateParam');


router.get('/', userController.getAllUsers);
router.get('/:id',validateParam, userController.getOneUser);
router.post('/', createUserValidate,  userController.createUser);
router.delete('/:id',validateParam, userController.deleteOneUser);
router.put('/:id',validateParam, updateUserValidate, userController.updateUser);

module.exports = router;