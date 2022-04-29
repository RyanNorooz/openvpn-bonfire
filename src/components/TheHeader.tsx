import Image from 'next/image'
import Link from 'next/link'
import openvpnLogo from '@/../public/openvpnlogo.webp'
import TheHeaderMenu from '@/components/TheHeaderMenu'
import { TheHeaderNav } from './TheHeaderNav'

export default function TheHeader() {
  return (
    <header className="sticky top-0 z-20 w-full py-6 text-white">
      <div className="absolute inset-0 shadow-md -z-10 bg-neutral-900/80 backdrop-blur" />

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

        <TheHeaderNav />

        <TheHeaderMenu className="md:hidden flex" />
      </div>
    </header>
  )
}
