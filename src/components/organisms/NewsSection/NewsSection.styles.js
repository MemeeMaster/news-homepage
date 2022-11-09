import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.5em;
  margin: 1em;
  background-color: ${({ theme }) => theme.colors.darkBlue};
`;

export const StyledTitle = styled.h2`
  margin: 0;
  font-size: 3em;
  color: ${({ theme }) => theme.colors.softOrange};
`;
