import styled from "styled-components";
import mq from "../../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  padding: 3em;
  margin: 3em 1.5em 3em;
  background-color: ${({ theme }) => theme.colors.darkBlue};

  ${mq[2]} {
    grid-column: 3/-1;
    grid-row: 2/3;
  }
`;

export const StyledTitle = styled.h2`
  margin: 0;
  font-size: 3em;
  color: ${({ theme }) => theme.colors.softOrange};
`;
