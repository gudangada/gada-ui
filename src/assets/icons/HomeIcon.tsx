import * as React from "react";
import { iIconProps } from "./types";
import useIconStyles from "./useIconStyles";

const HomeIcon: React.VFC<iIconProps> = ({
  width = "24",
  height = "24",
  color,
}) => {
  const { iconColor } = useIconStyles({ color });

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z" fill={iconColor} />
    </svg>
  );
};

export default HomeIcon;
