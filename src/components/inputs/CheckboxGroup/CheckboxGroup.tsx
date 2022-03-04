import { FormControl, FormGroup } from "@mui/material";
import * as React from "react";
import { Checkbox, FormHelperText } from "..";
import { Label } from "../Label";
import { iCheckboxGroupProps } from "./types";

const CheckboxGroup: React.VFC<iCheckboxGroupProps> = ({
  label,
  checkboxes,
  onChange,
  errorText,
}) => {
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.name, event.target.checked);
    },
    [onChange]
  );

  return (
    <FormControl component="fieldset" variant="standard">
      {label && <Label className="mb-2">{label}</Label>}
      <FormGroup className="flex flex-row">
        {checkboxes.map((checkboxProps) => (
          <Checkbox onChange={handleChange} {...checkboxProps} />
        ))}
      </FormGroup>
      {errorText && <FormHelperText error>{errorText}</FormHelperText>}
    </FormControl>
  );
};

export default CheckboxGroup;
