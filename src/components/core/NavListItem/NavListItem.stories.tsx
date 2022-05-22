import * as React from "react";
import { Meta, Story } from "@storybook/react";
import NavListItemUI from "./NavListItem";
import { iNavListItem, iNavListItemProps } from "./types";
import { Col } from "../../core";
import { HomeIcon } from "../../../assets";

export default {
  title: "Components/Core",
  component: NavListItemUI,
} as Meta;

const navItems: iNavListItem[] = [
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
    icon: <HomeIcon />,
  },
];

//👇 We create a “template” of how args map to rendering
const Template: Story<iNavListItemProps> = (props) => {
  return (
    <Col fullHeight className="h-screen bg-gray-900">
      {navItems.map((navItem) => (
        <NavListItemUI key={navItem.url} {...props} navItem={navItem} />
      ))}
    </Col>
  );
};

//👇 Each story then reuses that template
export const NavListItem = Template.bind({});
