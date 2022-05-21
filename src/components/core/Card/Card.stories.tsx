import * as React from "react";
import CardUI from "./Card";
import { Meta } from "@storybook/react";
import { iCardProps } from "./types";
import { Text } from "../Text";
import { Col } from "../Col";

export default {
  title: "Components/Core",
  component: CardUI,
} as Meta<iCardProps>;

export const Card: React.FC<iCardProps> = () => {
  return (
    <Col spacing={16}>
      <Text variant="heading4SemiBold">
        Cards contain content and actions about a single subject.
      </Text>
      <Col spacing={8}>
        <Text variant="bodyRegular">
          Cards are surfaces that display content and actions on a single topic.
        </Text>
        <Text variant="bodyRegular">
          They should be easy to scan for relevant and actionable information.
          Elements, like text and images, should be placed on them in a way that
          clearly indicates hierarchy.
        </Text>
      </Col>
      <CardUI elevation={5}>
        <Text variant="bodyRegular">Card Content</Text>
      </CardUI>
    </Col>
  );
};
