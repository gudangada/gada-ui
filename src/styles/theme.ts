import { createTheme, ThemeOptions } from "@mui/material/styles";
import ComponentStyles, {
  Palette,
  Typography,
  zIndex,
  Shadows,
} from "./component-styles";
import "@emotion/react";

export const themeOptions: ThemeOptions = {
  palette: Palette,
  shadows: Shadows,
  typography: Typography,
  components: ComponentStyles,
};

const theme = createTheme(themeOptions);
export type AppTheme = typeof themeOptions;

declare module "@emotion/react" {
  export interface Theme extends AppTheme {}
}

export { zIndex, theme };
export default theme;
