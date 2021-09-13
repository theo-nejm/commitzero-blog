import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  name: "light",
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
    background: "#E5E6ED",
    text: {
      contrast: "#171c20",
      secondary: "rgba(23,28,32,0.5)",
    },
  },
  fontWeight: {
    thin: 100,
    medium: 400,
    author: 500,
    title: 600,
    bold: 700,
  },
  font: {
    title: "Poppins, sans-serif",
    text: "Poppins, sans-serif",
  },
  fontSize: {
    small: '16px',
    subtitle: '20px',
    highlightedTitle: '40px',
    postCardTitle: '24px',
    title: '40px',
    text: '16px',
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

export default defaultTheme;
