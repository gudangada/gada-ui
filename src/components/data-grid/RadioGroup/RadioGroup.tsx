import * as React from "react";
import { RadioGroup as MuiRadioGroup } from "@mui/material";
import { iRadioGroupProps } from "./types";

const RadioGroup: React.FC<iRadioGroupProps> = (props) => {
  return <MuiRadioGroup {...props} />;
};

export default RadioGroup;
