import * as React from "react";
import { Meta, Story } from "@storybook/react";
import ButtonUI from "./Button";
import { iButtonProps } from "./types";
import {
  SpeedDialIcon,
  Stack,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";

export default {
  title: "Components/Core",
  component: ButtonUI,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<iButtonProps> = ({
  variant,
  color,
  disabled,
  style,
  ...props
}) => {
  const styles: React.CSSProperties = { flex: "0 0 content" };
  const [size, setSize] = React.useState<iButtonProps["size"]>("small");

  return (
    <Stack spacing={2} alignItems="center">
      <FormControl>
        <InputLabel id="demo-simple-select-label">Button Size</InputLabel>
        <Select
          labelId="size-label"
          id="size-select"
          value={size}
          label="Button Size"
          onChange={(evt) => setSize(evt.target.value as iButtonProps["size"])}
        >
          <MenuItem value={"small"}>Small</MenuItem>
          <MenuItem value={"large"}>Large</MenuItem>
        </Select>
      </FormControl>

      <Stack spacing={1} width={size === "large" ? "100%" : "auto"}>
        <Typography variant="h4" color="GrayText">
          Primary
        </Typography>
        <Stack
          direction={size === "large" ? "column" : "row"}
          alignItems="center"
          spacing={2}
        >
          <ButtonUI
            variant="primary"
            color="primary"
            size={size}
            style={{ ...styles, ...style }}
            {...props}
          >
            Primary
          </ButtonUI>
          <ButtonUI
            variant="outlined"
            color="primary"
            size={size}
            style={{ ...styles, ...style }}
            {...props}
          >
            Outlined
          </ButtonUI>
          <ButtonUI
            variant="text"
            color="primary"
            size={size}
            style={{ ...styles, ...style }}
            {...props}
          >
            Text
          </ButtonUI>
          <ButtonUI
            variant="circular"
            color="primary"
            size={size}
            style={{ ...styles, ...style }}
            {...props}
          >
            <SpeedDialIcon />
          </ButtonUI>
          <ButtonUI
            variant="fab"
            color="primary"
            startIcon={<SpeedDialIcon />}
            text="FAB Text"
            size={size}
            style={{ ...styles, ...style }}
            {...props}
          />
        </Stack>
      </Stack>

      <Stack spacing={1} width={size === "large" ? "100%" : "auto"}>
        <Typography variant="h4" color="GrayText">
          Destructive
        </Typography>
        <Stack
          direction={size === "large" ? "column" : "row"}
          alignItems="center"
          spacing={2}
        >
          <ButtonUI
            variant="primary"
            color="destructive"
            size={size}
            style={{ ...styles, ...style }}
            {...props}
          >
            Primary
          </ButtonUI>
          <ButtonUI
            variant="outlined"
            color="destructive"
            size={size}
            style={{ ...styles, ...style }}
            {...props}
          >
            Outlined
          </ButtonUI>
          <ButtonUI
            variant="text"
            color="destructive"
            size={size}
            style={{ ...styles, ...style }}
            {...props}
          >
            Text
          </ButtonUI>
          <ButtonUI
            variant="circular"
            color="destructive"
            size={size}
            style={{ ...styles, ...style }}
            {...props}
          >
            <SpeedDialIcon />
          </ButtonUI>
          <ButtonUI
            variant="fab"
            color="destructive"
            startIcon={<SpeedDialIcon />}
            text="FAB Text"
            size={size}
            style={{ ...styles, ...style }}
            {...props}
          />
        </Stack>
      </Stack>

      <Stack spacing={1} width={size === "large" ? "100%" : "auto"}>
        <Typography variant="h4" color="GrayText">
          Disabled
        </Typography>
        <Stack
          direction={size === "large" ? "column" : "row"}
          alignItems="center"
          spacing={2}
        >
          <ButtonUI
            variant="primary"
            color="primary"
            disabled
            size={size}
            style={{ ...styles, ...style }}
            {...props}
          >
            Primary
          </ButtonUI>
          <ButtonUI
            variant="outlined"
            color="primary"
            disabled
            size={size}
            style={{ ...styles, ...style }}
            {...props}
          >
            Outlined
          </ButtonUI>
          <ButtonUI
            variant="text"
            color="primary"
            disabled
            size={size}
            style={{ ...styles, ...style }}
            {...props}
          >
            Text
          </ButtonUI>
          <ButtonUI
            variant="circular"
            color="primary"
            disabled
            size={size}
            style={{ ...styles, ...style }}
            {...props}
          >
            <SpeedDialIcon />
          </ButtonUI>
          <ButtonUI
            variant="fab"
            color="primary"
            startIcon={<SpeedDialIcon />}
            text="FAB Text"
            size={size}
            style={{ ...styles, ...style }}
            disabled
            {...props}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

//👇 Each story then reuses that template
export const Button = Template.bind({});
Button.parameters = { controls: { include: ["onClick"] } };
Button.args = {
  color: "primary",
  onClick: () => alert("Clicked"),
};
