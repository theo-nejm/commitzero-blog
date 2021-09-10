import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name:string
    spacing(num: number): number;
    colors: {
      background: string;
      text: {
        contrast: string;
        secondary: string;
      }
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
  }
}
