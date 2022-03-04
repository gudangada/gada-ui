import styled from "@emotion/styled";
import { iExpandIconProps } from "./types";

export const ExpandIconContainer = styled.div<Partial<iExpandIconProps>>(
  ({ isExpanded }) => ({
    transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
  })
);
