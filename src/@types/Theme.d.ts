import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    name: string;
    colors: {
      background: string;
      text: {
        contrast: string;
        secondary: string;
      };
    };


    
  };
  export interface Theme {
    spacing(num: number): number;
    alpha(color: string, opacity: number): string;
    fontWeight: {
      thin: number;
      medium: number;
      author: number;
      title: number;
      bold: number;
    };
    font: {
      title: string;
      text: string;
    };
    breakpoints: {
      xs: number;
      sm: number;
      post: number;
      md: number;
      lg: number;
      xl: number;
    };
    fontSize: {
      text: string;
      title: string;
      highlightedTitle: string;
      postCardTitle: string;
      subtitle: string;
      small: string;
    };
  }
}
