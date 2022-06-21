import * as React from "react";
import { Meta } from "@storybook/react";
import MenuUI from "./Menu";
import { iMenuItemProps, iMenuProps } from "./types";
import { Button, Col } from "../../core";
import { CalendarIcon } from "../../../assets";

const menuItemsList: iMenuItemProps[] = [
  { startIcon: <CalendarIcon />, label: "Cut", onClick: () => alert("Cut") },
  { label: "Copy", onClick: () => alert("Copy") },
  { label: "Paste", onClick: () => alert("Paste") },
];

export default {
  title: "Components/Navigation",
  component: MenuUI,
  args: {
    menuItems: menuItemsList,
  },
} as Meta<iMenuProps>;

export const Menu: React.VFC<iMenuProps> = ({ menuItems }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Col>
      <Button variant="primary" color="primary" onClick={handleClick}>
        Open Menu
      </Button>

      <MenuUI
        anchorEl={anchorEl}
        open={open}
        menuItems={menuItems}
        handleClose={handleClose}
      />
    </Col>
  );
};
