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
    width: 200,
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

  const [status, setStatus] = useState(1);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className={classes.center}>
      <form className={classes.formControl} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-basic"
            label="Nome do Cliente"
            variant="outlined"
            color="secondary"
            fullWidth="true"
            justify="center"
            className={classes.margin}
          />
          <TextField
            id="outlined-basic"
            label="Especialista"
            variant="outlined"
            color="secondary"
            fullWidth="true"
            justify="center"
            className={classes.margin}
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
                id="datetime-local"
                label="Dia e Hora"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.margin}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs="auto">
              <TextField
                id="outlined-basic"
                label="Valor"
                variant="outlined"
                color="secondary"
                fullWidth="true"
                justify="center"
                className={classes.margin}
              />
            </Grid>
            <Grid item xs="auto">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="filter">Status</InputLabel>
                <Select
                  labelId="select-status"
                  id="select-status"
                  value={status}
                  onChange={handleChange}
                  label="status"
                  color="secondary"
                  justify="center"
                  className={classes.margin}
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
                onClick={onClick}
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
