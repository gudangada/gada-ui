import { ThemeOptions } from "@mui/material";
import { pxToRem } from "../utils";
import { Palette } from "./Palette.styles";

export const Pagination: ThemeOptions["components"] = {
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        borderRadius: pxToRem(4),
        backgroundColor: Palette.interface.white,
        color: Palette.interface.black["500"],
        border: `1px solid ${Palette.interface.black["100"]}`,
      },
      previousNext: {
        backgroundColor: Palette.interface.white,
        borderColor: "transparent",
      },
      ellipsis: {
        borderColor: "transparent",
      },
      page: {
        fontFamily: "Inter",
        fontSize: "14px",
        fontWeight: "600",
        letterSpacing: "0.0025em",
        color: Palette.interface.black["400"],

        "&.Mui-selected": {
          borderColor: Palette.interface.teal["500"],
          backgroundColor: `${Palette.interface.teal["500"]}`,
          color: Palette.interface.white,
        },
        "&.Mui-selected:hover": {
          backgroundColor: Palette.interface.teal["500"],
          borderColor: Palette.interface.teal["500"],
          color: Palette.interface.white,
        },
      },
    },
  },
};
