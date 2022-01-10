import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { typography } from "./typography";
import ComponentStyles from "./component-styles";

const themeOptions = { palette, typography, components: ComponentStyles };

export const theme = createTheme(themeOptions);
export type AppTheme = typeof themeOptions;

export default theme;
