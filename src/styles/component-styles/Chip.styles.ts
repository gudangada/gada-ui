import { chipClasses, ThemeOptions } from "@mui/material";
import { pxToRem } from "../utils";
import { Palette } from "./Palette.styles";

export const Chip: ThemeOptions["components"] = {
  MuiChip: {
    styleOverrides: {
      root: {
        padding: `${pxToRem(8)} ${pxToRem(16)}`,

        "& >*:first-child, >*:last-child": {
          marginRight: 0,
          marginLeft: 0,
        },

        [`& .${chipClasses.label}`]: {
          padding: 0,
          fontFamily: "Inter",
          fontSize: pxToRem(15),
          fontWeight: 400,
          color: Palette.interface.black[500],
          lineHeight: "24px",
        },

        [`& .${chipClasses.label} + svg`]: {
          marginLeft: pxToRem(8),
        },
        [`& svg + .${chipClasses.label}`]: {
          marginLeft: pxToRem(8),
        },

        "&:active": {
          [`& .${chipClasses.label}`]: {
            color: Palette.interface.teal[900],
          },
        },
      },
    },
    variants: [
      {
        props: { variant: "outlined" },
        style: {
          backgroundColor: Palette.interface.white,
        },
      },
    ],
  },
};
