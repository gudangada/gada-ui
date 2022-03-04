import * as React from "react";
import { iTextProps } from "./types";
import { Typography } from "@mui/material";

const Text: React.FC<iTextProps> = ({ variant = "bodyRegular", ...props }) => {
  return <Typography variant={variant} {...props} />;
};

export default Text;
