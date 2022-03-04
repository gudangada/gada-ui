import * as React from "react";
import { StepContent as MuiStepContent } from "@mui/material";
import { iStepContentProps } from "./types";

const StepContent: React.FC<iStepContentProps> = (props) => {
  return <MuiStepContent {...props} />;
};

export default StepContent;
