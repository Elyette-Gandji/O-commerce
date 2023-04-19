const { Product } = require('../models');

const productController = {
  
  getAllProducts: async (req, res) => {
    try {
        const products = await Product.findAll({
          include: {
            association: 'categories',          // On inclut l'association categories (un produit avec ses catégories)
            include: 'promotion'                // On inclut l'association promotion (un produit avec sa promotion)
          }
        });
        res.status(200).json(products);         // On renvoie la réponse avec un code 200 : OK
      } catch (error) {                         // En cas d'erreur
        console.trace(error);                   // On affiche l'erreur en console
        res.status(500).json(error.toString()); // On renvoie une réponse avec code 500 : internal server error, ainsi que le message d'erreur
      }
  },

  getOneProduct: async (req, res) => {
    try {
      const productId = req.params.id;          // On récupère l'id de la liste dans la requête
      const product = await Product.findByPk(productId, {
        include: {
          association: 'categories',            // On inclut l'association categories (un produit avec ses catégories)
            include: 'promotion'                // On inclut l'association promotion (un produit avec sa promotion)
        }
      });
      if (product) {                            // Si on a bien récupéré le produit 
        res.status(200).json(product);          // On renvoie le produit avec code 200
      } else {
        res.status(404).json('Cant find product ' + productId);
      }

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

};

module.exports = productController;
