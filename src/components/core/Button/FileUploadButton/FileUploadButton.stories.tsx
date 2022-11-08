import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { iFileChangeHandler, iFileUploadButtonProps } from "./types";
import FileUploadButtonUI from "./FileUploadButton";

export default {
  title: "Components/Core",
  component: FileUploadButtonUI,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<iFileUploadButtonProps> = ({
  action,
  onChange,
  url,
  ...props
}) => {
  const [file, setFile] = React.useState<File | undefined | null>(null);
  const [fileUrl, setFileUrl] = React.useState<string | undefined | null>(null);

  const onChangeFile: iFileChangeHandler = (newFile, url) => {
    setFile(newFile);
    setFileUrl(url);
  };

  return (
    <FileUploadButtonUI
      {...props}
      action={{ ...action, description: file?.name }}
      url={Boolean(url) ? url : fileUrl}
      onChange={onChangeFile}
    />
  );
};

//👇 Each story then reuses that template
export const FileUploadButton = Template.bind({});

FileUploadButton.parameters = {
  controls: {
    include: [
      "title",
      "description",
      "action",
      "variant",
      "errorText",
      "url",
      "accept",
    ],
  },
};
FileUploadButton.argTypes = {
  variant: {
    control: {
      type: "select",
      options: ["default", "compact"],
    },
  },
};
FileUploadButton.args = {
  title: "Banner",
  description: "Campaign Banner",
  action: { action: "Upload Image" },
  variant: "default",
  errorText: "",
  url: "",
  accept: ".jpg,.png",
};
