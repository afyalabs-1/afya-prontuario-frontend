import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { IoMdContact } from "react-icons/io";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});

const ClientMedicalRecord = ({ clientAppointments }) => {
  const classes = useStyles();

  return (
    <Container>
      <Box p={{ xs: 2, sm: 3, md: 4 }}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={2} sm={2}>
              <IoMdContact
                style={{ fontSize: 180, color: "#E5E5E5" }}
              ></IoMdContact>
            </Grid>
            <Grid item xs={10} sm={10}>
              <Typography variant="h4">
                {clientAppointments.client.name}
              </Typography>
              <br />
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {clientAppointments.client.name}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {clientAppointments.specialist.name} -{" "}
                    {clientAppointments.serviceDate} -{" "}
                    {clientAppointments.serviceTime}
                    <br />
                    {/* {medicalrecord.description} */}
                    <br />
                    <br />
                  </Typography>
                </CardContent>
              </Card>

              {/* <CircularIndeterminate></CircularIndeterminate> */}
            </Grid>
          </Grid>
        </div>
      </Box>
    </Container>
  );
};

export default ClientMedicalRecord;
