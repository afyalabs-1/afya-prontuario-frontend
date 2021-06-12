import { api } from "./Api";

export const getClients = () => {
  return api.get("/clients");
};

export const createClient = (clientData) => {
  return api.post("/clients", clientData);
};
