import * as React from "react";
import { Meta } from "@storybook/react";
import TextFieldUI from "./TextField";
import { Col } from "../../layout";
import { EditIcon, PlusIcon } from "../../../assets";

export default {
  title: "Components/Inputs",
  component: TextFieldUI,
} as Meta;

export const TextField: React.VFC = () => {
  const [values, setValues] = React.useState<string[]>([]);

  const handleChange =
    (index: number) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((curVals) => {
        curVals[index] = event.target.value;
        return curVals;
      });
    };

  return (
    <Col spacing={16}>
      <TextFieldUI
        id="example-text-field"
        name="Example TextField"
        value={values[0]}
        label="Label"
        StartIcon={EditIcon}
        labelInline
        onChange={handleChange(0)}
      />
      <TextFieldUI
        id="example-text-field"
        name="Example TextField"
        value={values[1]}
        label="Label"
        StartIcon={EditIcon}
        errorText="Helper text"
        ErrorTextIcon={PlusIcon}
        onChange={handleChange(1)}
      />
      <TextFieldUI
        id="example-text-field"
        name="Example TextField"
        value={values[1]}
        label="Label"
        EndIcon={EditIcon}
        onChange={handleChange(1)}
      />
      <TextFieldUI
        id="example-text-field"
        name="Example TextField"
        value={values[2]}
        label="Label"
        errorText="Helper text"
        onChange={handleChange(2)}
      />
      <TextFieldUI
        id="example-text-field"
        name="Example TextField"
        value="Disabled"
        label="Label"
        errorText="Helper Text"
        disabled
        onChange={handleChange(3)}
      />
    </Col>
  );
};
