import * as React from "react";
import { Meta, Story } from "@storybook/react";
import ButtonUI from "./Button";
import { iButtonProps } from "./types";
import { SpeedDialIcon } from "@mui/material";

export default {
  title: "Components/Core/Buttons",
  component: ButtonUI,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<iButtonProps> = (args) => <ButtonUI {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  color: "primary",
  size: "large",
  children: "Button Text",
  onClick: () => alert("Clicked"),
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  color: "primary",
  size: "large",
  children: "Button Text",
  onClick: () => alert("Clicked"),
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  color: "primary",
  size: "large",
  children: "Button Text",
  onClick: () => alert("Clicked"),
};

export const Circular = Template.bind({});
Circular.args = {
  variant: "circular",
  color: "primary",
  size: "large",
  disabled: false,
  children: <SpeedDialIcon />,
  onClick: () => alert("Clicked"),
};

export const FABText = Template.bind({});
FABText.args = {
  variant: "fab",
  color: "primary",
  size: "large",
  disabled: false,
  startIcon: <SpeedDialIcon />,
  text: "Button label",
  onClick: () => alert("Clicked"),
};
