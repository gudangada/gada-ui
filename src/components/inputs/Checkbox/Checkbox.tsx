import * as React from "react";
import {
  Checkbox as MuiCheckbox,
  FormControlLabel as MuiFormControlLabel,
} from "@mui/material";
import { iCheckboxProps } from "./types";
import { Text } from "../../core";
import clsx from "clsx";

const Checkbox: React.VFC<iCheckboxProps> = ({
  label,
  containerClassName,
  ...props
}) => {
  const checkboxComp = (
    <MuiCheckbox className={clsx(label ? "pl-2" : "-ml-0.5")} {...props} />
  );

  return label ? (
    <MuiFormControlLabel
      key={props.name}
      className={containerClassName}
      control={checkboxComp}
      label={
        <Text variant="bodyRegular" className="ml-2">
          {label}
        </Text>
      }
    />
  ) : (
    checkboxComp
  );
};

export default Checkbox;
