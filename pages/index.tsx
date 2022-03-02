import type { GetStaticProps } from 'next'
import Head from 'next/head'
import BaseInputWithLabel from '@/components/base/BaseInputWithLabel'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create new profile - OpenVPN</title>
      </Head>

      <div className="grid w-full h-full min-h-screen place-items-center">
        <div className="w-full max-w-[25em] rounded-2xl lg:dark:shadow-lg lg:dark:bg-neutral-800 prose-lg py-8 px-6 text-center">
          <h1 className="mb-3 text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            Hello Internet!
          </h1>

          <p className="mt-0 mb-12">
            create openvpn profiles with expiration date
          </p>

          <form
            onSubmit={requestCreateNewClient}
            className="flex flex-col gap-2"
          >
            <BaseInputWithLabel
              labelText="Profile name"
              title="no spaces, only number and letters, dash and underscore allowed"
              type="text"
              id="clientName"
              name="clientName"
              pattern="^[\w-]+$"
              required
            />

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
              className="px-4 py-2 mt-32 text-2xl font-bold text-white rounded-md bg-stone-900 hover:text-black hover:bg-[color:var(--c-primary)] transition-colors duration-200"
            >
              runScript...!
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

// interface Form {
//   clientName: HTMLInputElement
//   startDate: HTMLInputElement
//   subscriptionLength: HTMLInputElement
// }

const requestCreateNewClient: React.FormEventHandler<HTMLFormElement> =
  async function (e) {
    e.preventDefault()
    const data = {
      clientName: e.target.clientName?.value,
      startDate: e.target.startDate?.value,
      subscriptionLength: e.target.subscriptionLength?.value,
    }
    console.log('data:', data)

    fetch('/api/newprofile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }
