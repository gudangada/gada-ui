import * as React from "react";
import { StepButton as MuiStepButton } from "@mui/material";
import { iStepButtonProps } from "./types";

const StepButton: React.FC<iStepButtonProps> = (props) => {
  return <MuiStepButton {...props} />;
};

export default StepButton;
