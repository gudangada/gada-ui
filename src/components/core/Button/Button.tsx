import * as React from "react";
import { iButtonProps } from "./types";
import { Button as MuiButton, Typography, useTheme } from "@mui/material";
import { ButtonPropsMap } from "./constants";
import { AppTheme } from "../../../styles";

const Button: React.FC<iButtonProps> = ({
  children,
  variant = "primary",
  color = "primary",
  text,
  textProps,
  ...props
}) => {
  const { palette } = useTheme<AppTheme>();
  const variantColorMap = ButtonPropsMap[variant][color];

  return (
    <MuiButton
      variant={variantColorMap.variant}
      color={variantColorMap.color}
      {...props}
    >
      {text ? (
        <Typography
          variant={props.size === "large" ? "button" : "buttonSmall"}
          {...textProps}
          color={
            variantColorMap.color === "error"
              ? palette.interface.red[700]
              : textProps?.color
          }
        >
          {text}
        </Typography>
      ) : (
        children
      )}
    </MuiButton>
  );
};

export default Button;
