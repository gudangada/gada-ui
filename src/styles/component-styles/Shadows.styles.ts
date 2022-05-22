import { Shadows as ShadowsType } from "@mui/material/styles/shadows";

const shadowsOverride = [
  "none",
  ...Array(20)
    .fill("none")
    .map(
      (_, index) =>
        `0px 2px 15px rgba(0, 0, 0, ${Math.min(1, index * 0.04 + 0.08)})`
    ),
];

export const Shadows = shadowsOverride as ShadowsType;
