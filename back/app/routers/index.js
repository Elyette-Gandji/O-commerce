// Créer un fichier de route distinct pour chaque contrôleur est une bonne pratique de développement pour mieux organiser le code et le rendre plus facile à maintenir.
// Créer un fichier index.js routeurs permet de rassembler tous les fichiers de route en un seul et même endroit, ce qui facilite la gestion des routes de l'application.


const express = require("express");
const router = express.Router();
const productRouter = require("./productRouter");
const userRouter = require('./userRouter');


// Toutes les routes qui commencent par /products seront cherchées dans le productRouter.
router.use("/products", productRouter);

// Toutes les routes qui commencent par /users seront cherchées dans le userRouter.
router.use("/users", userRouter);

module.exports = router;