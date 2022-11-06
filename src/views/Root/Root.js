import React from "react";
import { GlobalStyle } from "../../assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../../assets/styles/theme";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <p>root</p>
    </ThemeProvider>
  );
};

export default Root;
