import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SaveIcon from "@material-ui/icons/Save";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  marginBox: {
    marginTop: 20,
    marginBottom: 5,
    marginRight: 50,
    marginLeft: 50,
  },
  marginBottomField: {
    marginBottom: 20,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

const CustomerRegistration = () => {
  const classes = useStyles();
  const [gender, setGender] = useState();

  return (
    <div className={classes.marginBox}>
      <form>
        <TextField
          id="clientName"
          label="Nome Completo"
          variant="outlined"
          color="secondary"
          fullWidth={true}
          className={classes.marginBottomField}
        />
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <TextField
              id="phone"
              label="Telefone"
              variant="outlined"
              color="secondary"
              fullWidth={true}
              className={classes.marginBottomField}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="celphone"
              label="Celular"
              variant="outlined"
              color="secondary"
              fullWidth={true}
              className={classes.marginBottomField}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <TextField
              id="cpf"
              label="Cpf"
              variant="outlined"
              color="secondary"
              fullWidth={true}
              className={classes.marginBottomField}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              color="secondary"
              fullWidth={true}
              className={classes.marginBottomField}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="gender">Gênero</InputLabel>
              <Select
                labelId="select-gender"
                id="gender"
                label="gender"
                justify="center"
                color="secondary"
                autoWidth={false}
                className={classes.marginBottomField}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value={1}>Feminino</MenuItem>
                <MenuItem value={2}>Masculino</MenuItem>
                <MenuItem value={3}>Indefinido</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="birthDate"
              label="Data de Nascimento"
              variant="outlined"
              color="secondary"
              fullWidth={true}
              className={classes.marginBottomField}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="bloodType"
              label="Tipo sanguíneo"
              variant="outlined"
              color="secondary"
              fullWidth={true}
              className={classes.marginBottomField}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={4}>
            <TextField
              id="cep"
              label="CEP"
              variant="outlined"
              color="secondary"
              fullWidth={true}
              className={classes.marginBottomField}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="state"
              label="Estado"
              variant="outlined"
              color="secondary"
              fullWidth={true}
              className={classes.marginBottomField}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="city"
              label="Cidade"
              variant="outlined"
              color="secondary"
              fullWidth={true}
              className={classes.marginBottomField}
            />
          </Grid>
        </Grid>
        <TextField
          id="district"
          label="Bairro"
          variant="outlined"
          color="secondary"
          fullWidth={true}
          className={classes.marginBottomField}
        />
        <TextField
          id="adress"
          label="Endereço"
          variant="outlined"
          color="secondary"
          fullWidth={true}
          className={classes.marginBottomField}
        />

        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<SaveIcon />}
            >
              Salvar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CustomerRegistration;
