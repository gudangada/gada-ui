import * as React from "react";
import { Meta, Story } from "@storybook/react";
import TextUI from "./Text";
import { iTextProps } from "./types";
import { Col } from "../Col";

export default {
  title: "Components/Core",
  component: TextUI,
} as Meta;

const Template: Story<iTextProps> = ({ children, variant, ...props }) => {
  return (
    <Col spacing={16}>
      <TextUI variant={variant} {...props}>
        Select variant
      </TextUI>
      <TextUI variant="heading1" {...props}>
        Heading 1
      </TextUI>
      <TextUI variant="heading2" {...props}>
        Heading 2
      </TextUI>
      <TextUI variant="heading3" {...props}>
        Heading 3
      </TextUI>
      <TextUI variant="heading4SemiBold" {...props}>
        Heading 4 - Semi Bold
      </TextUI>
      <TextUI variant="heading4Regular" {...props}>
        Heading 4 - Regular
      </TextUI>

      <TextUI variant="bodySemiBold" {...props}>
        Body - Semi Bold
      </TextUI>
      <TextUI variant="bodyRegular" {...props}>
        Body - Regular
      </TextUI>
      <TextUI variant="numberSemiBold" {...props}>
        Number - Semi Bold
      </TextUI>
      <TextUI variant="number" {...props}>
        Number
      </TextUI>
      <TextUI variant="button" {...props}>
        Button
      </TextUI>
      <TextUI variant="buttonSmall" {...props}>
        Button Small
      </TextUI>
      <TextUI variant="captionSemiBold" {...props}>
        Caption - Semi Bold
      </TextUI>
      <TextUI variant="captionRegular" {...props}>
        Caption - Regular
      </TextUI>
      <TextUI variant="overline" {...props}>
        OVERLINE
      </TextUI>
    </Col>
  );
};

//👇 Each story then reuses that template
export const Text = Template.bind({});
Text.parameters = { controls: { include: ["variant"] } };
Text.args = {
  variant: "heading1",
};
