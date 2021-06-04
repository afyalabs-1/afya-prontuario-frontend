import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PeopleIcon from "@material-ui/icons/People";
import DescriptionIcon from "@material-ui/icons/Description";
import PostAddIcon from "@material-ui/icons/PostAdd";
import BookIcon from "@material-ui/icons/Book";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import { makeStyles } from "@material-ui/core/styles";

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button component={Link} to="/customerRegistration">
      <ListItemIcon>
        <PersonAddIcon />
      </ListItemIcon>
      <ListItemText primary="Cadastro de Clientes" />
    </ListItem>

    <ListItem button component={Link} to="/customer">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Clientes" />
    </ListItem>

    <ListItem button component={Link} to="/medicalRecord">
      <ListItemIcon>
        <DescriptionIcon />
      </ListItemIcon>
      <ListItemText primary="Prontuários" />
    </ListItem>

    <ListItem button component={Link} to="/newAppointment">
      <ListItemIcon>
        <PostAddIcon />
      </ListItemIcon>
      <ListItemText primary="Novo atendimento" />
    </ListItem>

    <ListItem button component={Link} to="/schedule">
      <ListItemIcon>
        <BookIcon />
      </ListItemIcon>
      <ListItemText primary="Agenda" />
    </ListItem>

    <ListItem button component={Link} to="/specialist">
      <ListItemIcon>
        <BusinessCenterIcon />
      </ListItemIcon>
      <ListItemText primary="Especialista" />
    </ListItem>
  </div>
);
