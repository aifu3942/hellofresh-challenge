import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: {
      black: "#424242",
      white: "#ffffff",
    },
    primary: {
      light: "#fff7ca",
      main: "#fff097",
      dark: "##ffe964",
    },
    secondary: {
      main: "#daff97",
    },
    error: {
      main: "#d32f2f",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#424242",
    },
    background: {
      default: "rgb(255, 247, 202, 0.7)",
      paper: "#ffffff",
    },
    highlight: {
      main: "#e54861",
    },
  },
});

export default theme;
