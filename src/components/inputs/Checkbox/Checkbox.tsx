import * as React from "react";
import {
  Checkbox as MuiCheckbox,
  FormControlLabel as MuiFormControlLabel,
} from "@mui/material";
import { iCheckboxProps } from "./types";
import { Row } from "../../layout";
import { Text } from "../../core";

const Checkbox: React.VFC<iCheckboxProps> = ({
  label,
  containerClassName,
  ...props
}) => {
  return (
    <Row vCenter className={containerClassName}>
      <MuiFormControlLabel
        key={props.name}
        control={<MuiCheckbox className="pl-2" {...props} />}
        label={
          <Text variant="bodyRegular" className="ml-2">
            {label}
          </Text>
        }
      />
    </Row>
  );
};

export default Checkbox;
