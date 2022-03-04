import { ThemeOptions } from "@mui/material";
import { Palette } from "./Palette.styles";

export const Drawer: ThemeOptions["components"] = {
  MuiDrawer: {
    styleOverrides: {
      root: {
        flexShrink: 0,
        width: 280,
        backgroundColor: Palette.interface.black["500"],
      },
      paper: {
        width: 280,
        backgroundColor: Palette.interface.black["500"],
      },
    },
  },
};
