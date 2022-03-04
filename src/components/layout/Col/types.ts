import * as React from "react";
import { BoxProps } from "@mui/material";

export interface iColProps extends BoxProps {
  id?: string;
  flex?: number;
  vCenter?: boolean;
  hCenter?: boolean;
  fullHeight?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  spacing?: number;
  showBottomSpacing?: boolean;
  stretchContent?: boolean;
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
}
