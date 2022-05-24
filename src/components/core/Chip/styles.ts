import styled from "@emotion/styled";
import { Chip, chipClasses } from "@mui/material";
import { iChipProps } from "./types";

export const StyledChip = styled(Chip)<iChipProps>(
  ({ theme: { palette }, active }) => ({
    borderColor: palette.interface.teal[500],
    opacity: 1,

    [`&.${chipClasses.clickable}:hover`]: {
      backgroundColor: palette.interface.teal[50],
      opacity: 0.85,
    },

    ...(active
      ? {
          backgroundColor: palette.interface.teal[50],
          [`& .${chipClasses.label}`]: {
            color: palette.interface.teal[500],
            fontWeight: 600,
          },
        }
      : {}),
  })
);
