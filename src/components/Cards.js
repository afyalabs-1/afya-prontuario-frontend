import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";

import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import EventIcon from "@material-ui/icons/Event";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#fff",
  },
  media: {
    height: 300,
  },
});

export const Cards = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box display="flex" justifyContent="flex-end" m={1} p={1}>
        <Grid container spacing={3}>

          {/* Caso não vá utilizar as estatisticas de pieChart,
              utilizar o código abaixo */}

          {/* <Grid item xs={12}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h4">Bem vindo, AfyaGama! </Typography>{" "}
                <br />
                <Typography align="justify" variant="body1">
                  Realize o gerenciamento de atendimentos da sua clinica médica.
                  Crie perfis de novos clientes, agende novas consultas,
                  cadastre novos profissionais de saúde, e mantenha os dados de
                  clientes quanto de especialistas atualizado. Todos esses dados
                  serão salvos em uma banco de dados que pode ser acessado
                  apenas por rotas autorizadas para fazer suas requisições.
                </Typography>
              </CardContent>
            </Card>
          </Grid> */}

          <Grid item xs={4}>
            <Link to="/customer">
              <Card className={classes.card} variant="outlined">
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item>
                      <PersonIcon style={{ fontSize: 80 }}></PersonIcon>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography variant="h6">
                            Cadastrar clientes
                          </Typography>
                          <Typography variant="body2">
                            A ficha cadastral deve ser preenchida com nome
                            completo, documentos de identificação, dados de
                            contato e endereço.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={4}>
            <Link to="/newAppointment">
              <Card className={classes.card} variant="outlined">
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item>
                      <BusinessCenterIcon
                        style={{ fontSize: 80 }}
                      ></BusinessCenterIcon>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography variant="h6">Novo atendimento</Typography>
                          <Typography variant="body2">
                            Anote as principais queixas, solicitação de exames
                            e/ou atividades de enfermagem necessárias para
                            admissão.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={4}>
            <Link to="/schedule">
              <Card className={classes.card} variant="outlined">
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item>
                      <EventIcon style={{ fontSize: 80 }}></EventIcon>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography variant="h6">Agenda</Typography>
                          <Typography variant="body2">
                            Simplifique as marcações de consultas com uma agenda
                            disponível na nuvem e receba estatísticas.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
