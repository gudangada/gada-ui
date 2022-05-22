import * as React from "react";
import { CardMedia as MuiCardMedia } from "@mui/material";
import { iCardMediaProps } from "./types";

const CardMedia: React.VFC<iCardMediaProps> = (props) => {
  return <MuiCardMedia {...props} />;
};

export default CardMedia;
