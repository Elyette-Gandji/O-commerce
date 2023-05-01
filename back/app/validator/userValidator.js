const { body } = require('express-validator');

// Fonction de validation pour la création d'un utilisateur
const createUserValidate =
   [
    body('first_name', 'first_name must be a string')
      .notEmpty()
      .escape()
      .trim()
      .isString(),
    body('last_name', 'last_name must be a string')
      .notEmpty()
      .escape()
      .trim()
      .isString(),
    body('email', 'Must be a valid email adress')
      .notEmpty()
      .isEmail()
      .normalizeEmail()
      .escape()
      .trim(),
    body('password')
      .notEmpty()
      .isString()
      .isLength({ min: 8 })
      .withMessage('password must be at least 8 characters')
      .matches('[0-9]')
      .withMessage('password must contain a number')
      .trim()
      .escape()
  ];

// Fonction de validation pour la mise à jour d'un utilisateur
const updateUserValidate =
   [
    body('first_name', 'first_name must be a string')
      .escape()
      .trim()
      .isString(),
    body('last_name', 'last_name must be a string').escape().trim().isString(),
    body('email', 'Must be a valid email adress')
      .isEmail()
      .normalizeEmail()
      .escape()
      .trim(),
    // Restriction mot de passe : 8 caractères min / 1  chiffre min
    body('password')
      .isString()
      .isLength({ min: 8 })
      .withMessage('password must be at least 8 characters')
      .matches('[0-9]')
      .withMessage('password must contain a number')
      .trim()
      .escape()
  ];

module.exports = {
  createUserValidate,
  updateUserValidate
};
