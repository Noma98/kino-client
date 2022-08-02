import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      mainLight: string;
      mainDark: string;
      bgLight: string;
      mainText: string;
    };
  }
}
