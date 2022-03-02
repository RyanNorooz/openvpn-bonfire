// ################### Styles ###################
import 'tailwindcss/tailwind.css'
import '@/styles/main.scss'

// ################### Types ###################
import type { AppProps } from 'next/app'

// ########## Libraries and Components ##########
import Head from 'next/head'

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
