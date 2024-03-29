import * as React from "react";
import { iIconProps } from "./types";
import useIconStyles from "./useIconStyles";

const PlusIcon: React.VFC<iIconProps> = ({
  width = "24",
  height = "24",
  color,
}) => {
  const { iconColor } = useIconStyles({ color });

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 8.998H8V13.998C8 14.2632 7.89464 14.5176 7.70711 14.7051C7.51957 14.8926 7.26522 14.998 7 14.998C6.73478 14.998 6.48043 14.8926 6.29289 14.7051C6.10536 14.5176 6 14.2632 6 13.998V8.998H1C0.734784 8.998 0.48043 8.89264 0.292893 8.70511C0.105357 8.51757 0 8.26322 0 7.998C0 7.73278 0.105357 7.47843 0.292893 7.29089C0.48043 7.10336 0.734784 6.998 1 6.998H6V1.998C6 1.73278 6.10536 1.47843 6.29289 1.29089C6.48043 1.10336 6.73478 0.998001 7 0.998001C7.26522 0.998001 7.51957 1.10336 7.70711 1.29089C7.89464 1.47843 8 1.73278 8 1.998V6.998H13C13.2652 6.998 13.5196 7.10336 13.7071 7.29089C13.8946 7.47843 14 7.73278 14 7.998C14 8.26322 13.8946 8.51757 13.7071 8.70511C13.5196 8.89264 13.2652 8.998 13 8.998Z"
        fill={iconColor}
      />
    </svg>
  );
};

export default PlusIcon;
