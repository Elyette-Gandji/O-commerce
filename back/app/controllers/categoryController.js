const { Category } = require('../models');

const categoryController = {

  // Fonction pour récupérer toutes les catégories en incluant ses produits
  async getAllCategory(_req, res) {
    try {
      const categories = await Category.findAll({
        include: 'products'
      });
      res.status(200).json(categories);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  // Fonction pour récupérer une categorie en incluant ses produits
  async getOneCategory(req, res) {
    const id = req.params.id;
    try {
      const categorie = await Category.findByPk(id, {
        include: 'products'
      });
      res.status(200).json(categorie);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  // Fonction pour créer une catégorie
  async createOneCategory(req, res) {
    try {
      const { name } = req.body;
      const category = await Category.create({
        name
      });
      res.status(201).json(category);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  // Fonction pour supprimer une categorie
  async deleteOneCategory(req, res) {
    try {
      const id = req.params.id;
      const category = await Category.findByPk(id);
      if(!category) {
        res.status(404).json('Cant find category' + id);
      } else {
        await category.destroy();
        res.status(204).json();
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  }
};

module.exports = categoryController;
