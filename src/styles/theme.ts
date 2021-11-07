import { createTheme, Theme } from "@mui/material/styles";
import token from "./token";
import { pxToRem } from "./utils";

declare module "@mui/styles" {
  interface DefaultTheme extends Theme {}
}

export const theme = createTheme({
  ...token,
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          minHeight: 38,
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 30,
          paddingRight: 30,
          fontSize: pxToRem(12),
          color: token.palette.interface.teal["500"],
          borderRadius: pxToRem(8),
        },
        contained: {
          backgroundColor: token.palette.interface.teal["500"],
          color: token.palette.interface.white,
          "&:hover": {
            backgroundColor: token.palette.interface.teal["700"],
          },
          "&:active": {
            backgroundColor: token.palette.interface.teal["900"],
          },
          "&$disabled": {
            backgroundColor: token.palette.interface.black["200"],
            color: token.palette.interface.black["300"],
          },
          "@media (hover: none)": {
            "&:hover": {
              backgroundColor: `${token.palette.interface.teal["700"]} !important`,
            },
          },
        },
        outlined: {
          borderColor: token.palette.interface.teal["500"],
          color: token.palette.interface.teal["500"],
          "&:hover": {
            borderColor: token.palette.interface.teal["700"],
            color: token.palette.interface.teal["700"],
          },
          "&:active": {
            backgroundColor: token.palette.interface.teal["50"],
            borderColor: token.palette.interface.teal["900"],
            color: token.palette.interface.teal["900"],
          },
          minHeight: 38,
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 30,
          paddingRight: 30,
          borderRadius: pxToRem(8),
        },
        textPrimary: {
          color: token.palette.interface.teal["500"],
        },
        textSecondary: {
          color: token.palette.interface.teal["500"],
        },
        startIcon: {
          marginRight: 18,
        },
      },
    },
  },
});

export default theme;
