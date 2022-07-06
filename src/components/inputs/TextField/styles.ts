import styled from "@emotion/styled";
import {
  OutlinedInput,
  outlinedInputClasses,
  OutlinedInputProps,
} from "@mui/material";

export const StyledOutlinedInput = styled(OutlinedInput)<{
  fieldType: OutlinedInputProps["type"];
}>(({ fieldType }) => ({
  [`&.${outlinedInputClasses.root}`]: {
    ...(fieldType === "textarea"
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
