import * as React from "react";
import { Meta } from "@storybook/react";
import AlertUI from "./Alert";
import { iAlertProps } from "./types";
import { Col } from "../../core";
import { ExampleSection } from "../../../story-components";

export default {
  title: "Components/Feedback",
  component: AlertUI,
  args: {
    children:
      "This is a success alert — play with the prop values to see the changes!",
    severity: "error",
    variant: "filled",
  },
  argTypes: {
    severity: {
      control: {
        type: "select",
        options: ["error", "info", "success", "warning"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["standard", "filled", "outlined"],
      },
    },
  },
} as Meta<iAlertProps>;

export const Alert: React.FC<iAlertProps> = (props) => {
  return (
    <Col spacing={32}>
      <ExampleSection title="Error Alerts">
        <Col spacing={8}>
          <AlertUI severity="error" variant="standard">
            Standard error
          </AlertUI>
          <AlertUI severity="error" variant="outlined">
            Outlined error
          </AlertUI>
          <AlertUI severity="error" variant="filled">
            Filled error
          </AlertUI>
        </Col>
      </ExampleSection>
      <ExampleSection title="Info Alerts">
        <Col spacing={8}>
          <AlertUI severity="info" variant="standard">
            Standard info
          </AlertUI>
          <AlertUI severity="info" variant="outlined">
            Outlined info
          </AlertUI>
          <AlertUI severity="info" variant="filled">
            Filled info
          </AlertUI>
        </Col>
      </ExampleSection>
      <ExampleSection title="Success Alerts">
        <Col spacing={8}>
          <AlertUI severity="success" variant="standard">
            Standard success
          </AlertUI>
          <AlertUI severity="success" variant="outlined">
            Outlined success
          </AlertUI>
          <AlertUI severity="success" variant="filled">
            Filled success
          </AlertUI>
        </Col>
      </ExampleSection>
      <ExampleSection title="Warning Alerts">
        <Col spacing={8}>
          <AlertUI severity="warning" variant="standard">
            Standard warning
          </AlertUI>
          <AlertUI severity="warning" variant="outlined">
            Outlined warning
          </AlertUI>
          <AlertUI severity="warning" variant="filled">
            Filled warning
          </AlertUI>
        </Col>
      </ExampleSection>
      <ExampleSection
        title="Alert Playground"
        description={{ text: "Change the props below to change the alert." }}
      >
        <AlertUI {...props} />
      </ExampleSection>
    </Col>
  );
};
