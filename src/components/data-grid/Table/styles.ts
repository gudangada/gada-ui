import styled from "@emotion/styled";
import { TableRow } from "@mui/material";
import { pxToRem } from "../../../styles";
import { Row } from "../../core";

export const TableFooter = styled(Row)<{ stickyFooter?: boolean }>(
  ({ theme: { palette }, stickyFooter }) => ({
    height: pxToRem(56),
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: palette.interface.white,
    position: stickyFooter ? "sticky" : "static",
    bottom: 0,
    paddingTop: pxToRem(24),
  })
);

export const StyledTableRow = styled(TableRow)<{ isClickable: boolean }>(
  ({ theme: { palette }, isClickable }) => ({
    "&:hover": {
      backgroundColor: !isClickable
        ? "transparent !important"
        : palette.interface.black[50],
      cursor: !isClickable ? "default !important" : "pointer",
    },
  })
);
