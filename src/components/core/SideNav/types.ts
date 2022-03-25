import * as React from "react";
import { iDrawerProps } from "../../layout";
import { iNavListItemsProps } from "../NavListItem";

export interface iSideNavProps {
  Logo?: React.ReactNode;
  drawerProps?: iDrawerProps;
  navItemsProps: iNavListItemsProps;
  stickyBottomFooter?: React.ReactNode;
}

export interface iTopBottomNavItems {
  topNavItems: iNavListItemsProps["navItems"];
  bottomNavItems: iNavListItemsProps["navItems"];
}
