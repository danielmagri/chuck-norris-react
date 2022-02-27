import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { theme } from "./core/theme";
import { Router } from "./core/router";
import { Provider } from "react-redux";
import store from "./core/context/store";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <Router />
    </Provider>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
