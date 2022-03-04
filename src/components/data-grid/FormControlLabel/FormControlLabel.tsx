import * as React from "react";
import { FormControlLabel as MuiFormControlLabel } from "@mui/material";
import { iFormControlLabelProps } from "./types";

const FormControlLabel: React.FC<iFormControlLabelProps> = (props) => {
  return <MuiFormControlLabel {...props} />;
};

export default FormControlLabel;
