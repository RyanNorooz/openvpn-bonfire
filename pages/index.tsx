import TheHeader from '@/components/TheHeader'

export default function Home() {
  return (
    <>
      <TheHeader />

      <main className="w-full px-2 py-8">
        <h1 className="mb-3 text-5xl">Profiles</h1>
        <p className="mb-6">
          OpenVPN profiles blah blah blah fill this later //TODO
        </p>

        <ul className="flex flex-col gap-2 p-2 max-w-20 bg-gray-100 dark:bg-neutral-800 rounded-xl">
          {[...Array(25)].map((index) => (
            <li
              key={index}
              className="h-12 px-3 border-2 shadow rounded-md bg-orange-300 flex items-center "
            >
              <strong className="text-[color:var(--c-primary)]">
                name:&nbsp;
              </strong>
              <span>
                {/* random word is generated each time */}
                randomProfileName-
                {Math.random().toString(36).substring(2, 20)}
              </span>

              {/* ===================================================== */}
              <span className="text-xl font-black">&nbsp;|&nbsp;</span>
              {/* ===================================================== */}

              <strong className="text-[color:var(--c-primary)]">
                startDate:&nbsp;
              </strong>
              <span>
                {/* random word is generated each time */}
                randomStartDate-{Math.random().toString(36).substring(2, 20)}
              </span>

              {/* ===================================================== */}
              <span className="text-xl font-black">&nbsp;|&nbsp;</span>
              {/* ===================================================== */}

              <strong className="text-[color:var(--c-primary)]">
                subscriptionLength:&nbsp;
              </strong>
              <span>
                {/* random word is generated each time */}
                randomSubscriptionLength-
                {Math.random().toString(36).substring(2, 20)}
              </span>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
