import styled from "@emotion/styled";
import { OutlinedInput, outlinedInputClasses } from "@mui/material";

export const StyledOutlinedInput = styled(OutlinedInput)(({ type }) => ({
  [`&.${outlinedInputClasses.root}`]: {
    ...(type === "textarea"
      ? {
          overflow: "hidden",

          "& textarea": {
            overflow: "auto !important",
            minHeight: "calc(48px * 2) !important",
            maxHeight: "calc(48px * 3) !important",
          },
        }
      : {}),
  },
}));
