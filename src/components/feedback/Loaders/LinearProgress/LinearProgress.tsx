import * as React from "react";
import { LinearProgress as MuiLinearProgress } from "@mui/material";
import { iLinearProgressProps } from "./types";

const LinearProgress: React.VFC<iLinearProgressProps> = (props) => {
  return <MuiLinearProgress {...props} />;
};

export default LinearProgress;
