import { TableCell, TableRow } from "@mui/material";
import { Meta } from "@storybook/react";
import { orderBy } from "lodash";
import * as React from "react";
import { Text } from "../../core";
import Table from "./Table";
import { Order, iTableHeadingCell, iRenderTableRowItemHandler } from "./types";

export default {
  title: "Components/Data Grid",
  component: Table,
} as Meta;

interface iFood {
  id: string;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

export const SimpleTable: React.VFC = () => {
  const tableHeadingCells: iTableHeadingCell[] = [
    { id: "name", content: "Dessert (100g serving)" },
    { id: "calories", content: "Calories" },
    { id: "Fat", content: "Fat (g)" },
    { id: "carbs", content: "Carbs (g)" },
    { id: "protein", content: "Protein (g)" },
  ];

  const tableData: iFood[] = [
    {
      id: "Frozen yoghurt",
      name: "Frozen yoghurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
    },
    {
      id: "Ice cream sandwich",
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
    },
    {
      id: "Eclair",
      name: "Eclair",
      calories: 262,
      fat: 16.0,
      carbs: 24,
      protein: 6.0,
    },
    {
      id: "Cupcake",
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
    },
    {
      id: "Gingerbread",
      name: "Gingerbread",
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
    },
  ];

  const renderRow: iRenderTableRowItemHandler<iFood> = (row) => {
    return (
      <TableRow key={row.id}>
        <TableCell>
          <Text variant="bodyRegular">{row.name}</Text>
        </TableCell>
        <TableCell>
          <Text variant="bodyRegular">{row.calories}</Text>
        </TableCell>
        <TableCell>
          <Text variant="bodyRegular">{row.fat}</Text>
        </TableCell>
        <TableCell>
          <Text variant="bodyRegular">{row.carbs}</Text>
        </TableCell>
        <TableCell>
          <Text variant="bodyRegular">{row.protein}</Text>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Table
      tableHeadingCells={tableHeadingCells}
      data={tableData}
      renderTableItem={renderRow}
    />
  );
};

export const SortableTable: React.VFC = () => {
  const [rows, setRows] = React.useState<iFood[]>([
    {
      id: "Cupcake",
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
    },
    {
      id: "Donut",
      name: "Donut",
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
    },
    {
      id: "Eclair",
      name: "Eclair",
      calories: 262,
      fat: 16.0,
      carbs: 24,
      protein: 6.0,
    },
    {
      id: "Frozen yoghurt",
      name: "Frozen yoghurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
    },
    {
      id: "Gingerbread",
      name: "Gingerbread",
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
    },
    {
      id: "Honeycomb",
      name: "Honeycomb",
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
    },
    {
      id: "Ice cream sandwich",
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
    },
    {
      id: "Jelly Bean",
      name: "Jelly Bean",
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
    },
    {
      id: "KitKat",
      name: "KitKat",
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7.0,
    },
    {
      id: "Lollipop",
      name: "Lollipop",
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0.0,
    },
    {
      id: "Marshmallow",
      name: "Marshmallow",
      calories: 318,
      fat: 0,
      carbs: 81,
      protein: 2.0,
    },
    {
      id: "Nougat",
      name: "Nougat",
      calories: 360,
      fat: 19.0,
      carbs: 9,
      protein: 37.0,
    },
    {
      id: "Oreo",
      name: "Oreo",
      calories: 437,
      fat: 18.0,
      carbs: 63,
      protein: 4.0,
    },
  ]);

  const [order, setOrder] = React.useState<Array<Order | undefined>>(
    Array(5).fill(undefined)
  );

  const tableHeadingCells: iTableHeadingCell[] = [
    { id: "name", content: "Dessert (100g serving)", isSortable: false },
    {
      id: "calories",
      content: "Calories",
      isSortable: true,
      handleSort: React.useCallback(
        (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
          event.preventDefault();
          const _rows = [...rows];
          const sortedRows = orderBy(
            _rows,
            ["calories"],
            [order[1] === Order.Asc ? "desc" : "asc"]
          );

          const _order = [...order];
          _order[1] = order[1] === Order.Asc ? Order.Desc : Order.Asc;

          setRows(sortedRows);
          setOrder(_order);
        },
        [order, rows]
      ),
    },
    {
      id: "fat",
      content: "Fat (g)",
      isSortable: true,
      handleSort: React.useCallback(
        (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
          event.preventDefault();
          const _rows = [...rows];
          const sortedData = orderBy(
            _rows,
            ["fat"],
            [order[2] === Order.Asc ? "desc" : "asc"]
          );

          const _order = [...order];
          _order[2] = _order[2] === Order.Asc ? Order.Desc : Order.Asc;

          setRows(sortedData);
          setOrder(_order);
        },
        [order, rows]
      ),
    },
    { id: "carbs", content: "Carbs (g)", isSortable: false },
    { id: "protein", content: "Protein (g)", isSortable: false },
  ];

  const renderRow: iRenderTableRowItemHandler<iFood> = (row) => {
    return (
      <TableRow key={row.id}>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.calories}</TableCell>
        <TableCell>{row.fat}</TableCell>
        <TableCell>{row.carbs}</TableCell>
        <TableCell>{row.protein}</TableCell>l
      </TableRow>
    );
  };

  return (
    <Table
      tableHeadingCells={tableHeadingCells}
      order={order}
      data={rows}
      renderTableItem={renderRow}
    />
  );
};