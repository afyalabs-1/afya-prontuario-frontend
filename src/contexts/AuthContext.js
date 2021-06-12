import React, { createContext, useEffect, useState, useHistory } from "react";

import { LoginRouter } from "../api/LoginApi";

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      LoginRouter.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }
  },[]);

  async function handleLogin() {

    const { data: { token }, } = await LoginRouter();

    localStorage.setItem("token", JSON.stringify(token));
    LoginRouter.defaults.headers.Authorization = `Bearer ${token}`;
    // history.push('/');
    setAuthenticated(true);

  }

  return (
    <Context.Provider value={{ authenticated, handleLogin }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
