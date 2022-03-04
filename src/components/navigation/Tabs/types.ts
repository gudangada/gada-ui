import { TabProps, TabsProps } from "@mui/material";

export interface iTabProps extends Omit<TabProps, "label"> {
  label: string;
}

export interface iTabsProps extends TabsProps {}
