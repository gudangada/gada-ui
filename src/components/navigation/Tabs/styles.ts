import styled from "@emotion/styled";
import { Tab, TabScrollButtonProps } from "@mui/material";
import { ArrowDownIcon } from "../../../assets";
import { pxToRem } from "../../../styles";
import { Button, Text } from "../../core";
import { iTabProps } from "./types";

export const StyledTab = styled(Tab)<Omit<iTabProps, "label">>(
  ({ theme: { palette }, maxWidth }) => ({
    maxWidth: maxWidth ?? "auto",
    backgroundColor: palette.interface.white,
  })
);

export const TabLabel = styled(Text)({
  width: "100%",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

export const TabScrollButtonContainer = styled.div<
  Partial<TabScrollButtonProps>
>(({ direction, disabled }) => ({
  display: disabled ? "none" : "flex",
  width: pxToRem(104),
  height: "100%",
  position: "absolute",
  zIndex: 1,
  ...(direction === "left"
    ? {
        left: 0,
        justifyContent: "flex-start",
        background:
          "linear-gradient(270deg, rgba(243, 243, 243, 0) 0%, #F3F3F3 76.56%)",
      }
    : {
        right: 0,
        justifyContent: "flex-end",
        background:
          "linear-gradient(90deg, rgba(243, 243, 243, 0) 0%, #F3F3F3 76.56%)",
      }),
}));

export const ScrollButton = styled(Button)<Partial<TabScrollButtonProps>>(
  ({ theme: { palette }, disabled, direction }) => ({
    backgroundColor: disabled
      ? palette.interface.black[200]
      : palette.interface.white,
    transform: `rotate(${direction === "left" ? 270 : 90}deg)`,
    "&:hover": {
      backgroundColor: palette.interface.black[50],
    },
    "&:active": {
      backgroundColor: palette.interface.black[100],
    },
  })
);

export const ArrowIcon = styled(ArrowDownIcon)<Partial<TabScrollButtonProps>>(
  () => ({})
);
