import * as React from "react";
import { iSideNavProps, iTopBottomNavItems } from "./types";
import { NavListItems, Col, Divider } from "../../core";
import { Drawer } from "../../layout";
import { useAppTheme } from "../../../hooks";

const SideNav: React.VFC<iSideNavProps> = ({
  Logo,
  drawerProps,
  navItemsProps: { navItems, ...restNavProps },
  stickyBottomFooter,
  header,
}) => {
  const { palette } = useAppTheme();

  const paperRef = React.useRef<HTMLDivElement>(null);
  const [_, setShowShadow] = React.useState(false);

  const handleScrollPaper = React.useCallback(() => {
    if (paperRef.current) {
      const diff =
        paperRef.current.scrollHeight - paperRef.current.offsetHeight;
      if (paperRef.current.scrollTop >= diff) {
        setShowShadow(false);
      } else {
        setShowShadow(true);
      }
    }
  }, []);

  const { topNavItems, bottomNavItems }: iTopBottomNavItems =
    React.useMemo(() => {
      const initialItems: iTopBottomNavItems = {
        topNavItems: [],
        bottomNavItems: [],
      };
      return navItems.reduce((allNavs, curNav) => {
        if (curNav.placeAtBottom) {
          allNavs.bottomNavItems.push(curNav);
        } else {
          allNavs.topNavItems.push(curNav);
        }
        return allNavs;
      }, initialItems);
    }, [navItems]);

  return (
    <Drawer
      anchor="left"
      variant="permanent"
      PaperProps={{
        ref: paperRef,
        onScroll: handleScrollPaper,
      }}
      {...drawerProps}
    >
      <Col flex={1}>
        {Logo && (
          <>
            <Col vCenter className="p-4">
              {Logo}
            </Col>
            <Divider
              color={palette.interface.black[400]}
              className="opacity-30"
            />
            <Divider
              color={palette.interface.black[400]}
              className="opacity-30"
            />
            <Divider
              color={palette.interface.black[400]}
              className="opacity-30"
            />
          </>
        )}
        {header}
        <Col flex={1} justifyContent="space-between">
          <NavListItems {...restNavProps} navItems={topNavItems} />
          <Col>
            <NavListItems {...restNavProps} navItems={bottomNavItems} />
            {stickyBottomFooter}
          </Col>
        </Col>
      </Col>
    </Drawer>
  );
};

export default SideNav;
