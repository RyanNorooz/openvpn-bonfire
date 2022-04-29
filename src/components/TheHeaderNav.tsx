import Link from 'next/link'

export function TheHeaderNav() {
  return (
    <nav>
      <ul className="hidden space-x-6 font-semibold md:space-x-8 md:flex">
        <li className="relative group">
          <Link href="/newprofile">
            <a className="rounded-lg outline-none group focus:ring focus:ring-purple-500 focus:ring-opacity-25">
              createNewProfile
            </a>
          </Link>
          <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
        </li>

        <li className="relative group">
          <Link href="/revokeprofile">
            <a className="rounded-lg outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-25">
              revokeExistingProfile
            </a>
          </Link>
          <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
        </li>

        <li className="relative group">
          {/* <Link href="/easteregg"> */}
          <a
            href="https://youtu.be/dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-lg outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-25"
          >
            easterEgg
          </a>
          {/* </Link> */}
          <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
        </li>
      </ul>
    </nav>
  )
}
