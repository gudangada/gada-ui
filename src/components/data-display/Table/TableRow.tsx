import * as React from "react";
import { StyledTableRow } from "./styles";
import { iTableRowProps } from "./types";
import TableCell from "./TableCell";

const TableRow: React.FC<iTableRowProps> = ({
  onClick,
  rowKey,
  controlledCells = false,
  children,
  ...tableRowProps
}) => {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <StyledTableRow
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      isClickable={Boolean(onClick)}
      {...tableRowProps}
    >
      {typeof children === "function"
        ? children({ isHovered }).props.children.map(
            (
              cell:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined,
              index: number
            ) =>
              controlledCells ? (
                cell
              ) : (
                <TableCell
                  key={`table-cell-${rowKey}-${index}`}
                  sx={{ verticalAlign: "center" }}
                >
                  {cell}
                </TableCell>
              )
          )
        : controlledCells
        ? children
        : React.Children.toArray(children).map((cell, index) => (
            <TableCell key={`table-cell-${rowKey}-${index}`}>{cell}</TableCell>
          ))}
    </StyledTableRow>
  );
};

export default TableRow;
