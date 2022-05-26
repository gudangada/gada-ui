import * as React from "react";
import { iCircularProgressProps } from "./types";
import { SpinnerContainer, StyledSpinner } from "./styles";
import { Text } from "../../../core";

const Spinner: React.VFC<iCircularProgressProps> = ({
  size = "default",
  label,
  ...props
}) => {
  return (
    <SpinnerContainer size={size}>
      <StyledSpinner size={size} {...props} />
      {label && (
        <Text variant="bodyRegular" color="interface.black.400">
          {label}
        </Text>
      )}
    </SpinnerContainer>
  );
};

export default Spinner;
