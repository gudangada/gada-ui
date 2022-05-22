import * as React from "react";
import { Meta, Story } from "@storybook/react";
import DateTimeFieldUI from "./DateTimeField";
import { iDateTimeFieldProps } from "./types";
import { Col, Row, Text } from "../../core";

export default {
  title: "Components/Input",
  component: DateTimeFieldUI,
} as Meta;

const Template: Story<iDateTimeFieldProps<any>> = () => {
  const [dateTime, setDateTime] = React.useState("");

  return (
    <Col spacing={16}>
      <DateTimeFieldUI dateTimeValue={dateTime} onChange={setDateTime} />
      <Row spacing={8}>
        <Text variant="bodySemiBold">Output: </Text>
        <Text>{dateTime}</Text>
      </Row>
    </Col>
  );
};

export const DateTimeField = Template.bind({});
