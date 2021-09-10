import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    spacing(num: number): number;
    colors: {
      background: string;
    };
  }
}

const defaultTheme: DefaultTheme = {
  spacing: (num) => num * 8,
  colors: {
    background: "#E5E6ED",
  },
};

export default defaultTheme;
