import { PaletteOptions } from "@mui/material/styles/createPalette";

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

export const Palette: PaletteOptions = {
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
