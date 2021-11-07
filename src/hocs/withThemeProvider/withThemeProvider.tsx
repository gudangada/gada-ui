import * as React from "react";
import { ThemeProvider } from "../../components/core/ThemeProvider";

const withThemeProvider = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => (props) => {
  return (
    <ThemeProvider>
      <Component {...props} />
    </ThemeProvider>
  );
};

export default withThemeProvider;
