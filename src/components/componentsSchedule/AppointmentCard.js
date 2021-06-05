import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginBottom: 8,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

const AppointmentCard = ({ appointment }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container spacing={4}>
          <Grid item xs={3} alignItems="center">
            <Typography variant="subtitle2" alignJustify bold>
              {appointment.date}
            </Typography>
            <Typography variant="body1" alignJustify component="p">
              {appointment.time}
            </Typography>
          </Grid>
          <Grid item xs={3} alignItems="center">
            <Typography gutterBottom variant="subtitle1">
              {appointment.clientName}
            </Typography>
            <Avatar
              alt={appointment.clientName}
              src={appointment.photo}
              className={classes.large}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary" component="p">
              Especialista: {appointment.specialist}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Valor: R$:{appointment.price}
            </Typography>
          </Grid>
          <Grid item xs={3} alignItems="center">
            <Typography paragraph>Status do Atendimento: Agendado</Typography>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
            <Button variant="contained" color="primary">
              Prontuário
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;
