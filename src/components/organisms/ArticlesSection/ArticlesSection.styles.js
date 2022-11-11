import styled from "styled-components";
import mq from "../../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  ${mq[2]} {
    display: flex;
    grid-column: 1/-1;
    grid-row: 3/-1;
  }
`;
