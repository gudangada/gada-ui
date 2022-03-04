import * as React from "react";
import { iIconProps } from "./types";
import useIconStyles from "./useIconStyles";

const TimeIcon: React.VFC<iIconProps> = ({
  width = "24",
  height = "24",
  color = "default",
}) => {
  const { iconColor } = useIconStyles({ color });

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M512 0C229.888 0 0 229.888 0 512s229.888 512 512 512 512-229.888 512-512S794.112 0 512 0z m442.368 512c0 243.712-198.144 442.368-442.368 442.368-243.712 0-442.368-198.144-442.368-442.368 0-243.712 198.144-442.368 442.368-442.368 243.712 0 442.368 198.656 442.368 442.368z"
        fill={iconColor}
      />
      <path
        d="M546.816 498.176V232.96c0-19.456-15.872-34.816-34.816-34.816-19.456 0-34.816 15.872-34.816 34.816v280.064c0 9.216 3.584 17.92 10.24 24.576l130.56 130.048c6.656 6.656 15.36 10.24 24.576 10.24 9.216 0 17.92-3.584 24.576-10.24 6.656-6.656 10.24-15.36 10.24-24.576 0-9.216-3.584-17.92-10.24-24.576l-120.32-120.32z"
        fill={iconColor}
      />
    </svg>
  );
};

export default TimeIcon;
