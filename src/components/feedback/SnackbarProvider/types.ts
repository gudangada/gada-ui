import { SnackbarProps, WithSnackbarProps } from "notistack";

export interface iSnackbarProviderProps extends SnackbarProps {
  children: React.ReactNode;
}

export interface iSnackbarUtilsConfiguratorProps {
  setUseSnackbarRef: (showSnackbar: WithSnackbarProps) => void;
}
