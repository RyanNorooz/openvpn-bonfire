// ################### Styles ###################
import 'tailwindcss/tailwind.css'
import '@/public/fonts/IRANSansX/IRANSansX.css'
import '@/styles/styles.scss'
import '@/styles/main.scss'

// ################### Types ###################
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import type { ReactElement, ReactNode } from 'react'

// ########## Libraries and Components ##########
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import SEOMetaTags from '@/components/SEOMetaTags'
import SEOMetaTagsFA from '@/components/SEOMetaTagsFA'

type NextPageWithLayout = NextPage & {
  layout?: (page: ReactElement) => ReactNode
}
interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()
  const Layout = Component.layout ?? ((page) => page)

  // the whole purpose of isDark is that the proper logo shade is shown
  const [isDark, setIsDark] = useState<boolean>()

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    prefersDark.addEventListener('change', (e) => setIsDark(e.matches))
    setIsDark(prefersDark.matches)
  }, [])

  return (
    <>
      <Head>
        {router.locale === 'fa' ? SEOMetaTagsFA : SEOMetaTags}
        <link rel="icon" href={isDark ? '/favicon-dark.ico' : '/favicon.ico'} />
      </Head>

      {Layout(<Component {...pageProps} />)}
    </>
  )
}

export default appWithTranslation(MyApp)
