import * as React from "react";
import { iFormControlLabelProps } from "./types";
import { StyledFormControlLabel } from "./styles";

const FormControlLabel: React.FC<iFormControlLabelProps> = (props) => {
  return (
    <StyledFormControlLabel
      componentsProps={{
        typography: {
          fontSize: "15px",
          lineHeight: "24px",
          letterSpacing: "0.3%",
          fontFamily: "Inter",
          fontWeight: "400",
        },
      }}
      {...props}
    />
  );
};

export default FormControlLabel;
