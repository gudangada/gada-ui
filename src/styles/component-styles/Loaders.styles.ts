import { linearProgressClasses, ThemeOptions } from "@mui/material";
import { Palette } from "./Palette.styles";

export const Loaders: ThemeOptions["components"] = {
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        backgroundColor: Palette.interface.teal[50],

        [`& .${linearProgressClasses.bar}`]: {
          backgroundColor: Palette.interface.teal[500],
          borderRadius: 8,
        },
      },
    },
  },
};
