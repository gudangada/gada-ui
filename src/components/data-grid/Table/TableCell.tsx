import { TableCell as MuiTableCell } from "@mui/material";
import * as React from "react";
import { iTableCellProps } from "./types";

const TableCell: React.FC<iTableCellProps> = (props) => {
  return <MuiTableCell {...props} />;
};

export default TableCell;
