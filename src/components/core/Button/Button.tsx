import * as React from "react";
import { iButtonProps } from "./types";
import { Button as MuiButton, Typography, useTheme } from "@mui/material";
import { ButtonPropsMap } from "./constants";
import { AppTheme } from "../../../styles";

const Button: React.FC<iButtonProps> = ({
  children,
  variant = "primary",
  color = "primary",
  size = "default",
  text,
  textProps,
  ...props
}) => {
  const { palette } = useTheme<AppTheme>();
  const variantColorMap = ButtonPropsMap[variant][color];
  const buttonSize = size === "default" ? "large" : size;

  return (
    <MuiButton
      variant={variantColorMap.variant}
      color={variantColorMap.color}
      size={buttonSize}
      {...props}
    >
      {text ? (
        <Typography
          variant={buttonSize === "large" ? "button" : "buttonSmall"}
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
