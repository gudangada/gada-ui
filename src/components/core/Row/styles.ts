import { iRowProps } from "./types";
import { pxToRem } from "../../../styles";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledRow = styled(Box)<iRowProps>((props) => ({
  display: "flex",
  flexDirection: "row",
  flex: props.flex,
  alignItems: props.alignItems
    ? props.alignItems
    : props.vCenter
    ? "center"
    : "initial",
  justifyContent: props.justifyContent
    ? props.justifyContent
    : props.hCenter
    ? "center"
    : "initial",
  width: props.fullWidth ? "100%" : "auto",

  "&>*:not(:last-child)": {
    marginRight: props.spacing && pxToRem(props.spacing),
  },
}));
