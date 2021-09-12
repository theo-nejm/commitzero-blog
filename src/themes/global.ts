import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.font.text};
    color: ${({theme}) => theme.colors.text.contrast};
    transition: .35s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.title};
    font-weight: ${({ theme }) => theme.fontWeight.title}
  }
`;

export default GlobalStyle;
