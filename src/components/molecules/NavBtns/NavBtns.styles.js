import styled from "styled-components";
import mq from "../../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;

  ${mq[2]} {
    width: 40%;
  }
`;

export const NavBtn = styled.a`
  padding: 0.5em;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.softOrange};
  }
`;
