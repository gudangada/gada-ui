import { Meta } from "@storybook/react";
import * as React from "react";
import ButtonUI from "./Button";

export default {
  title: "Components/Button",
  component: ButtonUI,
} as Meta;

export const Button: React.VFC = () => {
  return (
          <ButtonUI onClick={() => alert("Clicked")}>Primary</ButtonUI>
          
  );
};
