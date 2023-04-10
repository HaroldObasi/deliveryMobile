import axios from "axios";

/**
 * API URL is "https://frd-delivery-api.onrender.com/api/"
 */
export const API_URL = axios.create({
  baseURL: "https://frd-delivery-api.onrender.com/api/",
});
