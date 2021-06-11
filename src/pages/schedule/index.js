import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppointmentCard from "../../components/componentsSchedule/AppointmentCard";
import Loading from "../../components/Loading";
import SearchByFilters from "../../components/componentsSchedule/SearchByFilters";

import {
  getAppointments,
  getAppointmentsByClientName,
} from "../../api/AppointmentApi";

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
    setLoading(true);
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
      {loading ? (
        <Loading />
      ) : (
        appointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))
      )}
    </div>
  );
};

export default Schedule;
