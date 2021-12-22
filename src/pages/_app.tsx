import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Rodrigo Fernandes</title>
          <link rel="shortcut icon" href="/img/logo-favicon.svg" />
          <link rel="apple-touch-icon" href="/img/logo-favicon.svg" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content={theme.colors.primary} />
          <meta
            name="description"
            content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
          />
        </Head>
        <GlobalStyles />
        <NextNProgress
          color={theme.colors.primary}
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
