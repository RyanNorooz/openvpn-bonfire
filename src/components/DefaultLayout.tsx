import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

interface Props {
  children: React.ReactNode
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <TheHeader />
      <main className="pb-5">{children}</main>
      <TheFooter />
    </>
  )
}

export default DefaultLayout
