import { api } from "./Api";

export const getAttendances = () => {
  return api.get("/attendances");
};

export const createAttendances = (appointmentData) => {
  return api.post("/attendances", appointmentData);
};

export const getClientAttendances = (clientId) => {
  return api.get(`/attendances/client/${clientId}`);
};
