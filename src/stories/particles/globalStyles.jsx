import { createGlobalStyle } from "styled-components";
import themeDefault from "./themeDefault";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "poppins", sans-serif;
}
body {
  background-color: ${(props) => themeDefault.primary}
};
`;

export default GlobalStyles;
