import clsx from "clsx";
import * as React from "react";
import { Row, iNavListItem } from "../../core";
import { iDashboardProps } from "./types";
import { SideNav } from "../../navigation";

const DashboardLayout: React.FC<iDashboardProps> = ({
  Logo,
  navItems,
  LinkComponent,
  activePathname,
  dashboardBaseUrl,
  stickyBottomFooter,
  header,
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
        header={header}
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
