import * as React from "react";
import { iCopyToClipboardButtonProps } from "./types";
import { Button, Text } from "../../core";
import { SnackbarUtil } from "../SnackbarProvider";

const CopyToClipboardButton: React.VFC<iCopyToClipboardButtonProps> = ({
  text,
}) => {
  const copyToClipboard = async (str: string) => {
    if (!navigator || !navigator.clipboard) {
      SnackbarUtil.error("Copy to clipboard not supported");
      return;
    }
    navigator.clipboard.writeText(str).then(() => {
      SnackbarUtil.info("Copied to clipboard");
    });
  };

  return (
    <Button
      variant="text"
      color="primary"
      onClick={() => copyToClipboard(text)}
    >
      <Text variant="button" color="interface.blue.500">
        {text}
      </Text>
    </Button>
  );
};

export default CopyToClipboardButton;
