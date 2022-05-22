import * as React from "react";
import { Meta, Story } from "@storybook/react";
import TimeFieldUI from "./TimeField";
import { iTimeFieldProps } from "./types";

export default {
  title: "Components/Input",
  component: TimeFieldUI,
} as Meta;

const Template: Story<iTimeFieldProps<any>> = () => {
  const [time, setTime] = React.useState("");
  return (
    <TimeFieldUI
      id="time"
      inputFormat="HH:mm"
      value={time}
      onChange={setTime}
    />
  );
};

export const TimeField = Template.bind({});
