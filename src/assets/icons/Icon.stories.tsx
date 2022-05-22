import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Button, Row } from "../../components";
import { EditIcon, GadaIcon, iIconProps, PlusIcon, SortIcon } from ".";
import { ExpandIcon } from "./ExpandIcon";
import HomeOutlinedIcon from "./HomeOutlinedIcon";
import CampaignIcon from "./CampaignIcon";
import RedemptionIcon from "./RedemptionIcon";
import SettingsIcon from "./SettingsIcon";
import LogoutIcon from "./LogoutIcon";
import ArrowDownIcon from "./ArrowDownIcon";
import ArrowUpIcon from "./ArrowUpIcon";
import CheckMarkCircleIcon from "./CheckMarkCircleIcon";
import CheckMarkIcon from "./CheckMarkIcon";
import CalendarIcon from "./CalendarIcon";
import CrossCircleIcon from "./CrossCircleIcon";
import CrossOutlinedIcon from "./CrossOutlinedIcon";
import HomeIcon from "./HomeIcon";

export default {
  title: "Global/Assets",
  component: EditIcon,
} as Meta;

const Template: Story<iIconProps> = (props) => {
  const [isExpanded, setExpanded] = React.useState(false);

  return (
    <Row spacing={16} flexWrap="wrap">
      <GadaIcon {...props} />
      <HomeOutlinedIcon {...props} />
      <HomeIcon {...props} />
      <LogoutIcon {...props} />
      <CampaignIcon {...props} />
      <RedemptionIcon {...props} />
      <SettingsIcon {...props} />
      <EditIcon {...props} />
      <PlusIcon {...props} />
      <CheckMarkCircleIcon {...props} />
      <CheckMarkIcon {...props} />
      <CalendarIcon {...props} />
      <CrossCircleIcon {...props} />
      <CrossOutlinedIcon {...props} />

      <SortIcon {...props} />
      <SortIcon sort="desc" {...props} />
      <SortIcon sort="asc" {...props} />

      <ArrowDownIcon {...props} />
      <ArrowUpIcon {...props} />
      <Button
        variant="icon-small"
        color="primary"
        onClick={() => setExpanded((cur) => !cur)}
      >
        <ExpandIcon isExpanded={isExpanded} {...props} />
      </Button>
    </Row>
  );
};

export const Icons = Template.bind({});
Icons.parameters = { controls: { include: ["color"] } };
Icons.argTypes = {
  color: {
    defaultValue: "default",
    control: {
      type: "select",
      options: ["default", "primary", "secondary", "white", "destructive"],
    },
  },
};
Icons.args = {
  color: "default",
};
