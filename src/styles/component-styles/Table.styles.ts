import { ThemeOptions } from "@mui/material";
import { Palette } from "./Palette.styles";

export const Table: ThemeOptions["components"] = {
  MuiTableRow: {
    styleOverrides: {
      root: {
        "&:hover": {
          cursor: "pointer",
          backgroundColor: Palette.interface.black["50"],
        },
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        ".MuiTypography-root": {
          color: Palette.interface.black["400"],
        },

        "&>tr:hover": {
          cursor: "default",
          backgroundColor: "transparent",
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderColor: Palette.interface.black["100"],
      },
    },
  },
};
