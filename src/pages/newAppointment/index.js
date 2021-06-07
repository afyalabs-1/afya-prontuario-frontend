import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Button from "@material-ui/core/Button";

import { createNewAppointment } from "../../api/AppointmentApi";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
  },
  margin: {
    marginBottom: 20,
  },
  center: {
    margin: "auto",
  },
}));

const NewAppointment = ({ onClick }) => {
  const classes = useStyles();

  const [clientName, setClientName] = useState();
  const [specialist, setSpecialist] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [price, setPrice] = useState();
  const [appointmentStatus, setAppointmentStatus] = useState(1);

  return (
    <div className={classes.center}>
      <form className={classes.formControl} noValidate autoComplete="off">
        <div>
          <TextField
            id="client-name"
            label="Nome do Cliente"
            variant="outlined"
            color="secondary"
            fullWidth={true}
            justify="center"
            className={classes.margin}
            defaultValue={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
          <TextField
            id="specialist"
            label="Especialista"
            variant="outlined"
            color="secondary"
            fullWidth={true}
            justify="center"
            className={classes.margin}
            defaultValue={specialist}
            onChange={(e) => setSpecialist(e.target.value)}
          />
          <Grid
            container
            spacing={10}
            alignContent="center"
            justify="center"
            alignItems="center"
            className={classes.searchGrid}
          >
            <Grid item xs="auto">
              <TextField
                id="date"
                label="Dia"
                type="date"
                className={classes.margin}
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Grid>
            <Grid item xs="auto">
              <TextField
                id="time"
                label="Hora"
                type="time"
                className={classes.margin}
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Grid>
            <Grid item xs="auto">
              <TextField
                id="price"
                label="Valor"
                variant="outlined"
                color="secondary"
                fullWidth={true}
                justify="center"
                className={classes.margin}
                defaultValue={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs="auto">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="filter">Status</InputLabel>
                <Select
                  labelId="select-status"
                  id="appointment-status"
                  label="status"
                  color="secondary"
                  justify="center"
                  className={classes.margin}
                  value={appointmentStatus}
                  onChange={(e) => setAppointmentStatus(e.target.value)}
                >
                  <MenuItem value={1}>Agendado</MenuItem>
                  <MenuItem value={2}>Realizado</MenuItem>
                  <MenuItem value={3}>Cancelado</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={10}
            alignContent="center"
            justify="center"
            alignItems="center"
            className={classes.searchGrid}
          >
            <Grid item xs="auto">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<ScheduleIcon />}
                onClick={() => {
                  createNewAppointment({
                    clientName: clientName,
                    specialist: specialist,
                    date: date,
                    time: time,
                    price: price,
                    appointmentStatus: appointmentStatus,
                  });
                }}
              >
                Marcar Atendimento
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  );
};

export default NewAppointment;
