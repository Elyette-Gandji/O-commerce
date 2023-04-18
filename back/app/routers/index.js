// Créer un fichier de route distinct pour chaque contrôleur est une bonne pratique de développement pour mieux organiser le code et le rendre plus facile à maintenir.
// Créer un fichier index.js routeurs permet de rassembler tous les fichiers de route en un seul et même endroit, ce qui facilite la gestion des routes de l'application.

const express = require("express");
const router = express.Router();

/*--------------- Controllers ---------------*/
const productController = require("../controllers/productController");
const categoryController = require('../controllers/categoryController');


/*--------------- Routes category ---------------*/
// Routes GET 
router.get('/categories', categoryController.getAllCategory);
router.get('/categories/:id', categoryController.getOneCategory);

/*--------------- Routes product ---------------*/
// Routes GET 
router.get("/products", productController.getAllProducts)
router.get("/product/:id", productController.getOneProduct);

module.exports = router;
