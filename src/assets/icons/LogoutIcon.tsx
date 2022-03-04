import * as React from "react";
import { iIconProps } from "./types";
import useIconStyles from "./useIconStyles";

const LogoutIcon: React.VFC<iIconProps> = ({
  width = "32",
  height = "32",
  color,
}) => {
  const { iconColor } = useIconStyles({ color });

  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      fill="none"
    >
      <path
        d="M332.8 153.6v-51.2c0-42.4-34.4-76.8-76.8-76.8H76.8C34.4 25.6 0 60 0 102.4v307.2c0 42.4 34.4 76.8 76.8 76.8H256c42.4 0 76.8-34.4 76.8-76.8v-51.2c0-14.1-11.5-25.6-25.6-25.6s-25.6 11.5-25.6 25.6v51.2c0 14.1-11.5 25.6-25.6 25.6H76.8c-14.1 0-25.6-11.5-25.6-25.6V102.4c0-14.1 11.5-25.6 25.6-25.6H256c14.1 0 25.6 11.5 25.6 25.6v51.2c0 14.1 11.5 25.6 25.6 25.6s25.6-11.5 25.6-25.6z"
        fill={iconColor}
      />
      <path
        d="M128 281.6h358.4c10.4 0 19.7-6.2 23.7-15.8 4-9.6 1.8-20.6-5.5-27.9l-76.8-76.8c-10-10-26.2-10-36.2 0-10 10-10 26.2 0 36.2l33.1 33.1H128.1c-14.1 0-25.6 11.5-25.6 25.6-.1 14.1 11.4 25.6 25.5 25.6zm299.7 69.3 76.8-76.8c10-10 10-26.2 0-36.2s-26.2-10-36.2 0l-76.8 76.8c-10 10-10 26.2 0 36.2 10 10 26.2 10 36.2 0z"
        fill={iconColor}
      />
    </svg>
  );
};

export default LogoutIcon;
