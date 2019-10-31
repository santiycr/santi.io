import { createMuiTheme } from "@material-ui/core/styles";
import { red, indigo } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", "Arial", sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
    fontWeightBold: 600
  },
  palette: {
    primary: {
      main: indigo.A400
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  }
});

export default theme;
