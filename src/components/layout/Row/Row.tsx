import * as React from "react";
import { iRowProps } from "./types";
import { StyledRow } from "./styles";

const Row = React.forwardRef<HTMLDivElement, iRowProps>((props, ref) => {
  return <StyledRow ref={ref} {...props} />;
});

export default Row;
