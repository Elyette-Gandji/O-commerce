import axios from "axios";
/**
 * Je crée une instance d'axios avec des paramètres par défaut
 * Je peux ensuite l'importer dans les composants et les services
 */
const apiClient = axios.create({
  baseURL: process.env.VITE_API_BASE_URL || "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default apiClient;
