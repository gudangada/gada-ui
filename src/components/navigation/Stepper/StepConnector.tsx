import * as React from "react";
import { StepConnector as MuiStepConnector } from "@mui/material";
import { iStepConnectorProps } from "./types";

const StepConnector: React.FC<iStepConnectorProps> = (props) => {
  return <MuiStepConnector {...props} />;
};

export default StepConnector;
