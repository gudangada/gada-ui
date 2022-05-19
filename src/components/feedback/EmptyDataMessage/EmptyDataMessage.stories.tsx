import * as React from "react";
import { Meta } from "@storybook/react";
import EmptyDataMessageUI from "./EmptyDataMessage";
import { iEmptyDataMessageProps } from "./types";

export default {
  title: "Components/Feedback",
  component: EmptyDataMessageUI,
  args: {
    title: "No data",
    message: "There is no data to be shown.",
  },
} as Meta<iEmptyDataMessageProps>;

export const EmptyDataMessage: React.VFC<iEmptyDataMessageProps> = (props) => {
  return <EmptyDataMessageUI {...props} />;
};
