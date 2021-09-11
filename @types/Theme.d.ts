import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;

    spacing(num: number): number;
    alpha(color: string, opacity: number): string;

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
    fontSize: {
      text: string;
      title: string;
      subtitle: string;
      small: string;
    }
  }
}
