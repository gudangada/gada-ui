import styled from "@emotion/styled";
import { outlinedInputClasses } from "@mui/material";
import { Col } from "../../core/Col";

export const StyledAutoCompleteContainer = styled(Col)<{ isError?: boolean }>(
  ({ theme: { palette }, isError }) => ({
    [`& .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: isError
        ? palette.interface.red[500]
        : palette.interface.black[200],
    },

    [`& .${outlinedInputClasses.root}`]: {
      alignItems: "center !important",
    },
  })
);
