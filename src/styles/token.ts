import { PaletteOptions } from "@mui/material/styles/createPalette";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { pxToRem } from "./utils";
import { ThemeOptions } from "@mui/material/styles/createTheme";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    brand: React.CSSProperties["color"];
    interface: PaletteColors;
    overlay: {
      teal: React.CSSProperties["color"];
      neutral: React.CSSProperties["color"];
    };
  }
  interface PaletteOptions {
    brand: React.CSSProperties["color"];
    interface: PaletteColors;
    overlay: {
      teal: React.CSSProperties["color"];
      neutral: React.CSSProperties["color"];
    };
  }
  interface ThemePaletteOptions {
    brand: React.CSSProperties["color"];
    interface: PaletteColors;
    overlay: {
      teal: React.CSSProperties["color"];
      neutral: React.CSSProperties["color"];
    };
  }
  interface PaletteColors {
    white: React.CSSProperties["color"];
    black: Partial<PaletteColorOption>;
    teal: Partial<PaletteColorOption>;
    blue: Partial<PaletteColorOption>;
    red: Partial<PaletteColorOption>;
    green: Partial<PaletteColorOption>;
    orange: Partial<PaletteColorOption>;
  }
  interface PaletteColorOption {
    900: React.CSSProperties["color"];
    700: React.CSSProperties["color"];
    500: React.CSSProperties["color"];
    400: React.CSSProperties["color"];
    300: React.CSSProperties["color"];
    200: React.CSSProperties["color"];
    100: React.CSSProperties["color"];
    50: React.CSSProperties["color"];
  }
}

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

const palette: PaletteOptions = {
  brand: "#00D1C7",
  primary: {
    main: "#007C76",
  },
  interface: {
    white: "#FFFFFF",
    black: {
      "500": "#383838",
      "400": "#929292",
      "300": "#BDBDBD",
      "200": "#DEDEDE",
      "100": "#F4F4F4",
      "50": "#F9F9F9",
    },
    teal: {
      "900": "#006568",
      "700": "#008483",
      "500": "#03A199",
      "100": "#A5EBE3",
      "50": "#EBF8F7",
    },
    blue: {
      "500": "#0470C8",
      "50": "#EDF8FF",
    },
    green: {
      "500": "#07A650",
      "50": "#EDFFFD",
    },
    orange: {
      "500": "#F27D07",
      "50": "#FFF6ED",
    },
    red: {
      "900": "#90012C",
      "700": "#B20C42",
      "500": "#D42867",
      "50": "#FFF2F8",
    },
  },
  overlay: {
    teal: "#285250",
    neutral: "#464646",
  },
};

const typography: TypographyOptions = {
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

const token = {
  palette,
  typography,
};

export default token;
