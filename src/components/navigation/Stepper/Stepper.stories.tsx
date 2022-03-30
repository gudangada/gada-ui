import * as React from "react";
import { Meta, Story } from "@storybook/react";
import StepperUI from "./Stepper";
import { iStepperProps } from "./types";
import useStepperState from "./useStepperState";
import Step from "./Step";
import StepIcon from "./StepIcon";
import StepLabel from "./StepLabel";
import { Text, Button } from "../../core";
import { Col, Row } from "../../layout";

export default {
  title: "Components/Navigation",
  component: StepperUI,
} as Meta;

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

//👇 We create a “template” of how args map to rendering
const Template: Story<iStepperProps> = (props) => {
  const stepper = useStepperState({ steps, markAllComplete: true });

  return (
    <Col spacing={64}>
      <StepperUI {...props} alternativeLabel activeStep={stepper.activeStep}>
        {steps.map((step, index) => {
          return (
            <Step key={step} completed={stepper.stepsCompletion[index]}>
              <StepLabel
                StepIconComponent={StepIcon}
                StepIconProps={{ tabIndex: index }}
                onClick={stepper.handleStep(index)}
              >
                {step}
              </StepLabel>
            </Step>
          );
        })}
      </StepperUI>
      <Text alignSelf="center">{steps[stepper.activeStep]}</Text>
      <Row spacing={16} alignSelf="center">
        <Button variant="text" color="primary" onClick={stepper.handleBack}>
          Previous
        </Button>
        <Button variant="text" color="primary" onClick={stepper.handleComplete}>
          Mark Complete
        </Button>
        <Button variant="text" color="primary" onClick={stepper.handleNext}>
          Next
        </Button>
      </Row>
    </Col>
  );
};

//👇 Each story then reuses that template
export const Stepper = Template.bind({});
// Stepper.parameters = { controls: { include: [] } };
// Stepper.args = {
// };
