import { TimePickerProps } from "@mui/lab";

export interface iTimeFieldProps<T>
  extends Omit<TimePickerProps<T>, "renderInput"> {
  id?: string;
  label?: string;
  errorText?: string;
  error?: boolean;
}
