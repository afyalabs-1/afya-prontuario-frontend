import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Customer from "./pages/customer";
import CustomerRegistration from "./pages/customerRegistration";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import MedicalRecord from "./pages/medicalRecord";
import NewAppointment from "./pages/newAppointment";
import Schedule from "./pages/schedule";
import Specialist from "./pages/specialist";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/customer">
          <Customer />
        </Route>
        <Route exact path="/customerRegistration">
          <CustomerRegistration />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/medicalRecord">
          <MedicalRecord />
        </Route>
        <Route exact path="/newAppointment">
          <NewAppointment />
        </Route>
        <Route exact path="/schedule">
          <Schedule />
        </Route>
        <Route exact path="/specialist">
          <Specialist />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
