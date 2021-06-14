import React from "react";

import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

//Páginas
import Customer from "../pages/customer/index";
import CustomerRegistration from "../pages/customerRegistration/index";
import Dashboard from "../pages/dashboard/index";
import Login from "../pages/login/index";
import MedicalRecord from "../pages/medicalRecord/index";
import NewAppointment from "../pages/newAppointment/index";
import Schedule from "../pages/schedule/index";
import Specialist from "../pages/specialist/index";
import SpecialistRegistration from "../pages/specialistRegistration/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact component={Dashboard} />
        <Route path="/login" component={Login} />
        <PrivateRoute
          path="/customerRegistration"
          component={CustomerRegistration}
        />
        <PrivateRoute path="/customer" component={Customer} />
        <PrivateRoute path="/medicalRecord" component={MedicalRecord} />
        <PrivateRoute path="/newAppointment" component={NewAppointment} />
        <PrivateRoute path="/schedule" component={Schedule} />
        <PrivateRoute path="/specialist" component={Specialist} />
        <PrivateRoute
          path="/specialistRegistration"
          component={SpecialistRegistration}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
