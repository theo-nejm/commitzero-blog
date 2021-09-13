import { DefaultTheme } from "styled-components";

const darkTheme: DefaultTheme = {
  name: "dark",

  spacing: (num) => num * 8,
  alpha: (color: string, opacity: number) => {
    return (
      color +
      Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
        .toString(16)
        .toUpperCase()
    );
  },

  colors: {
    background: "#171C20",
    text: {
      contrast: "#fafafa",
      secondary: "rgba(250,250,250,0.5)",
    },
  },
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
    text: '20px',
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
};

export default darkTheme;
