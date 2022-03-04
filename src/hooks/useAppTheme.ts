import { useTheme } from "@mui/material";
import { AppTheme } from "../styles";

const useAppTheme = () => {
  const theme = useTheme<AppTheme>();

  return theme;
};

export default useAppTheme;
