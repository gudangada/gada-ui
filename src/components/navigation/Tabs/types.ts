import { TabProps, TabsProps } from "@mui/material";

export interface iTabProps extends Omit<TabProps, "label"> {
  label: string;
  maxWidth?: number;
}

export interface iTabsProps extends TabsProps {}
