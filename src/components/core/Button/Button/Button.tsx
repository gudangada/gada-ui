import * as React from "react";
import clsx from "clsx";
import { iButtonProps } from "./types";
import {
  Button as MuiButton,
  CircularProgress,
  Typography,
} from "@mui/material";
import { ButtonPropsMap } from "./constants";
import { iIconProps } from "../../../../assets/icons/types";

const Button: React.FC<iButtonProps> = ({
  children,
  variant = "primary",
  color = "primary",
  size = "default",
  text,
  textProps,
  fullWidth,
  className = "",
  classes = "",
  startIcon,
  loading = false,
  disabled,
  ...props
}) => {
  const variantColorMap = ButtonPropsMap[variant][color];
  const buttonSize = size === "default" ? "large" : size;
  const isFullWidth = buttonSize === "large" && fullWidth === true;

  const startIconClone = React.useMemo(() => {
    if (React.isValidElement(startIcon)) {
      return React.cloneElement(startIcon as React.ReactElement<iIconProps>, {
        width: size === "small" ? 14 : 18,
        height: size === "small" ? 14 : 18,
        color: disabled ? "default" : undefined,
      });
    }
    return undefined;
  }, [startIcon, size, disabled]);

  return (
    <MuiButton
      variant={variantColorMap.variant}
      color={variantColorMap.color}
      size={buttonSize}
      fullWidth={isFullWidth}
      className={clsx(
        isFullWidth ? "w-full" : variant === "icon-small" ? "" : "w-auto",
        variant === "icon-small" &&
          `rounded-full p-2 min-w-min w-10 min-h-min h-10`,
        variant === "text" && "hover:bg-transparent hover:opacity-70",
        classes,
        className
      )}
      startIcon={startIconClone}
      disabled={loading || disabled}
      {...props}
    >
      <span className={loading ? "invisible" : ""}>
        {text ? (
          <Typography
            variant={buttonSize === "large" ? "button" : "buttonSmall"}
            color={variantColorMap.color}
            {...textProps}
          >
            {text}
          </Typography>
        ) : (
          children
        )}
      </span>
      {loading && (
        <CircularProgress size={18} color="inherit" className="absolute" />
      )}
    </MuiButton>
  );
};

export default Button;
