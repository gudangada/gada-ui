import * as React from "react";
import { Meta, Story } from "@storybook/react";
import NavItemUI from "./NavItem";
import { iNavItemProps } from "./types";
import { Col } from "../../layout";
import { HomeIcon } from "../../../assets";

export default {
  title: "Components/Core",
  component: NavItemUI,
} as Meta;

const navItems: iNavItemProps[] = [
  {
    text: "Nav Item 1",
    url: "javascript:void(0);",
    icon: <HomeIcon />,
    onClick: () => alert("Nav Item 1"),
  },
  {
    text: "Nav Item 2",
    url: "javascript:void(0);",
    icon: <HomeIcon />,
    onClick: () => alert("Nav Item 2"),
  },
];

//👇 We create a “template” of how args map to rendering
const Template: Story<iNavItemProps> = (props) => {
  return (
    <Col fullHeight className="bg-gray-900">
      <NavItemUI {...props} {...navItems[0]} />
    </Col>
  );
};

//👇 Each story then reuses that template
export const NavItem = Template.bind({});
