import * as React from "react";
import { Meta, Story } from "@storybook/react";
import ConfirmationDialogUI from "./ConfirmationDialog";
import { iConfirmationDialogProps } from "./types";
import { Button } from "../../core";

export default {
  title: "Components/Feedback",
  component: ConfirmationDialogUI,
} as Meta;

const Template: Story<iConfirmationDialogProps> = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button variant="primary" color="primary" onClick={() => setOpen(true)}>
        Open Confirmation Dialog
      </Button>
      <ConfirmationDialogUI
        open={open}
        onClose={() => setOpen(false)}
        withCloseButton
        onClickCloseButton={() => setOpen(false)}
        title="Do you want to proceed?"
        content="Are you sure you want to proceed?"
        primaryActionButton={{
          title: "Confirm",
          onClick: () => setOpen(false),
        }}
        secondaryActionButton={{
          title: "Cancel",
          onClick: () => setOpen(false),
          buttonProps: { color: "destructive" },
        }}
      />
    </>
  );
};

export const ConfirmationDialog = Template.bind({});
