import { TabScrollButtonProps } from "@mui/material";
import * as React from "react";
import { ArrowDownIcon } from "../../../assets";
import { Button } from "../../core";
import { ArrowIcon, ScrollButton, TabScrollButtonContainer } from "./styles";

const TabScrollButton: React.VFC<TabScrollButtonProps> = ({
  onClick,
  direction,
  orientation,
  disabled,
  className,
}) => {
  return (
    <TabScrollButtonContainer
      direction={direction}
      orientation={orientation}
      disabled={disabled}
    >
      <div onClick={onClick} className={className}>
        <ScrollButton
          variant="circular"
          color="primary"
          size="small"
          disabled={disabled}
          direction={direction}
        >
          <ArrowIcon color="default" />
        </ScrollButton>
      </div>
    </TabScrollButtonContainer>
  );
};

export default TabScrollButton;
