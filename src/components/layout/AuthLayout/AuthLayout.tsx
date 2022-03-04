import * as React from "react";
import {
  ContentContainer,
  LeftContainer,
  MainContainer,
  RightContainer,
} from "./styles";
import { AuthLayoutProps } from "./types";

const AuthLayout: React.VFC<AuthLayoutProps> = ({ children }) => {
  return (
    <MainContainer vCenter={false}>
      <LeftContainer flex={1} />
      <RightContainer flex={1}>
        <ContentContainer flex={1}>{children}</ContentContainer>
      </RightContainer>
    </MainContainer>
  );
};

export default AuthLayout;
