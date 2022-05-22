import * as React from "react";
import CheckboxUI from "./Checkbox";
import { Meta } from "@storybook/react";
import { iCheckboxProps } from "./types";
import { Col, Row, Text } from "../../core";
import { ExampleSection } from "../../../story-components";
import { linkTo } from "@storybook/addon-links";

export default {
  id: "checkbox",
  title: "Components/Input",
} as Meta<iCheckboxProps>;

export const Checkbox: React.VFC<iCheckboxProps> = () => {
  return (
    <Col spacing={16}>
      <Text variant="heading4SemiBold">
        Checkboxes allow the user to select one or more items from a set.
      </Text>
      <Col spacing={8}>
        <Text variant="bodyRegular">
          Checkboxes can be used to turn an option on or off.
        </Text>
        <Text variant="bodyRegular">
          If you have multiple options appearing in a list, you can preserve
          space by using checkboxes instead of on/off switches. If you have a
          single option, avoid using a checkbox and use an on/off switch
          instead.
        </Text>
      </Col>
      <ExampleSection title="Basic Checkboxes">
        <Row spacing={16} justifyContent="center">
          <CheckboxUI checked />
          <CheckboxUI checked={false} />
          <CheckboxUI disabled />
          <CheckboxUI checked disabled />
        </Row>
      </ExampleSection>
      <ExampleSection
        title="Label"
        description={{
          text: "You can provide a label to the Checkbox thanks to the FormControlLabel component.",
          highlight: ["Checkbox", "FormControlLabel"],
          links: [
            linkTo("checkbox--checkbox"),
            linkTo("formcontrollabel--form-control-label"),
          ],
        }}
      >
        <Col spacing={8} alignItems="flex-start">
          <CheckboxUI label="Checked" checked />
          <CheckboxUI label="Unchecked" checked={false} />
          <CheckboxUI label="Disabled" disabled />
          <CheckboxUI label="Checked Disabled" checked disabled />
          <CheckboxUI label="Indeterminate" checked indeterminate />
        </Col>
      </ExampleSection>
    </Col>
  );
};
