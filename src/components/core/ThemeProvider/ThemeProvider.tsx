import * as React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { theme } from "../../../styles";

const ThemeProvider: React.FC = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
