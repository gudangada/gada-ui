import styled from "@emotion/styled";
import { FormControlLabel } from "@mui/material";
import { buttonBaseClasses } from "@mui/material";
import { pxToRem } from "../../../styles";

export const StyledFormControlLabel = styled(FormControlLabel)({
  [`& .${buttonBaseClasses.root}`]: {
    margin: `0 ${pxToRem(11)}`,
    padding: 0,
  },
});
