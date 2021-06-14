import { api } from "./Api";

export const getSpecialist = () => {
  return api.get("/specialists");
};

export const createSpecialist = (specialistData) => {
  return api.post("/specialists", specialistData);
};
