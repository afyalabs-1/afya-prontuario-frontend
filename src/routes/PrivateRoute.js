import React from "react";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ path, component, exact }) => {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated !== null ? (
    <Route path={path} component={component} exact={exact} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
