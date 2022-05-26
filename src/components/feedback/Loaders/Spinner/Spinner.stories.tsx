import * as React from "react";
import { Meta } from "@storybook/react";
import CircularProgressUI from "./Spinner";
import { iCircularProgressProps } from "./types";
import { ExampleSection } from "../../../../story-components";

export default {
  title: "Components/Feedback/Loaders",
  component: CircularProgressUI,
  args: {
    variant: "indeterminate",
    size: "default",
    label: "Mohon tunggu, sedang memuat data...",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["determinate", "indeterminate"],
    },
    size: {
      control: "select",
      options: ["default", "small"],
    },
  },
} as Meta<iCircularProgressProps>;

export const Spinner: React.VFC<iCircularProgressProps> = ({
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
    <ExampleSection title="Circular Progress Playground">
      <CircularProgressUI variant={variant} value={progress} {...props} />
    </ExampleSection>
  );
};
