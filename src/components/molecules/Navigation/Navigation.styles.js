import styled from "styled-components";
import mq from "../../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${mq[2]} {
    grid-column: 1/-1;
    grid-row: 1/2;
  }
`;
