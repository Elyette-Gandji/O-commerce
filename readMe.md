# E-commerce website

## Description

Ce projet est un site e-commerce qui permet de gérer les produits, les catégories, les utilisateurs, les commandes et les paiements.

## Stack technique

### Frontend

    * Vue.js (framework)
    * axios (http requests)
    * pinia (state management)
    * dotenv (env variables)

### Backend

    * Node.js (runtime)
    * express (framework)
    * express-validator (validation)
    * sequelize (ORM)
    * better-sse (server-sent events)
    * postgres (database)
    * redis (cache)
    * dotenv (env variables)

## Installation

### Prérequis

* Node.js
* npm
* postgres
* redis

## Architecture

    Backend

    Le backend est composé de 3 modules :

        * api : contient les routes et les controllers
        * core : contient les modèles, les services et les middlewares
        * app : contient le serveur

     Frontend

    Le frontend est composé de 3 modules :

        * api : contient les services
        * core : contient les composants, les stores et les routes
        * app : contient le serveur

### Etapes du projet

[users stories](/docs/stories.md): # Path: stories.md

 [mcd-mlc](/docs/mcd-mlc.md): # Path: mcd-mlc.md

[mld](/docs/mld.md): # Path: mld.md

[répartition des tâches](/docs/repartition.md): # Path: repartition.md
