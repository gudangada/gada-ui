import * as React from "react";
import { iIconProps } from "./types";
import useIconStyles from "./useIconStyles";

const RedemptionIcon: React.VFC<iIconProps> = ({
  width = "24",
  height = "24",
  color,
}) => {
  const { iconColor } = useIconStyles({ color });

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 7H18.791C18.9377 6.51378 19.0082 6.00779 19 5.5C19 3.57 17.43 2 15.5 2C13.878 2 12.795 3.482 12.096 5.085C11.407 3.57 10.269 2 8.5 2C6.57 2 5 3.57 5 5.5C5 6.096 5.079 6.589 5.209 7H4C2.897 7 2 7.897 2 9V11C2 12.103 2.897 13 4 13V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V13C21.103 13 22 12.103 22 11V9C22 7.897 21.103 7 20 7ZM15.5 4C16.327 4 17 4.673 17 5.5C17 7 16.374 7 16 7H13.522C14.033 5.424 14.775 4 15.5 4ZM7 5.5C7 4.673 7.673 4 8.5 4C9.388 4 10.214 5.525 10.698 7H8C7.626 7 7 7 7 5.5ZM4 9H11V11H4V9ZM6 20V13H11V20H6ZM18 20H13V13H18V20ZM13 11V9.085L13.017 9H20L20.001 11H13Z"
        fill={iconColor}
      />
    </svg>
  );
};

export default RedemptionIcon;
