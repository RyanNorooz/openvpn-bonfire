import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'

const people = [
  { name: 'None' },
  { name: 'Ryan Norooz' },
  { name: 'Maktoobgar' },
  { name: 'Danial hajiRajabi' },
  { name: 'hghighat' },
  { name: 'Ali Sajadi' },
  { name: 'Mohammad ????' },
]
interface Props {
  selectChangedHandler: (name: string) => void
}

export default function AuthorSelectElement(props: Props) {
  const [selected, setSelected] = useState(people[0])

  useEffect(() => {
    props.selectChangedHandler(selected.name)
  }, [props, selected])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Listbox.Label className="font-bold text-left">Author</Listbox.Label>

      <div className="relative">
        <Listbox.Button className="relative w-full py-3 pl-3 pr-10 text-left bg-gray-100 rounded-md shadow-md cursor-default dark:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
          <span className="block truncate text-[color:var(--body-text)]">
            {selected.name}
          </span>
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
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg dark:bg-stone-900 dark:bg-opacity-90 firefox:dark:bg-opacity-95 backdrop-blur dark:text-white max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {people.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `cursor-default select-none relative py-2 pl-10 pr-4 ${
                    active
                      ? 'text-amber-900 bg-amber-100 dark:bg-amber-500/30 dark:text-white'
                      : 'text-gray-900 dark:text-white'
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
