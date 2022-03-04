import * as React from "react";
import { Card as MuiCard } from "@mui/material";
import { iCardProps } from "./types";

const Card: React.FC<iCardProps> = (props) => {
  return <MuiCard {...props} />;
};

export default Card;
