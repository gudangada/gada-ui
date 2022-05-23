import * as React from "react";
import { Meta } from "@storybook/react";
import { Palette as ColorPalette } from "./Palette.styles";
import {
  Table,
  iRenderTableRowItemHandler,
  TableRow,
  TableCell,
  CopyToClipboardButton,
  Col,
  Text,
  Alert,
} from "../../components";
import { ObjectUtils } from "../../utils";
import { HighlightedText } from "../../story-components/HighlightedText";
import { linkTo } from "@storybook/addon-links";

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
            width: 50,
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
    <Col spacing={32}>
      <Col spacing={16}>
        <Text variant="bodySemiBold">
          The Gada palette exposes following colors that you can use to
          customize your components.
        </Text>
        <Alert variant="standard" severity="info">
          <HighlightedText
            text="You can use Key value to set color of the Text component by passing it to color prop of Text component."
            highlight={["Key", "Text"]}
            links={[() => {}, linkTo("components-core--text")]}
          />
        </Alert>
      </Col>
      <Table
        tableHeadingCells={[
          { id: "color-key", content: "Key" },
          { id: "color-code", content: "HEX" },
          { id: "color", content: "Color" },
        ]}
        data={keys}
        renderTableItem={renderPaletteItem}
      />
    </Col>
  );
};
