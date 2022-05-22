import * as React from "react";
import { Meta, Story } from "@storybook/react";
import NavListItemsUI from "./NavListItems";
import { iNavListItemsProps } from "./types";
import { Col } from "../../core";
import { HomeIcon } from "../../../assets";

export default {
  title: "Components/Core",
  component: NavListItemsUI,
} as Meta;

const navItems: iNavListItemsProps = {
  navItems: [
    {
      baseUrl: "javascript:void(0);",
      text: "Nav Item 1",
      url: "javascript:void(0);",
      icon: <HomeIcon />,
      subNav: [
        { url: "javascript:void(0);", text: "Sub Nav Item 1" },
        { url: "javascript:void(0);", text: "Sub Nav Item 2" },
      ],
    },
  ],
} as iNavListItemsProps;

//👇 We create a “template” of how args map to rendering
const Template: Story<iNavListItemsProps> = (props) => {
  return (
    <Col fullHeight className="h-screen bg-gray-900">
      <NavListItemsUI {...props} navItems={navItems.navItems} />
    </Col>
  );
};

//👇 Each story then reuses that template
export const NavListItems = Template.bind({});
