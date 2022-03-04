import * as React from "react";
import { useAppTheme } from "../../../hooks";
import { Text } from "../../core";
import { iLabelProps } from "./types";

const Label: React.FC<iLabelProps> = ({ children, ...props }) => {
  const { palette } = useAppTheme();

  return (
    <Text
      variant="captionSemiBold"
      color={palette.interface.black[400]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Label;
