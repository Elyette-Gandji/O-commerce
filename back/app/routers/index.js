// Créer un fichier de route distinct pour chaque contrôleur est une bonne pratique de développement pour mieux organiser le code et le rendre plus facile à maintenir.
// Créer un fichier index.js routeurs permet de rassembler tous les fichiers de route en un seul et même endroit, ce qui facilite la gestion des routes de l'application.

module.exports = router;

const express = require("express");
const router = express.Router();

const productRouter = require("./productRouter");

// Toutes les routes qui commencent par /products seront cherché dans le productRouter.
router.use("/products", productRouter);
