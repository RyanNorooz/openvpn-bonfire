// ################### Styles ###################
import 'tailwindcss/tailwind.css'
import '@/styles/main.scss'

// ################### Types ###################
import type { AppProps } from 'next/app'

// ########## Libraries and Components ##########
import Head from 'next/head'
import router from 'next/router'
import nProgress from 'nprogress'
import '@/styles/nprogress.scss'

router.events.on('routeChangeStart', nProgress.start)
router.events.on('routeChangeError', nProgress.done)
router.events.on('routeChangeComplete', nProgress.done)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>openvpn automation</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
