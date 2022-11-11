import React, { createContext, useState } from "react";

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

export const ScreenSizeContext = createContext({
  screenWidth: 0,
});

const ContextProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleWidthChange = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleWidthChange);

  return (
    <ContentContext.Provider value={HomeValues}>
      <ScreenSizeContext.Provider value={{ screenWidth }}>
        {children}
      </ScreenSizeContext.Provider>
    </ContentContext.Provider>
  );
};

export default ContextProvider;
