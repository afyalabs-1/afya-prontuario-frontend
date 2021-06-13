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
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import InputAdornment from "@material-ui/core/InputAdornment";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import Container from "@material-ui/core/Container";
import Navbar from "../../components/Navbar";

import { getAppointments, createAppointment } from "../../api/AppointmentApi";
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
  button: {
    backgroundColor: "#D31C5B",
  },
  snackbar: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const NewAppointment = ({ onClick }) => {
  const classes = useStyles();

  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [appointmentStatus, setAppointmentStatus] = useState("1");
  const [clients, setClients] = useState([]);
  const [specialists, setSpecialists] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   getClients()
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  useEffect(() => {
    getAppointments()
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error("Erro ao pegar clients.");
      });
  }, []);

  useEffect(() => {
    getSpecialist()
      .then((response) => {
        setSpecialists(response.data);
      })
      .catch((error) => {
        console.error("Erro ao pegar os specialists.");
      });
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const refreshPage = () => {
    setTimeout(() => {
      document.location.reload();
    }, 1000);
  };

  const createAppointmentOnServer = () => {
    setLoading(true);
    createAppointment()
      .then((response) => {
        setOpen(true);
        setLoading(false);
        refreshPage();
      })
      .catch((error) => {
        console.error("Algo deu errado no seu agendamento");
      });
  };

  return (
    <div>
      <Navbar title="Novo agendamento" />
      <Container>
        <div className={classes.center}>
          <form className={classes.formControl} noValidate autoComplete="off">
            <div>
              <Autocomplete
                id="name"
                options={clients}
                onChange={(e, value) => setSelectedClient(value.id)}
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
                  />
                )}
              />
              <Autocomplete
                id="selectedSpecialist"
                options={specialists}
                onChange={(e, value) => setSelectedSpecialist(value.id)}
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
                    value={date}
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
                    InputProps={{
                      startAdornment: (
                        <InputAdornment>
                          <AttachMoneyIcon style={{ fontSize: 15 }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs="auto">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
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
                      createAppointmentOnServer();
                    }}
                    disabled={loading}
                  >
                    Marcar Atendimento
                  </Button>

                  <Snackbar
                    className={classes.snackbar}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity="success">
                      Seu atendimento foi marcado com sucesso!
                    </Alert>
                  </Snackbar>
                </Grid>
              </Grid>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};
export default NewAppointment;
