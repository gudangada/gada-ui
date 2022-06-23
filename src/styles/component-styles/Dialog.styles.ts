import { ThemeOptions } from "@mui/material";
import { Palette } from "./Palette.styles";

export const Dialog: ThemeOptions["components"] = {
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 8,
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        paddingBottom: 24,
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: 24,
        paddingTop: 0,

        "&>*:not(:first-of-type)": {
          marginLeft: 16,
        },
      },
    },
  },
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor: `${Palette.interface.black[500]}70`,
      },
    },
  },
};
