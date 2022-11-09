import React, { createContext } from "react";
import { GlobalStyle } from "../../assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../../assets/styles/theme";
import Navigation from "../../components/molecules/Navigation/Navigation";
import Main from "../../components/organisms/Main/Main";
import NewsSection from "../../components/organisms/NewsSection/NewsSection";

export const ContentContext = createContext({
  titleContent: "",
  pContent: "",
  btnContent: "",
});

const HomeValues = {
  titleContent: "The Bright Future of Web 3.0?",
  pContent:
    "We dive into the next evolution of the web that claims to put the power of the platforms back into hands of people. But is it really fulfilling its promise?",
  btnContent: "read more",
};

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <ContentContext.Provider value={HomeValues}>
        <Main />
        <NewsSection />
      </ContentContext.Provider>
    </ThemeProvider>
  );
};

export default Root;
