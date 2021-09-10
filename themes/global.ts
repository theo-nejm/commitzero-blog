import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    height: 100vh;
    width: 100vw;
  }
`;

export default GlobalStyle;
