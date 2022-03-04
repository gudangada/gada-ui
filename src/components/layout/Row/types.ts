import * as React from "react";
import { BoxProps } from "@mui/material";

export interface iRowProps extends BoxProps {
  flex?: number | string;
  vCenter?: boolean;
  hCenter?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  className?: string;
  spacing?: number;
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
}
