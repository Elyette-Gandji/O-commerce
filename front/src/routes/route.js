import { createRouter, createWebHistory } from "vue-router";
/**
 * La constante routes contient les routes de l'application
 * Le path est l'url de la page
 * Le name est le nom de la page
 * Le component est le composant qui sera chargé
 */
export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/hello.vue"),
  },
];

/**
 * La constante router est le router de l'application
 * createWebHistory() permet de créer un historique de navigation
 * en d'autres termes, quand on clique sur le bouton retour du navigateur
 * on revient à la page précédente
 * routes est la constante qui contient les routes de l'application
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
