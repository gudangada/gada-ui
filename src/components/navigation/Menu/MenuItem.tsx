import * as React from "react";
import { ListItemIcon, ListItemText } from "@mui/material";
import { iMenuItemProps } from "./types";
import { Text } from "../../core";
import { StyledMenuItem } from "./styles";

const MenuItem: React.FC<iMenuItemProps> = ({
  onClick,
  label,
  startIcon,
  endContent,
}) => {
  return (
    <StyledMenuItem onClick={onClick}>
      {startIcon && <ListItemIcon>{startIcon}</ListItemIcon>}
      <ListItemText>
        <Text variant="bodyRegular">{label}</Text>
      </ListItemText>
      {endContent}
    </StyledMenuItem>
  );
};

export default MenuItem;
