import React from "react";
import { Chart } from "react-google-charts";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export const Statistics = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box display="flex" justifyContent="flex-end" m={1} p={1}>
      <Card variant="outlined">
      <CardContent>
          <Typography variant="h4">Bem vindo, AfyaGama! </Typography> <br />
          <Typography align="justify" variant="body1">
          Realize o gerenciamento de atendimentos da sua clinica médica. Crie perfis de novos clientes, agende novas consultas, cadastre novos profissionais de saúde, e mantenha os dados de clientes quanto de especialistas atualizados. 
          </Typography>
          </CardContent>
      </Card>
      
      <Chart
            width={"400px"}
            height={"200px"}
            chartType="PieChart"
            loader={<div>Carregando informações...</div>}
            data={[
              ["Consultas", "Atendimento"],
              ["Realizadas", 140],
              ["Agendadas", 40],
              ["Canceladas", 40],
            ]}
            options={{
              backgroundColor: "#fafafa",
              colors: ["#D31C5B", "#E787A8", "#E2CBD3"],
            }}
            rootProps={{ "data-testid": "1" }}
          />
        

      </Box>
    </Container>
  );
};
