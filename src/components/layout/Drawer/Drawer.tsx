import * as React from "react";
import { Drawer as MuiDrawer } from "@mui/material";
import { iDrawerProps } from "./types";

const Drawer: React.FC<iDrawerProps> = (props) => {
  return <MuiDrawer {...props} />;
};

export default Drawer;
