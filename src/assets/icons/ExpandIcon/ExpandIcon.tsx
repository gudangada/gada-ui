import * as React from "react";
import ArrowUpIcon from "../ArrowUpIcon";
import { ExpandIconContainer } from "./styles";
import { iExpandIconProps } from "./types";

const ExpandIcon: React.VFC<iExpandIconProps> = ({
  isExpanded,
  ...iconProps
}) => {
  return (
    <ExpandIconContainer isExpanded={isExpanded}>
      <ArrowUpIcon {...iconProps} />
    </ExpandIconContainer>
  );
};

export default ExpandIcon;
