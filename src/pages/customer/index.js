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

import { getClients } from "../../api/ClientApi";

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

const Customer = () => {
  const classes = useStyles();
  const [clients, setClients] = useState([]);
  const linkMedicalRecord = (props) => <Link to="/medicalRecord" {...props} />;

  const getClientData = (clientId, clientName, clientProfilePhoto) => {
    localStorage.setItem("clientId", clientId);
    localStorage.setItem("clientName", clientName);
    localStorage.setItem("clientProfilePhoto", clientProfilePhoto);
  };

  useEffect(() => {
    getClients()
      .then((response) => {
        setClients(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro na requisição dos clientes");
      });
  }, []);

  return (
    <div>
      <Navbar title="Clientes" />
      <Container>
        <div className={classes.marginBox}>
          <List className={classes.root}>
            {clients.map((client) => (
              <ListItem variant="outlined" key={client.id} client={client}>
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={1}>
                    <Avatar alt="Foto" src={client.profilePictureUrl} />
                  </Grid>
                  <Grid item xs>
                    <Typography
                      onClick={() => console.log("Hello")}
                      className={classes.cursorPointer}
                    >
                      {client.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={3} justify="flex-end">
                    <Button
                      component={linkMedicalRecord}
                      onClick={() =>
                        getClientData(
                          client.id,
                          client.name,
                          client.profilePictureUrl
                        )
                      }
                    >
                      + Prontuário
                    </Button>
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

export default Customer;
