import "../styles/globals-style.js";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
