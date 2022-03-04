import styled from "@emotion/styled";
import { OutlinedInput } from "@mui/material";
import { pxToRem } from "../../../styles";
import { iSearchbarProps } from "./types";

export const StyledOutlinedInput = styled(OutlinedInput)<
  Partial<iSearchbarProps>
>(({ theme: { palette }, size }) => ({
  "&.MuiInputBase-root": {
    height: size === "small" ? pxToRem(38) : pxToRem(48),
    backgroundColor: palette.interface.black["50"],

    "& .MuiOutlinedInput-notchedOutline": {
      borderStyle: "none",
    },
  },
}));
