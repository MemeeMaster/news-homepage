import React from "react";
import { GlobalStyle } from "../../assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../../assets/styles/theme";
import Navigation from "../../components/molecules/Navigation/Navigation";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
    </ThemeProvider>
  );
};

export default Root;
