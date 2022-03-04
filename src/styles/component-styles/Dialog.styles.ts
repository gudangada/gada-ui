import { ThemeOptions } from "@mui/material";
import { Palette } from "./Palette.styles";

export const Dialog: ThemeOptions["components"] = {
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 8,
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
