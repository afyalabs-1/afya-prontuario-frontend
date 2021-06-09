export const medicalrecord = [
    {
      id: 1,
      name:"Consulta Endocrinologista",
      specialist: "Dr. Rudy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      date: "23/06/2021",
      time: "17:00"
    },
]

    export const getMedicalRecord = async () => {
        return new Promise((resolve) =>
          setTimeout(resolve, 2000, { data: medicalrecord, status: "success" })
        );
      };