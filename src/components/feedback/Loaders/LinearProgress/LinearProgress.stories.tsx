import * as React from "react";
import { Meta } from "@storybook/react";
import LinearProgressUI from "./LinearProgress";
import { iLinearProgressProps } from "./types";
import { ExampleSection } from "../../../../story-components";

export default {
  title: "Components/Feedback/Loaders",
  component: LinearProgressUI,
  args: {
    variant: "determinate",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["determinate", "indeterminate", "buffer", "query"],
    },
  },
} as Meta<iLinearProgressProps>;

export const LinearProgress: React.VFC<iLinearProgressProps> = ({
  variant,
  ...props
}) => {
  const [progress, setProgress] = React.useState(0);
  let intervalId = React.useRef<number>(-1);

  React.useEffect(() => {
    clearInterval(intervalId.current);
    setProgress(0);
  }, [variant]);

  React.useEffect(() => {
    if (["determinate", "buffer"].includes(variant || "")) {
      if (progress > 0) return;

      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => {
        setProgress((cur) => {
          if (cur === 100) {
            clearInterval(intervalId.current);
            return 100;
          }
          return cur + 5;
        });
      }, 1000) as unknown as number;
    } else {
      clearInterval(intervalId.current);
    }

    return () => {
      if (progress === 0) return;
      clearInterval(intervalId.current);
    };
  }, [variant, progress]);

  return (
    <ExampleSection title="Linear Progress Playground">
      <LinearProgressUI
        variant={variant}
        value={progress}
        valueBuffer={progress + 10}
        {...props}
      />
    </ExampleSection>
  );
};
