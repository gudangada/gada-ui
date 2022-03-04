import * as React from "react";
import { DialogContent as MuiDialogContent } from "@mui/material";
import { iDialogContentProps } from "./types";

const DialogContent: React.FC<iDialogContentProps> = (props) => {
  return <MuiDialogContent {...props} />;
};

export default DialogContent;
