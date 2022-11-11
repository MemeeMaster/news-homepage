import React from "react";
import { GlobalStyle } from "../../assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../../assets/styles/theme";
import Navigation from "../../components/molecules/Navigation/Navigation";
import Main from "../../components/organisms/Main/Main";
import NewsSection from "../../components/organisms/NewsSection/NewsSection";
import ArticlesSection from "../../components/organisms/ArticlesSection/ArticlesSection";
import ContextProvider from "../../providers/ContextProvider";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContextProvider>
        <Navigation />
        <Main />
        <NewsSection />
        <ArticlesSection />
      </ContextProvider>
    </ThemeProvider>
  );
};

export default Root;
