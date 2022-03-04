import * as React from "react";
import { Radio as MuiRadio } from "@mui/material";
import { iRadioProps } from "./types";

const Radio: React.FC<iRadioProps> = (props) => {
  return <MuiRadio {...props} />;
};

export default Radio;
