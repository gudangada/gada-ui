import { ThemeOptions } from "@mui/material";
import { Palette } from "./Palette.styles";

export const Divider: ThemeOptions["components"] = {
  MuiDivider: {
    styleOverrides: {
      root: {
        backgroundColor: Palette.interface.black["100"],
        border: 0,
      },
    },
  },
};
