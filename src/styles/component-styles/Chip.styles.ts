import { ThemeOptions } from "@mui/material";
import { Palette } from "./Palette.styles";

export const Chip: ThemeOptions["components"] = {
  MuiChip: {
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
