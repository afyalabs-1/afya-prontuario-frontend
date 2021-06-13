import { api } from "./Api";

export const LoginRouter = () => {
  return api.post("auth/login");
};
