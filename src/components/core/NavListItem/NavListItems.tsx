import { List } from "@mui/material";
import * as React from "react";
import { NavListItem } from ".";
import { iNavListItemsProps } from "./types";

const NavListItems: React.VFC<iNavListItemsProps> = ({
  navItems,
  LinkComponent,
}) => {
  return (
    <List>
      {navItems.map((navItem) => (
        <NavListItem
          key={navItem.url}
          navItem={navItem}
          LinkComponent={LinkComponent}
        />
      ))}
    </List>
  );
};

export default NavListItems;
