import React from "react";
import { iNavListItem } from "../../core";

export interface iDashboardNavItems extends Omit<iNavListItem, "isActive"> {}

export interface iDashboardProps {
  navItems: iDashboardNavItems[];
  LinkComponent: React.ElementType;
  activePathname: string;
  dashboardBaseUrl: string;
  stickyBottomFooter?: React.ReactNode;
  children: React.ReactNode;
  contentContainerClassName?: string;
}
