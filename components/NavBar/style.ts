import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  padding: ${({ theme }) => theme.spacing(2)}px;

  h1 {
    margin: 0;
    flex-grow: 1;
  }
`;

export const ThemeButton = styled.button`
  border: none;
  padding-inline-start: ${({ theme }) => theme.spacing(2)}px;
  padding-inline-end: ${({ theme }) => theme.spacing(2)}px;
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  color: ${({ theme }) => theme.colors.text.contrast};

  background-color: ${({ theme }) =>
    theme.alpha(theme.colors.text.contrast, 0.1)};
  &:hover {
    background-color: ${({ theme }) =>
      theme.alpha(theme.colors.text.contrast, 0.2)};
  }
  &:active {
    background-color: ${({ theme }) =>
      theme.alpha(theme.colors.text.contrast, 0.3)};
  }

  cursor: pointer;
  transition: 0.2s ease;
`;
