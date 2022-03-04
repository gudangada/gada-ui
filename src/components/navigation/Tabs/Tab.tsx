import * as React from "react";
import { Tab as MuiTab } from "@mui/material";
import { iTabProps } from "./types";
import { Text } from "../../core";

const Tab: React.FC<iTabProps> = ({ label, ...props }) => {
  return (
    <MuiTab {...props} label={<Text variant="bodySemiBold">{label}</Text>} />
  );
};

export default Tab;
