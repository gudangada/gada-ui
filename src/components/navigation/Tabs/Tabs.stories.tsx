import * as React from "react";
import { Meta } from "@storybook/react";
import TabsUI from "./Tabs";
import { iTabsProps } from "./types";
import Tab from "./Tab";
import { Col, Text } from "../../core";

export default {
  title: "Components/Navigation",
  component: TabsUI,
} as Meta<iTabsProps>;

const TabsNavigation = [
  { label: "Rangkuman" },
  { label: "Redemptions" },
  { label: "Promotion Items" },
];

const TabContent: React.FC<{ index: number; activeTab: number }> = ({
  index,
  activeTab,
}) => {
  return index !== activeTab ? null : (
    <Col className="p-2">
      <Text variant="bodyRegular">{TabsNavigation[index].label}</Text>
    </Col>
  );
};

export const Tabs: React.VFC<iTabsProps> = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = React.useCallback(
    (_: React.SyntheticEvent, newValue: number) => {
      setActiveTab(newValue);
    },
    []
  );

  return (
    <Col>
      <TabsUI
        value={activeTab}
        onChange={handleChange}
        aria-label="Tabs-Example"
      >
        {TabsNavigation.map((tab) => (
          <Tab
            id={`tab-${tab.label}`}
            key={tab.label}
            label={tab.label}
            wrapped
          />
        ))}
      </TabsUI>
      {TabsNavigation.map((_, index) => (
        <TabContent activeTab={activeTab} index={index} />
      ))}
    </Col>
  );
};
