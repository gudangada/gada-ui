import { ListItemButtonProps } from "@mui/material";
import { iButtonProps } from "../Button";

export interface iNavListItemsProps
  extends Pick<ListItemButtonProps, "LinkComponent"> {
  navItems: iNavListItem[];
}

export interface iNavListItemProps
  extends Pick<iNavListItemsProps, "LinkComponent"> {
  navItem: iNavListItem;
}

export interface iNavItem {
  icon: React.ReactElement;
  url: string;
  text: string;
  placeAtBottom?: boolean;
  isActive?: boolean;
  isExpanded?: boolean;
}

export interface iNavListItem extends iNavItem {
  baseUrl: string;
  subNav?: Omit<iNavItemProps, "isSubNavItem">[];
}

export interface iNavItemProps
  extends Partial<iNavItem>,
    Pick<iNavListItemsProps, "LinkComponent"> {
  text: string;
  isSubNavItem?: boolean;
  onClick?: VoidFunction;
  onToggleExpand?: iButtonProps["onClick"];
}
