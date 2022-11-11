import React from "react";
import { Wrapper, NavBtn } from "./NavBtns.styles";

const NavBtns = () => {
  return (
    <Wrapper>
      <NavBtn>Home</NavBtn>
      <NavBtn>New</NavBtn>
      <NavBtn>Popular</NavBtn>
      <NavBtn>Trending</NavBtn>
      <NavBtn>Categories</NavBtn>
    </Wrapper>
  );
};

export default NavBtns;
