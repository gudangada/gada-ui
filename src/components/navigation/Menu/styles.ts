import styled from "@emotion/styled";
import { listItemIconClasses, MenuItem, menuItemClasses } from "@mui/material";

export const StyledMenuItem = styled(MenuItem)({
  [`&.${menuItemClasses.root} .${listItemIconClasses.root}`]: {
    alignItems: "center",
    minWidth: 24,
    width: 24,
    height: 24,
  },
});
