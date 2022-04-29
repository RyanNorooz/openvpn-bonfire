import type { GetServerSideProps } from 'next'
import Image from 'next/image'
import { createAvatar } from '@dicebear/avatars'
import * as style from '@dicebear/avatars-identicon-sprites'
import DefaultLayout from '@/components/DefaultLayout'
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

        <div className="relative py-8 overflow-hidden shadow bg-slate-300/90 rounded-xl dark:bg-slate-400/10">
          <table className="w-full text-sm border-collapse table-auto">
            <thead className="text-slate-500 dark:text-slate-400">
              <tr>
                <th className="p-4 pt-0 pb-3 pl-8 font-medium text-left border-b dark:border-slate-600">
                  #
                </th>
                <th className="p-4 pt-0 pb-3 pl-8 font-medium text-left border-b dark:border-slate-600">
                  name
                </th>
                <th className="p-4 pt-0 pb-3 font-medium text-left border-b dark:border-slate-600">
                  startDate
                </th>
                <th className="p-4 pt-0 pb-3 pr-8 font-medium text-left border-b dark:border-slate-600">
                  subscriptionLength
                </th>
                <th className="p-4 pt-0 pb-3 pr-8 font-medium text-left border-b dark:border-slate-600">
                  actions
                </th>
              </tr>
            </thead>

            <tbody className="font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200">
              {OVPNProfiles.map((profile) => (
                <tr
                  key={profile.name}
                  className="border-b border-slate-200 dark:border-slate-700 dark:even:bg-slate-700 even:bg-slate-100"
                >
                  <td>
                    <div className="grid p-1 mr-2 place-items-center">
                      <Image
                        src={createAvatar(style, {
                          seed: profile.name,
                          dataUri: true,
                        })}
                        width={40}
                        height={40}
                        alt={profile.name}
                      />
                    </div>
                  </td>
                  <td className="p-4 pl-8">{profile.name}</td>
                  <td className="p-4">{profile.startDate}</td>
                  <td className="p-4 pr-8">{profile.subscriptionLength}</td>
                  <td className="flex gap-1 p-4 pr-8">
                    <a
                      download
                      className="px-3 py-1 bg-blue-500 rounded"
                      href={`/api/downloadprofile?author=${profile.author}&client=${profile.name}`}
                    >
                      Download
                    </a>
                    <button className="px-3 py-1 bg-red-500 rounded">
                      Revoke
                    </button>
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
