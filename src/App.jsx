import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Routes from "./routes";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D31C5B",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
