import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Button, Row } from "../../components";
import { EditIcon, GadaIcon, iIconProps, PlusIcon, SortIcon } from ".";
import { ExpandIcon } from "./ExpandIcon";

export default {
  title: "Assets",
  component: EditIcon,
} as Meta;

const Template: Story<iIconProps> = ({ color, ...props }) => {
  const [isExpanded, setExpanded] = React.useState(false);

  return (
    <Row spacing={16}>
      <GadaIcon color={color} {...props} />
      <EditIcon color={color} {...props} />
      <PlusIcon color={color} {...props} />
      <SortIcon color={color} {...props} />
      <SortIcon color={color} sort="desc" {...props} />
      <SortIcon color={color} sort="asc" {...props} />
      <Button
        variant="icon-small"
        color="primary"
        onClick={() => setExpanded((cur) => !cur)}
      >
        <ExpandIcon color={color} isExpanded={isExpanded} {...props} />
      </Button>
    </Row>
  );
};

export const Icons = Template.bind({});
Icons.parameters = { controls: { include: ["color"] } };
Icons.argTypes = {
  color: {
    defaultValue: "default",
    control: {
      type: "select",
      options: ["default", "primary", "secondary", "white", "destructive"],
    },
  },
};
Icons.args = {
  color: "default",
};
