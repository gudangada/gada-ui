import * as React from "react";
import { iIconProps } from "./types";
import useIconStyles from "./useIconStyles";

const CheckMarkCircleIcon: React.VFC<iIconProps> = ({
  width = "32",
  height = "32",
  color,
}) => {
  const { iconColor } = useIconStyles({ color });

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 612 792"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M562 396c0-141.4-114.6-256-256-256S50 254.6 50 396s114.6 256 256 256 256-114.6 256-256zm-60.3-99.7-241 241-17.2 17.2-133.2-133.2 58.8-58.8 74.5 74.5L443 237.6l58.7 58.7z"
        fill={iconColor}
      />
    </svg>
  );
};

export default CheckMarkCircleIcon;
