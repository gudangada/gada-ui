import styled from "@emotion/styled";
import { Divider } from "@mui/material";
import { pxToRem } from "../../../styles";
import { iDividerProps } from "./types";

export const StyledDivider = styled(Divider)<iDividerProps>(
  ({ size, color }) => ({
    height: size === "large" ? pxToRem(8) : pxToRem(1),
    backgroundColor: color,
  })
);
