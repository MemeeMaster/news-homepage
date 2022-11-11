import React, { useContext } from "react";
import { ScreenSizeContext } from "../../../providers/ContextProvider";
import { Wrapper } from "./Navigation.styles";
import Logo from "../../atoms/Logo/Logo";
import NavBars from "../../atoms/NavBars/NavBars";
import NavBtns from "../NavBtns/NavBtns";

const Navigation = () => {
  const { screenWidth } = useContext(ScreenSizeContext);

  return (
    <Wrapper>
      <Logo />
      {screenWidth >= 768 ? <NavBtns /> : <NavBars />}
    </Wrapper>
  );
};

export default Navigation;
