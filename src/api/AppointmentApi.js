import { api } from "./Api";

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
