import * as React from "react";
import { iColProps } from "./types";
import { StyledCol } from "./styles";

const Col = React.forwardRef<HTMLDivElement, iColProps>((props, ref) => {
  return <StyledCol ref={ref} {...props} />;
});

export default Col;
