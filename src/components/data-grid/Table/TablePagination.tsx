import {
  PaginationRenderItemParams,
  PaginationItem,
  Pagination,
} from "@mui/material";
import * as React from "react";
import { iTablePaginationProps } from "./types";

const TablePagination: React.FC<iTablePaginationProps> = ({
  count,
  page,
  onPageChange,
  ...restProps
}) => {
  const renderPaginationItem = (item: PaginationRenderItemParams) => {
    const { type } = item;
    if (type === "page") {
      return <PaginationItem {...item} />;
    }
    return <PaginationItem {...item} />;
  };

  return (
    <Pagination
      page={page}
      onChange={(_: React.ChangeEvent<unknown>, newPage: number) =>
        onPageChange(newPage)
      }
      count={count}
      renderItem={renderPaginationItem}
      siblingCount={0}
      {...restProps}
    />
  );
};

export default TablePagination;
