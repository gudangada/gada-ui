import * as React from "react";
import {
  FormControlProps,
  FormHelperTextProps,
  OutlinedInputProps,
} from "@mui/material";
import { iGadaIcon } from "../../../assets";
import { iBaseInputProps } from "../types";

export interface iTextFieldProps
  extends iBaseInputProps,
    Omit<OutlinedInputProps, "error"> {
  label?: string;
  labelInline?: boolean;
  errorText?: string;
  error?: boolean;
  ErrorTextIcon?: iGadaIcon;
  StartIcon?: iGadaIcon;
  EndIcon?: iGadaIcon;
  formControlProps?: FormControlProps;
  formHelperTextProps?: FormHelperTextProps;
  allowDecimal?: boolean;
  filterRegExps?: TextFieldRegExpType[];
  handleBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  outlinedInputClassName?: string;
}

export type TextFieldRegExpType = {
  regExp: string;
  regExpParams?: string[];
  replaceParam?: string;
};
