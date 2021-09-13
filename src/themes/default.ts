import { DefaultTheme } from "styled-components";
import { defaultThemeConfigs } from "./global";

const defaultTheme: DefaultTheme = {
  name: "light",
  colors: {
    background: "#E5E6ED",
    text: {
      contrast: "#171c20",
      secondary: "rgba(23,28,32,0.5)",
    },
  },
  ...defaultThemeConfigs
};

export default defaultTheme;
