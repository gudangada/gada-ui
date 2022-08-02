import styled from "@emotion/styled";
import { buttonClasses } from "@mui/material";
import { Button } from "../Button";

export const StyledFilterButton = styled(Button)<{ isActive: boolean }>(
  ({ isActive, theme: { palette } }) => ({
    [`&.${buttonClasses.root}>*`]: {
      color: `${palette.interface.teal[700]} !important`,
    },
    [`&.${buttonClasses.root}`]: {
      backgroundColor: isActive
        ? palette.interface.teal[100]
        : palette.interface.white,
      border: `1px solid ${palette.interface.teal[700]}`,
    },
  })
);
