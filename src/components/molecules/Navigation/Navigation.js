import React from "react";
import { Wrapper } from "./Navigation.styles";
import Logo from "../../atoms/Logo/Logo";
import NavBars from "../../atoms/NavBars/NavBars";

const Navigation = () => {
  return (
    <Wrapper>
      <Logo />
      <NavBars />
    </Wrapper>
  );
};

export default Navigation;
