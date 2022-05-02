import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

export default function TheHeaderMenu(props: any) {
  return (
    <Menu as="div" className="" {...props}>
      <Menu.Button className="text-3xl">
        <Icon icon="bx:bx-menu" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-8 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg dark:bg-black dark:text-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-amber-600 text-white' : ''
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  <Link href="/newprofile">
                    <a className="rounded-lg outline-none group focus:ring focus:ring-purple-500 focus:ring-opacity-25">
                      createNewProfile
                    </a>
                  </Link>
                </button>
              )}
            </Menu.Item>
            {/* <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-amber-600 text-white' : ''
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  <Link href="/revokeprofile">
                    <a className="rounded-lg outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-25">
                      revokeExistingProfile
                    </a>
                  </Link>
                </button>
              )}
            </Menu.Item> */}
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-amber-600 text-white' : ''
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  <a
                    href="https://youtu.be/dQw4w9WgXcQ"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-lg outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-25"
                  >
                    easterEgg
                  </a>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
