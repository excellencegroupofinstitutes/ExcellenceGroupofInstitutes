import { StrictMode } from "react";
import axios from "axios";
const api = axios.create({
  baseURL: '/api/v1',
});

api.interceptors.request.use((config) => {
  if (
    config.data &&
    !(config.data instanceof FormData) &&
    !config.headers["Content-Type"]
  ) {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

export default api;
