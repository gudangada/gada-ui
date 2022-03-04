import * as React from "react";
import ConfirmationDialog from "./ConfirmationDialog";
import useDialogState from "../Dialog/useDialogState";
import { iConfirmationDialogOptions } from "./types";

const useConfirmationDialog = () => {
  const { isOpen, toggleIsOpen, setOpen } = useDialogState();

  const [options, setOptions] = React.useState<iConfirmationDialogOptions>({
    title: "",
    content: "",
  });

  const showConfirmationDialog = React.useCallback(
    (dialogOptions: iConfirmationDialogOptions) => {
      setOptions(dialogOptions);
      setOpen(true);
    },
    [setOpen, setOptions]
  );

  const DialogComponent = React.useMemo(() => {
    return (
      <ConfirmationDialog
        open={isOpen}
        withCloseButton
        onClickCloseButton={toggleIsOpen}
        {...options}
      />
    );
  }, [options, isOpen, toggleIsOpen]);

  return {
    isOpen,
    toggleIsOpen,
    setOpen,
    showConfirmationDialog,
    Dialog: DialogComponent,
  };
};

export default useConfirmationDialog;
