import * as React from "react";
import { Meta } from "@storybook/react";
import FormControlUI from "./FormControl";
import { iFormControlProps } from "./types";
import { Label } from "../Label";
import { TextField, iTextFieldProps } from "../TextField";
import { FormHelperText, iFormHelperTextProps } from "../FormHelperText";
import { iLabelProps } from "../Label/types";

export default {
  title: "Components/Inputs",
  component: FormControlUI,
  subcomponents: { TextField, Label, FormHelperText },
} as Meta<iFormControlProps>;

export const FormControl: React.VFC<
  iFormControlProps & iFormHelperTextProps & iLabelProps & iTextFieldProps
> = ({ error, value, ...props }) => {
  return (
    <FormControlUI defaultValue="" required {...props}>
      <Label>Name</Label>
      <TextField value={value} />
      <FormHelperText error={error}>Form Helper</FormHelperText>
    </FormControlUI>
  );
};
