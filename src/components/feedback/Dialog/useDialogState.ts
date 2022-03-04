import * as React from "react";
import { iButtonProps } from "../../core";
import { useModalStateOptions } from "./types";

const useDialogState = (options?: useModalStateOptions) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(
    options?.initialState ?? false
  );

  const toggleIsOpen: iButtonProps["onClick"] = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (options?.customToggle) {
        options.customToggle(event);
      } else {
        event.preventDefault();
        setIsOpen((isOpen) => !isOpen);
      }
    },
    [options]
  );

  return { isOpen, toggleIsOpen, setOpen: setIsOpen };
};

export default useDialogState;
