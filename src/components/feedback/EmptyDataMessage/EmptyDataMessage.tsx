import * as React from "react";
import { Col, Text } from "../../core";
import { Container } from "./styles";
import { iEmptyDataMessageProps } from "./types";

const EmptyDataMessage: React.VFC<iEmptyDataMessageProps> = ({
  title,
  message,
  action,
}) => {
  return (
    <Col flex={1} justifyContent="center">
      <Container spacing={16}>
        <Col spacing={8} alignItems="center">
          <Text variant="heading3">{title}</Text>
          {message && <Text variant="captionRegular">{message}</Text>}
        </Col>
        {action}
      </Container>
    </Col>
  );
};

export default EmptyDataMessage;
