import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f15b23",
      contrastText: "#000",
    },
    text: {
      primary: "#000",
      secondary: "#000",
      disabled: "#ffffffa0",
    },
  },
});
