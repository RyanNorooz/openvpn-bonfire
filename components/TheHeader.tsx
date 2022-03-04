import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useEffect } from 'react'
import openvpnLogo from '@/public/openvpnlogo.webp'

function checkAndCloseHamburgerMenu(e: MouseEvent) {
  const menuWasClicked = (e.target as HTMLElement).matches(`svg svg path`)
  if (menuWasClicked) return
  document.getElementById('nav-menu')?.classList.toggle('show', false)
}

export default function TheHeader() {
  useEffect(() => {
    window.addEventListener('click', checkAndCloseHamburgerMenu)
    return () => {
      window.removeEventListener('click', checkAndCloseHamburgerMenu)
    }
  }, [])

  return (
    <header className="sticky top-0 z-20 w-full py-6">
      <div className="absolute inset-0 shadow-md -z-10 bg-neutral-900/80 backdrop-blur-sm" />
      <div className="flex items-center justify-between px-4 mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl md:px-2">
        <Link href="/">
          <a>
            <div className="flex items-center space-x-2 ">
              <div className="w-10 h-10 mr-5">
                <Image src={openvpnLogo} alt="OpenVPN logo" />
              </div>

              <h1 className="text-xl">OpenVPN Management</h1>
            </div>
          </a>
        </Link>

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

          <button
            className="flex p-2 text-3xl text-white transition-all rounded-full outline-none md:hidden hover:bg-gray-100/80 focus:ring focus:ring-purple-500 focus:ring-opacity-25 active:bg-gray-200"
            id="nav-toggle"
            onClick={() =>
              document.getElementById('nav-menu')?.classList.toggle('show')
            }
          >
            <Icon icon="bx:bx-menu" />
          </button>
        </nav>
      </div>
    </header>
  )
}
