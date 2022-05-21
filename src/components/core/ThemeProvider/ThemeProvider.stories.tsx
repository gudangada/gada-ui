import * as React from "react";
import { Meta } from "@storybook/react";
import ThemeProviderUI from "./ThemeProvider";
import { iGadaThemeProviderProps } from "./types";
import { Col, Row, Text } from "../../core";
import { useSnackbar } from "../../feedback";
import { Button } from "../Button";

export default {
  title: "Components/Core",
  component: ThemeProviderUI,
} as Meta<iGadaThemeProviderProps>;

const App: React.VFC = () => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Col
      sx={{
        borderWidth: 1,
        borderRadius: 2,
        minHeight: 240,
        padding: 2,
        backgroundColor: "#f3f3f3",
      }}
      spacing={16}
    >
      <Text variant="bodyRegular">Some content</Text>

      <Row hCenter vCenter fullWidth>
        <Button
          variant="primary"
          color="primary"
          onClick={() => enqueueSnackbar("Hello Snackbar")}
        >
          Show Snackbar
        </Button>
      </Row>
    </Col>
  );
};

export const ThemeProvider: React.VFC<iGadaThemeProviderProps> = (props) => {
  return (
    <Col spacing={32}>
      <Text variant="bodySemiBold">
        This component uses Gada Design System theme and applies it to the
        entire React tree that it is wrapping around. It should preferably be
        used at the root of your component tree - preferebly wrap your entire
        App with it.
      </Text>
      <ThemeProviderUI {...props}>
        <App />
      </ThemeProviderUI>
    </Col>
  );
};
