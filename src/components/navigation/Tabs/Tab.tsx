import * as React from "react";
import { iTabProps } from "./types";
import { StyledTab, TabLabel } from "./styles";

const Tab: React.FC<iTabProps> = ({ label, maxWidth = 120, ...props }) => {
  return (
    <StyledTab
      maxWidth={maxWidth}
      {...props}
      label={<TabLabel variant="bodySemiBold">{label}</TabLabel>}
    />
  );
};

export default Tab;
