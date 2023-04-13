import { defineStore } from "pinia";
/**
 * Je crée un store pour le panier
 * ce store est accessible dans tout le projet et permet de partager des données
 * entre les composants ainsi, si le panier est modifié dans un composant, il est
 * automatiquement mis à jour dans les autres composants.
 */
export const useCartStore = defineStore({
  // Le nom unique du store dans l'application
  id: "cart",
  // Les données du store
  state: () => ({
    // Le panier est un tableau de produits (voir le type Product)
    products: [],
  }),
  // Les actions du store
  actions: {
    /**
     * Ajoute un produit au panier et met à jour le total et la quantité.
     * Le type Product est défini dans le JSDoc de la fonction. Il permet de
     * définir le type des paramètres et des valeurs de retour de la fonction.
     * Lorsque l'utilisateur ajoutera un produit au panier,
     * cette fonction sera appelée avec un objet qui respecte le type Product.
     * @typedef {Object} Product
     * @property {string} id
     * @property {string} name
     * @property {number} price
     * @param {Product} product
     * @returns {void}
     */
    addProduct(product) {
      this.products.push(product);
    },
  },
  /**
   * Les getters du store
   * Les getters sont des fonctions qui retournent une valeur calculée à partir
   * des données du store. Les getters sont automatiquement mis à jour lorsque
   * les données du store sont modifiées.
   */
  getters: {
    /**
     * La quantité de produits dans le panier
     * elle est calculée à partir de la longueur du tableau des produits
     * ainsi elle est automatiquement mise à jour lorsque le tableau est modifié
     * @returns {number}
     */
    quantity() {
      return this.products.length;
    },
    /**
     * Le total du panier
     * il est calculé à partir du prix de chaque produit
     * ainsi il est automatiquement mis à jour lorsque le tableau des produits
     * est modifié
     * @returns {number}
     * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
     * */
    total() {
      return this.products.reduce((acc, product) => acc + product.price, 0);
    },
  },
});
