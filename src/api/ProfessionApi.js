import { api } from "./Api";

export const getProfessions = () => {
  return api.get("/professions");
};
