import { ThemeOptions } from "@mui/material";
import { pxToRem } from "../utils";
import { Palette } from "./Palette.styles";

export const Input: ThemeOptions["components"] = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        color: Palette.interface.black[500],
        height: pxToRem(48),
        minHeight: pxToRem(48),
        maxHeight: pxToRem(48),
        borderRadius: `${pxToRem(8)} !important`,
        backgroundColor: Palette.interface.white,
        borderWidth: "1px",
        borderColor: "transparent",
        padding: `${pxToRem(12)} ${pxToRem(16)}`,

        "& input": {
          padding: 0,
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: Palette.interface.teal[700],
        },
        "&.Mui-error .MuiOutlinedInput-notchedOutline": {
          borderColor: Palette.interface.red[500],
        },
        "&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: Palette.interface.teal[700],
        },

        "&.Mui-disabled": {
          backgroundColor: Palette.interface.black[50],
        },
        "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
          borderColor: Palette.interface.black[200],
        },
        "&.Mui-disabled.Mui-error .MuiOutlinedInput-notchedOutline": {
          borderColor: Palette.interface.red[500],
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginLeft: 0,
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        height: pxToRem(24),
        width: pxToRem(24),
        minHeight: pxToRem(24),
        minWidth: pxToRem(24),
        maxHeight: pxToRem(24),
        maxWidth: pxToRem(24),
        marginRight: pxToRem(12),
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        padding: 0,

        "&.Mui-checked": {
          color: Palette.interface.teal[500],
        },
        "&.Mui-disabled": {
          color: Palette.interface.black[300],
        },
      },
    },
  },
};
