import { api } from "./Api";

export const dummyAppointments = [
  {
    id: 1,
    clientName: "Melissa Ribeiro",
    date: "01/06/2021",
    time: "12 h",
    dateScheduling: "28.05.2021",
    price: "100,00",
    specialist: "Dr. Rudy",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpAXlwU5GVNw-WrWDoZfltd-2hoO8-Npj8g&usqp=CAU",
  },
  {
    id: 2,
    clientName: "Fellipe Henrique",
    date: "01/06/2021",
    time: "13 h",
    dateScheduling: "26.05.2021",
    price: "100,00",
    specialist: "Dr. José",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpv1SHXqX5w39ihEsmX-8YAYJwldFTnCXBWA&usqp=CAU",
  },
  {
    id: 3,
    clientName: "Robson Souza",
    date: "02/06/2021",
    time: "12 h",
    dateScheduling: "01.06.2021",
    price: "100,00",
    specialist: "Dr. José",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPSxlYabmRlKk43uvsBMIqjA7Rw_YCwK4TyA&usqp=CAU",
  },
  {
    id: 4,
    clientName: "Bianca Castanheira",
    date: "02/06/2021",
    time: "13 h",
    dateScheduling: "29.05.2021",
    price: "100,00",
    specialist: "Dr. José",
    photo:
      "http://images.uncyc.org/pt/thumb/2/29/Mr-bean-avatar.jpg/250px-Mr-bean-avatar.jpg",
  },
  {
    id: 5,
    clientName: "Alex Felipe",
    date: "01/06/2021",
    time: "14 h",
    dateScheduling: "26.06.2021",
    price: "100,00",
    specialist: "Dr. Pedro",
    photo:
      "https://conteudo.imguol.com.br/c/entretenimento/38/2017/12/21/cena-de-avatar-2009-1513852401735_v2_450x337.jpg",
  },
  {
    id: 6,
    clientName: "Melissa Ribeiro",
    date: "02/06/2021",
    time: "14 h",
    dateScheduling: "28.05.2021",
    price: "100,00",
    specialist: "Dr. Rudy",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpAXlwU5GVNw-WrWDoZfltd-2hoO8-Npj8g&usqp=CAU",
  },
];

export const dummyAppointmentsFilteredByClientName = [
  {
    id: 1,
    clientName: "Melissa Ribeiro",
    date: "01/06/2021",
    time: "12 h",
    dateScheduling: "28.05.2021",
    price: "100,00",
    specialist: "Dr. Rudy",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpAXlwU5GVNw-WrWDoZfltd-2hoO8-Npj8g&usqp=CAU",
  },
  {
    id: 6,
    clientName: "Melissa Ribeiro",
    date: "02/06/2021",
    time: "14 h",
    dateScheduling: "28.05.2021",
    price: "100,00",
    specialist: "Dr. Rudy",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpAXlwU5GVNw-WrWDoZfltd-2hoO8-Npj8g&usqp=CAU",
  },
];

export const getAppointments = async () => {
  return new Promise((resolve) =>
    setTimeout(resolve, 2000, { data: dummyAppointments, status: "success" })
  );
};

export const getAppointmentsByClientName = async (clientName) => {
  return new Promise((resolve) =>
    setTimeout(resolve, 2000, {
      data: dummyAppointmentsFilteredByClientName,
      status: "success",
    })
  );
};

export const createAppointment = async (appointmentData) => {
  // return api.post("/appointments", appointmentData);
  return new Promise((resolve) =>
    setTimeout(resolve, 2000, {
      data: appointmentData,
      status: "success",
    })
  );
};
