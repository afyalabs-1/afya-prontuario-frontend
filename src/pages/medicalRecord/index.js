import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Navbar from "../../components/Navbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import AppointmentCard from "../../components/componentsSchedule/AppointmentCard";

import { getClientAttendances } from "../../api/AttendancesApi";

const useStyles = makeStyles((theme) => ({
  clientAppointments: {
    marginTop: 16,
  },
  clientDetail: {
    marginTop: 16,
    marginLeft: 16,
  },
}));

const MedicalRecord = () => {
  const classes = useStyles();

  const [clientAppointments, setClientAppointments] = useState([]);
  let clientID = localStorage.getItem("clientId");
  let clientName = localStorage.getItem("clientName");
  let clientPhoto = localStorage.getItem("clientProfilePhoto");

  useEffect(() => {
    getClientAttendances(clientID)
      .then((response) => {
        setClientAppointments(response.data);
      })
      .catch((error) => {
        console.log("Algo deu errado na requisição das consultas do cliente");
      });
  }, []);

  return (
    <div>
      <Navbar title="Prontuário" />
      <Container>
        <Grid
          container
          spacing={4}
          alignItems="center"
          className={classes.clientDetail}
        >
          <Grid item xs={false}>
            <Avatar alt={clientName} src={clientPhoto} />
          </Grid>
          <Grid item xs={false}>
            <Typography gutterBottom variant="h6">
              {clientName}
            </Typography>
          </Grid>
        </Grid>

        <div>
          <Typography
            gutterBottom
            variant="subtitle1"
            className={classes.clientDetail}
          >
            Atendimentos ({clientAppointments.length})
          </Typography>
          {clientAppointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              showClientData={false}
            ></AppointmentCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MedicalRecord;
