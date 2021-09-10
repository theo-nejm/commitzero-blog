import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  name: "light",
  spacing: (num) => num * 8,
  colors: {
    background: "#E5E6ED",
    text: {
      contrast: "#171c20",
      secondary: "rgba(23,28,32,0.5)",
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

export default defaultTheme;
