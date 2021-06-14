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
import SpecialistRegistration from "../../pages/";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/customerRegistration" component={CustomerRegistration} />
        <Route path="/customer" component={Customer} />
        <Route path="/medicalRecord" component={MedicalRecord} />
        <Route path="/newAppointment" component={NewAppointment} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/specialist" component={Specialist} />
        <Route
          path="/specialistRegistration"
          component={SpecialistRegistration}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
