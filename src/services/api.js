import axios from "axios";

export const api = axios.create({
  baseURL: "https://agenda-contatos-api.onrender.com",
  // timeout: 5000,
});
