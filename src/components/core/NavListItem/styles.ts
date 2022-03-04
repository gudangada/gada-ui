import styled from "@emotion/styled";
import { List, ListItemButton } from "@mui/material";
import { pxToRem } from "../../../styles";
import { iNavItemProps } from "./types";

export const StyledListItemButton = styled(ListItemButton)<
  Partial<iNavItemProps>
>(({ theme: { palette }, isActive, isSubNavItem }) => ({
  position: "relative",
  cursor: "pointer",
  backgroundColor:
    isActive && !isSubNavItem ? palette.overlay.teal : "transparent",

  "&:hover": {
    backgroundColor: palette.overlay.teal,
  },
}));

export const StyledActiveIndicatorContainer = styled.div<
  Partial<iNavItemProps>
>(({ theme: { palette }, isSubNavItem }) => ({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  left: 0,
  top: "50%",
  transform: "translateY(-50%)",
  height: "100%",
  borderLeft: isSubNavItem ? `1px solid ${palette.interface.black[400]}` : 0,
}));

export const StyledActiveIndicator = styled.div<Partial<iNavItemProps>>(
  ({ theme: { palette } }) => ({
    height: "85%",
    width: 4,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: palette.interface.teal["100"],
  })
);

export const StyledList = styled(List)(({ theme: { palette } }) => ({
  paddingLeft: pxToRem(36),
  borderLeft: 1,
  paddingTop: 0,
  paddingBottom: 0,
  borderLeftColor: palette.interface.teal["50"],
}));
