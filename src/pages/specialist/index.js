import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Navbar from "../../components/Navbar";

import { getSpecialist } from "../../api/SpecialistApi";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  marginBox: {
    marginRight: 80,
    marginLeft: 80,
  },
  cursorPointer: {
    cursor: "pointer",
  },
}));

const Specialist = () => {
  const classes = useStyles();
  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    getSpecialist()
      .then((response) => {
        console.log(response);
        setSpecialists(response.data.specialists);
      })
      .catch((error) => {
        console.error("Erro na requisição dos especialistas");
      });
  }, []);

  return (
    <div>
      <Navbar title="Especialistas" />
      <Container>
        <div className={classes.marginBox}>
          <List className={classes.root}>
            {specialists.map((specialist) => (
              <ListItem
                variant="outlined"
                key={specialist.name}
                specialist={specialist}
              >
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs>
                    <Typography
                      onClick={() => console.log("Hello")}
                      className={classes.cursorPointer}
                    >
                      {specialist.name}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
        </div>
      </Container>
    </div>
  );
};

export default Specialist;
