import * as React from "react";
import { FormHelperText as MuiFormHelperText } from "@mui/material";
import { iFormHelperTextProps } from "./types";
import { Row, Text } from "../../core";
import { useAppTheme } from "../../../hooks";

const FormHelperText: React.FC<iFormHelperTextProps> = ({
  children,
  error,
  Icon,
  ...props
}) => {
  const { palette } = useAppTheme();

  return (
    <MuiFormHelperText component={Row} {...props}>
      {Icon && (
        <span className="mr-2">
          <Icon width={16} height={16} />
        </span>
      )}
      <Text
        variant="captionRegular"
        color={
          error ? palette.interface.red[500] : palette.interface.black[300]
        }
      >
        {children}
      </Text>
    </MuiFormHelperText>
  );
};

export default FormHelperText;
