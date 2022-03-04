import * as React from "react";
import { DialogTitle as MuiDialogTitle } from "@mui/material";
import { iDialogTitleProps } from "./types";

const DialogTitle: React.FC<iDialogTitleProps> = (props) => {
  return <MuiDialogTitle {...props} />;
};

export default DialogTitle;
