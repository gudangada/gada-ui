import * as React from "react";
import { Skeleton as MuiSkeleton } from "@mui/material";
import { iSkeletonProps } from "./types";

const Skeleton: React.VFC<iSkeletonProps> = (props) => {
  return <MuiSkeleton {...props} />;
};

export default Skeleton;
