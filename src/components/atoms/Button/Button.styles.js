import styled from "styled-components";

export const StyledBtn = styled.button`
  padding: 1em 2em;
  color: ${({ theme }) => theme.colors.offWhite};
  background-color: ${({ theme }) => theme.colors.softRed};
  border: none;
  font-weight: bold;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }
`;
