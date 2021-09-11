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
    bold: 700,
  },
  fontSize: {
    small: '16px',
    subtitle: '24px',
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
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

export default darkTheme;
