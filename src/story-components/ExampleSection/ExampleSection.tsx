import * as React from "react";
import { iExampleSectionProps } from "./types";
import { Col, Text } from "../../components";
import { ExampleContainer } from "./styles";
import { HighlightedText } from "../HighlightedText";

const ExampleSection: React.FC<iExampleSectionProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Col spacing={8}>
      <Text variant="heading4SemiBold">{title}</Text>
      {description &&
        (description.highlight ? (
          <HighlightedText
            text={description.text}
            highlight={description.highlight}
            links={description.links}
            textVariant="bodyRegular"
          />
        ) : (
          <Text variant="bodyRegular">{description.text}</Text>
        ))}
      <ExampleContainer>{children}</ExampleContainer>
    </Col>
  );
};

export default ExampleSection;
