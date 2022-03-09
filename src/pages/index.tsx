import type { GetServerSideProps } from 'next'
import DefaultLayout from '@/components/DefaultLayout'
import OVPNProfileListItem from '@/components/OVPNProfileListItem'
import type { OVPNProfile } from '@/lib/types'
import { openDB } from '@/db'

Home.layout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
)

interface Props {
  OVPNProfiles: OVPNProfile[]
}

export default function Home({ OVPNProfiles }: Props) {
  return (
    <>
      <main className="w-full px-2 py-8 lg:px-10">
        <h1 className="mb-3 text-5xl">Profiles</h1>
        <p className="mb-8">
          OpenVPN profiles created using this automation tool
        </p>

        <div className="relative py-8 overflow-hidden not-prose bg-slate-100 rounded-xl dark:bg-slate-800/25 shadow">
          <table className="w-full text-sm border-collapse table-auto">
            <thead className="text-slate-500 dark:text-slate-400">
              <tr>
                <th className="p-4 pt-0 pb-3 pl-8 font-medium text-left border-b dark:border-slate-600">
                  name
                </th>
                <th className="p-4 pt-0 pb-3 font-medium text-left border-b dark:border-slate-600">
                  startDate
                </th>
                <th className="p-4 pt-0 pb-3 pr-8 font-medium text-left border-b dark:border-slate-600">
                  subscriptionLength
                </th>
              </tr>
            </thead>

            <tbody className="bg-white dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200">
              {OVPNProfiles.map((profile) => (
                <tr key={profile.name}>
                  <td className="p-4 pl-8 border-b border-slate-200 dark:border-slate-700">
                    {profile.name}
                  </td>
                  <td className="p-4 border-b border-slate-200 dark:border-slate-700">
                    {profile.startDate}
                  </td>
                  <td className="p-4 pr-8 border-b border-slate-200 dark:border-slate-700">
                    {profile.subscriptionLength}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const db = await openDB()
  const profiles = await db.all('SELECT * FROM profile')

  return {
    props: { OVPNProfiles: profiles },
  }
}
