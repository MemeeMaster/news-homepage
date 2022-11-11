import styled from "styled-components";
import mq from "../../../assets/styles/responsiveDesign";

export const StyledH2 = styled.h2`
  margin: 0;
  font-size: 4rem;
  font-weight: bold;

  ${mq[2]} {
    font-size: 6rem;
  }
`;
