import { PaletteOptions } from "@mui/material";
import { iIconProps } from "./types";

export const getIconColor = (
  color: iIconProps["color"],
  palette: PaletteOptions
): string | undefined => {
  switch (color) {
    case "primary":
      return palette.interface.teal[500];
    case "destructive":
      return palette.interface.red[500];
    case "white":
      return palette.interface.white;
    case "secondary":
      return palette.interface.teal[100];
    case "default":
      return palette.interface.black[300];
    default:
      return "currentColor";
  }
};
