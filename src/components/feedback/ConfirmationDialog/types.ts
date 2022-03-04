import * as React from "react";
import { iButtonProps } from "../../core";
import {
  iDialogActionsProps,
  iDialogContentProps,
  iDialogProps,
  iDialogTitleProps,
} from "../Dialog";

interface iDialogButtonProps extends Omit<iButtonProps, "variant"> {
  variant?: iButtonProps["variant"];
}

interface iActionButtonProps {
  title: string;
  onClick: iButtonProps["onClick"];
  buttonProps?: iDialogButtonProps;
}

export interface iConfirmationDialogProps {
  open: boolean;
  onClose?: VoidFunction;
  title?: string | React.ReactNode;
  content: string | React.ReactNode;
  withCloseButton?: boolean;
  onClickCloseButton?: iButtonProps["onClick"];
  withResetButton?: boolean;
  onClickResetButton?: iButtonProps["onClick"];
  primaryActionButton?: iActionButtonProps;
  secondaryActionButton?: iActionButtonProps;
  dialogProps?: Omit<iDialogProps, "open">;
  dialogTitleProps?: iDialogTitleProps;
  dialogContentProps?: iDialogContentProps;
  dialogActionsProps?: iDialogActionsProps;
}

type RequiredProps = "title" | "content";

export interface iConfirmationDialogOptions
  extends Partial<Omit<iConfirmationDialogProps, RequiredProps>>,
    Required<Pick<iConfirmationDialogProps, RequiredProps>> {}
