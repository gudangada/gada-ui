import { Shadows as ShadowsType } from "@mui/material/styles/shadows";

export const Shadows = ["none", "0px 2px 15px rgba(0, 0, 0, 0.08)"].concat(
  Array(19).fill("none")
) as ShadowsType;
