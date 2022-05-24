import * as React from "react";
import { Meta } from "@storybook/react";
import ChipUI from "./Chip";
import { iChipProps } from "./types";
import { ExampleSection } from "../../../story-components";

export default {
  title: "Components/Core",
  component: ChipUI,
  args: {
    label: "Chip",
    clickable: true,
    active: false,
  },
  argTypes: {
    onClick: { action: "onClick" },
    onDelete: { action: "onDelete" },
  },
} as Meta<iChipProps>;

export const Chip: React.FC<iChipProps> = (props) => {
  return (
    <ExampleSection title="Chip Playground">
      <ChipUI {...props} />
    </ExampleSection>
  );
};
