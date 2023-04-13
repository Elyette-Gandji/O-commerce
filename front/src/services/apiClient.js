import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VITE_API_BASE_URL || "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default apiClient;
