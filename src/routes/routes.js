import React from "react";

import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import PrivateRoutes from "./private.routes";

//Páginas
import Customer from "../pages/customer/index";
import CustomerRegistration from "../pages/customerRegistration/index";
import Dashboard from "../pages/dashboard/index";
import Login from "../pages/login/index";
import MedicalRecord from "../pages/medicalRecord/index";
import NewAppointment from "../pages/newAppointment/index";
import Schedule from "../pages/schedule/index";
import Specialist from "../pages/specialist/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoutes path="/" exact component={Dashboard} />
        <Route path="/login" component={Login} />
        <PrivateRoutes path="/customerRegistration" component={CustomerRegistration} />
        <PrivateRoutes path="/customer" component={Customer} />
        <PrivateRoutes path="/medicalRecord" component={MedicalRecord} />
        <PrivateRoutes path="/newAppointment" component={NewAppointment} />
        <PrivateRoutes path="/schedule" component={Schedule} />
        <PrivateRoutes path="/specialist" component={Specialist} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
