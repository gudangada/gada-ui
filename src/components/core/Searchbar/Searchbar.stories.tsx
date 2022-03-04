import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";
import * as React from "react";
import SearchbarUI from "./Searchbar";
import { iSearchbarProps } from "./types";

export default {
  title: "Components/Core",
  component: SearchbarUI,
};

const Template: Story<iSearchbarProps> = (props) => {
  const [value, setValue] = React.useState(props.defaultValue);
  const handleChange = (value: string) => {
    action("onChange");
    setValue(value);
  };

  const handleReset = () => {
    action("onClickCancel");
    setValue("");
  };

  return (
    <SearchbarUI
      {...props}
      value={value}
      onChangeValue={handleChange}
      onClickCancel={handleReset}
    />
  );
};

export const Searchbar = Template.bind({});
Searchbar.parameters = { controls: { include: ["size"] } };
Searchbar.argTypes = {
  size: {
    control: {
      type: "select",
      options: ["small", "default"],
    },
  },
};
Searchbar.args = {
  size: "small",
  defaultValue: "",
};
