import * as React from "react";
import { Meta, Story } from "@storybook/react";
import ButtonUI from "./Button";
import { iButtonProps } from "./types";

const ThemedButton = ButtonUI;

export default {
  title: "Components/Button",
  component: ThemedButton,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<iButtonProps> = (args) => <ThemedButton {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  variant: "contained",
  color: "primary",
  children: "Primary",
};
