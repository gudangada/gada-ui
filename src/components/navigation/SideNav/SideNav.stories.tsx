import * as React from "react";
import SideNavUI from "./SideNav";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { iSideNavProps } from "./types";
import { HomeIcon, CampaignIcon } from "../../../assets";
import { Col } from "../../core";
import { Drawer as DrawerStory } from "../../layout/Drawer/Drawer.stories";

export default {
  title: "Components/Navigation",
  component: SideNavUI,
} as ComponentMeta<typeof SideNavUI>;

const sideNavProps: iSideNavProps = {
  drawerProps: {
    anchor: "left",
  },
  navItemsProps: {
    navItems: [
      {
        baseUrl: "javascript:void(0);",
        text: "Nav Item 1",
        url: "javascript:void(0);",
        icon: <HomeIcon />,
      },
      {
        baseUrl: "javascript:void(0);",
        text: "Nav Item 2",
        url: "javascript:void(0);",
        icon: <CampaignIcon />,
        subNav: [
          {
            url: "javascript:void(0);",
            text: "Sub Nav Item 1",
            isActive: true,
          },
          { url: "javascript:void(0);", text: "Sub Nav Item 2" },
        ],
      },
    ],
  },
};

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof SideNavUI> = (props) => {
  return (
    <Col className="relative h-96 bg-gray-100">
      <SideNavUI
        {...sideNavProps}
        {...props}
        drawerProps={{
          ...props.drawerProps,
          PaperProps: {
            ...props.drawerProps?.PaperProps,
            className: "absolute",
          },
        }}
      />
    </Col>
  );
};

//👇 Each story then reuses that template
export const SideNav = Template.bind({});

SideNav.parameters = {
  drawerProps: { ...DrawerStory.parameters },
};
SideNav.args = {
  drawerProps: { ...DrawerStory.args },
};
SideNav.argTypes = { drawerProps: { ...DrawerStory.argTypes } };
