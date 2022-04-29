import Head from 'next/head'
import { useState } from 'react'
import BaseInputWithLabel from '@/components/base/BaseInputWithLabel'
import Modal from '@/components/Modal'
import DefaultLayout from '@/components/DefaultLayout'
import type { OVPNProfile } from '@/lib/types'
import AuthorSelectElement from '@/components/NewProfilePage/AuthorSelectElement'

Home.layout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [author, setAuthor] = useState('')

  interface VPNProfileForm {
    profileName: { value: string }
    author: { value: string }
    startDate: { value: string }
    subscriptionLength: { value: string }
  }

  function requestCreateNewProfile(e: React.SyntheticEvent) {
    e.preventDefault()
    setIsModalOpen(true)

    const form = e.target as typeof e.target & VPNProfileForm
    const data: OVPNProfile = {
      name: form.profileName?.value,
      author,
      startDate: form.startDate?.value,
      subscriptionLength: form.subscriptionLength?.value,
    }
    console.log('data:', data)

    fetch('/api/newprofile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((err) => {
        console.error('Error:', err)
      })
  }

  return (
    <>
      <Head>
        <title>Create new profile - OpenVPN</title>
      </Head>

      <div className="grid w-full h-full min-h-screen place-items-center text-[color:var(--c-primary)]">
        <div className="w-full max-w-[30rem] rounded-2xl lg:dark:shadow-lg lg:dark:bg-neutral-800 py-8 px-6 text-center">
          <h1 className="mb-3 text-5xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            Hello Internet!
          </h1>

          <p className="mt-0 mb-12 text-lg">
            create openvpn profiles with expiration date
          </p>

          <form
            onSubmit={requestCreateNewProfile}
            className="flex flex-col gap-4"
          >
            <BaseInputWithLabel
              labelText="Profile name"
              title="no spaces, only number and letters, dash and underscore allowed"
              type="text"
              id="profileName"
              name="profileName"
              pattern="^[\w-]+$"
              required
            />

            <AuthorSelectElement selectChangedHandler={setAuthor} />

            <BaseInputWithLabel
              labelText="Start date"
              type="date"
              id="startDate"
              name="startDate"
              required
            />

            <BaseInputWithLabel
              labelText="Subscription length (months...)"
              type="number"
              id="subscriptionLength"
              name="subscriptionLength"
              min="1"
              required
            />

            <button
              type="submit"
              className="px-4 py-2 mt-12 text-2xl font-bold text-white rounded-md bg-stone-900 hover:text-black hover:bg-[color:var(--c-primary)] transition-colors duration-200"
            >
              runScript...!
            </button>
          </form>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
