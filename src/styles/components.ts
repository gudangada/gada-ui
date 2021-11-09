import { ThemeOptions } from "@mui/material";
import { pxToRem } from "./utils";
import { palette } from "./palette";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    /* Declare new custom variants here */
    circular: true;
    fab: true;
  }
}

export const components: ThemeOptions["components"] = {
  MuiButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        fontFamily: "Inter,sans-serif",
        minHeight: 38,
        padding: `${pxToRem(10)} ${pxToRem(24)}`,
        color: palette.interface.teal["500"],
        borderRadius: pxToRem(8),
        boxShadow:
          "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",

        "&:hover": {
          boxShadow:
            "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
        },

        "&:disabled": {
          boxShadow: "none",
        },
      },
      startIcon: {
        marginRight: 8,
      },
      contained: {
        borderWidth: 1,
        borderColor: "transparent",
        borderStyle: "solid",
        backgroundColor: palette.interface.teal["500"],
        color: palette.interface.white,
        "&:hover": {
          backgroundColor: palette.interface.teal["700"],
        },
        "&:active": {
          backgroundColor: palette.interface.teal["900"],
        },
        "&$disabled": {
          backgroundColor: palette.interface.black["200"],
          color: palette.interface.black["300"],
        },
        "@media (hover: none)": {
          "&:hover": {
            backgroundColor: `${palette.interface.teal["700"]} !important`,
          },
        },
      },
      outlined: {
        borderColor: palette.interface.teal["500"],
        color: palette.interface.teal["500"],

        "&:hover": {
          borderColor: palette.interface.teal["700"],
          color: palette.interface.teal["700"],
        },
        "&:active": {
          backgroundColor: palette.interface.teal["50"],
          borderColor: palette.interface.teal["900"],
          color: palette.interface.teal["900"],
        },
        "&$disabled": {
          borderColor: palette.interface.black["200"],
          color: palette.interface.black["300"],
        },
      },
      text: {
        color: palette.interface.teal["500"],
        boxShadow: "none",

        "&:hover": {
          boxShadow: "none",
        },

        "&$disabled": {
          color: palette.interface.black["300"],
        },
      },
    },
    variants: [
      /* 
        Variant specific style should be added here
        Note: The styles have priority from bottom to top (bottom being the highest priority)
      */
      {
        props: { variant: "contained", color: "error" },
        style: {
          backgroundColor: palette.interface.red["500"],
          color: palette.interface.white,
          "&:hover": {
            backgroundColor: palette.interface.red["700"],
          },
          "&:active": {
            backgroundColor: palette.interface.red["900"],
          },
          "&$disabled": {
            backgroundColor: palette.interface.black["200"],
            color: palette.interface.black["300"],
          },
          "@media (hover: none)": {
            "&:hover": {
              backgroundColor: `${palette.interface.red["700"]} !important`,
            },
          },
        },
      },
      {
        props: { variant: "outlined", color: "error" },
        style: {
          borderColor: palette.interface.red["500"],
          color: palette.interface.red["500"],
          "&:hover": {
            borderColor: palette.interface.red["700"],
            color: palette.interface.red["700"],
          },
          "&:active": {
            backgroundColor: palette.interface.red["50"],
            borderColor: palette.interface.red["900"],
            color: palette.interface.red["900"],
          },
        },
      },
      {
        props: { variant: "text", color: "error" },
        style: {
          color: palette.interface.red["500"],
          "&:active": {
            color: palette.interface.red["900"],
          },
        },
      },
      {
        props: { variant: "circular" },
        style: {
          minWidth: 48,
          width: 48,
          maxWidth: 48,
          minHeight: 48,
          height: 48,
          maxHeight: 48,
          padding: 12,
          borderRadius: "50%",
          backgroundColor: palette.interface.teal["500"],
          overflow: "hidden",

          "& >*": {
            color: palette.interface.white,
          },

          "&:hover": {
            backgroundColor: palette.interface.teal["700"],
          },
          "&:active": {
            backgroundColor: palette.interface.teal["900"],
          },
        },
      },
      {
        props: { variant: "circular", color: "error" },
        style: {
          backgroundColor: palette.interface.red["500"],
          "&:hover": {
            backgroundColor: palette.interface.red["700"],
          },
          "&:active": {
            backgroundColor: palette.interface.red["900"],
          },
        },
      },
      {
        props: { variant: "circular", disabled: true },
        style: {
          backgroundColor: palette.interface.black["200"],
          "& >*": {
            color: palette.interface.black["300"],
          },
        },
      },
      {
        props: { variant: "fab" },
        style: {
          alignItems: "center",
          backgroundColor: palette.interface.teal["500"],
          borderRadius: pxToRem(100),

          "& >*": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: `${palette.interface.white} !important`,
          },

          "&:hover": {
            backgroundColor: palette.interface.teal["700"],
          },
          "&:active": {
            backgroundColor: palette.interface.teal["900"],
          },
        },
      },
      {
        props: { variant: "fab", color: "error" },
        style: {
          backgroundColor: palette.interface.red["500"],

          "&:hover": {
            backgroundColor: palette.interface.red["700"],
          },
          "&:active": {
            backgroundColor: palette.interface.red["900"],
          },
        },
      },
      {
        props: { variant: "fab", disabled: true },
        style: {
          backgroundColor: palette.interface.black["200"],
          "& >*": {
            color: `${palette.interface.black["300"]} !important`,
          },
        },
      },

      /* Sizes */
      {
        props: { size: "small" },
        style: {
          padding: `${pxToRem(10)} ${pxToRem(24)}`,
          fontSize: 12,
          fontWeight: 600,
          lineHeight: "18px",
          lettterSpacing: "0.0125em",
        },
      },
      {
        props: { size: "medium" },
        style: {
          padding: `${pxToRem(10)} ${pxToRem(24)}`,
          fontSize: 12,
          fontWeight: 600,
          lineHeight: "18px",
          lettterSpacing: "0.0125em",
        },
      },
      {
        props: { size: "large" },
        style: {
          width: "100%",
          padding: `${pxToRem(12)} ${pxToRem(24)}`,
          fontSize: 15,
          fontWeight: 600,
          lineHeight: "24px",
          lettterSpacing: "0.0125em",
        },
      },
      {
        props: { variant: "circular", size: "small" },
        style: {
          padding: 12,
        },
      },
      {
        props: { variant: "circular", size: "medium" },
        style: {
          padding: 12,
        },
      },
      {
        props: { variant: "circular", size: "large" },
        style: {
          minWidth: 64,
          width: 64,
          maxWidth: 64,
          minHeight: 64,
          height: 64,
          maxHeight: 64,
          padding: 16,
        },
      },
    ],
  },
};
