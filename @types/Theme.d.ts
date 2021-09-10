import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    spacing(num: number): number;
    colors: {
      background: string;
      text: {
        contrast: string;
        secondary: string;
      };
    };
    fontWeight: {
      thin: number;
      medium: number;
      bold: number;
    };
    font: {
      title: string;
      text: string;
    };
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }
}
