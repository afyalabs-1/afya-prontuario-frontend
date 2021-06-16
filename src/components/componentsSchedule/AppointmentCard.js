import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Collapse } from "@material-ui/core";

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
  collapseContent: {
    padding: 12,
  },
}));

const AppointmentCard = ({ appointment, showClientData, showDetails }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        {showDetails ? (
          <div>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse
              in={expanded}
              timeout="auto"
              unmountOnExit
              className={classes.collapseContent}
            >
              <Typography variant="subtitle2">Detalhes:</Typography>
              <Typography paragraph>{appointment.details}</Typography>
            </Collapse>
          </div>
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};

export default AppointmentCard;
