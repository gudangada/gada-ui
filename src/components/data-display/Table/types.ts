import {
  TableBodyProps,
  TableCellProps,
  TableHeadProps,
  TableProps as MuiTableProps,
  TableRowProps,
  TableSortLabelProps,
} from "@mui/material";
import * as React from "react";
import { iTextProps } from "../../core/Text";
import { iEmptyDataMessageProps } from "../EmptyDataMessage";

export type iRenderTableRowItemHandler<T> = (
  item: T,
  index: number
) => React.ReactNode;
export interface iTableProps<T = any> {
  tableHeadingCells: iTableHeadingCell[];
  data: T[];
  renderTableItem: iRenderTableRowItemHandler<T>;
  containerClassName?: string;
  order?: Array<Order | undefined>;
  tableProps?: MuiTableProps;
  tableHeadProps?: TableHeadProps;
  tableRowProps?: TableRowProps;
  tableSortableCellProps?: TableCellProps;
  tableSortLabelProps?: TableSortLabelProps;
  tableSortableHeadingTextProps?: iTextProps;
  tableCellProps?: TableCellProps;
  tableHeadingTextProps?: iTextProps;
  tableBodyProps?: TableBodyProps;
  withPagination?: boolean;
  paginationProps?: iPaginationProps;
  loaderProps?: iTableLoaderProps;
  emptyDataMessage?: iEmptyDataMessageProps;
}

export interface iTableLoaderProps {
  loading: boolean;
  rowHeight: number;
  rowCount: number;
  renderLoaderItem?: (rowIndex: number) => React.ReactNode;
}

export interface iPaginationProps {
  total: number;
  page: number;
  perPage: number;
  sticky?: boolean;
  onPageChange: (newPage: number) => void;
}

export interface iTableHeadingCell {
  id: string;
  content: React.ReactNode;
  isSortable?: boolean;
  sortIconPosition?: SortIconPosition;
  handleSort?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  tableCellProps?: TableCellProps;
}

export enum SortIconPosition {
  LEFT = "left",
  RIGHT = "right",
}

export enum Order {
  Asc = "asc",
  Desc = "desc",
}

export interface iContacts {
  id: number;
  name: string;
  address: string;
  occupation: string;
}

export interface iTablePaginationProps
  extends Omit<iPaginationProps, "total" | "perPage"> {
  page: number;
  count: number;
  onPageChange: (newPage: number) => void;
}

export interface iTableRowProps extends TableRowProps {
  children:
    | React.ReactNode
    | (({ isHovered }: { isHovered: boolean }) => React.ReactElement);
  rowKey?: string;
  controlledCells?: boolean;
}

export interface iTableCellProps extends TableCellProps {}
