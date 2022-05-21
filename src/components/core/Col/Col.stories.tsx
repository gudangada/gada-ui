import * as React from "react";
import { Meta } from "@storybook/react";
import ColUI from "./Col";
import { Text } from "..";

export default {
  title: "Components/Core",
  component: ColUI,
} as Meta;

export const Col: React.VFC = () => {
  return (
    <ColUI spacing={16}>
      <Text variant="heading1">Heading 1</Text>
      <Text variant="heading2">Heading 2</Text>
      <Text variant="heading3">Heading 3</Text>
    </ColUI>
  );
};
