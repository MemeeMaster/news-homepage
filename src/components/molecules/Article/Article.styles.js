import styled from "styled-components";
import mq from "../../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  padding: 1em;
  width: 100%;
  display: flex;
  flex-direction: row;

  img {
    height: 100%;
    width: 20%;
    margin-right: 2em;
    object-fit: cover;
  }
`;

export const StyledH2 = styled.h2`
  margin: 0;
  font-size: 3em;
  color: ${({ theme }) => theme.colors.grayishBlue};
`;

export const Subtitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.softRed};
    cursor: pointer;
  }
`;

export const TextWrap = styled.div`
  width: 80%;
`;
