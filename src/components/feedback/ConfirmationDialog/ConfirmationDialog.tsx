import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";
import { CrossOutlinedIcon } from "../../../assets";
import { Button, Text } from "../../core";
import { Row } from "../../layout";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  iDialogProps,
} from "../Dialog";
import { iConfirmationDialogProps } from "./types";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmationDialog: React.VFC<iConfirmationDialogProps> = ({
  open,
  onClose,
  title,
  content,
  withCloseButton = false,
  onClickCloseButton,
  withResetButton = false,
  onClickResetButton,
  primaryActionButton,
  secondaryActionButton,
  dialogProps,
  dialogTitleProps,
  dialogContentProps,
  dialogActionsProps,
}) => {
  const handleClose: iDialogProps["onClose"] = React.useCallback(
    (_, reason) => {
      if (reason === "backdropClick" || reason === "escapeKeyDown") return;
      onClose?.();
    },
    [onClose]
  );

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="sm"
      TransitionComponent={Transition}
      onClose={handleClose}
      onBackdropClick={onClose}
      {...dialogProps}
    >
      {title && (
        <DialogTitle {...dialogTitleProps}>
          <Row spacing={16} vCenter justifyContent="space-between">
            {typeof title === "string" ? (
              <Text variant="heading4SemiBold">{title}</Text>
            ) : (
              title
            )}
            <Row spacing={8} className="-mr-2">
              {withResetButton && (
                <Button
                  variant="text"
                  color="primary"
                  size="small"
                  onClick={onClickResetButton}
                >
                  Reset
                </Button>
              )}
              {withCloseButton && (
                <Button
                  variant="icon-small"
                  color="primary"
                  size="small"
                  onClick={onClickCloseButton}
                >
                  <CrossOutlinedIcon width={14} height={14} />
                </Button>
              )}
            </Row>
          </Row>
        </DialogTitle>
      )}
      <DialogContent className="pb-8" {...dialogContentProps}>
        {typeof content === "string" ? (
          <Text variant="bodyRegular">{content}</Text>
        ) : (
          content
        )}
      </DialogContent>
      {primaryActionButton || secondaryActionButton ? (
        <DialogActions {...dialogActionsProps}>
          {secondaryActionButton && (
            <Button
              onClick={secondaryActionButton.onClick}
              variant="outlined"
              color="primary"
              className="flex flex-1"
              {...secondaryActionButton.buttonProps}
            >
              {secondaryActionButton.title}
            </Button>
          )}
          {primaryActionButton && (
            <Button
              onClick={primaryActionButton.onClick}
              variant="primary"
              color="primary"
              className="flex flex-1"
              {...primaryActionButton.buttonProps}
            >
              {primaryActionButton.title}
            </Button>
          )}
        </DialogActions>
      ) : null}
    </Dialog>
  );
};

export default ConfirmationDialog;
