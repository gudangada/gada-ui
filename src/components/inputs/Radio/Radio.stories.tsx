import * as React from "react";
import { Meta } from "@storybook/react";
import RadioUI from "./Radio";
import { iRadioProps } from "./types";
import { Col, Row } from "../../layout";
import { Label } from "../Label";
import { Text } from "../../core";

export default {
  title: "Components/Inputs",
  component: RadioUI,
} as Meta<iRadioProps>;

export const Radio: React.VFC<iRadioProps> = () => {
  const [selectedValue, setSelectedValue] = React.useState("male");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Col spacing={8} alignItems="flex-start">
      <Label>Gender</Label>
      <Row spacing={8} vCenter>
        <RadioUI
          name="gender"
          value="male"
          checked={selectedValue === "male"}
          onChange={handleChange}
        />
        <Text variant="bodyRegular">Male</Text>
      </Row>
      <Row spacing={8} vCenter>
        <RadioUI
          name="gender"
          value="female"
          checked={selectedValue === "female"}
          onChange={handleChange}
        />
        <Text variant="bodyRegular">Female</Text>
      </Row>
    </Col>
  );
};
