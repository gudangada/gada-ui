import { ThemeOptions } from "@mui/material";
import { pxToRem } from "../utils";
import { Palette } from "./Palette.styles";

export const ListItem: ThemeOptions["components"] = {
  MuiListItemButton: {
    styleOverrides: {
      root: {
        "&:hover": {
          backgroundColor: Palette.interface.teal["900"],
        },

        "&.Mui-selected": {
          backgroundColor: Palette.interface.teal["900"],

          "&:hover": {
            backgroundColor: Palette.interface.teal["900"],
          },
        },
        "&.Mui-selected .MuiTypography-root": {
          color: Palette.interface.teal["100"],
        },
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        width: pxToRem(24),
        height: pxToRem(24),
        maxWidth: pxToRem(24),
        maxHeight: pxToRem(24),
        minWidth: pxToRem(24),
        minHeight: pxToRem(24),
        marginRight: pxToRem(16),
      },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      root: {
        paddingTop: pxToRem(1),
      },
    },
  },
};
