import * as React from "react";
import { Stepper as MuiStepper } from "@mui/material";
import { iStepperProps } from "./types";

const Stepper: React.FC<iStepperProps> = (props) => {
  return <MuiStepper {...props} />;
};

export default Stepper;
