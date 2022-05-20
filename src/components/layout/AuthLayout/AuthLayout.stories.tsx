import * as React from "react";
import AuthLayoutUI from "./AuthLayout";
import { Meta } from "@storybook/react";
import { iAuthLayoutProps } from "./types";
import { Col } from "../Col";
import { Text } from "../../core";

export default {
  title: "Components/Layout",
  component: AuthLayoutUI,
} as Meta<iAuthLayoutProps>;

export const AuthLayout: React.VFC<iAuthLayoutProps> = () => {
  return (
    <AuthLayoutUI>
      <Col>
        <Text variant="bodyRegular">Content would be here</Text>
      </Col>
    </AuthLayoutUI>
  );
};
