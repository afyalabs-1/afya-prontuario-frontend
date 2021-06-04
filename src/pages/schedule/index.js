import React, { useState, useEffect } from "react";
import AppointmentCard from "../../components/AppointmentCard";
import { getAppointments } from "../../api/AppointmentApi";

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

  return (
    <div>
      {loading ? <div>Carregando...</div> : ""}
      {appointments.map((appointment) => (
        <AppointmentCard key={appointment.id} appointment={appointment} />
      ))}
      {/* {dummyAppointments.map((appointment) => (
        <AppointmentCard appointment={appointment} />
      ))} */}
    </div>
  );
};

export default Schedule;
