const { body, validationResult } = require('express-validator');

/**
 * Middleware pour valider la requête de création d'une catégorie
 * en utilisant la validation via express-validator.
 */
const validateCategory = [
  /**
   * On definie la validation du champs name qui ne peut être vide
   * Et on utilise la méthode trim qui supprime les espaces blancs
   * avant et après la valeur du champs.
   */
  body('name').trim().notEmpty().withMessage('Name is required').escape(),
  /**
   * Middleware pour valider les données de la requête via la méthode validationResult
   * Si les données ne sont pas valider on renvoie un tableau d'erreurs
   * contenant les erreurs de validation
   * Si les données sont valider on passe au middleware suivant via le next().
   */
  (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(500).json(error.toString());
    }
  },
];

module.exports = validateCategory;
