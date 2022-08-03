import { MenuItemProps, MenuProps } from "@mui/material";
import React from "react";

export interface iMenuItemProps {
  startIcon?: React.ReactElement;
  endContent?: React.ReactElement;
  label: string;
  onClick: MenuItemProps["onClick"];
  menuItemProps?: MenuItemProps;
}

export interface iMenuProps extends MenuProps {
  menuItems?: iMenuItemProps[];
  handleClose: VoidFunction;
}
