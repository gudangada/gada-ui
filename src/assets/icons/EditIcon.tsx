import * as React from "react";
import { iIconProps } from "./types";
import useIconStyles from "./useIconStyles";

const EditIcon: React.VFC<iIconProps> = ({
  width = "24",
  height = "24",
  color,
}) => {
  const { iconColor } = useIconStyles({ color });

  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 19 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.06 6.02L11.98 6.94L2.92 16H2V15.08L11.06 6.02ZM14.66 0C14.41 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C17.8027 3.94749 17.8762 3.8376 17.9264 3.71662C17.9766 3.59565 18.0024 3.46597 18.0024 3.335C18.0024 3.20403 17.9766 3.07435 17.9264 2.95338C17.8762 2.8324 17.8027 2.72251 17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0ZM11.06 3.19L0 14.25V18H3.75L14.81 6.94L11.06 3.19Z"
        fill={iconColor}
      />
    </svg>
  );
};

export default EditIcon;
