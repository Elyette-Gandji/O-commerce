import { createApp } from "vue";
// pinia est un plugin qui permet de gérer les données de l'application
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
// on crée l'application avec la fonction createApp de Vue
const app = createApp(App);
// on utilise le plugin pinia pour gérer les données de l'application
app.use(createPinia());

// on monte l'application sur le div #app
app.mount("#app");
