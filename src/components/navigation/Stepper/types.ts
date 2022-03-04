import {
  StepButtonProps,
  StepConnectorProps,
  StepContentProps,
  StepIconProps,
  StepLabelProps,
  StepperProps,
  StepProps,
} from "@mui/material";

export interface iStepperProps extends StepperProps {}
export interface iStepProps extends StepProps {}
export interface iStepButtonProps extends StepButtonProps {}
export interface iStepLabelProps extends StepLabelProps {}
export interface iStepIconProps extends StepIconProps {}
export interface iStepConnectorProps extends StepConnectorProps {}
export interface iStepContentProps extends StepContentProps {}

export interface iUseStepperStateProps<T> {
  steps: T[];
  markAllComplete?: boolean;
}
