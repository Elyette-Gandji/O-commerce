# E-commerce website

## Description

Ce projet est un site e-commerce qui permet de gérer les produits, les catégories, les utilisateurs, les commandes et les paiements.

## Stack technique

### Frontend

    * Vue.js (framework)
    * axios (http requests)
    * pinia (state management)

### Backend

    * Node.js (runtime)
    * express (framework)
    * express-validator (validation)
    * sequelize (ORM)
    * better-sse (server-sent events)
    * postgres (database)
    * redis (cache)

## Installation

### Prérequis

* Node.js
* npm
* postgres
* redis

## Architecture

    Backend

    Le backend est composé de 2 modules :

        * ap : contient les controllers, les middlewares, les models et les routes
        * data : contient le fichier de base de données

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
