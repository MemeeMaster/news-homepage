import styled from "styled-components";
import mq from "../../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  padding: 0 1.5em 1.5em;

  ${mq[2]} {
    padding: 3em;
    grid-column: 1/3;
    grid-row: 2/3;
  }
`;

export const ImageHeader = styled.img`
  width: 100%;
  margin-bottom: 3em;
`;

export const ContentWrapper = styled.div`
  ${mq[2]} {
    display: flex;
    margin-left: 1em;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      p {
        margin-top: 0;
      }
    }
  }
`;
