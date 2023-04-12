import { createApp } from "vue";

// axios est une librairie qui permet de faire des requêtes HTTP
import axios from "axios";

// pinia est un plugin qui permet de gérer les données de l'application
import { createPinia } from "pinia";
// on importe le fichier style.css qui contient les styles de l'application
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
// on utilise axios pour faire des requêtes HTTP
app.config.globalProperties.$axios = axios;
// on monte l'application sur le div #app
app.mount("#app");