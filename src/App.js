import React, { createContext, useContext } from "react";
import Routes from "./routes/routes"

//Estilização
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D31C5B",
    },
  },
});

function App() {
  return (
     
      <ThemeProvider theme={theme}>
      <Routes />
      <ToastContainer />
      </ThemeProvider>
    
  );
}

export default App;
