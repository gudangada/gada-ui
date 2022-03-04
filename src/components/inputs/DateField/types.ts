import { DatePickerProps } from "@mui/lab";

export interface iDateFieldProps<T>
  extends Omit<DatePickerProps<T>, "renderInput"> {
  id?: string;
  label?: string;
  errorText?: string;
  error?: boolean;
}
