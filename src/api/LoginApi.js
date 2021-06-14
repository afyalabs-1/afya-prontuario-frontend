import { api } from "./Api";

export const login = (userData) => {
  return api.post("auth/login", userData);
};
