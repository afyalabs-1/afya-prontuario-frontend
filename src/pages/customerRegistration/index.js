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

import { createClient as createClientApi } from "../../api/ClientApi";

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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cel, setCel] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [avatar, setAvatar] = useState("");

  const createClient = () => {
    const clientData = {
      cpf: cpf,
      name: name,
      email: email,
      phoneNumber: phone,
      cellPhone: cel,
      birthDate: birthDate,
      gender: gender,
      bloodType: bloodType,
      profilePictureUrl: avatar,
    };
    createClientApi(clientData)
      .then((response) => {
        console.log("Cliente criado com sucesso!");
      })
      .catch((error) => {
        console.error("Algo deu errado na criação do cliente");
      });
  };

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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              value={cel}
              onChange={(e) => setCel(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <TextField
              id="cpf"
              label="CPF"
              variant="outlined"
              color="secondary"
              fullWidth={true}
              className={classes.marginBottomField}
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item xs={4}>
            <FormControl
              variant="outlined"
              fullWidth={true}
              className={classes.formControl}
            >
              <InputLabel id="gender">Gênero</InputLabel>
              <Select
                labelId="select-gender"
                id="gender"
                label="gender"
                justify="center"
                color="secondary"
                className={classes.marginBottomField}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value={"FEMALE"}>Feminino</MenuItem>
                <MenuItem value={"MALE"}>Masculino</MenuItem>
                <MenuItem value={"OTHER"}>Outros</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="birthDate"
              label="Data de Nascimento"
              type="date"
              variant="outlined"
              color="secondary"
              InputLabelProps={{
                shrink: true,
              }}
              value={birthDate}
              fullWidth={true}
              className={classes.marginBottomField}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl
              variant="outlined"
              fullWidth={true}
              className={classes.formControl}
            >
              <InputLabel id="Tipo Sanguíneo">Tipo sanguíneo</InputLabel>
              <Select
                id="bloodType"
                label="Tipo sanguíneo"
                justify="center"
                color="secondary"
                className={classes.marginBottomField}
                value={bloodType}
                onChange={(e) => setBloodType(e.target.value)}
              >
                <MenuItem value={"A_POSITIVE"}>A+</MenuItem>
                <MenuItem value={"A_NEGATIVE"}>A-</MenuItem>
                <MenuItem value={"B_POSITIVE"}>B+</MenuItem>
                <MenuItem value={"B_NEGATIVE"}>B-</MenuItem>
                <MenuItem value={"O_POSITIVE"}>O+</MenuItem>
                <MenuItem value={"O_NEGATIVE"}>O-</MenuItem>
                <MenuItem value={"AB_POSITIVE"}>AB+</MenuItem>
                <MenuItem value={"AB_NEGATIVE"}>AB+</MenuItem>
              </Select>
            </FormControl>
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
        <TextField
          id="avatar"
          label="Imagem de Perfil (URL)"
          variant="outlined"
          color="secondary"
          fullWidth={true}
          className={classes.marginBottomField}
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<SaveIcon />}
              onClick={() => {
                createClient();
              }}
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
