import React, { useState, useEffect } from "react";
import AppointmentCard from "../../components/componentsSchedule/AppointmentCard";
import {
  getAppointments,
  getAppointmentsByClientName,
} from "../../api/AppointmentApi";
import Loading from "../../components/Loading";
import SearchByFilters from "../../components/componentsSchedule/SearchByFilters";

const Schedule = () => {
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAppointments()
      .then((response) => {
        setAppointments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao pegar os agendamentos.");
      });
  }, []);

  const getFilteredAppointments = () => {
    getAppointmentsByClientName()
      .then((response) => {
        setAppointments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro na requisição dos Appointments by Clients");
      });
  };

  return (
    <div>
      <SearchByFilters onClick={() => getFilteredAppointments()} />
      {loading ? <Loading /> : ""}

      {appointments.map((appointment) => (
        <AppointmentCard key={appointment.id} appointment={appointment} />
      ))}
    </div>
  );
};

export default Schedule;
