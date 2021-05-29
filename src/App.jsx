import React from "react";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Dashboard from "./pages/dashboard";


const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#D31C5B'
      }
    }
  });

const App = () => {
  return (
   
        <ThemeProvider theme={theme}>
            <Dashboard></Dashboard>
        </ThemeProvider>
      
   
  );
};

export default App;
