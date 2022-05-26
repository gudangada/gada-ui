import { CircularProgressProps } from "@mui/material";

export interface iCircularProgressProps
  extends Omit<CircularProgressProps, "size"> {
  size: "default" | "small";
  label?: string;
}
