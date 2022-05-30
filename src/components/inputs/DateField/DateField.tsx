import * as React from "react";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDayjs from "@mui/lab/AdapterDayjs";
import { iDateFieldProps } from "./types";
import { Col } from "../../core";
import { Label } from "../Label";
import { TextField } from "../TextField";
import { CalendarIcon } from "../../../assets";
import { BasePickerProps } from "@mui/lab/internal/pickers/typings/BasePicker";

const DateField: React.FC<iDateFieldProps<any>> = ({
  id,
  value,
  inputFormat = "DD MMM YYYY",
  errorText,
  error = false,
  label,
  onChange,
  disabled = false,
  ...restDatePickerProps
}) => {
  const [datePickerVisible, setDatePickerVisible] = React.useState(false);
  const textFieldRef = React.useRef();

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleChange: BasePickerProps<any, any>["onChange"] = (
    date,
    keyboardInputValue
  ) => {
    onChange(date, keyboardInputValue);
    hideDatePicker;
  };

  return (
    <Col className="pointer">
      <Label id={id}>{label}</Label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          open={datePickerVisible}
          onClose={hideDatePicker}
          value={value}
          renderInput={({ inputProps }) => (
            <TextField
              inputRef={textFieldRef}
              inputProps={{
                ...inputProps,
                onChange: () => {},
              }}
              errorText={errorText}
              error={error}
              EndIcon={CalendarIcon}
              onChange={() => {}}
              onClick={showDatePicker}
              classes={{
                input: "pointer-events-none",
                root: disabled ? "cursor-default" : "cursor-pointer",
              }}
              disabled={disabled}
            />
          )}
          PopperProps={{
            anchorEl: textFieldRef.current,
          }}
          onChange={handleChange}
          inputFormat={inputFormat}
          disabled={disabled}
          {...restDatePickerProps}
        />
      </LocalizationProvider>
    </Col>
  );
};

export default DateField;
