import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import SEO from '../../next-seo-config'

import NotificationsContext from 'contexts/notifications'

import useNotifications from 'hooks/useNotifications'

function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NotificationsContext.Provider value={useNotifications()}>
          <Head>
            <title>Rodrigo Fernandes</title>
            <link rel="shortcut icon" href="/img/logo-favicon.svg" />
            <link rel="apple-touch-icon" href="/img/logo-favicon.svg" />
            <meta name="theme-color" content={theme.colors.primary} />
            <meta
              name="description"
              content="A website made by a brazilian web developer who likes React."
            />
          </Head>
          <DefaultSeo {...SEO} />
          <GlobalStyles />
          <NextNProgress
            color={theme.colors.primary}
            startPosition={0.3}
            stopDelayMs={200}
            height={5}
          />
          <Component {...pageProps} />
        </NotificationsContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
