import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { cn } from '@/lib/utils'

const DropDownMenu = ({children, additionalClasses = '', name = 'Options'}) => {
  return (
    <div className="relative">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className={cn("inline-flex relative z-0 w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 bg-gray-300 ", additionalClasses)}>
            {name}
            <ChevronDownIcon
              className={cn('-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100 ' + additionalClasses)}
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              {children}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default DropDownMenu;
