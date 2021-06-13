import axios from "axios";

export const cepValidation = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});
