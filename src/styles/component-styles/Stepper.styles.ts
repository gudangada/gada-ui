import { ThemeOptions } from "@mui/material";
import { Palette } from "./Palette.styles";

export const Stepper: ThemeOptions["components"] = {
  MuiStep: {
    styleOverrides: {
      root: {
        "& .MuiStepLabel-label .MuiTypography-root": {
          color: Palette.interface.black[300],
        },
        "& .Mui-active .MuiTypography-root": {
          color: Palette.interface.teal[500],
        },
        "& .Mui-active.Mui-completed .MuiTypography-root": {
          color: Palette.interface.teal[500],
        },
      },
    },
  },
  MuiStepConnector: {
    styleOverrides: {
      root: {
        "&.Mui-active .MuiStepConnector-line": {
          // borderColor: Palette.interface.teal[500],
        },
      },
    },
  },
  MuiStepLabel: {
    styleOverrides: {
      label: {
        marginTop: 8,

        "&.MuiStepLabel-alternativeLabel": {
          marginTop: 8,
        },

        "&.MuiStepLabel-alternativeLabel.Mui-error .MuiTypography-root": {
          color: Palette.interface.red[500],
        },
      },
    },
  },
};
