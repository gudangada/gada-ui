import * as React from "react";
import LabelUI from "./Label";
import { Meta } from "@storybook/react";
import { Col } from "../../core";
import { TextField } from "../TextField";

export default {
  title: "Components/Input",
  component: LabelUI,
  args: {
    children: "Form Label",
  },
} as Meta;

export const Label: React.FC = (props) => {
  return (
    <Col spacing={8} alignItems="flex-start">
      <LabelUI {...props} />
      <TextField />
    </Col>
  );
};
