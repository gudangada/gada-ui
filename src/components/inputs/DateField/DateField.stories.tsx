import * as React from "react";
import { Meta, Story } from "@storybook/react";
import DateFieldUI from "./DateField";
import { iDateFieldProps } from "./types";

export default {
  title: "Components/Inputs",
  component: DateFieldUI,
} as Meta;

const Template: Story<iDateFieldProps<any>> = () => {
  const [time, setTime] = React.useState("");

  return <DateFieldUI value={time} onChange={setTime} />;
};

export const DateField = Template.bind({});
