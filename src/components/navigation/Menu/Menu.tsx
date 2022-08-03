import * as React from "react";
import { Menu as MuiMenu } from "@mui/material";
import { iMenuProps } from "./types";
import MenuItem from "./MenuItem";

const Menu: React.FC<iMenuProps> = ({
  menuItems,
  children,
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
      BackdropProps={{ style: { opacity: 0.01 } }}
      PaperProps={{ elevation: 1 }}
      {...menuProps}
      onClose={handleClose}
    >
      {menuItems
        ? menuItems.map((menuItem) => {
            return <MenuItem key={menuItem.label} {...menuItem} />;
          })
        : children}
    </MuiMenu>
  );
};

export default Menu;
