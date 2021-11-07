import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { theme } from "../src/styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
};

export const decorators = [
  (Story) => (
    <MuiThemeProvider theme={theme}>
      <Story />
    </MuiThemeProvider>
  ),
];
