import * as React from "react";
import { Meta, Story } from "@storybook/react";
import FilterButtonUI from "./FilterButton";
import { iFilterButtonProps } from "./types";
import { Col } from "../../core";
import { iMenuItemProps } from "../../navigation";

export default {
  title: "Components/Core",
  component: FilterButtonUI,
  args: {
    activeFilters: 2,
  },
} as Meta<iFilterButtonProps>;

const navItems: iMenuItemProps[] = [
  {
    label: "Menu Item 1",
    onClick: () => alert("Menu Item 1"),
  },
  {
    label: "Menu Item 2",
    onClick: () => alert("Menu Item 2"),
  },
];

//👇 We create a “template” of how args map to rendering
const Template: Story<iFilterButtonProps> = (props) => {
  return (
    <Col fullHeight>
      <FilterButtonUI
        {...props}
        buttonProps={{ className: "self-start" }}
        menuProps={{ menuItems: navItems }}
      />
    </Col>
  );
};

//👇 Each story then reuses that template
export const FilterButton = Template.bind({});
