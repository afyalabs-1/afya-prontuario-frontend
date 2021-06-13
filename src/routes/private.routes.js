import React from "react";

import { Route, Redirect } from "react-router-dom";

const privateRoutes = ({ 
  component: Component, 
  path: Path, ...rest }) => {

  const isLogin = localStorage.getItem("@tokenAfiaApp");

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin !== null ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default privateRoutes;
