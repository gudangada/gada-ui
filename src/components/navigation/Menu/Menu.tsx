import * as React from "react";
import { Menu as MuiMenu } from "@mui/material";
import { iMenuProps } from "./types";
import MenuItem from "./MenuItem";

const Menu: React.VFC<iMenuProps> = ({
  menuItems,
  handleClose,
  ...menuProps
}) => {
  return (
    <MuiMenu
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...menuProps}
      onClose={handleClose}
    >
      {menuItems.map((menuItem) => {
        return <MenuItem key={menuItem.label} {...menuItem} />;
      })}
    </MuiMenu>
  );
};

export default Menu;
