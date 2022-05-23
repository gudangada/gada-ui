import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { pxToRem } from "../../../styles";
import { iColProps } from "./types";

export const StyledCol: React.FC<iColProps> = styled(Box)<iColProps>(
  (props) => ({
    display: "flex",
    height: props.fullHeight ? "100%" : "auto",
    flex: props.flex,
    flexDirection: "column",
    justifyContent: props.justifyContent
      ? props.justifyContent
      : props.vCenter
      ? "center"
      : "initial",
    alignItems: props.alignItems
      ? props.alignItems
      : props.hCenter
      ? "center"
      : props.stretchContent
      ? "stretch"
      : "initial",

    "&>*:not(:last-child)": {
      marginBottom: props.spacing && pxToRem(props.spacing),
    },

    "&>*:last-child": {
      marginBottom: props.showBottomSpacing ? pxToRem(props.spacing) : 0,
    },
  })
);
