import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

const DefaultLayout: React.FC = function ({ children }) {
  return (
    <>
      <TheHeader />
      <main>{children}</main>
      <TheFooter />
    </>
  )
}

export default DefaultLayout
