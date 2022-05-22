import styled from "@emotion/styled";
import { pxToRem } from "../../../styles";
import { Col } from "../../core/Col";

export const Container = styled(Col)({
  paddingTop: pxToRem(32),
  paddingBottom: pxToRem(32),
});
