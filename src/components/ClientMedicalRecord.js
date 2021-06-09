import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Typography";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "justify",
  },
}));

const ClientMedicalRecord = ({ medicalrecord }) => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4} sm={4}>
            <Card className={classes.paper}>
            <Typography>{medicalrecord.specialist}</Typography>
            </Card>
          </Grid>
          <Grid item xs={8} sm={8}>
            <Card className={classes.paper}>
              <Typography>Fellipe Henrique Fernandes Andrade</Typography>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default ClientMedicalRecord;
