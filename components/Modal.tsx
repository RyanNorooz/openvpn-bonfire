import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function MyModal(props: Props) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(props.isOpen)
  }, [props.isOpen])

  function handleDeactivate() {
    setIsOpen(false)
    props.onClose()
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={handleDeactivate}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              as="div"
              className="fixed inset-0 bg-black opacity-40"
            />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Boom...! it&apos;s done.
              </Dialog.Title>

              <Dialog.Description as="div" className="mt-2">
                <p className="text-sm text-gray-500">
                  your profile has been successfully created. you can view the
                  state of your profiles in the home page
                </p>
              </Dialog.Description>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={handleDeactivate}
                >
                  Got it
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
