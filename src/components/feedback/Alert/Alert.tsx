import * as React from "react";
import { Alert as MuiAlert } from "@mui/material";
import { iAlertProps } from "./types";

const Alert: React.VFC<iAlertProps> = (props) => {
  return <MuiAlert {...props} />;
};

export default Alert;
