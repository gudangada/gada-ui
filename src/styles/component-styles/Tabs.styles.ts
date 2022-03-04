import { ThemeOptions } from "@mui/material";
import { Palette } from "./Palette.styles";

export const Tabs: ThemeOptions["components"] = {
  MuiTabs: {
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${Palette.interface.black[200]}`,
      },
      indicator: {
        backgroundColor: Palette.interface.teal[500],
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        ".MuiTypography-root": {
          color: Palette.interface.black[400],
        },

        "&.Mui-selected .MuiTypography-root": {
          color: Palette.interface.teal[500],
        },
      },
    },
  },
};
