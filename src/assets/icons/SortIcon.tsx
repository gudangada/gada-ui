import { useTheme } from "@mui/material";
import * as React from "react";
import { AppTheme } from "../../styles";
import { iIconProps } from "./types";

interface iSortIconProps extends iIconProps {
  sort?: "asc" | "desc";
}

const SortIcon: React.VFC<iSortIconProps> = ({
  width = "20",
  height = "20",
  sort,
}) => {
  const { palette } = useTheme<AppTheme>();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m15 12-5 5-5-5h10z"
        fill={
          sort === "desc"
            ? palette.interface.teal["500"]
            : palette.interface.black["400"]
        }
      />
      <path
        d="m5 8 5-5 5 5h-10z"
        fill={
          sort === "asc"
            ? palette.interface.teal["500"]
            : palette.interface.black["400"]
        }
      />
    </svg>
  );
};

export default SortIcon;
