import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { getAppointments } from "../../api/AppointmentApi";
import { getSpecialist } from "../../api/SpecialistApi";
// import { getClients } from "../../api/ClientApi";

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
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
  },
  buttonTest: {
    backgroundColor: "#D31C5B",
  },
}));

const NewAppointment = ({ onClick }) => {
  const classes = useStyles();

  const [clientName, setClientName] = useState();
  const [specialistId, setSpecialistId] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [price, setPrice] = useState();
  const [appointmentStatus, setAppointmentStatus] = useState("1");

  // useEffect(() => {
  //   getClients()
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
  const [clients, setClients] = useState([]);
  useEffect(() => {
    getAppointments()
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error("Erro ao pegar clients.");
      });
  }, []);

  const [specialistName, setSpecialistName] = useState([]);
  useEffect(() => {
    getSpecialist()
      .then((response) => {
        setSpecialistName(response.data);
      })
      .catch((error) => {
        console.error("Erro ao pegar os specialists.");
      });
  }, []);

  return (
    <div className={classes.center}>
      <form className={classes.formControl} noValidate autoComplete="off">
        <div>
          <Autocomplete
            id="name"
            options={clients}
            getOptionLabel={(option) => option.clientName}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Nome do Cliente"
                variant="outlined"
                color="secondary"
                fullWidth={true}
                justify="center"
                className={classes.margin}
                defaultValue={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            )}
          />

          <Autocomplete
            id="specialist"
            options={specialistName}
            onChange={(e, value) => setSpecialistId(value.id)}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Especialista"
                variant="outlined"
                color="secondary"
                fullWidth={true}
                justify="center"
                className={classes.margin}
              />
            )}
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
                className={classes.buttonTest}
                startIcon={<ScheduleIcon />}
                onClick={() => {}}
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
