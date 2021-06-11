import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { getClients } from "../../api/ClientApi";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "white",
  },
}));

const Customer = () => {
  const classes = useStyles();

  // useEffect(() => {
  //   getClients()
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Erro na requisição dos clientes");
  //     });
  // }, []);

  return (
    <div className={classes.root}>
      <List>
        <ListItem variant="outlined">
          <Typography>Teste</Typography>
        </ListItem>
      </List>
    </div>
  );
};

export default Customer;
