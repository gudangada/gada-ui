import * as React from "react";
import { CardContent as MuiCardContent } from "@mui/material";
import { iCardContentProps } from "./types";

const CardContent: React.FC<iCardContentProps> = (props) => {
  return <MuiCardContent {...props} />;
};

export default CardContent;
