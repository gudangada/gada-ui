// import "@fontsource/inter";
import * as React from "react";
import { StylesProvider } from "@mui/styles";
import { ThemeProvider as Emotion10ThemeProvider } from "@emotion/react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../../../styles";
import { iGadaThemeProviderProps } from "./types";
import { SnackbarProvider } from "../../feedback";

const ThemeProvider: React.FC<iGadaThemeProviderProps> = ({
  children,
  withSnackbarProvider = true,
  snackbarProps,
}) => {
  return (
    <StylesProvider injectFirst>
      <Emotion10ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {withSnackbarProvider ? (
            <SnackbarProvider {...snackbarProps}>{children}</SnackbarProvider>
          ) : (
            children
          )}
        </MuiThemeProvider>
      </Emotion10ThemeProvider>
    </StylesProvider>
  );
};

export default ThemeProvider;
