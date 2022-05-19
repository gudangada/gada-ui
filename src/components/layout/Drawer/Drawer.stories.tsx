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
  const { width, height } = ["left", "right"].includes(props.anchor || "left")
    ? { width: "240px", height: "100%" }
    : { width: "auto", height: "240px" };

  return (
    <Col spacing={32}>
      <Col spacing={8}>
        <Text variant="bodySemiBold">
          Navigation drawers provide access to destinations in your app. Side
          sheets are surfaces containing supplementary content that are anchored
          to the left or right edge of the screen.
        </Text>
        <Text variant="bodyRegular">
          Navigation drawers (or "sidebars") provide access to destinations and
          app functionality, such as switching accounts. They can either be
          permanently on-screen or controlled by a navigation menu icon.
        </Text>
      </Col>

      <Col className="relative h-96 overflow-hidden">
        <DrawerUI
          anchor="left"
          variant="permanent"
          PaperProps={{
            className: "absolute p-4",
            sx: { width, height },
          }}
          sx={{ width }}
          {...props}
        >
          <Text variant="heading2" color="white">
            Drawer Content
          </Text>
        </DrawerUI>
      </Col>
    </Col>
  );
};

export const Drawer = Template.bind({});

Drawer.parameters = {
  controls: { include: ["open", "anchor", "variant"] },
};
Drawer.args = {
  open: true,
  anchor: "left",
  variant: "persistent",
};
Drawer.argTypes = {
  open: {
    type: "boolean",
  },
  anchor: {
    control: {
      options: ["left", "right", "top", "bottom"],
      type: "select",
    },
  },
  variant: {
    control: {
      options: ["permanent", "persistent", "temporary"],
      type: "select",
    },
  },
};
