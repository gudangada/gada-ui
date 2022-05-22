import * as React from "react";
import { Meta } from "@storybook/react";
import { Palette as ColorPalette } from "./Palette.styles";
import {
  Table,
  iRenderTableRowItemHandler,
  TableRow,
  TableCell,
  CopyToClipboardButton,
} from "../../components";
import { ObjectUtils } from "../../utils";

export default {
  title: "Global/Palette",
} as Meta;

type iPaletteItemProps = {
  colorKey: string;
  color: string;
};

const PaletteItem: React.VFC<iPaletteItemProps> = ({ colorKey, color }) => {
  return (
    <TableRow controlledCells>
      <TableCell>
        <CopyToClipboardButton text={colorKey} />
      </TableCell>
      <TableCell>
        <CopyToClipboardButton text={color} />
      </TableCell>
      <TableCell>
        <input
          type="color"
          readOnly
          value={color}
          style={{
            width: 25,
            height: 25,
            borderRadius: 2,
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export const Palette: React.VFC = () => {
  let colorPalette: Record<string, string> = {};
  const keys = ObjectUtils.getKeys(ColorPalette, "", colorPalette);

  const renderPaletteItem: iRenderTableRowItemHandler<string> = (colorKey) => {
    return (
      <PaletteItem
        key={colorKey}
        colorKey={colorKey}
        color={colorPalette[colorKey]}
      />
    );
  };

  return (
    <Table
      tableHeadingCells={[
        { id: "color-key", content: "Palette Key" },
        { id: "color-code", content: "Color HEX" },
        { id: "color", content: "Color" },
      ]}
      data={keys}
      renderTableItem={renderPaletteItem}
    />
  );
};
