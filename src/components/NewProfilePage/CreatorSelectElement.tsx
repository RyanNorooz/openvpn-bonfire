import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'

const people = [
  { name: 'Ryan Norooz' },
  { name: 'Maktoobgar' },
  { name: 'Danial hajiRajabi' },
  { name: 'hghighat' },
  { name: 'Ali Sajadi' },
  { name: 'Mohammad ????' },
]

export default function CreatorSelectElement() {
  const [selected, setSelected] = useState(people[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full py-3 pl-3 pr-10 text-left bg-gray-100 dark:bg-neutral-700 rounded-md shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
          <span className="block truncate">{selected.name}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            {/* <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              /> */}
            <Icon
              icon="bx:bx-expand-alt"
              className="w-5 h-5 text-gray-400 -rotate-45"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {people.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `cursor-default select-none relative py-2 pl-10 pr-4 ${
                    active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {person.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        {/* <CheckIcon className="w-5 h-5" aria-hidden="true" /> */}
                        <Icon
                          icon="bx:bx-check"
                          aria-hidden="true"
                          className="w-5 h-5"
                        />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
