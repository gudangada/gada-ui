import * as React from "react";
import { iUseStepperStateProps } from "./types";

const useStepperState = <T>({
  steps,
  markAllComplete = false,
}: iUseStepperStateProps<T>) => {
  const [stepsCompletion, setStepCompletion] = React.useState(
    new Array(steps.length).fill(false)
  );

  const [activeStep, setActiveStep] = React.useState(0);

  const totalSteps = React.useCallback(() => {
    return steps.length;
  }, [steps]);

  const completedSteps = React.useCallback(() => {
    return stepsCompletion.reduce((completedSteps, curStep) => {
      if (curStep) {
        completedSteps += 1;
      }
      return completedSteps;
    }, 0);
  }, [stepsCompletion]);

  const isLastStep = React.useCallback(() => {
    return activeStep === totalSteps() - 1;
  }, [activeStep, totalSteps]);

  const allStepsCompleted = React.useCallback(() => {
    return completedSteps() === totalSteps();
  }, [completedSteps, totalSteps]);

  const handleNext = React.useCallback(() => {
    if (isLastStep() && allStepsCompleted()) return;

    setActiveStep(activeStep + 1);
  }, [allStepsCompleted, isLastStep, activeStep]);

  const handleBack = React.useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, []);

  const handleStep = React.useCallback(
    (step: number) => () => {
      setActiveStep(step);
    },
    []
  );

  const handleComplete = React.useCallback(() => {
    let allCompleted = true;
    setStepCompletion((cur) => {
      return cur.map((isCompleted, index) => {
        if (index === activeStep) {
          return true;
        }
        if (!isCompleted) {
          allCompleted = false;
        }
        return isCompleted;
      });
    });
    if (!allCompleted) {
      handleNext();
    }
  }, [activeStep, handleNext]);

  React.useEffect(() => {
    if (markAllComplete) {
      setStepCompletion((cur) => cur.map(() => true));
    }
  }, [markAllComplete]);

  return {
    steps,
    activeStep,
    stepsCompletion,
    allStepsCompleted,
    isLastStep,
    handleBack,
    handleNext,
    handleComplete,
    handleStep,
  };
};

export default useStepperState;
