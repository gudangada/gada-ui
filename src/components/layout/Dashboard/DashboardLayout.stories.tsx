import * as React from "react";
import { Meta } from "@storybook/react";
import DashboardLayoutUI from "./DashboardLayout";
import { Col } from "../Col";
import { HomeIcon, CampaignIcon } from "../../../assets";
import { iDashboardNavItems } from "./types";
import { Link } from "@mui/material";

export default {
  title: "Components/Layout",
  component: DashboardLayoutUI,
} as Meta;

const DashboardNavigation: iDashboardNavItems[] = [
  {
    icon: <HomeIcon />,
    url: "#",
    baseUrl: "#",
    text: "Beranda",
  },
  {
    icon: <CampaignIcon />,
    url: "#",
    baseUrl: "#",
    text: "Campaign",
  },
];

export const Dashboard: React.VFC = () => {
  return (
    <DashboardLayoutUI
      navItems={DashboardNavigation}
      activePathname="/"
      dashboardBaseUrl="/"
      LinkComponent={Link}
    >
      <Col>Page Component</Col>
    </DashboardLayoutUI>
  );
};
