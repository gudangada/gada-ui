import * as React from "react";
import { Meta, Story } from "@storybook/react";
import ButtonUI from "./Button";
import { iButtonProps } from "./types";
import { SpeedDialIcon } from "@mui/material";

export default {
  title: "Components/Core",
  component: ButtonUI,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<iButtonProps> = (args) => <ButtonUI {...args} />;

//👇 Each story then reuses that template
export const Button = Template.bind({});
Button.args = {
  variant: "primary",
  color: "primary",
  size: "large",
  children: "Button Text",
};

export const CircularButton = Template.bind({});
CircularButton.args = {
  variant: "circular",
  color: "primary",
  size: "large",
  disabled: false,
  children: <SpeedDialIcon />,
};
