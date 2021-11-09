import { ButtonProps, TypographyProps } from "@mui/material";

export interface iButtonProps
  extends Omit<ButtonProps, "variant" | "color" | "size"> {
  variant: "primary" | "outlined" | "text" | "circular" | "fab";
  color: "primary" | "destructive";
  size: ButtonProps["size"];
  text?: string;
  textProps?: TypographyProps;
}
