import * as React from "react";
import { StepLabel as MuiStepLabel } from "@mui/material";
import { iStepLabelProps } from "./types";
import { Text } from "../../core";

const StepLabel: React.FC<iStepLabelProps> = ({ children, ...props }) => {
  return (
    <MuiStepLabel {...props}>
      <Text variant="captionSemiBold">{children}</Text>
    </MuiStepLabel>
  );
};

export default StepLabel;
