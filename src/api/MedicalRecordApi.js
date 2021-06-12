export const medicalrecords = [
  {
    id: 1,
    paciente: "Fellipe Henrique",
    name: "Consulta Endocrinologista",
    specialist: "Dr. Rudy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    date: "23/06/2021",
    time: "17:00",
  },
];

export const getMedicalRecord = async () => {
  return new Promise((resolve) =>
    setTimeout(resolve, 2000, { data: medicalrecords, status: "success" })
  );
};
