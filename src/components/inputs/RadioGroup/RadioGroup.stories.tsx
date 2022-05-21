import * as React from "react";
import RadioGroupUI from "./RadioGroup";
import { iRadioGroupProps } from "./types";
import { Meta } from "@storybook/react";
import { FormControl } from "../FormControl";
import { FormControlLabel } from "../FormControlLabel";
import { Radio } from "@mui/material";
import { Label } from "../Label";

export default {
  title: "Components/Input",
  component: RadioGroupUI,
} as Meta<iRadioGroupProps>;

export const RadioGroup: React.VFC<iRadioGroupProps> = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <Label id="demo-controlled-radio-buttons-group" className="mb-2">
        Gender
      </Label>
      <RadioGroupUI
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroupUI>
    </FormControl>
  );
};
