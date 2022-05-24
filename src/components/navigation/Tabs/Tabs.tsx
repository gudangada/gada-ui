import * as React from "react";
import { Tabs as MuiTabs } from "@mui/material";
import { iTabsProps } from "./types";

import TabScrollButton from "./TabScrollButton";

const Tabs: React.FC<iTabsProps> = (props) => {
  return (
    <MuiTabs scrollButtons {...props} ScrollButtonComponent={TabScrollButton} />
  );
};

export default Tabs;
