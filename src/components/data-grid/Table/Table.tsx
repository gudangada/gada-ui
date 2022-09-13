import {
  Table as MuiTable,
  TableBody,
  TableHead,
  TableSortLabel,
} from "@mui/material";
import clsx from "clsx";
import * as React from "react";
import { SortIcon } from "../../../assets/icons";
import { Col, Row, Text } from "../../core";
import TableCell from "./TableCell";
import TableRow from "./TableRow";
import TablePagination from "./TablePagination";
import { TableFooter } from "./styles";
import { iTableHeadingCell, iTableProps, SortIconPosition } from "./types";
import { EmptyDataMessage } from "../../feedback/EmptyDataMessage";
import { Skeleton } from "../../feedback";

const Table: React.VFC<iTableProps<any>> = ({
  tableHeadingCells,
  data,
  renderTableItem,
  order,
  containerClassName,
  tableProps,
  tableHeadProps,
  tableRowProps,
  tableSortableCellProps,
  tableSortLabelProps,
  tableSortableHeadingTextProps,
  tableCellProps,
  tableHeadingTextProps,
  tableBodyProps,
  withPagination = false,
  paginationProps,
  loaderProps,
  emptyDataMessage,
}) => {
  const isDataEmpty = !loaderProps?.loading && data.length === 0;

  const renderLoader = React.useCallback(() => {
    if (!loaderProps) return null;
    return new Array(loaderProps.rowCount).fill(0).map((_, rowIndex) =>
      loaderProps.renderLoaderItem ? (
        loaderProps.renderLoaderItem(rowIndex)
      ) : (
        <TableRow key={`table-loader-row-${rowIndex}`} controlledCells>
          {tableHeadingCells.map((tableCol, colIndex) => (
            <TableCell
              key={`table-loader-col-${colIndex}`}
              {...tableCol.tableCellProps}
            >
              <Skeleton variant="text" height={loaderProps.rowHeight} />
            </TableCell>
          ))}
        </TableRow>
      )
    );
  }, [loaderProps, tableHeadingCells]);

  const renderEmptyDataMessage = React.useCallback(() => {
    return (
      <TableRow controlledCells>
        <TableCell
          colSpan={tableHeadingCells.length}
          align="center"
          className="border-transparent"
        >
          {emptyDataMessage ? (
            <EmptyDataMessage {...emptyDataMessage} />
          ) : (
            <EmptyDataMessage
              title="No data"
              message="There is no data to show."
            />
          )}
        </TableCell>
      </TableRow>
    );
  }, [emptyDataMessage, tableHeadingCells]);

  return (
    <Col fullHeight>
      <Col
        className={clsx(
          "overflow-auto flex-1 h-full justify-between",
          containerClassName
        )}
      >
        <MuiTable
          {...tableProps}
          stickyHeader
          className={clsx(tableProps?.className, isDataEmpty && "h-full")}
        >
          <TableHead {...tableHeadProps}>
            <TableRow controlledCells {...tableRowProps}>
              {tableHeadingCells.map(
                (tableHeadingCell: iTableHeadingCell, index: number) => {
                  if (tableHeadingCell.isSortable) {
                    if (!tableHeadingCell.sortIconPosition) {
                      tableHeadingCell.sortIconPosition =
                        SortIconPosition.RIGHT;
                    }
                    return (
                      <TableCell
                        key={tableHeadingCell.id}
                        {...tableSortableCellProps}
                        {...tableHeadingCell.tableCellProps}
                        className={clsx(
                          tableSortableCellProps?.className,
                          tableHeadingCell.tableCellProps?.className
                        )}
                      >
                        <TableSortLabel
                          hideSortIcon
                          onClick={tableHeadingCell.handleSort}
                          {...tableSortLabelProps}
                        >
                          <Row flex={1}>
                            {tableHeadingCell.sortIconPosition ===
                              SortIconPosition.LEFT && (
                              <SortIcon
                                sort={order ? order[index] : undefined}
                              />
                            )}
                            <Text
                              variant="bodySemiBold"
                              {...tableSortableHeadingTextProps}
                              className={clsx(
                                tableSortableHeadingTextProps?.className
                              )}
                            >
                              {tableHeadingCell.content}
                            </Text>

                            {tableHeadingCell.sortIconPosition ===
                              SortIconPosition.RIGHT && (
                              <SortIcon
                                sort={order ? order[index] : undefined}
                              />
                            )}
                          </Row>
                        </TableSortLabel>
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell
                        key={tableHeadingCell.id}
                        {...tableCellProps}
                        {...tableHeadingCell.tableCellProps}
                        className={clsx(
                          tableCellProps?.className,
                          tableHeadingCell.tableCellProps?.className
                        )}
                      >
                        <Text
                          variant="bodySemiBold"
                          {...tableHeadingTextProps}
                          className={clsx(tableHeadingTextProps?.className)}
                        >
                          {tableHeadingCell.content}
                        </Text>
                      </TableCell>
                    );
                  }
                }
              )}
            </TableRow>
          </TableHead>

          <TableBody {...tableBodyProps}>
            {loaderProps?.loading
              ? renderLoader()
              : isDataEmpty
              ? renderEmptyDataMessage()
              : data.map(renderTableItem)}
          </TableBody>
        </MuiTable>
      </Col>
      {withPagination && paginationProps ? (
        <TableFooter stickyFooter={paginationProps.sticky}>
          <TablePagination
            page={paginationProps.page}
            count={Math.ceil(paginationProps.total / paginationProps.perPage)}
            onPageChange={paginationProps.onPageChange}
          />
        </TableFooter>
      ) : null}
    </Col>
  );
};

export default Table;
