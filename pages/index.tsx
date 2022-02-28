import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticProps } from 'next'

import DefaultLayout from '@/components/DefaultLayout'
import HeroSection from '@/components/home/HeroSection'
import AboutMeSection from '@/components/home/AboutMeSection'
import SkillsSection from '@/components/home/SkillsSection'
import PortfolioSection from '@/components/home/PortfolioSection'
import ContactSection from '@/components/home/ContactSection'

Home.layout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'home'])),
  },
})
