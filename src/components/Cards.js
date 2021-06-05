import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import EventIcon from '@material-ui/icons/Event';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';


export const Cards = () => {
  return (
    <div>
        <Grid container spacing={3}>
      
        <Grid item xs={6}>
        <Card>
          <CardContent>
          <PersonIcon></PersonIcon>
          </CardContent>
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card>
          <CardContent>
            <BusinessCenterIcon></BusinessCenterIcon>
           
          </CardContent>
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card>
          <CardContent>
          <DescriptionIcon></DescriptionIcon>
          </CardContent>
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card>
          <CardContent>
           <EventIcon></EventIcon>
          </CardContent>
        </Card>
        </Grid>
       
      </Grid>
      
    </div>
  );
};
