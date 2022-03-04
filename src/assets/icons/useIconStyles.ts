import * as React from "react";
import { useAppTheme } from "../../hooks";
import { getIconColor } from "./icon.util";
import { iIconProps } from "./types";

interface iUseIconStylesProps {
  color?: iIconProps["color"];
}

const useIconStyles = ({ color }: iUseIconStylesProps) => {
  const { palette } = useAppTheme();
  const [iconColor, setIconColor] = React.useState(
    getIconColor(color, palette)
  );

  React.useEffect(() => {
    setIconColor(getIconColor(color, palette));
  }, [color, palette]);

  return { iconColor };
};

export default useIconStyles;
