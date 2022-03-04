import styled from "@emotion/styled";
import { pxToRem } from "../../../styles";
import { Col } from "../Col";
import { Row } from "../Row";

export const MainContainer = styled(Row)(() => ({
  height: "100vh",
  flexWrap: "wrap",
}));

export const LeftContainer = styled(Col)(({ theme: { palette } }) => ({
  backgroundColor: palette.interface.black[100],
}));

export const RightContainer = styled(Col)(({ theme: { palette } }) => ({
  backgroundColor: palette.interface.white,
}));

export const ContentContainer = styled(Col)(() => ({
  position: "relative",
  padding: `${pxToRem(80)} ${pxToRem(104)}`,
}));
