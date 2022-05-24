import * as React from "react";
import { iChipProps } from "./types";
import { StyledChip } from "./styles";

const Chip: React.FC<iChipProps> = ({
  clickable,
  onClick = undefined,
  onDelete = undefined,
  disabled = false,
  ...props
}) => {
  return (
    <StyledChip
      clickable={clickable}
      onClick={!clickable ? undefined : onClick}
      onDelete={disabled ? undefined : onDelete}
      disabled={disabled}
      {...props}
    />
  );
};

export default Chip;
