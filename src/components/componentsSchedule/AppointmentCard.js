import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 8,
    marginRight: 20,
    marginLeft: 20,
  },
  largeAvatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

const AppointmentCard = ({ appointment, showClientData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card variant="outlined">
        <CardContent className={classes.root}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs>
              <Typography variant="subtitle2">Data agendada:</Typography>
              <Typography variant="subtitle2">
                {appointment.serviceDate}
              </Typography>
            </Grid>
            {showClientData ? (
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {appointment.client.name}
                </Typography>
                <Avatar
                  alt={appointment.client.name}
                  src={appointment.client.profilePictureUrl}
                  className={classes.largeAvatar}
                />
              </Grid>
            ) : (
              ""
            )}
            <Grid item xs>
              {appointment.specialists ? (
                <Typography variant="body2" color="textSecondary" component="p">
                  Especialista: {appointment.specialists.name}
                </Typography>
              ) : (
                ""
              )}
              <Typography variant="body2" color="textSecondary" component="p">
                Valor: R$:{appointment.value}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography paragraph>
                Status do Atendimento: {appointment.status}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentCard;
