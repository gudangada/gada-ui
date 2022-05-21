import * as React from "react";
import { Meta, Story } from "@storybook/react";
import DividerUI from "./Divider";
import { iDividerProps } from "./types";
import { Col } from "../Col";
import { Text } from "../Text";

export default {
  title: "Components/Core",
  component: DividerUI,
} as Meta;

const Template: Story<iDividerProps> = (props) => {
  return (
    <Col>
      <Text>Item 1</Text>
      <DividerUI {...props} />
      <Text>Item 1</Text>
    </Col>
  );
};

export const Divider = Template.bind({});
Divider.parameters = { controls: { include: ["size"] } };
Divider.argTypes = {
  size: {
    control: {
      type: "select",
      options: ["small", "large"],
    },
  },
};
Divider.args = {
  size: "small",
};
