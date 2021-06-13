import { api } from "./Api";

const dummyProfessions = [
  {
    id: "dsadasf",
    name: "Ginecologista",
  },
  {
    id: "dsadaxf",
    name: "Cardiologista",
  },
  {
    id: "eradasf",
    name: "Endocrinologista",
  },
];

export const getProfessions = () => {
  // return api.get("/professions");
  //TODO: mudar este fake quando o back estiver funcionando
  return new Promise((resolve) =>
    setTimeout(resolve, 1000, { data: dummyProfessions, status: "success" })
  );
};
