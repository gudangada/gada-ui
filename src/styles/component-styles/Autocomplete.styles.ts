import { ThemeOptions } from "@mui/material";

export const Autocomplete: ThemeOptions["components"] = {
  MuiAutocomplete: {
    styleOverrides: {
      root: {},
      inputRoot: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
  },
};
