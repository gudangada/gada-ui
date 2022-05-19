import * as React from "react";
import { FormControl as FormControlUI } from "@mui/material";
import { iFormControlProps } from "./types";

const FormControl: React.FC<iFormControlProps> = (props) => {
  return <FormControlUI {...props} />;
};

export default FormControl;
