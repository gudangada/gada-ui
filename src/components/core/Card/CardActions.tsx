import * as React from "react";
import { CardActions as MuiCardActions } from "@mui/material";
import { iCardActionsProps } from "./types";

const CardActions: React.FC<iCardActionsProps> = (props) => {
  return <MuiCardActions {...props} />;
};

export default CardActions;
