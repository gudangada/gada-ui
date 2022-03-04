import * as React from "react";
import {
  FormControlProps,
  FormHelperTextProps,
  OutlinedInputProps,
} from "@mui/material";
import { iGadaIcon } from "../../../assets";

export interface iTextFieldProps extends Omit<OutlinedInputProps, "error"> {
  label?: string;
  labelInline?: boolean;
  errorText?: string;
  error?: boolean;
  ErrorTextIcon?: iGadaIcon;
  helperText?: string;
  HelperTextIcon?: iGadaIcon;
  StartIcon?: iGadaIcon;
  EndIcon?: iGadaIcon;
  formControlProps?: FormControlProps;
  formHelperTextProps?: FormHelperTextProps;
  handleBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
