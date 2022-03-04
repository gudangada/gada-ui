import * as React from "react";
import { CheckMarkIcon } from "../../../assets";
import { Text } from "../../core";
import { StepIconRoot, StyledStepIcon } from "./styles";
import { iStepIconProps } from "./types";

const StepIcon: React.FC<iStepIconProps> = ({
  tabIndex = 0,
  active,
  error,
  completed,
  className,
}) => {
  const isActive = active || completed;

  return (
    <StepIconRoot active={isActive} error={error} className={className}>
      <StyledStepIcon active={active} completed={completed} error={error}>
        {completed ? (
          <CheckMarkIcon color={active ? "white" : "default"} />
        ) : (
          <Text variant="captionSemiBold">{tabIndex + 1}</Text>
        )}
      </StyledStepIcon>
    </StepIconRoot>
  );
};

export default StepIcon;
