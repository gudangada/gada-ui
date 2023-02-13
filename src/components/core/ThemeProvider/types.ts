import { iSnackbarProviderProps } from "../../feedback";

export interface iGadaThemeProviderProps {
  children: any;
  withSnackbarProvider?: boolean;
  snackbarProps?: iSnackbarProviderProps;
}
