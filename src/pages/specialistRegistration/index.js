import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SaveIcon from "@material-ui/icons/Save";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Container from "@material-ui/core/Container";
import Navbar from "../../components/Navbar";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { createSpecialist as createSpecialistApi } from "../../api/SpecialistApi";
import { getProfessions } from "../../api/ProfessionApi";
import { cepValidation } from "../../api/ViaCepApi";
import { createAdress } from "../../api/AdressApi";

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
    minWidth: 150,
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

const SpecialistRegistration = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cel, setCel] = useState("");
  const [crm, setCrm] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [cep, setCep] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [adress, setAdress] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [professionId, setProfessionId] = useState("");
  const [allProfessions, setAllProfessions] = useState([]);

  const refreshPage = () => {
    setTimeout(() => {
      document.location.reload();
    }, 2000);
  };

  const createSpecialist = () => {
    const specialistData = {
      name: name,
      email: email,
      phoneNumber: phone,
      cellPhone: cel,
      crm: crm,
      profilePictureUrl: avatar,
      profession: professionId,
    };

    const specialistAdress = {
      postalCode: cep,
      state: state,
      city: city,
      district: district,
      street: adress,
      number: number,
      complement: complement,
    };
    setLoading(true);
    createSpecialistApi(specialistData)
      .then((response) => {
        console.log("Especialista criado com sucesso!");
        let specialistId = response.data.id;
        specialistAdress.specialist = { id: specialistId };

        createAdress(specialistAdress)
          .then(() => {
            console.log("Epecialista criado com endereço vinculado!");
            setOpen(true);
            setLoading(false);
            refreshPage();
          })
          .catch((error) => {
            console.error("Deu ruim no endereço!");
          });
      })
      .catch((error) => {
        console.error("Algo deu errado na criação do Especialista");
      });
  };

  const cepValidationApi = () => {
    cepValidation
      .get(`${cep}/json/`)
      .then((response) => {
        setState(response.data.uf);
        setCity(response.data.localidade);
        setDistrict(response.data.bairro);
        setAdress(response.data.logradouro);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Algo deu errado na requisição do cep");
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    getProfessions()
      .then((response) => {
        console.log(response);
        setAllProfessions(response.data);
      })
      .catch((error) => {
        console.error("Erro ao puxar as profissões.");
      });
  }, []);

  return (
    <div>
      <Navbar title="Cadastro de Especialista" />
      <Container>
        <div className={classes.marginBox}>
          <form>
            <TextField
              id="specialistName"
              label="Nome Completo"
              variant="outlined"
              color="secondary"
              fullWidth={true}
              className={classes.marginBottomField}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <FormControl
              variant="outlined"
              fullWidth={true}
              className={classes.formControl}
            >
              <InputLabel id="profession">Profissão</InputLabel>
              <Select
                labelId="select-profession"
                id="profession"
                label="profession"
                justify="center"
                color="secondary"
                className={classes.marginBottomField}
                value={professionId}
                onChange={(e) => setProfessionId(e.target.value)}
              >
                {allProfessions.map((profession) => (
                  <MenuItem key={profession.id} value={profession.id}>
                    {profession.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

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
                  id="crm"
                  label="CRM"
                  variant="outlined"
                  color="secondary"
                  fullWidth={true}
                  className={classes.marginBottomField}
                  value={crm}
                  onChange={(e) => setCrm(e.target.value)}
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

            <Grid container spacing={2} alignItems="center" justify="center">
              <Grid item xs>
                <TextField
                  id="cep"
                  label="CEP"
                  variant="outlined"
                  color="secondary"
                  fullWidth={true}
                  className={classes.marginBottomField}
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                />
              </Grid>
              <Grid item xs={false}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    cepValidationApi();
                    console.log(cep);
                  }}
                >
                  Validar CEP
                </Button>
              </Grid>
              <Grid item xs>
                <TextField
                  id="state"
                  label="Estado"
                  variant="outlined"
                  color="secondary"
                  fullWidth={true}
                  className={classes.marginBottomField}
                  value={state}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                <TextField
                  id="city"
                  label="Cidade"
                  variant="outlined"
                  color="secondary"
                  fullWidth={true}
                  className={classes.marginBottomField}
                  value={city}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="district"
                  label="Bairro"
                  variant="outlined"
                  color="secondary"
                  fullWidth={true}
                  className={classes.marginBottomField}
                  value={district}
                />
              </Grid>
            </Grid>

            <TextField
              id="adress"
              label="Endereço"
              variant="outlined"
              color="secondary"
              fullWidth={true}
              className={classes.marginBottomField}
              value={adress}
            />
            <Grid container spacing={3} alignItems="center">
              <Grid item xs>
                <TextField
                  id="number"
                  label="Número"
                  variant="outlined"
                  color="secondary"
                  fullWidth={true}
                  className={classes.marginBottomField}
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="complement"
                  label="Complemento"
                  variant="outlined"
                  color="secondary"
                  fullWidth={true}
                  className={classes.marginBottomField}
                  value={complement}
                  onChange={(e) => setComplement(e.target.value)}
                />
              </Grid>
            </Grid>
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
            <Grid container alignItems="center" justify="flex-end">
              <Grid item xs={false}>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<SaveIcon />}
                  onClick={() => {
                    createSpecialist();
                  }}
                  disabled={loading}
                >
                  Salvar
                </Button>

                <Snackbar
                  className={classes.snackbar}
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    Seu especialista foi criado com sucesso!
                  </Alert>
                </Snackbar>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SpecialistRegistration;
