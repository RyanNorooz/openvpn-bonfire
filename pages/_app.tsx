// ################### Styles ###################
import 'tailwindcss/tailwind.css'
import '@/styles/main.scss'

// ################### Types ###################
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'

// ########## Libraries and Components ##########
import Head from 'next/head'
import router from 'next/router'
import nProgress from 'nprogress'
import '@/styles/nprogress.scss'

router.events.on('routeChangeStart', nProgress.start)
router.events.on('routeChangeError', nProgress.done)
router.events.on('routeChangeComplete', nProgress.done)

type NextPageWithLayout = NextPage & {
  layout?: (page: ReactElement) => ReactNode
}
interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.layout ?? ((page) => page)

  return (
    <>
      <Head>
        <title>OpenVPN Management & Automation</title>
      </Head>

      {Layout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
