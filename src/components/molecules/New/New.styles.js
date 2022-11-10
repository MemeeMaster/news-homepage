import styled from "styled-components";

export const StyledH3 = styled.h3`
  font-size: 2em;
  color: ${({ theme }) => theme.colors.offWhite};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.softOrange};
  }
`;
