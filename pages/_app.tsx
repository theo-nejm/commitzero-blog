import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import defaultTheme from "../themes/default";
import darkTheme from "../themes/dark";
import GlobalStyle from "../themes/global";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(defaultTheme)
  
  function toggleTheme() {
    if(theme.name === "light") {
      setTheme(darkTheme)
    } else if(theme.name === "dark") {
      setTheme(defaultTheme)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

    <button onClick={toggleTheme}>tema</button>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
