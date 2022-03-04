import * as React from "react";
import { Step as MuiStep } from "@mui/material";
import { iStepProps } from "./types";

const Step: React.FC<iStepProps> = ({ children, ...props }) => {
  return <MuiStep {...props}>{children}</MuiStep>;
};

export default Step;
