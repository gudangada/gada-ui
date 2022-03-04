import * as React from "react";
import { iIconProps } from "./types";
import useIconStyles from "./useIconStyles";

const CalendarIcon: React.VFC<iIconProps> = ({
  width = "17",
  height = "18",
  color = "default",
}) => {
  const { iconColor } = useIconStyles({ color });

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.7273 1.63636H13.9091V0.818182C13.9091 0.368182 13.5409 0 13.0909 0C12.6409 0 12.2727 0.368182 12.2727 0.818182V1.63636H4.09091V0.818182C4.09091 0.368182 3.72273 0 3.27273 0C2.82273 0 2.45455 0.368182 2.45455 0.818182V1.63636H1.63636C0.736364 1.63636 0 2.37273 0 3.27273V16.3636C0 17.2636 0.736364 18 1.63636 18H14.7273C15.6273 18 16.3636 17.2636 16.3636 16.3636V3.27273C16.3636 2.37273 15.6273 1.63636 14.7273 1.63636ZM13.9091 16.3636H2.45455C2.00455 16.3636 1.63636 15.9955 1.63636 15.5455V5.72727H14.7273V15.5455C14.7273 15.9955 14.3591 16.3636 13.9091 16.3636Z"
        fill={iconColor}
      />
    </svg>
  );
};

export default CalendarIcon;
