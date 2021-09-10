import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../themes/default";
import GlobalStyle from "../themes/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
