import { createApp } from "vue";
// pinia est un plugin qui permet de gérer les données de l'application
import { createPinia } from "pinia";
import "./style.css";
// on importe le fichier router.js qui contient les routes de l'application
// ces routes sont utilisées par le composant <router-view> dans App.vue pour afficher les composants
import router from "./routes/router.js";

import App from "./App.vue";
// on crée l'application avec la fonction createApp de Vue
const app = createApp(App);
// on utilise le plugin pinia pour gérer les données de l'application
app.use(createPinia());
app.use(router);
// on monte l'application sur le div #app
app.mount("#app");
