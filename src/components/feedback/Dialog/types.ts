import {
  DialogActionsProps,
  DialogContentProps,
  DialogProps,
  DialogTitleProps,
} from "@mui/material";
import { iButtonProps } from "../../core";

export interface iDialogProps extends DialogProps {}
export interface iDialogTitleProps extends DialogTitleProps {}
export interface iDialogContentProps extends DialogContentProps {}
export interface iDialogActionsProps extends DialogActionsProps {}

export interface useModalStateOptions {
  initialState?: boolean;
  customToggle?: iButtonProps["onClick"];
}
