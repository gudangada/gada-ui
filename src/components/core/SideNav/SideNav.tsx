import * as React from "react";
import { iSideNavProps, iTopBottomNavItems } from "./types";
import { NavListItems } from "../NavListItem";
import { Col, Drawer, Divider } from "../../layout";
import { GadaLogo } from "../../../assets";

const SideNav: React.VFC<iSideNavProps> = ({
  drawerProps,
  navItemsProps: { navItems, ...restNavProps },
  stickyBottomFooter,
}) => {
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
        <Col vCenter className="p-4">
          <GadaLogo />
        </Col>
        <Divider />
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
