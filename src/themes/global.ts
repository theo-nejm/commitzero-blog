import { createGlobalStyle, Theme } from "styled-components";

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
    color: ${({ theme }) => theme.colors.text.contrast};
    transition: .35s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.title};
    font-weight: ${({ theme }) => theme.fontWeight.title}
  }
`;

export default GlobalStyle;

export const defaultThemeConfigs: Theme = {
  spacing: (num) => num * 8,
  fontWeight: {
    thin: 100,
    medium: 400,
    author: 500,
    title: 600,
    bold: 700,
  },
  fontSize: {
    small: '16px',
    subtitle: '20px',
    highlightedTitle: '40px',
    postCardTitle: '24px',
    title: '40px',
    text: '16px',
  },
  font: {
    title: "Poppins, sans-serif",
    text: "Poppins, sans-serif",
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    post: 840,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  alpha: (color: string, opacity: number) => {
    return (
      color +
      Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
        .toString(16)
        .toUpperCase()
    );
  },
}
