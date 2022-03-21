import * as React from "react";
import { iIconProps } from "./types";
import useIconStyles from "./useIconStyles";

const ArrowUpIcon: React.VFC<iIconProps> = ({
  width = "12",
  height = "8",
  color,
}) => {
  const { iconColor } = useIconStyles({ color });

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.12001 1.29001L6.00001 5.17001L9.88001 1.29001C9.97259 1.19742 10.0825 1.12399 10.2035 1.07388C10.3244 1.02378 10.4541 0.997986 10.585 0.997986C10.7159 0.997986 10.8456 1.02378 10.9665 1.07388C11.0875 1.12399 11.1974 1.19742 11.29 1.29001C11.3826 1.38259 11.456 1.4925 11.5061 1.61346C11.5562 1.73443 11.582 1.86408 11.582 1.99501C11.582 2.12594 11.5562 2.25559 11.5061 2.37655C11.456 2.49751 11.3826 2.60742 11.29 2.70001L6.70001 7.29001C6.60749 7.38271 6.4976 7.45626 6.37663 7.50644C6.25566 7.55662 6.12597 7.58245 5.99501 7.58245C5.86404 7.58245 5.73435 7.55662 5.61338 7.50644C5.49241 7.45626 5.38252 7.38271 5.29001 7.29001L0.700006 2.70001C0.607302 2.60749 0.533755 2.4976 0.483573 2.37663C0.433392 2.25566 0.407562 2.12598 0.407562 1.99501C0.407562 1.86404 0.433392 1.73436 0.483573 1.61338C0.533755 1.49241 0.607302 1.38252 0.700006 1.29001C1.09001 0.910007 1.73001 0.900007 2.12001 1.29001Z"
        fill={iconColor}
      />
    </svg>
  );
};

export default ArrowUpIcon;