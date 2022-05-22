import * as React from "react";
import { OptionsObject, useSnackbar, WithSnackbarProps } from "notistack";
import { iSnackbarUtilsConfiguratorProps } from "./types";

const InnerSnackbarUtilsConfigurator: React.FC<iSnackbarUtilsConfiguratorProps> =
  ({ setUseSnackbarRef }) => {
    setUseSnackbarRef(useSnackbar());
    return null;
  };

let useSnackbarRef: WithSnackbarProps;
const setUseSnackbarRef = (useSnackbarRefProp: WithSnackbarProps) => {
  useSnackbarRef = useSnackbarRefProp;
};

export const SnackbarUtilsConfigurator: React.FC = () => {
  return (
    <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />
  );
};

const SnackbarUtil = {
  success(msg: string, options: OptionsObject = {}): void {
    this.toast(msg, { ...options, variant: "success" });
  },
  warning(msg: string, options: OptionsObject = {}): void {
    this.toast(msg, { ...options, variant: "warning" });
  },
  info(msg: string, options: OptionsObject = {}): void {
    this.toast(msg, { ...options, variant: "info" });
  },
  error(msg: string, options: OptionsObject = {}): void {
    this.toast(msg, { ...options, variant: "error" });
  },
  toast(msg: string, options: OptionsObject = {}): void {
    useSnackbarRef.enqueueSnackbar(msg, { ...options, persist: false });
  },
};

export default SnackbarUtil;
