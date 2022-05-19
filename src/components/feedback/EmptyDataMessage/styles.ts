import styled from "@emotion/styled";
import { pxToRem } from "../../../styles";
import { Col } from "../../layout";

export const Container = styled(Col)({
  paddingTop: pxToRem(32),
  paddingBottom: pxToRem(32),
});
