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
  const [values, setValues] = React.useState<any[]>([]);

  const handleChange =
    (index: number) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((curVals) => {
        const newValues = [...curVals];
        newValues[index] = event.target.value;
        return newValues;
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
        value={values[2]}
        label="Label"
        EndIcon={EditIcon}
        onChange={handleChange(2)}
      />
      <TextFieldUI
        id="example-text-field"
        name="Example TextField"
        value={values[3]}
        label="Label"
        errorText="Helper text"
        onChange={handleChange(3)}
      />
      <TextFieldUI
        id="example-text-field"
        name="Example TextField"
        value="Disabled"
        label="Label"
        errorText="Helper Text"
        disabled
        onChange={handleChange(4)}
      />
      <TextFieldUI
        id="example-number-field"
        name="Example Number Field"
        value={values[5]}
        label="Number Field"
        onChange={handleChange(5)}
        type="number"
      />
    </Col>
  );
};
