import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DrawerUI from "./Drawer";
import { Col } from "../Col";
import { Text } from "../../core";

export default {
  title: "Components/Layout",
  component: DrawerUI,
} as ComponentMeta<typeof DrawerUI>;

const Template: ComponentStory<typeof DrawerUI> = (props) => {
  return (
    <Col className="relative h-96">
      <DrawerUI
        anchor="left"
        variant="permanent"
        PaperProps={{ className: "absolute" }}
        {...props}
      >
        <Text variant="heading2" color="white">
          Drawer Content
        </Text>
      </DrawerUI>
    </Col>
  );
};

export const Drawer = Template.bind({});

Drawer.parameters = {
  controls: { include: ["anchor"] },
};
Drawer.args = {
  anchor: "left",
};
Drawer.argTypes = {
  anchor: {
    control: {
      options: ["left", "right", "top", "bottom"],
      type: "select",
    },
  },
};
