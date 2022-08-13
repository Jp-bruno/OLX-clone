import '../styles/globals.css'
import type { AppProps } from 'next/app';
import AppBar from '../components/AppBar/AppBar';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
