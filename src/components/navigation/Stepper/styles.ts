import styled from "@emotion/styled";
import { StepIconProps } from "@mui/material";

interface iStepIconUI extends Partial<StepIconProps> {}

export const StepIconRoot = styled("div")<iStepIconUI>(
  ({ theme: { palette }, active }) => ({
    color: palette.interface.black[200],
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(active && {
      color: palette.interface.teal[500],
    }),
  })
);

export const StyledStepIcon = styled("div")<iStepIconUI>(
  ({ theme: { palette }, active, error }) => ({
    width: 24,
    height: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: active
      ? palette.interface.teal[500]
      : palette.interface.black[200],
    ...(error && { backgroundColor: palette.interface.red[500] }),

    "& .MuiTypography-root": {
      color: active ? palette.interface.white : palette.interface.black[400],
      ...(error && {
        color: palette.interface.white,
      }),
    },
  })
);
