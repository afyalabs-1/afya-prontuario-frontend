import { api } from "./Api";

export const createAdress = (clientAdress) => {
  return api.post("/address", clientAdress);
};
