import { Meta } from "@storybook/react";
import * as React from "react";
import RowUI from "./Row";
import { Text } from "../../core";

export default {
  title: "Components/Layout",
  component: RowUI,
} as Meta;

export const Row: React.VFC = () => {
  return (
    <RowUI spacing={16} vCenter>
      <Text variant="heading1">Heading 1</Text>
      <Text variant="heading2">Heading 2</Text>
      <Text variant="heading3">Heading 3</Text>
    </RowUI>
  );
};
