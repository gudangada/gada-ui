import { alertClasses, ThemeOptions } from "@mui/material";
import { pxToRem } from "../utils";
import { Palette } from "./Palette.styles";

export const Alert: ThemeOptions["components"] = {
  MuiAlert: {
    styleOverrides: {
      root: {
        [`& .${alertClasses.icon}`]: {
          marginTop: pxToRem(2),
        },

        [`&.${alertClasses.standardSuccess}`]: {
          backgroundColor: Palette.interface.green[50],
        },
        [`&.${alertClasses.filledSuccess}`]: {
          backgroundColor: Palette.interface.green[500],
        },
        [`&.${alertClasses.outlinedSuccess}`]: {
          borderColor: Palette.interface.green[500],
        },

        [`&.${alertClasses.standardError}`]: {
          backgroundColor: Palette.interface.red[50],
        },
        [`&.${alertClasses.filledError}`]: {
          backgroundColor: Palette.interface.red[500],
        },
        [`&.${alertClasses.outlinedError}`]: {
          borderColor: Palette.interface.red[500],
        },

        [`&.${alertClasses.standardInfo}`]: {
          backgroundColor: Palette.interface.blue[50],
        },
        [`&.${alertClasses.filledInfo}`]: {
          backgroundColor: Palette.interface.blue[500],
        },
        [`&.${alertClasses.outlinedInfo}`]: {
          borderColor: Palette.interface.blue[500],
        },

        [`&.${alertClasses.standardWarning}`]: {
          backgroundColor: Palette.interface.orange[50],
        },
        [`&.${alertClasses.filledWarning}`]: {
          backgroundColor: Palette.interface.orange[500],
        },
        [`&.${alertClasses.outlinedWarning}`]: {
          borderColor: Palette.interface.orange[500],
        },
      },
    },
  },
};
