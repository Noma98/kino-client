import 'styled-components';
export type ColorType =
  | 'main'
  | 'mainLight'
  | 'mainDark'
  | 'secondary'
  | 'bgDark'
  | 'gray'
  | 'grayLight'
  | 'grayDark'
  | 'black'
  | 'white'
  | 'red';
export type FontSizeType = 's' | 'm' | 'l' | 'xl' | 'xxl';
export type FontWeightType = 300 | 400 | 500 | 600 | 700;
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      mainLight: string;
      mainDark: string;
      secondary: string;
      bgDark: string;
      gray: string;
      grayLight: string;
      grayDark: string;
      black: string;
      white: string;
      red: string;
    };
    textSize: {
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
  }
}
