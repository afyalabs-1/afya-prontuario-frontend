import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppointmentCard from "../../components/componentsSchedule/AppointmentCard";
import Loading from "../../components/Loading";
import TextField from "@material-ui/core/TextField";

import Container from "@material-ui/core/Container";
import Navbar from "../../components/Navbar";

import { getAttendances } from "../../api/AttendancesApi";

const useStyles = makeStyles((theme) => ({
  clientFilter: {
    marginTop: 16,
    marginBottom: 16,
  },
}));

const Schedule = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAttendances()
      .then((response) => {
        setAppointments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao pegar os agendamentos.");
      });
  }, []);

  const filterAppointments = (clientName) => {
    if (clientName.length > 0) {
      const filteredAppointments = appointments.filter((appointment) => {
        return appointment.client.name.includes(clientName);
      });

      setAppointments(filteredAppointments);
    } else {
      window.location.href = "/schedule";
    }
  };

  return (
    <div>
      <Navbar title="Agenda" />
      <Container>
        <TextField
          className={classes.clientFilter}
          id="outlined-basic"
          label="Pesquisar cliente"
          variant="outlined"
          color="secondary"
          fullWidth={true}
          justify="center"
          onChange={(e) => filterAppointments(e.target.value)}
        />

        {loading ? (
          <Loading />
        ) : (
          appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              showClientData={true}
              showDetails={false}
            />
          ))
        )}
      </Container>
    </div>
  );
};

export default Schedule;
