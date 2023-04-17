const { param, validationResult } = require('express-validator');

/**
 * Middleware pour vérifier que l'id de la requête est bien un nombre
 * en utilisant la méthode isInt() de express-validator
 */
const validateParam = [

  param('id').isInt().withMessage('Id must be a number'),
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
]

module.exports = validateParam;