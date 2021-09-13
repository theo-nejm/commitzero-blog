import { DefaultTheme } from "styled-components";
import { defaultThemeConfigs } from "./global";

const darkTheme: DefaultTheme = {
  name: "dark",
  colors: {
    background: "#171C20",
    text: {
      contrast: "#fafafa",
      secondary: "rgba(250,250,250,0.5)",
    },
  },
  ...defaultThemeConfigs
};

export default darkTheme;
