import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Statistics } from "../../components/Statistics";
import { Cards } from "../../components/Cards";
import Navbar from "../../components/Navbar";

function Dashboard() {
  return (
    <div>
      <Navbar title="Dashboard" />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Statistics></Statistics>
          </Grid>
          <Grid item xs={12}>
            <Cards></Cards>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
