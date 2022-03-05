import type { GetServerSideProps } from 'next'
import DefaultLayout from '@/components/DefaultLayout'
import OVPNProfileListItem from '@/components/OVPNProfileListItem'
import { openDB } from '@/db'
import type { OVPNProfile } from '@/lib/types'

Home.layout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
)

interface Props {
  OVPNProfiles: OVPNProfile[]
}

export default function Home({ OVPNProfiles }: Props) {
  return (
    <main className="w-full min-h-[30rem] px-2 py-8 lg:px-10">
      <h1 className="mb-3 text-5xl">Profiles</h1>
      <p className="mb-6">
        OpenVPN profiles blah blah blah fill this later //TODO
      </p>

      <ol className="flex flex-col gap-2 p-2 list-decimal list-inside dark:shadow-md max-w-20 dark:bg-gray-700 rounded-xl">
        {OVPNProfiles.map((profile) => (
          <OVPNProfileListItem OVPNProfile={profile} key={profile.name} />
        ))}
      </ol>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const db = await openDB()
  const profiles = await db.all('SELECT * FROM profile')

  return {
    props: { OVPNProfiles: profiles }, // will be passed to the page component as props
  }
}
