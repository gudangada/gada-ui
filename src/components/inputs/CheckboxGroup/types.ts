import { iCheckboxProps } from "../Checkbox/types";

export interface iCheckboxGroupProps {
  label?: string;
  onChange: CheckboxControlChangeHandler;
  checkboxes: iCheckboxControl[];
  errorText?: string;
}

export interface iCheckboxControl extends Partial<iCheckboxProps> {
  label: string;
  name: string;
  checked: boolean;
}

export type CheckboxControlChangeHandler = (
  name: string,
  checked: boolean
) => void;
