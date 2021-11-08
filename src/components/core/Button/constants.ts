import { iButtonProps } from "./types";
import { ButtonProps } from "@mui/material";

export const ButtonPropsMap: {
  [variant in iButtonProps["variant"]]: {
    [color in iButtonProps["color"]]: {
      variant: ButtonProps["variant"];
      color: ButtonProps["color"];
    };
  };
} = {
  primary: {
    primary: {
      variant: "contained",
      color: "primary",
    },
    destructive: {
      variant: "contained",
      color: "error",
    },
  },
  outlined: {
    primary: {
      variant: "outlined",
      color: "primary",
    },
    destructive: {
      variant: "outlined",
      color: "error",
    },
  },
  text: {
    primary: {
      variant: "text",
      color: "primary",
    },
    destructive: {
      variant: "text",
      color: "error",
    },
  },
  circular: {
    primary: {
      variant: "circular",
      color: "primary",
    },
    destructive: {
      variant: "circular",
      color: "error",
    },
  },
};
