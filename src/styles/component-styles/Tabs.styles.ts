import { ThemeOptions } from "@mui/material";
import { Palette } from "./Palette.styles";

export const Tabs: ThemeOptions["components"] = {
  MuiTabs: {
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${Palette.interface.black[200]}`,
        position: "relative",

        "& .MuiTabScrollButton-root": {
          position: "absolute",
          height: "100%",
          zIndex: 99,
        },
        "& .MuiTabScrollButton-root:first-of-type": {
          left: 0,
          background:
            "linear-gradient(270deg, rgba(243, 243, 243, 0) 0%, #F3F3F3 76.56%);",
        },
        "& .MuiTabScrollButton-root:last-of-type": {
          right: 0,
          background:
            "linear-gradient(90deg, rgba(243, 243, 243, 0) 0%, #F3F3F3 76.56%);",
        },
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
