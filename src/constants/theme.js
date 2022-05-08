import { createTheme } from "@mui/material";
import { orange, grey, white, black } from "./color";
 
export const themeMAIN = createTheme({
  palette: {
    primary: {
      main: orange,
      contrastText: black,
    },
    secondary: {
      main: orange,
    },
    bar: {
      main: orange,
      contrastText: black,
    },
    bar2: {
      main: orange,
      contrastText: orange,
    },
    success: {
      main: orange,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          main: grey,
          fontSize: ".8rem",
          padding: "0.6rem",
          marginTop: "0.65rem",
          borderRadius: 2,
          letterSpacing: 2,
          textTransform: "capitalize",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontsize: "1rem",
          borderRadius: 2,
        },
        input: {
          color: "secondary",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          fontsize: "1rem",
          borderRadius: 2,
        },
        fieldset: {
          color: "primary",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          color: grey,
        },
      },
    },
  },
});
