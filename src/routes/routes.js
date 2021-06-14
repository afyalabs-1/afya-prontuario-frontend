import React from "react";

import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import PrivateRoutes from "./private.routes";

//Páginas
import Customer from "../pages/customer";
import CustomerRegistration from "../pages/customerRegistration";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import MedicalRecord from "../pages/medicalRecord";
import NewAppointment from "../pages/newAppointment";
import Schedule from "../pages/schedule";
import Specialist from "../pages/specialist";
import SpecialistRegistration from "../../pages/specialistRegistration";

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
