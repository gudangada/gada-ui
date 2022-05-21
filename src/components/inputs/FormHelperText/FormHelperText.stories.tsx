import * as React from "react";
import FormHelperTextUI from "./FormHelperText";
import { Meta } from "@storybook/react";
import { iFormHelperTextProps } from "./types";
import { CalendarIcon } from "../../../assets";

export default {
  title: "Components/Input",
  component: FormHelperTextUI,
  args: {
    error: false,
    children: "Form error",
    Icon: CalendarIcon,
  },
} as Meta<iFormHelperTextProps>;

export const FormHelperText: React.FC<iFormHelperTextProps> = (props) => {
  return <FormHelperTextUI {...props} />;
};
