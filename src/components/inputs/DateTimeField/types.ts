import { iDateFieldProps } from "../DateField";
import { iTimeFieldProps } from "../TimeField";

export interface iDateTimeFieldProps<T> {
  label?: string;
  dateTimeValue: string;
  dateFieldProps?: Omit<iDateFieldProps<T>, "onChange" | "value">;
  timeFieldProps?: Omit<iTimeFieldProps<T>, "onChange" | "value">;
  dateFormat?: string;
  timeFormat?: string;
  dateTimeSeparator?: string;
  onChange: (dateTime: string) => void;
  errorText?: string;
  disabled?: boolean;
}
