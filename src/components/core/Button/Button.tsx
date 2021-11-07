import * as React from "react";
import { iButtonProps } from "./types";
import { Button as MuiButton } from "@mui/material";
import { useStyles } from "./styles";
import { useTheme } from "@mui/styles";

const Button: React.FC<iButtonProps> = ({ children, ...props }) => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);

  return (
    <MuiButton className={classes.button} {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;
