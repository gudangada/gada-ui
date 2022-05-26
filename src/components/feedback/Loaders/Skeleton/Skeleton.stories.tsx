import * as React from "react";
import { Meta } from "@storybook/react";
import SkeletonUI from "./Skeleton";
import { iSkeletonProps } from "./types";
import { Card, CardContent, Col, Text } from "../../../core";
import { ExampleSection } from "../../../../story-components";

export default {
  title: "Components/Feedback/Loaders",
  component: SkeletonUI,
  args: {
    variant: "text",
    animation: "wave",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["text", "circular", "rectangular"],
      },
    },
    animation: {
      control: {
        type: "select",
        options: ["pulse", "wave", false],
      },
    },
  },
} as Meta<iSkeletonProps>;

export const Skeleton: React.FC<iSkeletonProps> = (props) => {
  return (
    <Col spacing={32}>
      <Text variant="bodySemiBold">
        Display a placeholder preview of your content before the data gets
        loaded to reduce load-time frustration.
      </Text>

      <ExampleSection title="Supported Variants">
        <Col hCenter>
          <Card sx={{ width: 320 }}>
            <CardContent className="p-4">
              <Col spacing={6}>
                <SkeletonUI variant="text" />
                <SkeletonUI variant="circular" width={40} height={40} />
                <SkeletonUI variant="rectangular" height={118} />
              </Col>
            </CardContent>
          </Card>
        </Col>
      </ExampleSection>

      <ExampleSection
        title="Skeleton Playground"
        description={{ text: "Change the props below to change the Skeleton." }}
      >
        <SkeletonUI
          {...props}
          sx={{
            width: props.variant === "circular" ? 40 : 210,
            height:
              props.variant === "circular"
                ? 40
                : props.variant === "rectangular"
                ? 210
                : "auto",
          }}
        />
      </ExampleSection>
    </Col>
  );
};
