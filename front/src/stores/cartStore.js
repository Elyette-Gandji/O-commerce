import { defineStore } from "pinia";
import { ref, computed } from "vue";
/**
 * Je crée un store pour le panier
 * ce store est accessible dans tout le projet et permet de partager des données
 * entre les composants ainsi, si le panier est modifié dans un composant, il est
 * automatiquement mis à jour dans les autres composants.
 */
export const useCartStore = defineStore("cart", () => {
  // Je définis un state pour le panier
  const cart = ref([]);
  // Je définis une action qui permet d'ajouter un produit au panier
  /**
   * @typedef {Object} Product
   * @property {number} id
   * @property {string} name
   * @property {number} price
   * @property {number} quantity
   * @property {number} stock
   * */
  const addToCart = (product) => {
    cart.value.push(product);
  };
  // Je définis une action qui permet de supprimer un produit du panier
  const removeFromCart = (product) => {
    const index = cart.value.findIndex((p) => p.id === product.id);
    cart.value.splice(index, 1);
  };
  // Je définis une action qui permet de vider le panier
  const emptyCart = () => {
    cart.value = [];
  };

  // Je définis une computed qui permet de calculer le total du panier
  const total = computed(() => {
    return cart.value.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  });

  // Je définis une computed qui permet de calculer la quantité totale de produits dans le panier
  const totalQuantity = computed(() => {
    return cart.value.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
  });

  // Je retourne les méthodes et les states du store
  return {
    cart,
    addToCart,
    removeFromCart,
    emptyCart,
    total,
    totalQuantity,
  };
});
