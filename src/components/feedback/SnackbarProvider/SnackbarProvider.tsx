import * as React from "react";
import { SnackbarProvider as SnackbarProviderComponent } from "notistack";
import { iSnackbarProviderProps } from "./types";
import { SnackbarUtilsConfigurator } from "./SnackbarUtilsConfigurator";

const SnackbarProvider: React.FC<iSnackbarProviderProps> = ({
  ref,
  children,
  ...props
}) => {
  return (
    <SnackbarProviderComponent
      autoHideDuration={3500}
      maxSnack={3}
      hideIconVariant={true}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      {...props}
    >
      <SnackbarUtilsConfigurator />
      {children}
    </SnackbarProviderComponent>
  );
};

export default SnackbarProvider;
