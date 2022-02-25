import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { theme } from "./core/theme";
import { Router } from "./core/router";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
