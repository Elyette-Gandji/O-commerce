
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const expressValidator = require('express-validator');
const session = require('express-session');
const router = require('./app/routers');
const middlewares = require('./app/middlewares');

const app = express();

// On autorise tout le monde sur notre API
app.use(cors('*'));

// On demande à Express d'extraire les données des requêtes POST
app.use(express.urlencoded({ extended: true })); // Pour parser les body de type `x-www-form-url-encoded` et les ajouter au req.body
app.use(express.json()); // Pour parser les body de type JSON

// Charger les données de la session sur `req.session` et `res.locals`
app.use(
  session({
      saveUninitialized: true,
      resave: true,
      secret: 'Un secret pour signer les id de sessions',
  })
);

// On plug le router
app.use(router);

// On lance l'application
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`API demarrée sur le port ${port}`);
});