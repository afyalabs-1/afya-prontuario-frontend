import { api } from "./Api";

export const getClients = () => {
  return api.get("/clients");
};
