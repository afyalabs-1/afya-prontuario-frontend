import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  button: {
    margin: theme.spacing(1),
  },
  searchGrid: {
    marginBottom: 16,
  },
}));

const SearchByFilters = ({ onClick }) => {
  const classes = useStyles();

  const [filtro, setFiltro] = useState();

  const handleChange = (event) => {
    setFiltro(event.target.value);
  };
  return (
    <div>
      <Grid
        container
        spacing={1}
        alignContent="center"
        justify="center"
        alignItems="center"
        className={classes.searchGrid}
      >
        <Grid item xs="auto">
          <form className={classes.formControl} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Pesquisar"
              variant="outlined"
              color="secondary"
              fullWidth="true"
              justify="center"
            />
          </form>
        </Grid>
        <Grid item xs="auto">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="filter">Filtro</InputLabel>
            <Select
              labelId="select-filtro"
              id="select-filtro"
              value={filtro}
              onChange={handleChange}
              label="Filtro"
              color="secondary"
              justify="center"
            >
              <MenuItem value={1}>Data Atendimento</MenuItem>
              <MenuItem value={2}>Data Agendamento</MenuItem>
              <MenuItem value={3}>Cliente</MenuItem>
              <MenuItem value={4}>Status</MenuItem>
              <MenuItem value={5}>Especialista</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs="auto">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<SearchIcon />}
            onClick={onClick}
            alignItems="center"
          >
            Filtrar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchByFilters;
