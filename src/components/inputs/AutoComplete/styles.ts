import styled from "@emotion/styled";
import { Col } from "../../core";

export const StyledAutoCompleteContainer = styled(Col)<{ isError?: boolean }>(
  ({ theme: { palette }, isError }) => ({
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: isError
        ? palette.interface.red[500]
        : palette.interface.black[200],
    },
  })
);
