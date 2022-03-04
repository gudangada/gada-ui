import * as React from "react";
import { LocalizationProvider, TimePicker } from "@mui/lab";
import AdapterDayjs from "@mui/lab/AdapterDayjs";
import { FormHelperText } from "../FormHelperText";
import { iTimeFieldProps } from "./types";
import { Col } from "../../layout";
import { Label } from "../Label";
import { TextField } from "@mui/material";

const TimeField: React.FC<iTimeFieldProps<any>> = ({
  id,
  value,
  inputFormat = "HH:mm",
  errorText,
  error,
  label,
  onChange,
  ...restTimePickerProps
}) => {
  return (
    <Col spacing={8}>
      {label && <Label id={id}>{label}</Label>}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          value={value}
          renderInput={({ error: inputError, ...props }) => (
            <TextField error={Boolean(errorText) || error} {...props} />
          )}
          onChange={onChange}
          ampm={false}
          inputFormat={inputFormat}
          {...restTimePickerProps}
        />
      </LocalizationProvider>
      {errorText && (
        <FormHelperText id={id} error>
          {errorText}
        </FormHelperText>
      )}
    </Col>
  );
};

export default TimeField;
