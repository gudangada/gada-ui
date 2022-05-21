import * as React from "react";
import { Meta, Story } from "@storybook/react";
import CheckboxGroupUI from "./CheckboxGroup";
import { iCheckboxControl, iCheckboxGroupProps } from "./types";
import { Row } from "../../core";
import { Label } from "../Label";

export default {
  title: "Components/Input",
  component: CheckboxGroupUI,
} as Meta;

const Template: Story<iCheckboxGroupProps> = () => {
  const initialValues: iCheckboxControl[] = React.useMemo(
    () => [
      { label: "Senin", name: "senin", checked: true, disabled: true },
      { label: "Selasa", name: "selasa", checked: true },
      { label: "Rabu", name: "rabu", checked: false },
      { label: "Kamis", name: "kamis", checked: false },
      { label: "Jumat", name: "jumat", checked: false, disabled: true },
      { label: "Sabtu", name: "sabtu", checked: false },
      { label: "Minggu", name: "minggu", checked: false },
    ],
    []
  );
  const [checkboxes, setCheckboxesState] =
    React.useState<iCheckboxControl[]>(initialValues);

  return (
    <Row justifyContent="space-between" vCenter>
      <Label>Pembatasan hari penggunaan</Label>
      <CheckboxGroupUI
        checkboxes={checkboxes}
        onChange={(name, checked) => {
          setCheckboxesState((curState) => {
            return curState.map((checkbox) => {
              if (checkbox.name === name) return { ...checkbox, checked };
              return checkbox;
            });
          });
        }}
      />
    </Row>
  );
};

export const CheckboxGroup = Template.bind({});
