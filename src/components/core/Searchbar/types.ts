import { FormControlProps, OutlinedInputProps } from "@mui/material";
import * as React from "react";

export interface iSearchbarProps extends Omit<OutlinedInputProps, "size"> {
  onClickCancel?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onChangeValue: (newQuery: string) => void;
  formControlProps?: FormControlProps;
  withEndAdornment?: boolean;
  size?: "default" | "small";
}
