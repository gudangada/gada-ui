import clsx from "clsx";
import * as React from "react";
import { iNavListItem, SideNav } from "../../core";
import { Row } from "../Row";
import { iDashboardProps } from "./types";

const DashboardLayout: React.FC<iDashboardProps> = ({
  Logo,
  navItems,
  LinkComponent,
  activePathname,
  dashboardBaseUrl,
  stickyBottomFooter,
  children,
  contentContainerClassName,
}) => {
  const sideNavItems: iNavListItem[] = React.useMemo(() => {
    return navItems.map(({ subNav, ...navItem }) => {
      const isParentActive =
        navItem.url === activePathname ||
        (navItem.url !== dashboardBaseUrl &&
          activePathname.includes(navItem.baseUrl));
      let isSubNavActive = false;
      const parsedItems = subNav
        ? subNav.map((item) => {
            isSubNavActive = item.url === activePathname;
            return {
              ...item,
              isActive: isSubNavActive,
            };
          })
        : [];
      return {
        ...navItem,
        isExpanded: isSubNavActive,
        isActive: isParentActive,
        subNav: parsedItems,
      } as iNavListItem;
    });
  }, [activePathname, navItems, dashboardBaseUrl]);

  return (
    <Row>
      <SideNav
        Logo={Logo}
        navItemsProps={{ navItems: sideNavItems, LinkComponent }}
        stickyBottomFooter={stickyBottomFooter}
      />
      <main
        className={clsx(
          "flex flex-col w-full h-screen overflow-auto",
          contentContainerClassName
        )}
      >
        {children}
      </main>
    </Row>
  );
};

export default React.memo(DashboardLayout);
