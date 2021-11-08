import { ButtonProps } from "@mui/material";

export interface iButtonProps
  extends Omit<ButtonProps, "variant" | "color" | "size"> {
  variant: "primary" | "outlined" | "text" | "circular";
  color: "primary" | "destructive";
  size: ButtonProps["size"];
}
