
require('dotenv').config();

const express = require('express');
const cors = require('cors');
//const router = require('./app/routers/router'); --> un router par controller

const app = express();

// On autorise tout le monde sur notre API
app.use(cors('*'));

// On demande à Express d'extraire les données des requêtes POST
app.use(express.urlencoded({ extended: true })); // Pour parser les body de type `x-www-form-url-encoded` et les ajouter au req.body
app.use(express.json()); // Pour parser les body de type JSON

// On plug le router
//app.use(router);

// On lance l'application
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API demarrée sur le port ${port}`);
});
