import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import defaultTheme from "../themes/default";
import darkTheme from "../themes/dark";
import GlobalStyle from "../themes/global";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(defaultTheme);

  function toggleTheme() {
    if (theme.name === "light") {
      setTheme(darkTheme);
    } else if (theme.name === "dark") {
      setTheme(defaultTheme);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <NavBar toggleTheme={toggleTheme} />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
