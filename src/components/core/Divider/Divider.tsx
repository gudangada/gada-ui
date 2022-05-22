import * as React from "react";
import { iDividerProps } from "./types";
import { StyledDivider } from "./styles";

const Divider: React.VFC<iDividerProps> = ({ size, ...dividerProps }) => {
  return <StyledDivider size={size} {...dividerProps} />;
};

export default Divider;
