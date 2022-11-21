import React from "react";
import { ThemeProvider } from "styled-components";
import themeDefault from "../src/stories/particles/themeDefault";
import GlobalStyles from "../src/stories/particles/globalStyles";
import "../src/stories/docs/index.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
