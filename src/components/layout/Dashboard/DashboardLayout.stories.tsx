import * as React from "react";
import { Meta } from "@storybook/react";
import DashboardLayoutUI from "./DashboardLayout";
import { Col } from "../../core/Col";
import { HomeIcon, CampaignIcon, GadaIcon } from "../../../assets";
import { iDashboardNavItems } from "./types";
import { Link } from "@mui/material";
import { Text } from "../../core";

export default {
  title: "Components/Layout",
  component: DashboardLayoutUI,
} as Meta;

const DashboardNavigation: iDashboardNavItems[] = [
  {
    icon: <HomeIcon />,
    url: "javascript:void(0);",
    baseUrl: "javascript:void(0);",
    text: "Beranda",
  },
  {
    icon: <CampaignIcon />,
    url: "javascript:void(0);",
    baseUrl: "javascript:void(0);",
    text: "Campaign",
  },
];

export const DashboardLayout: React.VFC = () => {
  return (
    <DashboardLayoutUI
      Logo={<GadaIcon />}
      navItems={DashboardNavigation}
      activePathname="/"
      dashboardBaseUrl="/"
      LinkComponent={Link}
      header={<Text>Some Header</Text>}
    >
      <Col>Page Component</Col>
    </DashboardLayoutUI>
  );
};
