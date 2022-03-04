import * as React from "react";
import { DialogActions as MuiDialogActions } from "@mui/material";
import { iDialogActionsProps } from "./types";

const DialogActions: React.FC<iDialogActionsProps> = (props) => {
  return <MuiDialogActions {...props} />;
};

export default DialogActions;
