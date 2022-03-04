import { Link as MuiLink, ListItemIcon, ListItemText } from "@mui/material";
import clsx from "clsx";
import * as React from "react";
import { ExpandIcon, iIconProps } from "../../../assets";
import { Button } from "../Button";
import { Text } from "../Text";
import {
  StyledListItemButton,
  StyledActiveIndicatorContainer,
  StyledActiveIndicator,
} from "./styles";
import { iNavItemProps } from "./types";

const NavItem: React.VFC<iNavItemProps> = ({
  icon,
  text,
  url,
  isActive,
  isExpanded = false,
  isSubNavItem,
  LinkComponent,
  onClick,
  onToggleExpand,
}) => {
  const useLinkComponent = typeof onClick !== "function";
  const Link = LinkComponent || MuiLink;

  const navIcon = React.useMemo(() => {
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon as React.ReactElement<iIconProps>, {
        color: isActive ? "secondary" : "primary",
        width: 24,
        height: 24,
      });
    }
    return undefined;
  }, [isActive]);

  const navItem = React.useMemo(() => {
    return (
      <StyledListItemButton
        isSubNavItem={isSubNavItem}
        isActive={isActive}
        className={clsx("py-4 px-6")}
        onClick={!useLinkComponent ? onClick : undefined}
        selected={!isSubNavItem && isActive}
      >
        <StyledActiveIndicatorContainer isSubNavItem={isSubNavItem}>
          {isActive && <StyledActiveIndicator />}
        </StyledActiveIndicatorContainer>
        {!isSubNavItem && navIcon && <ListItemIcon>{navIcon}</ListItemIcon>}
        <ListItemText>
          <Text variant="bodySemiBold" color="white">
            {text}
          </Text>
        </ListItemText>
        {typeof onToggleExpand === "function" && (
          <Button
            variant="icon-small"
            color="primary"
            size="small"
            onClick={onToggleExpand}
          >
            <ExpandIcon isExpanded={isExpanded} color="secondary" />
          </Button>
        )}
      </StyledListItemButton>
    );
  }, [
    useLinkComponent,
    onClick,
    onToggleExpand,
    isActive,
    isSubNavItem,
    isExpanded,
    icon,
    text,
    navIcon,
  ]);

  return useLinkComponent ? <Link href={url}>{navItem}</Link> : navItem;
};

export default NavItem;
