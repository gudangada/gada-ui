import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import { pxToRem } from "../../../../styles";
import { iCircularProgressProps } from "./types";

export const SpinnerContainer = styled.div<Partial<iCircularProgressProps>>(
  ({ size }) => ({
    display: "flex",
    flexDirection: size === "default" ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",

    "&>*:not(:last-child)": {
      ...(size === "default"
        ? {
            marginBottom: pxToRem(16),
          }
        : {
            marginRight: pxToRem(16),
          }),
    },
  })
);

export const StyledSpinner = styled(CircularProgress)<iCircularProgressProps>(
  ({ theme: { palette }, size }) => ({
    width: size === "default" ? 48 : 24,
    height: size === "default" ? 48 : 24,
    color: palette.interface.teal[500],
  })
);
