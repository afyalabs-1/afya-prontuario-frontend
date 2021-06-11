import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Grid from "@material-ui/core/Grid";

import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import EventIcon from "@material-ui/icons/Event";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#EEE8EA",
  },
  media: {
    height: 300,
  },
});

export const Cards = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Link to="/customer">
            <Card className={classes.card}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item>
                    <PersonIcon style={{ fontSize: 80 }}></PersonIcon>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography variant="h6">Clientes</Typography>
                        <Typography variant="body2" color="textSecondary">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        <Grid item xs={6}>
          <Link to="/newAppointment">
            <Card className={classes.card}>
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
                        <Typography variant="body2" color="textSecondary">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        <Grid item xs={6}>
          <Link to="/medicalRecord">
            <Card className={classes.card}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item>
                    <DescriptionIcon style={{ fontSize: 80 }}></DescriptionIcon>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography variant="h6">Prontuários</Typography>
                        <Typography variant="body2" color="textSecondary">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        <Grid item xs={6}>
          <Link to="/schedule">
          <Card className={classes.card}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item>
                    <EventIcon style={{ fontSize: 80 }}></EventIcon>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography variant="h6">Agenda</Typography>
                        <Typography variant="body2" color="textSecondary">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
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
    </div>
  );
};
