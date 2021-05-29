import React from "react";
import { Chart } from "react-google-charts";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

export const TesteChart = () => {
  return (
    <div>
      <Box display="flex" justifyContent="flex-end" m={1} p={1}>
        <Grid item md={6}>
        <h1>Estatística dos atendimentos</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. </p>
        </Grid>

        <Grid item md={6}>
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
        </Grid>
      </Box>
    </div>
  );
};
