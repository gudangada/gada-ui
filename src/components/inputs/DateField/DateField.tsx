import * as React from "react";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDayjs from "@mui/lab/AdapterDayjs";
import { iDateFieldProps } from "./types";
import { Col } from "../../layout";
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
  ...restDatePickerProps
}) => {
  const [showDatePicker, setDatePickerVisible] = React.useState(false);
  const textFieldRef = React.useRef();

  const handleChange: BasePickerProps<any, any>["onChange"] = (
    date,
    keyboardInputValue
  ) => {
    onChange(date, keyboardInputValue);
    setDatePickerVisible(false);
  };

  return (
    <Col className="pointer">
      <Label id={id}>{label}</Label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          open={showDatePicker}
          onClose={() => setDatePickerVisible(false)}
          value={value}
          renderInput={({ inputProps }) => (
            <TextField
              inputRef={textFieldRef}
              inputProps={{ ...inputProps, onChange: () => {} }}
              errorText={errorText}
              error={error}
              EndIcon={CalendarIcon}
              onChange={() => {}}
              onClick={() => setDatePickerVisible(true)}
              classes={{ input: "pointer-events-none", root: "cursor-pointer" }}
            />
          )}
          PopperProps={{
            anchorEl: textFieldRef.current,
          }}
          onChange={handleChange}
          inputFormat={inputFormat}
          {...restDatePickerProps}
        />
      </LocalizationProvider>
    </Col>
  );
};

export default DateField;
