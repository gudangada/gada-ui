import { ThemeOptions, buttonClasses, typographyClasses } from "@mui/material";
import { pxToRem } from "../utils";
import { Palette } from "./Palette.styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    /* Declare new custom variants here */
    circular: true;
    fab: true;
  }
}

export const Button: ThemeOptions["components"] = {
  MuiButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        fontFamily: "Inter,sans-serif",
        minHeight: 38,
        padding: `${pxToRem(10)} ${pxToRem(24)}`,
        borderRadius: pxToRem(8),
        boxShadow: "none",

        "&:hover": {
          boxShadow: "none",
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
        backgroundColor: Palette.interface.teal["500"],
        color: Palette.interface.white,

        "&:hover": {
          backgroundColor: Palette.interface.teal["700"],
        },
        "&:active": {
          backgroundColor: Palette.interface.teal["900"],
        },
        "@media (hover: none)": {
          "&:hover": {
            backgroundColor: `${Palette.interface.teal["700"]} !important`,
          },
        },
      },
      outlined: {
        borderColor: Palette.interface.teal["500"],
        color: Palette.interface.teal["500"],

        "&:hover": {
          borderColor: Palette.interface.teal["700"],
          color: Palette.interface.teal["700"],
        },
        "&:active": {
          backgroundColor: Palette.interface.teal["50"],
          borderColor: Palette.interface.teal["900"],
          color: Palette.interface.teal["900"],
        },
      },
      text: {
        boxShadow: "none",
        padding: "0px !important",
        minWidth: "auto",

        "&:hover": {
          boxShadow: "none",
        },

        [`& .${buttonClasses.startIcon}`]: {
          marginLeft: 0,
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
          backgroundColor: Palette.interface.red["500"],

          "&>*": {
            color: Palette.interface.white,
          },

          "&:hover": {
            backgroundColor: Palette.interface.red["700"],
          },
          "&:active": {
            backgroundColor: Palette.interface.red["900"],
          },
          "@media (hover: none)": {
            "&:hover": {
              backgroundColor: `${Palette.interface.red["700"]} !important`,
            },
          },
        },
      },
      {
        props: { variant: "outlined", color: "error" },
        style: {
          borderColor: Palette.interface.red["500"],
          color: Palette.interface.red["500"],

          "&:hover": {
            borderColor: Palette.interface.red["700"],
            color: Palette.interface.red["700"],
          },
          "&:active": {
            backgroundColor: Palette.interface.red["50"],
            borderColor: Palette.interface.red["900"],
            color: Palette.interface.red["900"],
          },
        },
      },
      {
        props: { variant: "text", color: "error" },
        style: {
          color: Palette.interface.red["500"],

          "&:active": {
            color: Palette.interface.red["900"],
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
          backgroundColor: Palette.interface.teal["500"],
          overflow: "hidden",

          "& >*": {
            color: Palette.interface.white,
          },

          "&:hover": {
            backgroundColor: Palette.interface.teal["700"],
          },
          "&:active": {
            backgroundColor: Palette.interface.teal["900"],
          },
        },
      },
      {
        props: { variant: "circular", color: "error" },
        style: {
          backgroundColor: Palette.interface.red["500"],
          "&:hover": {
            backgroundColor: Palette.interface.red["700"],
          },
          "&:active": {
            backgroundColor: Palette.interface.red["900"],
          },
        },
      },
      {
        props: { variant: "fab" },
        style: {
          alignItems: "center",
          backgroundColor: Palette.interface.teal["500"],
          borderRadius: pxToRem(100),

          "& >*": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: `${Palette.interface.white} !important`,
          },

          "& .MuiTypography-root": {
            color: `${Palette.interface.white} !important`,
          },

          "&:hover": {
            backgroundColor: Palette.interface.teal["700"],
          },
          "&:active": {
            backgroundColor: Palette.interface.teal["900"],
          },
        },
      },
      {
        props: { variant: "fab", color: "error" },
        style: {
          backgroundColor: Palette.interface.red["500"],

          "&:hover": {
            backgroundColor: Palette.interface.red["700"],
          },
          "&:active": {
            backgroundColor: Palette.interface.red["900"],
          },
        },
      },
      {
        props: { disabled: true },
        style: {
          backgroundColor: Palette.interface.black["200"],
          borderColor: `${Palette.interface.black["200"]} !important`,

          "&>*": {
            color: `${Palette.interface.black["300"]} !important`,
          },
          "& .MuiTypography-root": {
            color: `${Palette.interface.black["300"]} !important`,
          },
        },
      },
      {
        props: { variant: "text", disabled: true },
        style: {
          backgroundColor: "transparent",
          borderColor: "transparent",

          "& >*": {
            color: `${Palette.interface.black["300"]} !important`,
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
