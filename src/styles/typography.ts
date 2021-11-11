import { pxToRem } from "./utils";
import { ThemeOptions } from "@mui/material";
import { palette } from "./palette";

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    buttonSmall: React.CSSProperties;
    pricing: React.CSSProperties;
    pricingSmall: React.CSSProperties;
    pricingSmallLight: React.CSSProperties;
    captionLight: React.CSSProperties;
    label: React.CSSProperties;
    labelSemiBold: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyOptions {
    buttonSmall?: React.CSSProperties;
    pricing?: React.CSSProperties;
    pricingSmall?: React.CSSProperties;
    pricingSmallLight?: React.CSSProperties;
    captionLight?: React.CSSProperties;
    label?: React.CSSProperties;
    labelSemiBold?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography/Typography" {
  interface TypographyPropsVariantOverrides {
    buttonSmall: true;
    pricing: true;
    pricingSmall: true;
    pricingSmallLight: true;
    captionLight: true;
    label: true;
    labelSemiBold: true;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    overline: false;
  }
}

export const typography: ThemeOptions["typography"] = {
  fontFamily: ["Inter", "sans-serif"].join(","),
  allVariants: {
    color: palette.interface.black["500"],
  },
  h1: {
    fontSize: pxToRem(32),
    lineHeight: pxToRem(48),
    fontWeight: 700,
    letterSpacing: "-0.022em",
  },
  h2: {
    fontSize: pxToRem(24),
    lineHeight: pxToRem(36),
    fontWeight: 600,
    letterSpacing: "0.0025em",
  },
  h3: {
    fontSize: pxToRem(20),
    lineHeight: pxToRem(28),
    fontWeight: 700,
    letterSpacing: "-0.017em",
  },
  h4: {
    fontSize: pxToRem(16),
    lineHeight: pxToRem(24),
    fontWeight: 600,
    letterSpacing: "-0.011em",
  },
  h5: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
    fontWeight: 600,
    letterSpacing: "0.0125em",
  },
  button: {
    fontSize: pxToRem(16),
    lineHeight: pxToRem(16),
    textTransform: "none",
    fontWeight: 600,
    letterSpacing: "0.0125em",
  },
  buttonSmall: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(14),
    textTransform: "none",
    fontWeight: 600,
    letterSpacing: "0.0125em",
  },
  body1: {
    fontSize: pxToRem(16),
    lineHeight: pxToRem(24),
    fontWeight: 400,
    letterSpacing: "-0.011em",
  },
  body2: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
    fontWeight: 400,
    letterSpacing: "-0.006em",
  },
  pricing: {
    fontSize: pxToRem(16),
    lineHeight: pxToRem(16),
    fontWeight: 700,
  },
  pricingSmall: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(14),
    fontWeight: 600,
  },
  pricingSmallLight: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(14),
    fontWeight: 400,
  },
  caption: {
    fontSize: pxToRem(12),
    lineHeight: pxToRem(16),
    fontWeight: 700,
  },
  captionLight: {
    fontSize: pxToRem(12),
    lineHeight: pxToRem(16),
    fontWeight: 400,
  },
  label: {
    fontSize: pxToRem(10),
    lineHeight: pxToRem(10),
    fontWeight: 400,
    letterSpacing: "0.005em",
  },
  labelSemiBold: {
    fontSize: pxToRem(10),
    lineHeight: pxToRem(10),
    fontWeight: 600,
    letterSpacing: "0.005em",
  },
  h6: undefined,
  overline: undefined,
  subtitle1: undefined,
  subtitle2: undefined,
};
