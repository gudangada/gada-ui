import { ThemeProvider } from "../src";
import "../src/styles/global.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: "",
      order: ["Global", "*"],
      locales: "",
    },
  },
};

export const decorators = [
  (Story, context) => (
    <ThemeProvider>
      <Story {...context} />
    </ThemeProvider>
  ),
];
