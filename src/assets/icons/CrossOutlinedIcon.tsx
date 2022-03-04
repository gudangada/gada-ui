import * as React from "react";
import { iIconProps } from "./types";
import useIconStyles from "./useIconStyles";

const CrossOutlinedIcon: React.VFC<iIconProps> = ({
  width = "19",
  height = "19",
  fill = "#CDCBCB",
  color = "default",
}) => {
  const { iconColor } = useIconStyles({ color });

  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m632.8 499.6 329.1 329.1c37.5 37.5 37.5 95.3 0 132.8-17.3 17.3-43.3 28.9-66.4 28.9-23.1 0-49.1-11.5-66.4-28.9L500 632.4 170.9 961.5c-17.3 17.3-43.3 28.9-66.4 28.9-23.1 0-49.1-11.5-66.4-28.9C.6 924 .6 866.2 38.1 828.7l329.1-329.1-329.1-329C.6 133 .6 75.3 38.1 37.8 75.6.3 133.4.3 170.9 37.8L500 366.9 829.1 37.8C866.6.3 924.4.3 961.9 37.8c37.5 37.5 37.5 95.3 0 132.8l-329.1 329z"
        fill={iconColor}
      />
    </svg>
  );
};

export default CrossOutlinedIcon;
