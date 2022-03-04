import * as React from "react";
import { Dialog as MuiDialog } from "@mui/material";
import { iDialogProps } from "./types";

const Dialog = React.forwardRef<HTMLDivElement, iDialogProps>((props, ref) => {
  return <MuiDialog ref={ref} {...props} />;
});

Dialog.displayName = "Dialog";

export default Dialog;
