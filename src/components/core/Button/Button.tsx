import * as React from "react";
import { iButtonProps } from "./types";
import { Button as MuiButton } from "@mui/material";
import { ButtonPropsMap } from "./constants";

const Button: React.FC<iButtonProps> = ({
  children,
  variant = "primary",
  color = "primary",
  ...props
}) => {
  const variantColorMap = ButtonPropsMap[variant][color];

  return (
    <MuiButton
      variant={variantColorMap.variant}
      color={variantColorMap.color}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
