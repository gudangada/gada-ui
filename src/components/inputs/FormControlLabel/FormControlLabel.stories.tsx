import * as React from "react";
import FormControlLabelUI from "./FormControlLabel";
import { Meta } from "@storybook/react";
import { iFormControlLabelProps } from "./types";
import { Radio } from "..";
import { Col } from "../../core";
import { Checkbox } from "@mui/material";

export default {
  id: "formcontrollabel",
  title: "Components/Input",
  component: FormControlLabelUI,
} as Meta<iFormControlLabelProps>;

export const FormControlLabel: React.VFC<iFormControlLabelProps> = () => {
  return (
    <Col spacing={16}>
      <FormControlLabelUI
        label="Radio Label"
        control={<Radio />}
        onChange={(e) => console.log(e)}
      />
      <FormControlLabelUI
        label="Checkbox Label"
        control={<Checkbox />}
        onChange={(e) => console.log(e)}
      />
    </Col>
  );
};
