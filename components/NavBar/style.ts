import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  padding: ${({ theme }) => theme.spacing(2)}px;
  align-items: center;
  justify-content: space-between;

  > a {
    text-decoration: none;
    
    > h1 {
      margin: 0;
      color: ${({ theme }) => theme.colors.text.contrast};
    }
  }
`;

export const ThemeButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  color: ${({ theme }) => theme.colors.text.contrast};
  height: 2.5rem;
  width: 2.5rem;

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
