import { ThemeOptions } from "@mui/material";
import { pxToRem } from "../utils";
import { Palette } from "./Palette.styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    heading3: React.CSSProperties;
    heading4SemiBold: React.CSSProperties;
    heading4Regular: React.CSSProperties;
    bodySemiBold: React.CSSProperties;
    bodyRegular: React.CSSProperties;
    numberSemiBold: React.CSSProperties;
    number: React.CSSProperties;
    button: React.CSSProperties;
    buttonSmall: React.CSSProperties;
    captionSemiBold: React.CSSProperties;
    captionRegular: React.CSSProperties;
    overline: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    heading1?: React.CSSProperties;
    heading2?: React.CSSProperties;
    heading3?: React.CSSProperties;
    heading4SemiBold?: React.CSSProperties;
    heading4Regular?: React.CSSProperties;
    bodySemiBold?: React.CSSProperties;
    bodyRegular?: React.CSSProperties;
    numberSemiBold?: React.CSSProperties;
    number?: React.CSSProperties;
    button?: React.CSSProperties;
    buttonSmall?: React.CSSProperties;
    captionSemiBold?: React.CSSProperties;
    captionRegular?: React.CSSProperties;
    overline?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    caption: false;

    heading1: true;
    heading2: true;
    heading3: true;
    heading4SemiBold: true;
    heading4Regular: true;
    bodySemiBold: true;
    bodyRegular: true;
    numberSemiBold: true;
    number: true;
    button: true;
    buttonSmall: true;
    captionSemiBold: true;
    captionRegular: true;
    overline: true;
  }
}

export const Typography: ThemeOptions["typography"] = {
  fontFamily: ["Inter", "sans-serif"].join(","),
  allVariants: {
    color: Palette.interface.red["500"],
  },
  heading1: {
    fontSize: pxToRem(34),
    lineHeight: pxToRem(50),
    fontWeight: 600,
    letterSpacing: "0.0025em",
  },
  heading2: {
    fontSize: pxToRem(24),
    lineHeight: pxToRem(36),
    fontWeight: 600,
    letterSpacing: "0em",
  },
  heading3: {
    fontSize: pxToRem(20),
    lineHeight: pxToRem(30),
    fontWeight: 600,
    letterSpacing: "0.0015em",
  },
  heading4SemiBold: {
    fontSize: pxToRem(17),
    lineHeight: pxToRem(26),
    fontWeight: 600,
    letterSpacing: "0.002em",
  },
  heading4Regular: {
    fontSize: pxToRem(17),
    lineHeight: pxToRem(26),
    fontWeight: 400,
    letterSpacing: "0.002em",
  },
  bodySemiBold: {
    fontSize: pxToRem(15),
    lineHeight: pxToRem(24),
    fontWeight: 600,
    letterSpacing: "0.003em",
  },
  bodyRegular: {
    fontSize: pxToRem(15),
    lineHeight: pxToRem(24),
    fontWeight: 400,
    letterSpacing: "0.003em",
  },
  numberSemiBold: {
    fontSize: pxToRem(15),
    lineHeight: pxToRem(24),
    fontWeight: 600,
    letterSpacing: "0.003em",
  },
  number: {
    fontSize: pxToRem(15),
    lineHeight: pxToRem(24),
    fontWeight: 400,
    letterSpacing: "0.003em",
  },
  button: {
    fontSize: pxToRem(15),
    lineHeight: pxToRem(24),
    fontWeight: 600,
    letterSpacing: "0.0125em",
    textTransform: "none",
  },
  buttonSmall: {
    fontSize: pxToRem(12),
    lineHeight: pxToRem(18),
    fontWeight: 600,
    letterSpacing: "0.0125em",
    textTransform: "none",
  },
  captionSemiBold: {
    fontSize: pxToRem(12),
    lineHeight: pxToRem(18),
    fontWeight: 600,
    letterSpacing: "0.004em",
  },
  captionRegular: {
    fontSize: pxToRem(12),
    lineHeight: pxToRem(18),
    fontWeight: 400,
    letterSpacing: "0.0125em",
  },
  overline: {
    fontSize: pxToRem(10),
    lineHeight: pxToRem(14),
    fontWeight: 900,
    letterSpacing: "0.0025em",
  },

  h1: undefined,
  h2: undefined,
  h3: undefined,
  h4: undefined,
  h5: undefined,
  h6: undefined,
  subtitle1: undefined,
  subtitle2: undefined,
  body1: undefined,
  body2: undefined,
  caption: undefined,
};
