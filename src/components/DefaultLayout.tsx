import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

const DefaultLayout: React.FC = function ({ children }) {
  return (
    <>
      <TheHeader />
      <main className="pb-5">{children}</main>
      <TheFooter />
    </>
  )
}

export default DefaultLayout
