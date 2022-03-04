import * as React from "react";
import { iIconProps } from "./types";
import useIconStyles from "./useIconStyles";

const HomeIcon: React.VFC<iIconProps> = ({
  width = "23",
  height = "19",
  color,
}) => {
  const { iconColor } = useIconStyles({ color });

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1765 3.00647L16.7647 8.03588V16.7647H14.5294V10.0588H7.82353V16.7647H5.58823V8.03588L11.1765 3.00647ZM11.1765 0L0 10.0588H3.35294V19H10.0588V12.2941H12.2941V19H19V10.0588H22.3529L11.1765 0Z"
        fill={iconColor}
      />
    </svg>
  );
};

export default HomeIcon;
