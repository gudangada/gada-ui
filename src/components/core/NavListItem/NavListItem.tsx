import { Collapse } from "@mui/material";
import * as React from "react";
import NavItem from "./NavItem";
import { StyledList } from "./styles";
import { iNavItemProps, iNavListItemProps } from "./types";

const NavListItem: React.VFC<iNavListItemProps> = ({
  navItem,
  LinkComponent,
}) => {
  const [isExpanded, setExpanded] = React.useState(navItem.isExpanded || false);
  const isExpandedRef = React.useRef(isExpanded);

  const { subNav, ...parentItem } = navItem;
  const subNavItemActive = React.useMemo(
    () => (subNav ? subNav.findIndex((child) => child.isActive) > -1 : false),
    [subNav]
  );

  const isActive = React.useMemo(() => {
    return parentItem.isActive || subNavItemActive;
  }, [parentItem, subNavItemActive]);

  const onToggleExpand: iNavItemProps["onToggleExpand"] = React.useCallback(
    (event) => {
      event.stopPropagation();
      setExpanded((curExpanded) => {
        const expand = !curExpanded;
        isExpandedRef.current = expand;
        return expand;
      });
    },
    []
  );

  React.useEffect(() => {
    if (isActive === isExpandedRef.current) return;
    setExpanded(isActive);
  }, [isActive]);

  const collapsedNavItems = React.useMemo(() => {
    return subNav ? (
      <Collapse in={isExpanded}>
        <StyledList>
          {subNav.map((item) => (
            <NavItem
              key={item.text}
              {...item}
              LinkComponent={LinkComponent}
              isSubNavItem
            />
          ))}
        </StyledList>
      </Collapse>
    ) : null;
  }, [subNav, LinkComponent, isExpanded]);

  return (
    <>
      <NavItem
        {...navItem}
        LinkComponent={LinkComponent}
        isActive={isActive}
        isExpanded={isExpanded}
        onToggleExpand={
          subNav && subNav.length > 0 ? onToggleExpand : undefined
        }
      />
      {collapsedNavItems}
    </>
  );
};

export default NavListItem;
