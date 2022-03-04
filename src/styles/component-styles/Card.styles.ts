import { ThemeOptions } from "@mui/material";

export const Card: ThemeOptions["components"] = {
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: "none",
        borderRadius: 8,
      },
    },
  },
};
