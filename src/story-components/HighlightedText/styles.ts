import styled from "@emotion/styled";
import { pxToRem } from "../../styles";

export const MarkedText = styled.mark(({ theme: { palette } }) => ({
  backgroundColor: palette.interface.blue[50],
  padding: `0 ${pxToRem(2)}`,
  borderRadius: 4,
}));
