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
  font: {
    title: "Poppins, sans-serif",
    text: "Open sans, sans-serif",
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
