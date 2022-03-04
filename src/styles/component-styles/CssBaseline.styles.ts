import { ThemeOptions } from "@mui/material";
import { Palette } from "./Palette.styles";

export const CssBaseline: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: {
      fontFamily: "Inter",
    },
  },
  MuiTypography: {
    defaultProps: {
      fontFamily: "Inter",
      color: Palette.interface.black["500"],
    },
  },
};
