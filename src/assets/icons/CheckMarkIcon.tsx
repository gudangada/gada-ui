import * as React from "react";
import { iIconProps } from "./types";
import useIconStyles from "./useIconStyles";

const CheckMarkCircleIcon: React.VFC<iIconProps> = ({
  width = "16",
  height = "12",
  color,
}) => {
  const { iconColor } = useIconStyles({ color });

  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 12 9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m10.207 1-6.33 6.33L1 4.453"
        stroke={iconColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckMarkCircleIcon;
